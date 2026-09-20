import React, { useState, useEffect, useMemo } from 'react';
import { STATIC_REPOS, PERSONAL_INFO } from '../data/portfolioData';
import { GitHubRepoItem } from '../types';
import {
  Github,
  GitFork,
  Star,
  ExternalLink,
  Search,
  Code2,
  RefreshCw,
  FolderGit2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const GitHubExplorer: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepoItem[]>(STATIC_REPOS);
  const [loading, setLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLiveFetched, setIsLiveFetched] = useState(false);

  useEffect(() => {
    fetchLiveRepos();
  }, []);

  const fetchLiveRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.github.com/users/ravikiran322/repos?per_page=100&sort=updated');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const mapped: GitHubRepoItem[] = data.map((item: any) => ({
            name: item.name,
            description: item.description,
            language: item.language,
            stars: item.stargazers_count,
            forks: item.forks_count,
            url: item.html_url,
            homepage: item.homepage
          }));
          setRepos(mapped);
          setIsLiveFetched(true);
        }
      }
    } catch (err) {
      // Gracefully fall back to verified static repos
      console.warn('Using static repository cache:', err);
    } finally {
      setLoading(false);
    }
  };

  const availableLanguages = useMemo(() => {
    const langs = new Set<string>();
    repos.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return ['All', ...Array.from(langs)];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchLang = selectedLang === 'All' || repo.language === selectedLang;
      const matchSearch =
        searchQuery.trim() === '' ||
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchLang && matchSearch;
    });
  }, [repos, selectedLang, searchQuery]);

  return (
    <section id="github" className="py-20 relative bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/60 text-teal-300 text-xs font-mono font-medium mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORY BROWSER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub <span className="text-teal-400">Repositories</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Live and verified code repositories from{' '}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline font-mono"
            >
              github.com/ravikiran322
            </a>
            .
          </p>
        </div>

        {/* Profile Card Banner */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt="ravikiran322"
              className="w-14 h-14 rounded-2xl border-2 border-teal-500/60 shadow-md object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://ui-avatars.com/api/?name=Ravi+Kiran&background=0f766e&color=ffffff';
              }}
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-white">Ravi Kiran</h3>
                <span className="text-xs font-mono text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                  @ravikiran322
                </span>
                {isLiveFetched && (
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-800 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live API Synced
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                Full Stack Developer & AI/ML Engineer • 24+ Public Repositories • Python, TypeScript, C++, AWS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={fetchLiveRepos}
              disabled={loading}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors disabled:opacity-50"
              title="Refresh from GitHub API"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-teal-400 ${loading ? 'animate-spin' : ''}`} />
              <span>Sync Repos</span>
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl flex items-center gap-1.5 transition-colors shadow-md"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repositories..."
              className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl pl-10 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none"
            />
          </div>

          {/* Languages tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedLang === lang
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRepos.map((repo) => (
            <div
              key={repo.name}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between transition-all group shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors truncate max-w-[200px]"
                      title={repo.name}
                    >
                      {repo.name}
                    </a>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4 min-h-[3rem]">
                  {repo.description || 'Public software engineering repository and code assets.'}
                </p>
              </div>

              <div>
                {/* Meta info & direct links */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-teal-400 hover:underline"
                        title="Live Deployment"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      title="Open in GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No repositories found matching your filter.</p>
            <button
              onClick={() => {
                setSelectedLang('All');
                setSearchQuery('');
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
