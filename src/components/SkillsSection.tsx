import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Server,
  Cloud,
  Wrench,
  Search,
  Sparkles,
  CheckCircle,
  Filter
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="w-4 h-4 text-amber-400" />,
  "AI & Machine Learning": <Cpu className="w-4 h-4 text-teal-400" />,
  "Backend & API Engineering": <Server className="w-4 h-4 text-emerald-400" />,
  "Databases & Storage": <Database className="w-4 h-4 text-cyan-400" />,
  "Frontend Engineering": <Globe className="w-4 h-4 text-blue-400" />,
  "Cloud, DevOps & Engineering": <Cloud className="w-4 h-4 text-purple-400" />,
  "Developer Tools & Soft Skills": <Wrench className="w-4 h-4 text-rose-400" />
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      // Check category match
      const categoryMatch = activeCategory === 'All' || cat.title === activeCategory;
      if (!categoryMatch) return null;

      // Filter individual skills by search query
      const filteredSkills = cat.skills.filter((skill) =>
        searchQuery.trim() === ''
          ? true
          : skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredSkills.length === 0) return null;

      return {
        ...cat,
        skills: filteredSkills
      };
    }).filter(Boolean);
  }, [activeCategory, searchQuery]);

  const allCategoryNames = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const totalSkillCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/60 text-teal-300 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY ({totalSkillCount} VERIFIED SKILLS)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-teal-400">Technology Stack</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Detailed breakdown of languages, AI/ML tools, frameworks, and cloud systems documented
            in Ravi's resume and demonstrated across production environments.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., Python, RAG, Docker)..."
              className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Category Tabs for Desktop / Horizontal Scroll for Mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === 'All'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.title
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            if (!cat) return null;
            return (
              <div
                key={cat.title}
                className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-slate-850 border border-slate-800 shrink-0">
                      {categoryIcons[cat.title] || <Cpu className="w-4 h-4 text-teal-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-teal-950/80 text-teal-300 border border-teal-700/60 shadow-sm shadow-teal-950'
                            : 'bg-slate-950/70 text-slate-300 border border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-teal-400 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span
                            className={`text-[9px] px-1 rounded font-mono ${
                              skill.level === 'Advanced'
                                ? 'bg-teal-500/20 text-teal-300'
                                : skill.level === 'Proficient'
                                ? 'bg-slate-800 text-slate-400'
                                : 'bg-slate-850 text-slate-500'
                            }`}
                          >
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-teal-400/80 group-hover:text-teal-300">Verified Resume Item</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search returned no results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-3 px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-medium rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
