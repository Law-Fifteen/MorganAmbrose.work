'use client';

import React, { useState } from 'react';
import { TechProject } from '../types';
import { Search, ExternalLink, Github, Calendar, Code2 } from 'lucide-react';

interface TechProjectsCardsProps {
  projects: TechProject[];
}

export default function TechProjectsCards({ projects }: TechProjectsCardsProps) {
  const [globalFilter, setGlobalFilter] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(globalFilter.toLowerCase()) ||
    project.description.toLowerCase().includes(globalFilter.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(globalFilter.toLowerCase()))
  );

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
            placeholder="Search tech projects..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {filteredProjects.length} of {projects.length} projects
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group"
          >
            {/* Card Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 bg-gradient-to-r from-primary-50 dark:from-primary-900/20 to-secondary-50 dark:to-secondary-900/20">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar size={14} className="text-secondary-500" />
                    {project.year}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-all"
                      title="View Live Project"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-all"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 whitespace-pre-line">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={16} className="text-slate-400" />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-full border border-primary-200 dark:border-primary-800 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 dark:text-slate-500 mb-2">
            <Search size={48} className="mx-auto" />
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            No tech projects found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}