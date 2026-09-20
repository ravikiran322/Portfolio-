import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  Info,
  Calendar
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'fullstack' | 'mobile'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchCategory = activeCategory === 'all' || proj.category === activeCategory;
      const matchSearch =
        searchTerm.trim() === '' ||
        proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.technologies.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        proj.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="projects" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/60 text-teal-300 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO & GITHUB REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-teal-400">Engineering Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            From deep learning diagnostics and automated NLP agents to full-stack e-commerce
            marketplaces and Android citizen ledgers.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-1 rounded-xl border border-slate-800 w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-teal-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'ai'
                  ? 'bg-teal-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI & Machine Learning (4)
            </button>
            <button
              onClick={() => setActiveCategory('fullstack')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'fullstack'
                  ? 'bg-teal-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Stack & Web (5)
            </button>
            <button
              onClick={() => setActiveCategory('mobile')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'mobile'
                  ? 'bg-teal-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mobile & Systems (1)
            </button>
          </div>

          {/* Quick Search */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-3.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 outline-none"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-teal-500/5 hover:-translate-y-1 group relative"
            >
              <div>
                {/* Header Tag and Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-slate-950 text-teal-400 border border-slate-800">
                    {project.category === 'ai'
                      ? 'AI / ML'
                      : project.category === 'fullstack'
                      ? 'Full Stack'
                      : 'Mobile'}
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/80">
                      <Sparkles className="w-3 h-3" />
                      Featured Resume Project
                    </span>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-teal-400/90 font-medium mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Key Metric pill if present */}
                {project.metrics && (
                  <div className="mb-3.5 p-2 bg-slate-950/70 rounded-lg border border-slate-800/80 text-[11px] text-slate-300 font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>
                )}

                {/* Short description */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Technology chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-950/90 text-[11px] font-mono text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-teal-300 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-teal-400" />
                  <span>Architecture Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-300 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition-colors"
                      title="Launch Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
