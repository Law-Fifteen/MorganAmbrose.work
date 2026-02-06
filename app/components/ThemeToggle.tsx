'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
    );
  }

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-all ${
          resolvedTheme === 'light'
            ? 'bg-white text-amber-500 shadow-sm'
            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
        title="Light mode"
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-all ${
          resolvedTheme === 'dark'
            ? 'bg-slate-700 text-indigo-400 shadow-sm'
            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
        title="Dark mode"
      >
        <Moon size={18} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-all ${
          theme === 'system'
            ? 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-sm'
            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
        title="System preference"
      >
        <Monitor size={18} />
      </button>
    </div>
  );
}