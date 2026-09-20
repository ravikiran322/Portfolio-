import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Check,
  Copy,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Decorative Grids & Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-800/80 text-teal-300 text-xs font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Available for Full-Time Roles & Opportunities</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4 flex items-center gap-2 flex-wrap">
              <span>{PERSONAL_INFO.headline}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 text-slate-400 text-sm sm:text-base font-normal">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                Bengaluru, India
              </span>
            </h2>

            {/* Concise summary from resume */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Experienced in building high-performance backend systems, RESTful microservices,
              and AI-powered applications with <span className="text-teal-300 font-medium">Python</span>,{' '}
              <span className="text-teal-300 font-medium">TypeScript</span>,{' '}
              <span className="text-teal-300 font-medium">React</span>,{' '}
              <span className="text-teal-300 font-medium">Node.js</span>, and{' '}
              <span className="text-teal-300 font-medium">AWS</span>. Passionate about machine learning,
              GenAI agents, and scalable cloud architectures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                id="hero-projects-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800/90 border border-slate-700/80 hover:border-teal-500/50 rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>View Full Resume</span>
              </button>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Quick Stats from Resume */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-4 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-3 bg-slate-900/40 border border-slate-800/60 rounded-xl">
                  <div className="text-xl sm:text-2xl font-black text-white font-mono text-teal-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 truncate">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile & Code Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl p-6 backdrop-blur-xl relative group">
              {/* Subtle top badge */}
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-[11px] px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                Verified Profile
              </div>

              {/* Developer Avatar & Overview */}
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-800">
                <div className="relative">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-500/60 shadow-lg"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.currentTarget as HTMLImageElement).src =
                        'https://ui-avatars.com/api/?name=Ravi+Kiran&background=0f766e&color=ffffff&size=128';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 p-1 bg-slate-950 rounded-full">
                    <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white truncate">{PERSONAL_INFO.name}</h3>
                    <span className="text-xs font-mono text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/60">
                      @ravikiran322
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate">Software Engineer & IT Trainer</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Best Intern @ Yugayatra • BE 9.05 CGPA</span>
                  </p>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 mb-5 shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/60 text-slate-500 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-1 text-slate-400">developer.ts</span>
                  </div>
                  <Terminal className="w-3.5 h-3.5" />
                </div>

                <div className="space-y-1 text-slate-300">
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-teal-300">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"Ravi Kiran C"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">specialization:</span>{' '}
                    <span className="text-emerald-300">["FullStack", "GenAI", "Backend"]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">languages:</span>{' '}
                    <span className="text-emerald-300">["Python", "TypeScript", "C++", "Java"]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">cloud:</span>{' '}
                    <span className="text-emerald-300">["AWS EC2", "Docker", "OCI"]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">currentRole:</span>{' '}
                    <span className="text-amber-300">"IT Trainer @ CADnCODE"</span>
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Social and Quick Actions */}
              <div className="flex items-center justify-between gap-2">
                <a
                  id="hero-card-github"
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-slate-800/80 hover:bg-slate-700/80 text-xs font-medium text-slate-200 rounded-xl border border-slate-700/60 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-teal-400" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  id="hero-card-linkedin"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-slate-800/80 hover:bg-slate-700/80 text-xs font-medium text-slate-200 rounded-xl border border-slate-700/60 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
