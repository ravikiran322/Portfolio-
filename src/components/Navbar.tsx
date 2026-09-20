import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Github, Linkedin, Mail, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education & Honors', href: '#education' },
    { label: 'GitHub Repos', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-brand-link"
            href="#hero"
            className="group flex items-center gap-3 text-slate-100 hover:text-teal-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 p-[1px] shadow-md shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-teal-400 text-sm">
                RK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-100 group-hover:text-teal-300 transition-colors text-base sm:text-lg">
                Ravi Kiran C
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider hidden sm:block">
                Full Stack & AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-900/60 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* View Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/50 rounded-xl transition-all shadow-sm"
              title="View full printable resume"
            >
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              <span>Resume</span>
            </button>

            {/* GitHub Profile */}
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-teal-300 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn Profile */}
            <a
              id="nav-linkedin-link"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-teal-300 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Get In Touch */}
            <a
              id="nav-contact-btn"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 rounded-xl transition-all shadow-sm shadow-teal-500/20 hover:shadow-teal-500/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="nav-mobile-resume-btn"
              onClick={onOpenResume}
              className="px-2.5 py-1.5 text-xs font-medium text-teal-300 bg-teal-950/50 border border-teal-800/60 rounded-lg flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-teal-300 bg-slate-900 rounded-lg border border-slate-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden mt-3 p-4 bg-slate-900/95 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-teal-300 hover:bg-slate-800/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Full Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
