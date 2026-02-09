'use client';

import React, { useState } from 'react';
import { Award, BarChart3, Smartphone, Phone, Wifi, Video } from 'lucide-react';

interface CategoryRank {
  category: string;
  rank: number;
  icon: React.ReactNode;
  value: string;
}

interface MonthlyData {
  month: string;
  overallRank: number;
  callsHandled: number;
  callsRank: number;
  mobileYield: string;
  mobileRank: number;
  internetYield: string;
  internetRank: number;
  videoYield: string;
  videoRank: number;
}

const ytdData = {
  year: 'Fiscal 2025',
  overallRank: 7,
  totalSupervisors: 380,
  callsHandled: 32488,
  mobileYield: '14.5%',
  internetYield: '15.0%',
  psuYield: '60.1%',
  monthsRanked: 12
};

const categoryRanks: CategoryRank[] = [
  { category: 'Overall', rank: 7, icon: <Award size={20} />, value: 'Top 2%' },
  { category: 'Mobile Yield', rank: 6, icon: <Smartphone size={20} />, value: '14.5%' },
  { category: 'Internet Yield', rank: 8, icon: <Wifi size={20} />, value: '15.0%' },
  { category: 'Video Yield', rank: 12, icon: <Video size={20} />, value: '18.2%' },
  { category: 'Calls Handled', rank: 15, icon: <Phone size={20} />, value: '32,488' }
];

const monthlyData: MonthlyData[] = [
  { month: 'January', overallRank: 9, callsHandled: 1684, callsRank: 2, mobileYield: '12.9%', mobileRank: 11, internetYield: '57.1%', internetRank: 1, videoYield: '15.9%', videoRank: 2 },
  { month: 'February', overallRank: 8, callsHandled: 723, callsRank: 3, mobileYield: '16.0%', mobileRank: 9, internetYield: '36.5%', internetRank: 9, videoYield: '7.1%', videoRank: 9 },
  { month: 'March', overallRank: 6, callsHandled: 3215, callsRank: 14, mobileYield: '14.7%', mobileRank: 8, internetYield: '59.7%', internetRank: 2, videoYield: '16.8%', videoRank: 12 },
  { month: 'April', overallRank: 16, callsHandled: 3432, callsRank: 6, mobileYield: '15.7%', mobileRank: 6, internetYield: '60.3%', internetRank: 6, videoYield: '16.2%', videoRank: 16 },
  { month: 'May', overallRank: 8, callsHandled: 3031, callsRank: 14, mobileYield: '13.9%', mobileRank: 14, internetYield: '58.4%', internetRank: 11, videoYield: '17.8%', videoRank: 7 },
  { month: 'June', overallRank: 2, callsHandled: 2916, callsRank: 8, mobileYield: '16.2%', mobileRank: 1, internetYield: '62.5%', internetRank: 1, videoYield: '18.9%', videoRank: 13 },
  { month: 'July', overallRank: 14, callsHandled: 3515, callsRank: 16, mobileYield: '12.8%', mobileRank: 16, internetYield: '62.3%', internetRank: 9, videoYield: '18.2%', videoRank: 10 },
  { month: 'August', overallRank: 1, callsHandled: 3480, callsRank: 3, mobileYield: '15.4%', mobileRank: 9, internetYield: '63.9%', internetRank: 1, videoYield: '18.3%', videoRank: 5 },
  { month: 'September', overallRank: 7, callsHandled: 3407, callsRank: 6, mobileYield: '15.2%', mobileRank: 8, internetYield: '60.3%', internetRank: 10, videoYield: '16.1%', videoRank: 12 },
  { month: 'October', overallRank: 3, callsHandled: 3384, callsRank: 6, mobileYield: '15.4%', mobileRank: 6, internetYield: '61.4%', internetRank: 2, videoYield: '17.0%', videoRank: 12 },
  { month: 'November', overallRank: 14, callsHandled: 3798, callsRank: 13, mobileYield: '13.6%', mobileRank: 15, internetYield: '57.5%', internetRank: 8, videoYield: '15.4%', videoRank: 15 },
  { month: 'December', overallRank: 12, callsHandled: 2367, callsRank: 16, mobileYield: '12.6%', mobileRank: 16, internetYield: '53.3%', internetRank: 16, videoYield: '13.6%', videoRank: 12 }
];

export default function PerformanceCard() {
  const [viewMode, setViewMode] = useState<'YTD' | 'MOM'>('YTD');

  const topPerformances = monthlyData.filter(m => m.overallRank <= 10).length;
  const bestMonth = monthlyData.reduce((best, current) => current.overallRank < best.overallRank ? current : best);
  
  // Calculate total metrics in top 10 across all categories
  const totalMetricsInTop10 = monthlyData.reduce((total, month) => {
    let monthTop10s = 0;
    if (month.overallRank <= 10) monthTop10s++;
    if (month.callsRank <= 10) monthTop10s++;
    if (month.mobileRank <= 10) monthTop10s++;
    if (month.internetRank <= 10) monthTop10s++;
    if (month.videoRank <= 10) monthTop10s++;
    return total + monthTop10s;
  }, 0);

  return (
    <div className="relative mb-8">
      {/* Shape-conforming blue glow */}
      <div 
        className="absolute inset-[-15px] rounded-2xl"
        style={{ 
          backgroundColor: '#075985',
          opacity: 0.3,
          filter: 'blur(14px)',
          transform: 'scale(1.0)'
        }}
      />
      
      {/* Card content */}
      <div className="relative bg-gradient-to-br from-primary-100 dark:from-primary-900/40 to-secondary-100 dark:to-secondary-900/40 rounded-2xl border border-primary-200 dark:border-primary-800 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center text-white">
            <Award size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Performance Excellence</h2>
            <p className="text-slate-600 dark:text-slate-400">Charter Communications • {ytdData.year}</p>
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="flex bg-white dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setViewMode('YTD')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'YTD'
                ? 'bg-primary-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            YTD Overview
          </button>
          <button
            onClick={() => setViewMode('MOM')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'MOM'
                ? 'bg-primary-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Month by Month
          </button>
        </div>
      </div>

      {viewMode === 'YTD' ? (
        <>
          {/* Category Rankings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {categoryRanks.map((cat) => (
              <div key={cat.category} className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-primary-600">{cat.icon}</div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{cat.category}</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-slate-600 dark:text-slate-400">{cat.value}</span>
                  <span className={`text-2xl font-bold ${cat.rank <= 10 ? 'text-green-600' : 'text-slate-900 dark:text-white'}`}>
                    #{cat.rank} <span className="text-sm font-normal text-slate-400">of 380</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Highlight Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Top 10 Months</div>
              <div className="text-4xl font-bold text-green-600">{topPerformances}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">of 12 months in Overall Rank</div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Metrics in Top 10</div>
              <div className="text-4xl font-bold text-green-600">{totalMetricsInTop10}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">of 60 possible (5 categories × 12 months)</div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Best Month</div>
              <div className="text-4xl font-bold text-primary-600">#{bestMonth.overallRank}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{bestMonth.month} (Overall)</div>
            </div>
          </div>

        </>
      ) : (
        <>
          {/* Month by Month View */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                    <th className="p-4 text-left font-semibold text-slate-900 dark:text-white">Month</th>
                    <th className="p-4 text-center font-semibold text-slate-900 dark:text-white">Overall</th>
                    <th className="p-4 text-center font-semibold text-slate-900 dark:text-white">Calls</th>
                    <th className="p-4 text-center font-semibold text-slate-900 dark:text-white">Mobile</th>
                    <th className="p-4 text-center font-semibold text-slate-900 dark:text-white">Internet</th>
                    <th className="p-4 text-center font-semibold text-slate-900 dark:text-white">Video</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((month) => {
                    const hasAnyTop10 = month.overallRank <= 10 || month.callsRank <= 10 || month.mobileRank <= 10 || month.internetRank <= 10 || month.videoRank <= 10;
                    return (
                      <tr key={month.month} className={`border-b border-slate-100 dark:border-slate-800 ${hasAnyTop10 ? 'bg-green-50 dark:bg-green-900/20' : ''}`}>
                        <td className="p-4">
                          <span className="font-medium text-slate-900 dark:text-white">{month.month}</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`font-bold ${month.overallRank <= 10 ? 'text-green-600' : 'text-slate-700 dark:text-slate-300'}`}>
                            #{month.overallRank}
                            {month.overallRank <= 3 && <span className="ml-1 text-yellow-500">★</span>}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`font-bold ${month.callsRank <= 10 ? 'text-green-600' : 'text-slate-700 dark:text-slate-300'}`}>
                            #{month.callsRank}
                            {month.callsRank <= 3 && <span className="ml-1 text-yellow-500">★</span>}
                          </span>
                          <div className="text-xs text-slate-500">{month.callsHandled.toLocaleString()}</div>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`font-bold ${month.mobileRank <= 10 ? 'text-green-600' : 'text-slate-700 dark:text-slate-300'}`}>
                            #{month.mobileRank}
                            {month.mobileRank <= 3 && <span className="ml-1 text-yellow-500">★</span>}
                          </span>
                          <div className="text-xs text-slate-500">{month.mobileYield}</div>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`font-bold ${month.internetRank <= 10 ? 'text-green-600' : 'text-slate-700 dark:text-slate-300'}`}>
                            #{month.internetRank}
                            {month.internetRank <= 3 && <span className="ml-1 text-yellow-500">★</span>}
                          </span>
                          <div className="text-xs text-slate-500">{month.internetYield}</div>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`font-bold ${month.videoRank <= 10 ? 'text-green-600' : 'text-slate-700 dark:text-slate-300'}`}>
                            #{month.videoRank}
                            {month.videoRank <= 3 && <span className="ml-1 text-yellow-500">★</span>}
                          </span>
                          <div className="text-xs text-slate-500">{month.videoYield}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1"><span className="text-yellow-500">★</span> Top 3 in any category</span>
            <span className="inline-flex items-center gap-1 ml-4"><span className="w-3 h-3 bg-green-50 dark:bg-green-900/20 border border-green-200 inline-block"></span> Top 10 in any category</span>
            <span className="inline-flex items-center gap-1 ml-4 text-slate-500">Green numbers = Top 10</span>
          </div>
        </>
      )}
      </div>
    </div>
  );
}