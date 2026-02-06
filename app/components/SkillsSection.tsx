'use client';

import { skills } from '../data';

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-sm transition-all text-center"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}