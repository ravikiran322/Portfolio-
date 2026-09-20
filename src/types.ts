export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'mobile';
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  dateRange: string;
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  status?: string;
  highlights: string[];
  skills: string[];
  award?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period?: string;
  score: string;
  scoreType: string;
  details?: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
  badgeType: 'award' | 'certification' | 'dsa';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Familiar';
    highlight?: boolean;
  }[];
}

export interface GitHubRepoItem {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  homepage: string | null;
}
