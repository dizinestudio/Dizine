import React, { useState } from 'react';
import { Page, ServiceItem } from '../types';
import { SERVICES_DATA, PRICING_DATA } from '../data/companyData';
import { BannerCarousel } from '../components/BannerCarousel';
import { 
  Sparkles, 
  Palette, 
  Code2, 
  PenTool, 
  Server, 
  TrendingUp, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Check, 
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onOpenAIConsultant: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenAIConsultant,
  onSelectService
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.id === activeTab);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-8 h-8 text-amber-400" />;
      case 'Code2': return <Code2 className="w-8 h-8 text-cyan-400" />;
      case 'PenTool': return <PenTool className="w-8 h-8 text-violet-400" />;
      case 'Server': return <Server className="w-8 h-8 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-rose-400" />;
      case 'Search': return <Search className="w-8 h-8 text-blue-400" />;
      default: return <Sparkles className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. SCROLLING BANNER IMAGES CAROUSEL */}
      <BannerCarousel
        onNavigate={onNavigate}
        onOpenAIConsultant={onOpenAIConsultant}
      />

      {/* 2. SERVICES NAV TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
            }`}
          >
            All 6 Core Expertise Areas
          </button>
          {SERVICES_DATA.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === s.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </section>

      {/* 3. DETAILED SERVICE CARDS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-slate-800 hover:border-amber-500/30 transition-all shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Service Visual */}
            <div className="lg:col-span-5 relative group rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800">
                {getServiceIcon(service.iconName)}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                  {service.badge}
                </span>
                <span className="text-xs text-slate-500">Starting at <strong className="text-white font-bold">{service.pricingStarting}</strong></span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {service.title}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {service.fullDesc}
              </p>

              {/* Features Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">Key Capabilities Included:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Tech Chips */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">Tech Stack & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-[11px] font-bold border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenAIConsultant}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Estimate AI Cost Scope</span>
                </button>
              </div>

            </div>

          </div>
        ))}
      </section>

      {/* 4. PROCESS WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">How We Execute</span>
          <h2 className="text-3xl font-extrabold text-white">Our 5-Step Project Blueprint</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Discovery", desc: "Analyzing requirements, target audience, and project goals." },
            { step: "02", title: "UI/UX Design", desc: "Figma wireframes, color systems, and micro-interactions." },
            { step: "03", title: "Clean Code", desc: "Writing React 19, Node.js, and responsive Tailwind CSS." },
            { step: "04", title: "Speed & QA Audit", desc: "Sub-400ms load testing and security penetration audit." },
            { step: "05", title: "NVMe Cloud Launch", desc: "Live deployment, SSL configuration, and 24/7 SLA monitoring." }
          ].map((proc) => (
            <div key={proc.step} className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2 relative">
              <span className="text-2xl font-black text-amber-400 block">{proc.step}</span>
              <h4 className="text-sm font-bold text-white">{proc.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRANSPARENT PRICING PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Transparent Investment</span>
          <h2 className="text-3xl font-extrabold text-white">Popular Pricing Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_DATA.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-slate-900 via-violet-950/40 to-slate-900 border-amber-500/50 shadow-2xl shadow-amber-500/10 scale-105'
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{plan.description}</p>
                </div>

                <div className="py-2 border-y border-slate-800">
                  <span className="text-3xl font-black text-amber-400">{plan.price}</span>
                  <span className="text-xs text-slate-500 ml-1">/ {plan.billingPeriod}</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-xl font-extrabold text-xs transition-all ${
                    plan.popular
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
