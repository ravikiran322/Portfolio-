import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  Sparkles,
  MessageSquare,
  Globe
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-Time Role',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link with pre-filled content
    const subject = encodeURIComponent(`[${formData.topic}] ${formData.subject || 'Portfolio Inquiry'} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Ravi,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const topics = ['Full-Time Role', 'Contract / Project', 'Technical Training', 'General'];

  return (
    <section id="contact" className="py-20 relative bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/60 text-teal-300 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="text-teal-400">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-base">
            Interested in discussing full-time opportunities, software architecture,
            or AI applications? Send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Based in Bengaluru, KA. Active for software engineering roles, technical mentorship, and high-impact software projects.
              </p>

              <div className="space-y-4">
                {/* Email item */}
                <div className="p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-mono text-slate-400">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-teal-300 truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-teal-300 bg-slate-900 hover:bg-slate-850 rounded-lg border border-slate-800 transition-colors ml-2 shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-mono text-slate-400">Telephone / WhatsApp</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-teal-300 truncate block"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-400 hover:text-teal-300 bg-slate-900 hover:bg-slate-850 rounded-lg border border-slate-800 transition-colors ml-2 shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      Bengaluru, Karnataka, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950/60 hover:bg-slate-850 border border-slate-800 hover:border-teal-500/40 rounded-xl flex items-center gap-2.5 text-slate-200 text-xs font-semibold transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950/60 hover:bg-slate-850 border border-slate-800 hover:border-teal-500/40 rounded-xl flex items-center gap-2.5 text-slate-200 text-xs font-semibold transition-all group"
                >
                  <Github className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>Send Direct Inquiry</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below and it will compose a formatted message directly to Ravi's inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Topic selection chips */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-medium">
                    Purpose of Inquiry
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, topic: t })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          formData.topic === t
                            ? 'bg-teal-400 text-slate-950 font-bold'
                            : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe / Recruiter"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1 font-medium">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer Role / AI Project Discussion"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-400 font-mono mt-2">
                    Email composer opened! Looking forward to connecting.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
