import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { GitHubExplorer } from './components/GitHubExplorer';
import { EducationAwardsSection } from './components/EducationAwardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Executive Summary & About */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Skills Matrix */}
        <SkillsSection />

        {/* 4. Professional Work Experience Timeline */}
        <ExperienceSection />

        {/* 5. Featured Projects from Resume & GitHub */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 6. Education, Certifications & Honors */}
        <EducationAwardsSection />

        {/* 7. Live GitHub Repository Explorer */}
        <GitHubExplorer />

        {/* 8. Direct Contact & Collaboration */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Complete ATS Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
