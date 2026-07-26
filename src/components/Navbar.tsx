import React, { useState } from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import logoImage from '../assets/images/dizine_studio_logo_1785072513119.jpg';
import { 
  Sparkles, 
  Menu, 
  X, 
  PhoneCall, 
  ChevronRight,
  Code2,
  Palette,
  Search,
  Server,
  TrendingUp,
  PenTool,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenAIConsultant: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAIConsultant,
  theme = 'dark',
  onToggleTheme = () => {}
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'services', label: 'Services' },
    { page: 'portfolio', label: 'Portfolio' },
    { page: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl transition-all">
      {/* Top micro-bar */}
      <div className="bg-gradient-to-r from-slate-900 via-violet-950/70 to-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Now Accepting New IT Projects 2026
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">⚡ 99.98% SLA Server Uptime</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-300"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hover:text-cyan-400 transition-colors text-slate-400 hidden sm:inline"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-500/40 group-hover:border-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20 bg-slate-900 flex-shrink-0">
              <img
                src={logoImage}
                alt="Dizine Studio Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-white tracking-wide group-hover:text-amber-400 transition-colors">
                  DIZINE
                </span>
                <span className="text-xl font-light text-cyan-400 tracking-wider">
                  STUDIO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-amber-400 hover:text-amber-300 hover:border-amber-400/50 transition-all flex items-center justify-center shadow-md group cursor-pointer"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            <button
              onClick={onOpenAIConsultant}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950 animate-pulse" />
              <span className="text-slate-950 font-extrabold tracking-wide">AI Scope Builder</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-1.5"
            >
              <span>Get Proposal</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 text-xs font-bold flex items-center justify-center"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={onOpenAIConsultant}
              className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all text-left ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIConsultant();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Scope & Cost Estimator</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 font-bold text-sm"
            >
              <span>Contact Dizine Studio</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
