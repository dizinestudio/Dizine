import React, { useState } from 'react';
import { Page, PortfolioItem, ServiceItem } from '../types';
import { COMPANY_INFO, SERVICES_DATA, PORTFOLIO_DATA, TESTIMONIALS_DATA } from '../data/companyData';
import logoImage from '../assets/images/dizine_studio_logo_1785072513119.jpg';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { BannerCarousel } from '../components/BannerCarousel';
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Palette, 
  Search, 
  Server, 
  TrendingUp, 
  PenTool, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Trophy, 
  Star, 
  ChevronRight,
  ExternalLink,
  PhoneCall,
  Flame,
  MapPin,
  Mail
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenAIConsultant: () => void;
  onSelectProject: (project: PortfolioItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAIConsultant,
  onSelectProject,
  onSelectService
}) => {
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] = useState<string>('all');

  const filteredPortfolio = selectedPortfolioCategory === 'all'
    ? PORTFOLIO_DATA.slice(0, 4)
    : PORTFOLIO_DATA.filter(p => p.category === selectedPortfolioCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-6 h-6 text-amber-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-violet-400" />;
      case 'Server': return <Server className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-rose-400" />;
      case 'Search': return <Search className="w-6 h-6 text-blue-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. SCROLLING BANNER IMAGES CAROUSEL */}
      <BannerCarousel
        onNavigate={onNavigate}
        onOpenAIConsultant={onOpenAIConsultant}
      />

      {/* Trust Badges Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="font-semibold">180+ Web Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">99.98% SLA Server Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold">Sub-400ms Speed Benchmark</span>
          </div>
        </div>
      </div>

      {/* 2. STATS COUNTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl">
          {[
            { label: "Completed Projects", value: COMPANY_INFO.stats.projectsCompleted, highlight: "text-amber-400" },
            { label: "Active Global Clients", value: COMPANY_INFO.stats.activeClients, highlight: "text-cyan-400" },
            { label: "Server SLA Uptime", value: COMPANY_INFO.stats.serverUptime, highlight: "text-emerald-400" },
            { label: "Client Satisfaction", value: COMPANY_INFO.stats.clientSatisfaction, highlight: "text-violet-400" }
          ].map((stat, idx) => (
            <div key={idx} className="p-4 text-center border-r last:border-r-0 border-slate-800/80 space-y-1">
              <span className={`text-3xl sm:text-4xl font-black ${stat.highlight}`}>{stat.value}</span>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. KEY EXPERTISE SERVICES HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive IT & Digital Solutions under One Roof
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From initial UI wireframes and fullstack web coding to high-speed NVMe hosting and SEO growth funnels, we cover every pillar of digital success.
          </p>
        </div>

        {/* 6 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block">Starting from</span>
                  <span className="text-sm font-extrabold text-white">{service.pricingStarting}</span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all flex items-center gap-1"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 4. INTERACTIVE EMBEDDED AI ESTIMATOR CTA WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-violet-950/80 to-slate-950 rounded-3xl p-8 sm:p-12 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Smart AI Project Assistant</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white">Need a customized proposal for your IT requirement?</h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Use our built-in AI Scope & Cost Estimator to generate a clear technical blueprint, suggested tech stack, timeline, and budget estimate tailored for Dizine Studio services.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                onClick={onOpenAIConsultant}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 font-black text-sm hover:opacity-95 transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-5 h-5 fill-slate-950" />
                <span>Launch AI Scope Builder</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>Proven Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Works & Case Studies
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web-dev', label: 'Web Dev' },
              { id: 'web-design', label: 'UI/UX Design' },
              { id: 'seo', label: 'SEO & Growth' },
              { id: 'graphics', label: 'Branding' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedPortfolioCategory(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedPortfolioCategory === f.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPortfolio.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group shadow-2xl"
            >
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-bold">
                  {project.categoryLabel}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-950 p-2 rounded-lg text-center">
                      <span className="text-sm font-black text-emerald-400 block">{m.value}</span>
                      <span className="text-[10px] text-slate-500 block truncate">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-cyan-400">
                  <span>View Case Study</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-200 font-bold text-xs transition-all"
          >
            View All Case Studies & Projects
          </button>
        </div>

      </section>

      {/* 6. WHY DIZINE STUDIO (ENGINEERING & SPEED PRINCIPLES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
                <span>Engineering Excellence</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">Why Businesses Choose Dizine Studio</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We combine aesthetic perfection with clean coding benchmarks, rapid cloud deployment, and continuous performance auditing.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-amber-400" />,
                  title: "Sub-Second Page Loads",
                  desc: "Optimized React 19 code execution, compressed assets, and CDN edge caching ensure sub-400ms loading speeds."
                },
                {
                  icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
                  title: "100% Mobile Responsive",
                  desc: "Tested across mobile screens, tablets, and ultra-wide desktops to guarantee perfect user experience."
                },
                {
                  icon: <Search className="w-6 h-6 text-emerald-400" />,
                  title: "SEO Schema Architecture",
                  desc: "Pre-configured meta tags, Schema.org entities, and clean semantic DOM trees for fast Google indexing."
                },
                {
                  icon: <Server className="w-6 h-6 text-violet-400" />,
                  title: "24/7 Managed Cloud Support",
                  desc: "Enterprise NVMe cloud hosting with automated SSL renewals, daily backups, and zero downtime."
                }
              ].map((p, idx) => (
                <div key={idx} className="p-5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-900 w-fit">{p.icon}</div>
                  <h4 className="text-base font-bold text-white">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS CAROUSEL */}
      <TestimonialsCarousel />

      {/* 8. FINAL CONTACT CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 rounded-3xl p-8 sm:p-12 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-3xl font-black">Let's Build Something Great Together</h3>
            <p className="text-slate-900 text-sm font-medium max-w-xl">
              Have an IT or Website requirement? Contact Dizine Studio today for a free consultation and project quote.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-xl bg-slate-950 text-white font-extrabold text-sm hover:bg-slate-900 transition-colors shadow-lg"
            >
              Contact Us Now
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-amber-400/30 border border-slate-950/20 text-slate-950 font-bold text-sm hover:bg-amber-400/40 transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
