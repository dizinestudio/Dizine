import React, { useState } from 'react';
import { Page, PortfolioItem } from '../types';
import { PORTFOLIO_DATA } from '../data/companyData';
import { BannerCarousel } from '../components/BannerCarousel';
import { Sparkles, Search, Trophy, ExternalLink, ChevronRight } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: Page) => void;
  onOpenAIConsultant: () => void;
  onSelectProject: (project: PortfolioItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenAIConsultant,
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Website Development' },
    { id: 'web-design', label: 'Website Design (UI/UX)' },
    { id: 'graphics', label: 'Graphics Designing' },
    { id: 'hosting', label: 'Hosting Service' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'seo', label: 'SEO Optimization' }
  ];

  const filteredProjects = PORTFOLIO_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. SCROLLING BANNER IMAGES CAROUSEL */}
      <BannerCarousel
        onNavigate={onNavigate}
        onOpenAIConsultant={onOpenAIConsultant}
      />

      {/* 2. SEARCH & CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by client, title, or keywords..."
            className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === c.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

      </section>

      {/* 3. PORTFOLIO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900 rounded-3xl border border-slate-800 space-y-3">
            <h3 className="text-lg font-bold text-white">No projects found matching query</h3>
            <p className="text-xs text-slate-400">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-slate-800 text-amber-400 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group shadow-2xl"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-bold">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 text-slate-300 text-[11px] font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                      Client: {project.client}
                    </span>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Benchmark Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-950 p-2 rounded-lg text-center">
                        <span className="text-sm font-black text-emerald-400 block">{m.value}</span>
                        <span className="text-[10px] text-slate-500 block truncate">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techUsed.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-400 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-amber-400">
                    <span>Inspect Case Study & Results</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* 4. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-violet-950/60 to-slate-900 p-8 rounded-3xl border border-amber-500/20 text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-white">Want your project featured in our next success story?</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Get in touch with Dizine Studio or use our AI Project Scope Builder to estimate project duration and deliverables.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={onOpenAIConsultant}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md"
            >
              Build AI Scope Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-slate-800 text-white font-bold text-xs border border-slate-700"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
