import React from 'react';
import { EDUCATION, AWARDS } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  ShieldCheck,
  Code
} from 'lucide-react';

export const EducationAwardsSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/60 text-teal-300 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-teal-400">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Strong computer science principles with high academic standing and industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Education Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white mb-2">
              <GraduationCap className="w-5 h-5 text-teal-400" />
              <span>Academic Education</span>
            </div>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-sm transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">{edu.degree}</h3>
                    <p className="text-teal-400 font-semibold text-sm mt-0.5">{edu.institution}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-mono">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {edu.location}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="px-3 py-1 bg-teal-950/80 border border-teal-700/80 rounded-xl text-teal-300 font-mono font-bold text-sm">
                      {edu.score}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{edu.scoreType}</div>
                  </div>
                </div>

                {edu.details && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-slate-800/80">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Awards & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white mb-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Honors & Certifications</span>
            </div>

            <div className="space-y-4">
              {AWARDS.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 sm:p-6 shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-amber-950/50 border border-amber-800/60 text-amber-400 shrink-0">
                      {award.badgeType === 'award' ? (
                        <Award className="w-5 h-5" />
                      ) : award.badgeType === 'certification' ? (
                        <ShieldCheck className="w-5 h-5" />
                      ) : (
                        <Code className="w-5 h-5" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h4 className="text-base font-bold text-white">{award.title}</h4>
                        <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-xs text-teal-400 font-medium mt-0.5 mb-2">{award.issuer}</p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
