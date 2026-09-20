import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, AWARDS, SKILL_CATEGORIES } from '../data/portfolioData';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
RAVI KIRAN C
Bengaluru, KA | Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubUrl} | LinkedIn: ${PERSONAL_INFO.linkedinUrl} | Portfolio: ${PERSONAL_INFO.portfolioUrl}

SUMMARY:
${PERSONAL_INFO.summary}

SKILLS:
- Programming Languages: Python, JavaScript, TypeScript, C++, Java, Kotlin, PHP
- Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS, Redux, Vite, Responsive UI
- Backend & API: Node.js, Express.js, RESTful APIs, JWT Authentication, CRUD Operations, API Integration, HTTP Protocols
- Databases: MySQL, MongoDB, Supabase, SQL Query Optimization, Relational Schema Design
- AI/ML: GenAI, LLMs, Prompt Engineering, AI Agents, RAG, LangChain, LangGraph, OpenAI API, Google Gemini API, Hugging Face, TensorFlow, Scikit-learn, NLP, CNN, TF-IDF, Streamlit
- Cloud & DevOps: AWS EC2, Docker, Containerization, CI/CD Pipelines
- Software Engineering: OOP, Data Structures & Algorithms, SDLC, Agile Methodology, System Design
- Core Subjects: Operating Systems, DBMS, Computer Networks
- Tools: Git, GitHub, Postman, VS Code, Cursor AI, Jupyter Notebook, Chart.js

EXPERIENCE:
1. IT Trainer at CADnCODE Institute (May 2026 - Present)
- Conducted practical training sessions in C, C++, Java, and Python, covering programming fundamentals, OOP, data structures, and problem-solving.
- Developed hands-on exercises, coding assignments, and projects to improve students' programming and technical skills.
- Mentored students in debugging, project development, and technical interview preparation while providing personalized guidance based on individual learning needs.

2. Full Stack Developer Intern at Yugayatra Retail OPC private limited (August 2025 - October 2025)
- Engineered RESTful APIs and backend services using Node.js and Express.js, optimized MongoDB queries, implemented CRUD operations, and reduced average API response time by 75%.
- Awarded "Best Intern" for outstanding performance and high-impact technical contributions.

3. Android App Development Intern at Mind Matrix (February 2026 - May 2026)
- Collaborated with cross-functional teams to architect robust features, resolve critical incidents, and oversee AWS EC2 deployments, improving system reliability and uptime through proactive debugging and performance tuning.

PROJECTS:
1. AgriSmart Platform | React.js, TypeScript, Supabase, Chart.js (February 2025 - April 2025)
- Developed an AI-powered smart farming platform featuring 14-day price prediction for 140+ crops across 50+ agricultural markets with multilingual support.
- Built interactive dashboards using Chart.js to visualize historical price trends, market insights, weather impact, and intelligent crop-selling recommendations.
- Integrated an organic e-commerce marketplace with shopping cart, product filtering, secure checkout, and responsive UI.

2. Resume Screening AI Agent | Python, Streamlit, Scikit-learn, NLP, Pandas (November 2024 - January 2025)
- Developed an AI-powered resume screening application that automatically parses, analyzes, and ranks candidate resumes against job descriptions using Natural Language Processing (NLP) and TF-IDF with Cosine Similarity.
- Implemented PDF, DOCX, and TXT resume parsing with automated extraction of candidate skills, education, and work experience using pdfplumber and python-docx.
- Built an interactive Streamlit dashboard with candidate ranking, AI-based matching explanations, relevance scoring, and CSV/JSON export functionality.

3. Personal Portfolio Website | React.js, TypeScript, Tailwind CSS, Vite (May 2025 - July 2025)
- Built reusable React components with TypeScript and Tailwind CSS, implementing responsive layouts, smooth navigation, and modern UI/UX principles.
- Designed and developed a responsive portfolio website showcasing projects, technical skills, certifications, and professional achievements.

4. AI Powered Pneumonia Diagnosis | Python, TensorFlow, CNN, Deep Learning (May 2025 - December 2025)
- Built image classification model for pneumonia detection. Trained and validated CNN architecture for medical imaging.
- Performed image preprocessing, data augmentation, model training, and evaluation to improve classification accuracy and reduce overfitting.

AWARDS & ACHIEVEMENTS:
- Best Intern - Yugayatra Retail OPC private limited
- Oracle Cloud Infrastructure (OCI) Certification - Oracle (2025)
- Data Structures & Algorithms: Solved extensive problem sets across multiple coding platforms

EDUCATION:
- Bachelor of Engineering in Computer Science and Engineering | Vijaya Vittala Institute of Technology, Bengaluru | CGPA: 9.05
- SSLC | New Cambridge English School, Bengaluru | 91%
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200 print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative my-6 print:border-none print:shadow-none print:bg-white print:text-black print:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 sm:px-6 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm sm:text-base">Ravi Kiran C — Verified Resume</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 hidden sm:inline">
              ATS-Optimized View
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors"
              title="Copy plain text resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-teal-400" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-8 bg-slate-900 text-slate-200 font-sans print:bg-white print:text-slate-900">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800 print:border-slate-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight mb-1">
              Ravi Kiran C
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 text-xs text-slate-300 print:text-slate-700 mt-2">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-400 print:text-black" />
                Bengaluru, KA
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-teal-400 print:text-black" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-teal-400 print:text-black" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 text-xs text-teal-400 print:text-blue-700 mt-2 font-mono">
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/ravikiran322
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/ravi-kiran-c-
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                ravikiran1portfolio.com
              </a>
            </div>
          </div>

          {/* Summary Section */}
          <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 print:text-slate-900 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Skills Section */}
          <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 print:text-slate-900 mb-3">
              Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-slate-800">
              <p>
                <strong className="text-white print:text-black font-semibold">Programming Languages:</strong> Python, JavaScript, TypeScript, C++, Java, Kotlin, PHP
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">Frontend:</strong> React.js, Next.js, HTML5, CSS3, Tailwind CSS, Redux, Vite, Responsive UI
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">Backend & API:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication, CRUD Operations, API Integration, Authentication & Authorization, HTTP Protocols
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">Databases:</strong> MySQL, MongoDB, Supabase, SQL Query Optimization, Relational Schema Design
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">AI/ML:</strong> Generative AI (GenAI), Large Language Models (LLMs), Prompt Engineering, AI Agents, Retrieval-Augmented Generation (RAG), LangChain, LangGraph, OpenAI API, Google Gemini API, Hugging Face Transformers, TensorFlow, Scikit-learn, Natural Language Processing (NLP), Deep Learning, Convolutional Neural Networks (CNN), TF-IDF, Cosine Similarity, Streamlit
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">Cloud & DevOps:</strong> AWS EC2, Docker, Containerization, CI/CD Pipelines
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">Software Engineering:</strong> OOP, Data Structures & Algorithms, SDLC, Agile Methodology, System Design Basics
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">Core Subjects:</strong> Operating Systems, DBMS, Computer Networks
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">Tools:</strong> Git, GitHub, Postman, VS Code, Cursor AI, Jupyter Notebook, Chart.js
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">Soft Skills:</strong> Problem-solving, Team Collaboration, Communication, Analytical Thinking, Adaptability
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 print:text-slate-900 mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              {/* CADnCODE */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white print:text-black flex-wrap">
                  <span>IT Trainer at CADnCODE Institute</span>
                  <span className="font-mono text-teal-400 print:text-slate-700">MAY 2026 – Present</span>
                </div>
                <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-300 print:text-slate-800 list-disc list-inside leading-relaxed">
                  <li>Conducted practical training sessions in C, C++, Java, and Python, covering programming fundamentals, OOP, data structures, and problem-solving.</li>
                  <li>Developed hands-on exercises, coding assignments, and projects to improve students’ programming and technical skills.</li>
                  <li>Mentored students in debugging, project development, and technical interview preparation while providing personalized guidance based on individual learning needs.</li>
                </ul>
              </div>

              {/* Yugayatra */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white print:text-black flex-wrap">
                  <span>Full Stack Developer Intern at Yugayatra Retail OPC private limited</span>
                  <span className="font-mono text-teal-400 print:text-slate-700">August 2025 – October 2025</span>
                </div>
                <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-300 print:text-slate-800 list-disc list-inside leading-relaxed">
                  <li>Engineered RESTful APIs and backend services using Node.js and Express.js, optimized MongoDB queries, implemented CRUD operations, and reduced average API response time by 75%.</li>
                  <li>Recognized with "Best Intern" award for outstanding contributions.</li>
                </ul>
              </div>

              {/* Mind Matrix */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white print:text-black flex-wrap">
                  <span>Android App Development Intern at Mind Matrix</span>
                  <span className="font-mono text-teal-400 print:text-slate-700">February 2026 – May 2026</span>
                </div>
                <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-300 print:text-slate-800 list-disc list-inside leading-relaxed">
                  <li>Collaborated with cross-functional teams to architect robust features, resolve critical incidents, and oversee AWS EC2 deployments, improving system reliability and uptime through proactive debugging and performance tuning.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 print:text-slate-900 mb-4">
              Projects
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 print:text-slate-800">
              {/* AgriSmart */}
              <div>
                <div className="flex items-center justify-between font-bold text-white print:text-black flex-wrap">
                  <span>AgriSmart Platform | React.js, TypeScript, Supabase, Chart.js</span>
                  <span className="font-mono text-teal-400 print:text-slate-700">February 2025 – April 2025</span>
                </div>
                <ul className="mt-1 space-y-1 list-disc list-inside leading-relaxed">
                  <li>Developed an AI-powered smart farming platform featuring 14-day price prediction for 140+ crops across 50+ agricultural markets with multilingual support.</li>
                  <li>Built interactive dashboards using Chart.js to visualize historical price trends, market insights, weather impact, and intelligent crop-selling recommendations.</li>
                  <li>Integrated an organic e-commerce marketplace with shopping cart, product filtering, secure checkout, and responsive UI using React, TypeScript, Tailwind CSS, and Supabase.</li>
                </ul>
              </div>

              {/* Resume Screening */}
              <div>
                <div className="flex items-center justify-between font-bold text-white print:text-black flex-wrap">
                  <span>Resume Screening AI Agent | Python, Streamlit, Scikit-learn, NLP, Pandas</span>
                  <span className="font-mono text-teal-400 print:text-slate-700">November 2024 – January 2025</span>
                </div>
                <ul className="mt-1 space-y-1 list-disc list-inside leading-relaxed">
                  <li>Developed an AI-powered resume screening application that automatically parses, analyzes, and ranks candidate resumes against job descriptions using Natural Language Processing (NLP) and TF-IDF with Cosine Similarity.</li>
                  <li>Implemented PDF, DOCX, and TXT resume parsing with automated extraction of candidate skills, education, and work experience using pdfplumber and python-docx.</li>
                  <li>Built an interactive Streamlit dashboard with candidate ranking, AI-based matching explanations, relevance scoring, and CSV/JSON export functionality.</li>
                </ul>
              </div>

              {/* Personal Portfolio Website */}
              <div>
                <div className="flex items-center justify-between font-bold text-white print:text-black flex-wrap">
                  <span>Personal Portfolio Website | React.js, TypeScript, Tailwind CSS, Vite</span>
                  <span className="font-mono text-teal-400 print:text-slate-700">May 2025 – July 2025</span>
                </div>
                <ul className="mt-1 space-y-1 list-disc list-inside leading-relaxed">
                  <li>Built reusable React components with TypeScript and Tailwind CSS, implementing responsive layouts, smooth navigation, and modern UI/UX principles.</li>
                  <li>Designed and developed a responsive portfolio website showcasing projects, technical skills, certifications, and professional achievements.</li>
                  <li>Integrated project demos, GitHub repositories, downloadable resume, and contact form while optimizing website performance, accessibility, and SEO.</li>
                </ul>
              </div>

              {/* AI Powered Pneumonia Diagnosis */}
              <div>
                <div className="flex items-center justify-between font-bold text-white print:text-black flex-wrap">
                  <span>AI Powered Pneumonia Diagnosis | Python, TensorFlow, CNN, Deep Learning</span>
                  <span className="font-mono text-teal-400 print:text-slate-700">May 2025 – December 2025</span>
                </div>
                <ul className="mt-1 space-y-1 list-disc list-inside leading-relaxed">
                  <li>Built image classification model for pneumonia detection. Trained and validated CNN architecture for medical imaging.</li>
                  <li>Performed image preprocessing, data augmentation, model training, and evaluation to improve classification accuracy and reduce overfitting.</li>
                  <li>Implemented performance metrics and visualization techniques to analyze model predictions for medical image classification.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Awards & Achievements */}
          <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 print:text-slate-900 mb-2">
              Awards & Achievements
            </h2>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-300 print:text-slate-800 list-disc list-inside leading-relaxed">
              <li><strong className="text-white print:text-black">Best Intern – Yugayatra Retail OPC private limited:</strong> Recognized for outstanding performance and high-impact technical contributions throughout the internship tenure.</li>
              <li><strong className="text-white print:text-black">Oracle Cloud Infrastructure (OCI) Certification</strong> – Oracle (2025)</li>
              <li><strong className="text-white print:text-black">Data Structures & Algorithms:</strong> Solved extensive problem sets across multiple coding platforms, reinforcing algorithmic thinking and problem-solving proficiency.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="pt-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 print:text-slate-900 mb-3">
              Education
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 print:text-slate-800">
              <div className="flex items-center justify-between flex-wrap">
                <div>
                  <strong className="text-white print:text-black">Bachelor of Engineering in Computer Science and Engineering</strong>
                  <div className="text-slate-400 print:text-slate-600 text-xs">Vijaya Vittala Institute of Technology, Bengaluru</div>
                </div>
                <div className="font-mono text-teal-400 print:text-slate-900 font-bold">CGPA: 9.05</div>
              </div>

              <div className="flex items-center justify-between flex-wrap pt-2">
                <div>
                  <strong className="text-white print:text-black">SSLC</strong>
                  <div className="text-slate-400 print:text-slate-600 text-xs">New Cambridge English School, Bengaluru</div>
                </div>
                <div className="font-mono text-teal-400 print:text-slate-900 font-bold">91%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
