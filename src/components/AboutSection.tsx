import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  User,
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const corePillars = [
    {
      title: "Backend & Systems",
      desc: "Architecting high-throughput REST APIs, JWT security, MongoDB/MySQL query optimization, and AWS EC2 deployments with a proven 75% latency reduction record."
    },
    {
      title: "AI & Machine Learning",
      desc: "Hands-on engineering with GenAI, LLM orchestration, RAG architectures, NLP (TF-IDF, Cosine Similarity), and Deep Learning (CNNs for medical imaging)."
    },
    {
      title: "Full Stack & Reactive UI",
      desc: "Developing modern, accessible SPAs and dashboards using React.js, Next.js, TypeScript, Tailwind CSS, Supabase, and Chart.js."
    },
    {
      title: "Mentorship & Core CS",
      desc: "Training aspiring developers in C, C++, Java, Python, OOP, and DSA as an IT Trainer at CADnCODE Institute with a stellar 9.05 BE CSE background."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-900/30 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/60 text-teal-300 text-xs font-mono font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>EXECUTIVE SUMMARY & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-teal-400">Ravi Kiran C</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Software engineer committed to high-performance architectures, data-driven systems,
            and pragmatic artificial intelligence.
          </p>
        </div>

        {/* Grid: Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                Engineering Philosophy & Journey
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-base">
                {PERSONAL_INFO.summary}
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                Whether deploying machine learning models for agricultural price forecasting,
                building automated NLP resume rankers, or optimizing enterprise database queries for 45%
                faster latency at Yugayatra Retail, my focus remains strictly on writing modular,
                maintainable, and reliable software.
              </p>

              {/* Verified Achievements List */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>9.05 CGPA</strong> in B.E. Computer Science & Engineering</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Best Intern Award</strong> at Yugayatra Retail OPC Pvt Ltd</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Oracle Cloud Infrastructure</strong> (OCI) Certified</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>24+ Repositories</strong> on GitHub across AI & Web</span>
                </div>
              </div>
            </div>

            {/* Core Pillars 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-teal-500/40 transition-colors"
                >
                  <h4 className="text-sm font-bold text-teal-300 mb-2">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>Direct Contact Information</span>
                <span className="text-xs font-normal text-emerald-400 font-mono">Available</span>
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-teal-300 truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition-colors ml-2"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Phone</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-teal-300 truncate block"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition-colors ml-2"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Location</div>
                      <div className="text-xs sm:text-sm font-medium text-slate-200">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenResume}
                  className="flex-1 py-2.5 px-4 bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/30 text-teal-300 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Interactive Resume</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
