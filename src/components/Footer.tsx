import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import logoImage from '../assets/images/dizine_studio_logo_1785072513119.jpg';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Globe, 
  CheckCircle2 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenAIConsultant: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAIConsultant }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow ambient */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-violet-950/80 to-slate-900 rounded-2xl p-8 border border-amber-500/20 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant AI Project Blueprint</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">Ready to elevate your IT & Web presence?</h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Get an instant AI-generated scope, tech stack suggestion, and cost estimate for your project in under 60 seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAIConsultant}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Build AI Scope Now</span>
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
            >
              Contact Team
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-500/40 shadow-lg shadow-amber-500/20 bg-slate-900 flex-shrink-0">
                <img
                  src={logoImage}
                  alt="Dizine Studio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-wide">DIZINE </span>
                <span className="text-2xl font-light text-cyan-400">STUDIO</span>
                <p className="text-[10px] text-slate-400 tracking-widest font-semibold uppercase">{COMPANY_INFO.tagline}</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.name} is a full-service IT & Digital Solutions company providing end-to-end Website Design, Website Development, Graphics Designing, High-Speed NVMe Hosting, Digital Marketing, and SEO Optimization.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified SSL & ISO 27001 Security Standard Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Serving Clients in India, USA, UAE & Europe</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-amber-400">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { page: 'home', label: 'Home Page' },
                { page: 'about', label: 'About Us' },
                { page: 'services', label: 'Services Overview' },
                { page: 'portfolio', label: 'Case Studies & Portfolio' },
                { page: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      onNavigate(link.page as Page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 group text-left"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Expertise */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-cyan-400">Key Expertise</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">{srv.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-amber-400">Contact Studio</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Designed & Developed with High-Performance Tech.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Fast Loading • Responsive Mobile • AI-Powered</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
