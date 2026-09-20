import React from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, Calendar, Tag } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-card"
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/50">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-teal-950 text-teal-300 border border-teal-800">
                {project.category === 'ai' ? 'AI / ML' : project.category === 'fullstack' ? 'Full Stack Web' : 'Mobile / Systems'}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {project.dateRange}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-teal-400 mt-0.5">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Metric Banner */}
          {project.metrics && (
            <div className="p-3.5 bg-teal-950/40 border border-teal-800/60 rounded-xl flex items-center gap-3 text-teal-300 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Key Metric: {project.metrics}</span>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Engineering Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
              Engineering Achievements & Implementation
            </h4>
            <div className="space-y-3">
              {project.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-200 text-xs font-medium rounded-lg"
                >
                  <Tag className="w-3 h-3 text-teal-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex flex-wrap items-center justify-end gap-3">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-md"
            >
              <span>Launch Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
          >
            <Github className="w-4 h-4 text-teal-400" />
            <span>View GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};
