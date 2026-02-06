'use client';

import React, { useState } from 'react';
import { Project } from '../types';
import { Search, ChevronDown, ChevronUp, Building2, Calendar, Target } from 'lucide-react';

interface ProfessionalProjectsCardsProps {
  projects: Project[];
}

export default function ProfessionalProjectsCards({ projects }: ProfessionalProjectsCardsProps) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(globalFilter.toLowerCase()) ||
    project.company.toLowerCase().includes(globalFilter.toLowerCase()) ||
    project.description.toLowerCase().includes(globalFilter.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(globalFilter.toLowerCase()))
  );

  function toggleCard(id: string) {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search professional projects..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {filteredProjects.length} of {projects.length} projects
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const isExpanded = expandedCards[project.id];
          
          return (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-700 bg-gradient-to-r from-slate-50 dark:from-slate-800 to-white dark:to-slate-800">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} className="text-primary-500" />
                        {project.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary-500" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className={`text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 ${!isExpanded ? 'line-clamp-3' : ''}`}>
                  {project.description}
                </p>
                
                {project.description.length > 150 && (
                  <button
                    onClick={() => toggleCard(project.id)}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1 mb-4"
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                )}

                {/* Impact */}
                {project.impact && (
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Target size={16} className="text-green-600 dark:text-green-400" />
                      <span className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">Key Impact</span>
                    </div>
                    <p className="text-sm text-green-800 dark:text-green-300 font-medium">
                      {project.impact}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 dark:text-slate-500 mb-2">
            <Search size={48} className="mx-auto" />
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            No projects found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}