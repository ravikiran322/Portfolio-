import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  ExternalLink,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/60 text-teal-300 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-teal-400">Internships</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Demonstrated impact across technical training, cloud infrastructure, and backend API optimization.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => {
            const isPresent = exp.status === 'Active' || exp.period.toLowerCase().includes('present');
            const hasAward = Boolean(exp.award);

            return (
              <div key={exp.id} className="relative pl-6 md:pl-10 group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-teal-400 group-hover:scale-125 transition-transform flex items-center justify-center">
                  {isPresent && (
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  )}
                </div>

                {/* Period Badge on the left for md+ screens */}
                <div className="hidden md:block absolute -left-32 top-1 w-24 text-right">
                  <span className="text-xs font-mono font-semibold text-teal-400/90 block">
                    {exp.period.split('–')[0].trim()}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 block">
                    {exp.period.split('–')[1]?.trim() || ''}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-sm transition-all">
                  {/* Top Bar with Role & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {isPresent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-teal-400 font-semibold text-sm mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="md:hidden flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-teal-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Special Award Banner (if any) */}
                  {hasAward && (
                    <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-transparent border border-amber-800/60 flex items-center gap-2.5 text-amber-300 text-xs font-semibold">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{exp.award}</span>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-5">
                    {exp.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-mono text-slate-500 uppercase">Core Stack:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
