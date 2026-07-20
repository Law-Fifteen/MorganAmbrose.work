'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Volume2, VolumeX, Music, X, ChevronUp } from 'lucide-react';
import { songs, Song } from '../songs';

function shuffleArray(arr: Song[]): Song[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function MediaPlayer() {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [playlist, setPlaylist] = useState<Song[]>(songs);
  const [shuffled, setShuffled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const compressorRef = useRef<DynamicsCompressorNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const currentSong = playlist[currentIndex];

  // Lazily init Web Audio API on first user interaction
  const initAudioContext = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audioContextRef.current) {
      // Just resume if already created
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }
      return;
    }

    const ctx = new AudioContext();
    const compressor = ctx.createDynamicsCompressor();
    
    compressor.threshold.value = -20;
    compressor.knee.value = 10;
    compressor.ratio.value = 4;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.25;

    const source = ctx.createMediaElementSource(audio);
    source.connect(compressor);
    compressor.connect(ctx.destination);

    audioContextRef.current = ctx;
    compressorRef.current = compressor;
    sourceRef.current = source;
  }, []);

  useEffect(() => {
    if (!shuffled) {
      setPlaylist(shuffleArray(songs));
      setShuffled(true);
    }
  }, [shuffled]);

  // Show tooltip on load, auto-dismiss after 6s
  useEffect(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), 1000);
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
      setTooltipDismissed(true);
    }, 11000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const playSong = useCallback(() => {
    initAudioContext();
    if (!hasPlayed) {
      setHasPlayed(true);
      setShowPopup(true);
    }
    setIsPlaying(true);
    audioRef.current?.play();
  }, [hasPlayed, initAudioContext]);

  const pauseSong = useCallback(() => {
    setIsPlaying(false);
    audioRef.current?.pause();
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }, [isPlaying, pauseSong, playSong]);

  const nextSong = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setCurrentTime(0);
  }, [playlist.length]);

  const prevSong = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setCurrentTime(0);
  }, [playlist.length]);

  const goToSong = useCallback((index: number) => {
    initAudioContext();
    setCurrentIndex(index);
    setCurrentTime(0);
    if (!hasPlayed) {
      setHasPlayed(true);
      setShowPopup(true);
    }
    setIsPlaying(true);
  }, [hasPlayed, initAudioContext]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newTime = pct * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => nextSong();

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [nextSong]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = currentSong.src;
    audio.load();
    if (isPlaying) {
      audio.play();
    }
  }, [currentIndex, currentSong.src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleYes = () => {
    setShowPopup(false);
    const subject = encodeURIComponent(`The universe gave me ${currentSong.title} by ${currentSong.artist}`);
    window.open(`mailto:MorganAmbrose@proton.me?subject=${subject}`, '_blank');
  };

  const handleNo = () => {
    setShowPopup(false);
  };

  return (
    <>
      <audio ref={audioRef} preload="metadata" />

      {/* Share Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 max-w-md mx-4 border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Want to share what random song the universe gave you?
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Now playing: <span className="font-semibold text-primary-600 dark:text-primary-400">{currentSong.artist} — {currentSong.title}</span>
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleYes}
                className="px-6 py-3 bg-[#4E1D72] text-white rounded-xl font-semibold hover:bg-[#3a1557] transition-colors shadow-lg"
              >
                Yes — Mail Morgan
              </button>
              <button
                onClick={handleNo}
                className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                No Thanks
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Player */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 overflow-visible">
        {/* Player Panel - Collapsible */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out rounded-2xl shadow-2xl"
          style={{
            height: playerOpen ? '420px' : '0px',
            opacity: playerOpen ? 1 : 0,
            width: '380px',
          }}
        >
          <div className="h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0_0_30px_rgba(78,29,114,0.25)] flex flex-col overflow-hidden">
            {/* Album Art + Controls */}
            <div className="flex p-4 gap-4 bg-gradient-to-b from-slate-50 dark:from-slate-800 to-white dark:to-slate-900">
              <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-600 shadow-lg">
                <img src={currentSong.cover} alt={currentSong.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="mb-2">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{currentSong.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{currentSong.artist}</p>
                </div>
                <div ref={progressRef} className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer group" onClick={handleProgressClick}>
                  <div className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full relative transition-all" style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <button onClick={() => { setPlaylist(shuffleArray(songs)); setCurrentIndex(0); setCurrentTime(0); }} className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors" title="Shuffle">
                      <Shuffle size={14} />
                    </button>
                    <button onClick={prevSong} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <SkipBack size={18} />
                    </button>
                    <button onClick={togglePlay} className="w-9 h-9 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-105 transition-all">
                      {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                    </button>
                    <button onClick={nextSong} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <SkipForward size={18} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={toggleMute} className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                    <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={(e) => { const v = parseFloat(e.target.value); setVolume(v); setIsMuted(v === 0); if (audioRef.current) audioRef.current.muted = false; }} className="w-16 h-1 appearance-none bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer accent-primary-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Playlist Header */}
            <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Playlist ({playlist.length} songs)</span>
            </div>

            {/* Playlist */}
            <div className="overflow-y-auto max-h-[200px]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="px-2 pb-2" style={{ scrollbarWidth: 'none' }}>
                <style>{`.playlist-scroll::-webkit-scrollbar { display: none; }`}</style>
                {playlist.map((song, i) => (
                  <button key={`${song.artist}-${song.title}-${i}`} onClick={() => goToSong(i)} className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-left transition-colors playlist-scroll ${i === currentIndex ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                    <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700">
                      <img src={song.cover} alt={song.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{song.title}</p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate">{song.artist}</p>
                    </div>
                    {i === currentIndex && isPlaying && (
                      <div className="flex gap-0.5 items-end h-3">
                        <div className="w-0.5 bg-primary-600 animate-bounce" style={{ height: '60%', animationDelay: '0ms' }} />
                        <div className="w-0.5 bg-primary-600 animate-bounce" style={{ height: '100%', animationDelay: '150ms' }} />
                        <div className="w-0.5 bg-primary-600 animate-bounce" style={{ height: '40%', animationDelay: '300ms' }} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tooltip + Buttons */}
        <div className="flex items-center gap-3">
          {/* Music Button + Tooltip wrapper */}
          <div className="relative">
            {showTooltip && !playerOpen && (
              <div className="absolute bottom-full right-0 mb-3 w-64 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 animate-bounce text-center leading-snug" style={{ animationDuration: '2s' }}>
                Want to listen to my Lunch playlist of the week?<br />
                <span className="text-primary-600 dark:text-primary-400">It's shuffled, find out what song the universe gives you!</span>
                <div className="absolute top-full right-5 -mt-1 w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700 transform rotate-45" />
              </div>
            )}
            <button
            onClick={() => {
              setPlayerOpen(!playerOpen);
              setShowTooltip(false);
              setTooltipDismissed(true);
            }}
            className={`p-4 rounded-full shadow-lg transition-all duration-300 group ${
              playerOpen
                ? 'bg-[#4E1D72] text-white shadow-[0_0_20px_rgba(78,29,114,0.5)]'
                : 'bg-white/5 backdrop-blur-sm border border-white/20 text-slate-600 dark:text-slate-300 hover:bg-white/10 hover:shadow-xl'
            }`}
            aria-label={playerOpen ? 'Close music player' : 'Open music player'}
          >
            {playerOpen ? (
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Music size={24} className="group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
          </div>

          {/* Back to Top Button */}
          <a
            href="#"
            className="bg-white/5 backdrop-blur-sm border border-white/20 text-slate-600 dark:text-slate-300 p-4 rounded-full shadow-lg hover:bg-white/10 hover:shadow-xl transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </>
  );
}
