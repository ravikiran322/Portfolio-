import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-mono font-bold text-sm">
              RK
            </div>
            <div>
              <div className="text-white font-bold text-sm">Ravi Kiran C</div>
              <div className="text-[11px] text-slate-500 font-mono">Full Stack Developer & AI Engineer • Bengaluru</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center flex-wrap gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-teal-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-300 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-teal-300 transition-colors">Education</a>
            <a href="#github" className="hover:text-teal-300 transition-colors">GitHub</a>
            <button onClick={onOpenResume} className="text-teal-400 hover:underline">Full Resume</button>
          </div>

          {/* Back to top & Socials */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-teal-300 bg-slate-900 hover:bg-slate-850 rounded-lg border border-slate-800 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Ravi Kiran C. Built with React 19, TypeScript, and Tailwind CSS.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed for high performance & clean craftsmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
