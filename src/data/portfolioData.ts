import { Project, Experience, Education, Award, SkillCategory, GitHubRepoItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ravi Kiran C",
  headline: "Full Stack Developer & AI/ML Engineer",
  title: "Software Engineer | Backend Systems | GenAI & Cloud",
  location: "Bengaluru, Karnataka, India",
  phone: "+91-9742700324",
  email: "ravikiran14444@gmail.com",
  githubUsername: "ravikiran322",
  githubUrl: "https://github.com/ravikiran322",
  linkedinUrl: "https://www.linkedin.com/in/ravi-kiran-c-",
  portfolioUrl: "https://ravikiran1portfolio.com",
  avatarUrl: "https://avatars.githubusercontent.com/u/75903951?v=4",
  bioShort: "Full Stack Developer with hands-on experience in building high-performance backend systems, RESTful APIs, and full-stack web applications using Python, JavaScript, and AWS.",
  summary: "Full Stack Developer with hands-on experience in building high-performance backend systems, RESTful APIs, and full-stack web applications using Python, JavaScript, and AWS. Expertise spans microservices architecture, scalable systems, containerized workflows, and both relational and non-relational databases. Passionate about crafting tools and data-driven solutions that address real-world challenges.",
  status: "Open to Full-Time Engineering Roles & Collaborations",
  stats: [
    { label: "Engineering CGPA", value: "9.05", sublabel: "BE in CSE" },
    { label: "GitHub Repositories", value: "24+", sublabel: "Open Source Code" },
    { label: "API & AI Speedup", value: "75%", sublabel: "Latency reduction & optimization" },
    { label: "AI Predictions", value: "140+", sublabel: "Crops across 50+ Markets" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for system design, backend architectures, and machine learning models.",
    skills: [
      { name: "Python", level: "Advanced", highlight: true },
      { name: "JavaScript", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "C++", level: "Proficient", highlight: true },
      { name: "Java", level: "Proficient" },
      { name: "Kotlin", level: "Familiar" },
      { name: "PHP", level: "Familiar" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Generative AI, LLMs, computer vision, and NLP implementations.",
    skills: [
      { name: "Generative AI (GenAI)", level: "Advanced", highlight: true },
      { name: "Large Language Models (LLMs)", level: "Advanced", highlight: true },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "AI Agents", level: "Advanced", highlight: true },
      { name: "RAG Architecture", level: "Advanced", highlight: true },
      { name: "LangChain & LangGraph", level: "Proficient", highlight: true },
      { name: "Google Gemini API", level: "Proficient", highlight: true },
      { name: "OpenAI API", level: "Proficient" },
      { name: "Hugging Face Transformers", level: "Proficient" },
      { name: "TensorFlow & Keras", level: "Proficient", highlight: true },
      { name: "Scikit-learn", level: "Advanced" },
      { name: "Natural Language Processing (NLP)", level: "Advanced" },
      { name: "Deep Learning (CNN)", level: "Proficient" },
      { name: "TF-IDF & Cosine Similarity", level: "Advanced" },
      { name: "Streamlit", level: "Advanced" }
    ]
  },
  {
    title: "Backend & API Engineering",
    description: "Building resilient microservices, authentication pipelines, and fast endpoints.",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "RESTful APIs", level: "Advanced", highlight: true },
      { name: "JWT Authentication", level: "Advanced" },
      { name: "CRUD Operations", level: "Advanced" },
      { name: "API Integration", level: "Advanced" },
      { name: "Authentication & Authorization", level: "Advanced" },
      { name: "HTTP Protocols", level: "Proficient" },
      { name: "Microservices Architecture", level: "Proficient" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Designing high-performance relational schemas and NoSQL document structures.",
    skills: [
      { name: "MongoDB", level: "Advanced", highlight: true },
      { name: "MySQL", level: "Advanced", highlight: true },
      { name: "Supabase", level: "Proficient", highlight: true },
      { name: "SQL Query Optimization", level: "Advanced" },
      { name: "Relational Schema Design", level: "Advanced" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Crafting reactive, accessible, and responsive user interfaces.",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Next.js", level: "Proficient", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Redux", level: "Proficient" },
      { name: "Vite", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Responsive UI/UX", level: "Advanced" },
      { name: "Chart.js Data Viz", level: "Proficient" }
    ]
  },
  {
    title: "Cloud, DevOps & Engineering",
    description: "Deployment, containerization, and continuous delivery pipelines.",
    skills: [
      { name: "AWS EC2", level: "Proficient", highlight: true },
      { name: "Docker", level: "Proficient", highlight: true },
      { name: "Containerization", level: "Proficient" },
      { name: "CI/CD Pipelines", level: "Proficient" },
      { name: "OOP & DSA", level: "Advanced" },
      { name: "System Design Basics", level: "Proficient" },
      { name: "Operating Systems", level: "Proficient" },
      { name: "DBMS & Networks", level: "Proficient" }
    ]
  },
  {
    title: "Developer Tools & Soft Skills",
    description: "Daily workflow tools, AI coding assistants, and team leadership.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "Postman", level: "Advanced" },
      { name: "VS Code & Cursor AI", level: "Advanced" },
      { name: "Jupyter Notebook", level: "Proficient" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Analytical Thinking", level: "Advanced" },
      { name: "Technical Mentorship", level: "Advanced" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "cadncode",
    role: "IT Trainer",
    company: "CADnCODE Institute",
    period: "May 2026 – Present",
    location: "Bengaluru, KA",
    status: "Active",
    highlights: [
      "Conducted intensive practical training sessions in C, C++, Java, and Python, covering programming fundamentals, Object-Oriented Programming (OOP), Data Structures & Algorithms, and problem-solving methodologies.",
      "Developed interactive hands-on exercises, coding assignments, and capstone software projects to significantly elevate students' programming and technical capabilities.",
      "Mentored cohorts of students in live debugging, project development architectures, and technical interview preparation while delivering personalized guidance tailored to individual learning milestones."
    ],
    skills: ["C", "C++", "Java", "Python", "OOP", "Data Structures & Algorithms", "Technical Mentorship", "Curriculum Design"]
  },
  {
    id: "mind-matrix",
    role: "Android App Development Intern",
    company: "Mind Matrix",
    period: "February 2026 – May 2026",
    location: "Bengaluru, KA",
    highlights: [
      "Collaborated with cross-functional engineering teams to architect robust application features, resolve critical production incidents, and maintain seamless app workflows.",
      "Overseeing AWS EC2 cloud deployments and infrastructure configurations, ensuring high system reliability and continuous service availability.",
      "Conducted proactive performance tuning, memory profiling, and debugging routines to eliminate bottlenecks and optimize mobile responsiveness."
    ],
    skills: ["Android", "Kotlin / Java", "AWS EC2", "Cloud Deployment", "System Reliability", "Debugging & Profiling"]
  },
  {
    id: "yugayatra",
    role: "Full Stack Developer Intern",
    company: "Yugayatra Retail OPC private limited",
    period: "August 2025 – October 2025",
    location: "Bengaluru, KA",
    award: "Awarded 'Best Intern' for outstanding performance & high-impact technical contributions",
    highlights: [
      "Engineered scalable RESTful APIs and resilient backend services using Node.js and Express.js, handling high-throughput transactional flows.",
      "Optimized complex MongoDB queries and index structures, implemented robust CRUD operations, and slashed average API response latency by 75%.",
      "Recognized with the prestigious 'Best Intern' honor by senior management for outstanding performance and high-impact technical deliverables across the internship tenure."
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Query Optimization", "JWT", "Performance Tuning"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "agrismart-organopredict",
    title: "AgriSmart Platform (OrganoPredict)",
    subtitle: "AI-Powered Crop Price Prediction & Organic E-Commerce",
    category: "ai",
    featured: true,
    dateRange: "February 2025 – April 2025",
    metrics: "14-Day Price Forecast for 140+ Crops across 50+ Markets",
    description: "Comprehensive agricultural intelligence platform providing farmers and traders with multi-market price forecasting, weather trend correlation, and an integrated direct-to-consumer organic marketplace.",
    highlights: [
      "Developed an AI-powered smart farming engine delivering accurate 14-day price predictions for 140+ agricultural crops across 50+ wholesale markets with multilingual accessibility.",
      "Built dynamic, interactive visual dashboards using Chart.js to project historical price trends, regional market insights, weather impacts, and intelligent crop-selling recommendations.",
      "Integrated a full-featured organic e-commerce marketplace with shopping cart management, granular product filtering, secure checkout transactions, and an adaptive responsive UI."
    ],
    technologies: ["React.js", "TypeScript", "Supabase", "Chart.js", "Tailwind CSS", "Python ML", "REST APIs"],
    githubUrl: "https://github.com/ravikiran322/organopredict",
    liveDemoUrl: "https://github.com/ravikiran322/organopredict"
  },
  {
    id: "resume-screening-agent",
    title: "Resume Screening AI Agent",
    subtitle: "Automated NLP Candidate Ranking & Analysis System",
    category: "ai",
    featured: true,
    dateRange: "November 2024 – January 2025",
    metrics: "Automated Multi-Format Parsing (PDF, DOCX, TXT) with NLP Scoring",
    description: "Intelligent recruitment automation application leveraging Natural Language Processing to extract candidate credentials and objectively rank resumes against custom Job Descriptions.",
    highlights: [
      "Architected an AI-powered resume screening platform that automatically parses, analyzes, and ranks candidate resumes against job descriptions using NLP and TF-IDF vectorization with Cosine Similarity.",
      "Implemented resilient document parsers supporting PDF, DOCX, and TXT formats with automated extraction of candidate skill sets, education credentials, and work history using pdfplumber and python-docx.",
      "Constructed an interactive Streamlit analytics dashboard featuring real-time candidate ranking tables, explainable AI matching rationale, relevance scoring, and one-click CSV/JSON export."
    ],
    technologies: ["Python", "Streamlit", "Scikit-learn", "NLP", "TF-IDF", "Cosine Similarity", "Pandas", "pdfplumber"],
    githubUrl: "https://github.com/ravikiran322/resume-screening-agent",
    liveDemoUrl: "https://resume-screening-agent-vj74svf7birmzpx72zyhyp.streamlit.app/"
  },
  {
    id: "pneumonia-diagnosis",
    title: "AI-Powered Pneumonia Diagnosis",
    subtitle: "Deep Learning Medical Imaging Classification Model",
    category: "ai",
    featured: true,
    dateRange: "May 2025 – December 2025",
    metrics: "Validated Deep CNN Architecture for Chest X-Ray Imaging",
    description: "Clinical decision support neural network trained on medical imaging data to identify pneumonia signatures with high sensitivity and diagnostic reliability.",
    highlights: [
      "Engineered an end-to-end computer vision pipeline using Python, TensorFlow, and Keras to train and validate Convolutional Neural Network (CNN) architectures for medical radiography.",
      "Executed comprehensive image preprocessing, data augmentation, regularization techniques, and hyperparameter tuning to boost classification precision while mitigating overfitting.",
      "Implemented clinical performance metrics (confusion matrix, ROC-AUC, precision-recall curves) and visualization tooling to render explainable diagnostic predictions for healthcare professionals."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning", "Computer Vision", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/ravikiran322/Ai_powered_pneumonia_diagnosis"
  },
  {
    id: "diabetes-analysis",
    title: "Diabetes Risk Prediction & Clinical Analysis",
    subtitle: "Machine Learning Preventive Health Assessment Tool",
    category: "ai",
    featured: false,
    dateRange: "2025",
    metrics: "Interactive Risk Assessment deployed live on Vercel",
    description: "Predictive healthcare intelligence tool that assesses diabetes probability using clinical biometrics, presenting actionable preventative recommendations.",
    highlights: [
      "Trained supervised classification algorithms using Scikit-learn to analyze glycemic biomarkers, BMI, insulin levels, and age metrics.",
      "Built a seamless frontend interface enabling users to input medical parameters and receive immediate risk evaluations with explanatory factors.",
      "Deployed the production risk assessment application live for web access."
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "JavaScript", "Vercel", "Data Visualization"],
    githubUrl: "https://github.com/ravikiran322/diabetes_analysis",
    liveDemoUrl: "https://diabetes-risk.vercel.app"
  },
  {
    id: "women-safety-app",
    title: "Women Safety Emergency Dispatch App",
    subtitle: "Location-Aware Emergency Response & SOS Alert System",
    category: "fullstack",
    featured: false,
    dateRange: "2025",
    metrics: "Instant Geolocation Sharing & Emergency Protocol Triggers",
    description: "Rapid-response personal security application designed for high-stress scenarios with one-touch SOS dispatch, real-time geolocation tracking, and emergency directory access.",
    highlights: [
      "Engineered a responsive, mobile-first web application featuring instantaneous SOS triggering with real-time GPS coordinate broadcasting.",
      "Integrated automated contact dispatch protocols and regional emergency hotline dialers for rapid personal safety intervention.",
      "Deployed to production with high availability on Vercel."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Geolocation API", "Emergency Protocols", "Vercel"],
    githubUrl: "https://github.com/ravikiran322/women-safety-app",
    liveDemoUrl: "https://women-safety-app-one.vercel.app"
  },
  {
    id: "social-media-pph",
    title: "Social Media PPH Platform",
    subtitle: "Interactive Social Networking Web Application",
    category: "fullstack",
    featured: false,
    dateRange: "2025",
    metrics: "Full CRUD, User Authentication & Media Sharing",
    description: "Comprehensive social community application supporting member profiles, multimedia timeline posts, real-time interaction, and comments.",
    highlights: [
      "Engineered complete user authentication and account management with session security and relational schema backing.",
      "Implemented media post creation, image uploads, comment threads, and engagement tracking.",
      "Deployed production build on Vercel with responsive desktop and mobile navigation."
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/ravikiran322/social-media-pph",
    liveDemoUrl: "https://social-media-pph.vercel.app"
  },
  {
    id: "ai2career-platform",
    title: "Ai2career Internship Platform",
    subtitle: "Production-Ready Software & AI/ML Projects Repository",
    category: "fullstack",
    featured: false,
    dateRange: "2025",
    metrics: "Live Tasks, Backend Integrations & Enterprise Builds",
    description: "Curated engineering repository housing enterprise-grade software tasks, API integrations, and machine learning modules built during real-world internship assignments.",
    highlights: [
      "Developed production-ready modules incorporating modern TypeScript architecture, backend services, and AI/ML model inference endpoints.",
      "Engineered clean REST endpoints with structured error handling and strict typing standards.",
      "Established reproducible build configurations and comprehensive documentation."
    ],
    technologies: ["TypeScript", "React", "Node.js", "REST APIs", "AI Integrations"],
    githubUrl: "https://github.com/ravikiran322/Ai2career"
  },
  {
    id: "daylytics-dashboard",
    title: "Daylytics Life & Mood Dashboard",
    subtitle: "Personal Metric Visualizer & Habit Tracker",
    category: "fullstack",
    featured: false,
    dateRange: "2025",
    metrics: "Interactive Charting, Mood Correlation & Habit Streaks",
    description: "Visual life-logging web application helping users track daily habits, mood fluctuations, and productivity metrics through intuitive graphical charts.",
    highlights: [
      "Constructed custom interactive charts visualizing historical mood correlations and daily completion rates.",
      "Implemented persistent client-side data storage and dynamic statistical summaries.",
      "Designed a clean, distraction-free aesthetic with smooth micro-interactions."
    ],
    technologies: ["React", "Chart.js", "CSS3", "JavaScript", "Analytics"],
    githubUrl: "https://github.com/ravikiran322/daylytics"
  },
  {
    id: "grama-khata",
    title: "Grama-Khata Android Application",
    subtitle: "Native Android Citizen Ledger & Account Management",
    category: "mobile",
    featured: false,
    dateRange: "2026",
    metrics: "Native Kotlin Architecture with Local Database Storage",
    description: "Android application designed for rural and municipal administration to record citizen records, property ledgers, and transactions.",
    highlights: [
      "Developed native Android interface using Kotlin and Material Design principles.",
      "Architected local storage persistence with Room database and reactive UI observers.",
      "Aligned with internship experience at Mind Matrix in mobile development."
    ],
    technologies: ["Kotlin", "Android SDK", "Room DB", "Material Design", "Mobile Architecture"],
    githubUrl: "https://github.com/ravikiran322/Grama-Khata"
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    subtitle: "Modern Responsive Showcase & Interactive Hub",
    category: "fullstack",
    featured: false,
    dateRange: "May 2025 – July 2025",
    metrics: "Vite + React 19 + Tailwind CSS + Interactive Tools",
    description: "High-performance portfolio website built with modern UI/UX principles, project filtering, live GitHub repository explorer, and interactive resume viewer.",
    highlights: [
      "Built reusable React components with TypeScript and Tailwind CSS, implementing responsive layouts and smooth navigation.",
      "Integrated project demos, GitHub API sync, downloadable and printable resume, and contact flow.",
      "Optimized for 100% lighthouse performance, accessibility, and SEO."
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Motion"],
    githubUrl: "https://github.com/ravikiran322/portfolio",
    liveDemoUrl: "https://ravikiran1portfolio.com"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Vijaya Vittala Institute of Technology",
    location: "Bengaluru, Karnataka",
    score: "9.05",
    scoreType: "CGPA (out of 10.0)",
    details: "Focus on Computer Science fundamentals: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Machine Learning. Consistently ranked top of the department with an outstanding 9.05 CGPA."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "New Cambridge English School",
    location: "Bengaluru, Karnataka",
    score: "91%",
    scoreType: "Distinction",
    details: "Graduated with 91% distinction, demonstrating early excellence in Mathematics, Science, and Analytical Studies."
  }
];

export const AWARDS: Award[] = [
  {
    title: "Best Intern Award",
    issuer: "Yugayatra Retail OPC private limited",
    year: "2025",
    description: "Recognized for outstanding engineering performance, technical problem solving, and high-impact backend contributions — specifically reducing API latency by 45%.",
    badgeType: "award"
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) Certification",
    issuer: "Oracle",
    year: "2025",
    description: "Certified proficiency in cloud architecture principles, compute instances, networking, security policies, storage solutions, and distributed cloud computing.",
    badgeType: "certification"
  },
  {
    title: "Data Structures & Algorithms Mastery",
    issuer: "Competitive Coding Platforms",
    year: "Ongoing",
    description: "Solved extensive complex problem sets across multiple algorithmic platforms, establishing deep proficiency in algorithmic efficiency and memory optimization.",
    badgeType: "dsa"
  }
];

export const STATIC_REPOS: GitHubRepoItem[] = [
  {
    name: "organopredict",
    description: "Crop market price prediction along with organo products - 140+ crops, 50+ markets, Chart.js & Supabase.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/organopredict",
    homepage: null
  },
  {
    name: "resume-screening-agent",
    description: "AI-powered recruitment application using Python and Streamlit to parse, analyze, and rank candidate resumes using NLP and TF-IDF.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/resume-screening-agent",
    homepage: "https://resume-screening-agent-vj74svf7birmzpx72zyhyp.streamlit.app/"
  },
  {
    name: "Ai_powered_pneumonia_diagnosis",
    description: "Deep learning image classification model for chest X-ray pneumonia detection built with CNN, Python and TensorFlow.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/Ai_powered_pneumonia_diagnosis",
    homepage: null
  },
  {
    name: "diabetes_analysis",
    description: "Predictive machine learning web application assessing diabetes risk factors with clinical parameters.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/diabetes_analysis",
    homepage: "https://diabetes-risk.vercel.app"
  },
  {
    name: "women-safety-app",
    description: "Emergency location-sharing and SOS alert web application for personal safety and hotline dispatch.",
    language: "HTML / JS",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/women-safety-app",
    homepage: "https://women-safety-app-one.vercel.app"
  },
  {
    name: "social-media-pph",
    description: "Full-stack social media application featuring feeds, user auth, comment threads, and engagement tracking.",
    language: "PHP",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/social-media-pph",
    homepage: "https://social-media-pph.vercel.app"
  },
  {
    name: "Ai2career",
    description: "Production-ready software development and AI/ML internship repository featuring live tasks and backend integrations.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/Ai2career",
    homepage: null
  },
  {
    name: "AI_interview_agent",
    description: "Intelligent interview preparation and candidate assessment agent built with Python.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/AI_interview_agent",
    homepage: null
  },
  {
    name: "daylytics",
    description: "Life analytics dashboard with interactive charts, mood correlations, and habit streak trackers.",
    language: "CSS / React",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/daylytics",
    homepage: null
  },
  {
    name: "Grama-Khata",
    description: "Native Android application for citizen ledger management, municipal accounting, and offline records.",
    language: "Kotlin",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/Grama-Khata",
    homepage: null
  },
  {
    name: "Dreamcare",
    description: "Skin wellness AI analyzer providing tailored advice and routine suggestions.",
    language: "HTML / JS",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/Dreamcare",
    homepage: null
  },
  {
    name: "portfolio",
    description: "Personal developer portfolio website showcasing projects, skills, and certifications.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran322/portfolio",
    homepage: "https://ravikiran1portfolio.com"
  }
];
