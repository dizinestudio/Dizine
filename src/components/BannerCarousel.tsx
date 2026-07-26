import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import brightStudioBanner from '../assets/images/bright_design_studio_1785073751953.jpg';
import brightTechCodeBanner from '../assets/images/bright_tech_code_1785073766426.jpg';
import brightCloudSeoBanner from '../assets/images/bright_cloud_seo_1785073781718.jpg';
import logoImage from '../assets/images/dizine_studio_logo_1785072513119.jpg';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Flame, 
  Pause, 
  Play,
  ShieldCheck,
  Zap
} from 'lucide-react';

export interface BannerSlide {
  id: string;
  image: string;
  badge: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaAction: 'ai' | 'contact' | 'services' | 'portfolio';
  secondaryCtaText: string;
  secondaryCtaAction: 'phone' | 'whatsapp' | 'contact' | 'portfolio';
}

const DEFAULT_SLIDES: BannerSlide[] = [
  {
    id: 'slide-1',
    image: brightStudioBanner,
    badge: 'Premier IT Agency • Sadar Bazaar, Jhansi HQ',
    title: 'Crafting Sub-Second Web Platforms & Custom Digital Branding',
    highlightText: 'Sub-Second',
    subtitle: 'Website Design, React 19 Development, NVMe Cloud Hosting, and ROI-focused SEO built for growth.',
    primaryCtaText: 'Build AI Scope Now',
    primaryCtaAction: 'ai',
    secondaryCtaText: 'Contact Office (+91 95555 65806)',
    secondaryCtaAction: 'phone'
  },
  {
    id: 'slide-2',
    image: brightTechCodeBanner,
    badge: 'Custom UI/UX & React Node Engineering',
    title: 'Scalable Enterprise Code & High-Converting Digital Interfaces',
    highlightText: 'Scalable Enterprise',
    subtitle: 'Figma wireframing, luxury dark/light aesthetics, micro-interactions, and 100% responsive design.',
    primaryCtaText: 'Explore All 6 Services',
    primaryCtaAction: 'services',
    secondaryCtaText: 'View Success Case Studies',
    secondaryCtaAction: 'portfolio'
  },
  {
    id: 'slide-3',
    image: brightCloudSeoBanner,
    badge: 'NVMe Cloud Infrastructure & SEO Ranking',
    title: 'Sub-400ms DOM Render Speed & Guaranteed Google Page 1 SEO',
    highlightText: 'Sub-400ms Speed',
    subtitle: 'Secure NVMe hosting, automated DDoS protection, and data-backed ROAS marketing campaigns.',
    primaryCtaText: 'Get Direct Quote',
    primaryCtaAction: 'contact',
    secondaryCtaText: 'WhatsApp +91 95555 65806',
    secondaryCtaAction: 'whatsapp'
  }
];

interface BannerCarouselProps {
  onNavigate: (page: Page) => void;
  onOpenAIConsultant: () => void;
  customSlides?: BannerSlide[];
  compact?: boolean;
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({
  onNavigate,
  onOpenAIConsultant,
  customSlides,
  compact = false
}) => {
  const slides = customSlides || DEFAULT_SLIDES;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndexNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const setCurrentIndexNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const setCurrentIndexPrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlideIndex];

  const handlePrimaryClick = (action: BannerSlide['primaryCtaAction']) => {
    if (action === 'ai') onOpenAIConsultant();
    else if (action === 'contact') onNavigate('contact');
    else if (action === 'services') onNavigate('services');
    else if (action === 'portfolio') onNavigate('portfolio');
  };

  const handleSecondaryClick = (action: BannerSlide['secondaryCtaAction']) => {
    if (action === 'phone') window.location.href = `tel:${COMPANY_INFO.phone}`;
    else if (action === 'whatsapp') window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Dizine%20Studio`, '_blank');
    else if (action === 'contact') onNavigate('contact');
    else if (action === 'portfolio') onNavigate('portfolio');
  };

  return (
    <section 
      className="relative w-full bg-slate-950 overflow-hidden border-b border-slate-800/80"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Scrolling Images Slider */}
      <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px]">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Image with zoom effect */}
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-10000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              
              {/* Gradient overlays for contrast and image clarity */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
            </div>
          );
        })}

        {/* Banner Content Container Overlaid */}
        <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-8">
          <div className="max-w-3xl space-y-5">
            
            {/* Top Logo & Location Header Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-950/90 border border-amber-500/40 shadow-lg backdrop-blur-md">
                <img
                  src={logoImage}
                  alt="Dizine Studio Logo"
                  className="w-6 h-6 rounded-md object-cover"
                />
                <span className="text-xs font-black text-amber-400">DIZINE STUDIO</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                <span>{activeSlide.badge}</span>
              </div>
            </div>

            {/* Slide Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] shadow-sm">
              {activeSlide.title}
            </h1>

            {/* Slide Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {activeSlide.subtitle}
            </p>

            {/* Address & Quick Contacts Strip */}
            <div className="inline-flex flex-wrap items-center gap-3 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Sadar Bazaar, Jhansi, UP</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-bold text-white">
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handlePrimaryClick(activeSlide.primaryCtaAction)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:opacity-95 text-slate-950 font-extrabold text-xs transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2"
              >
                <span>{activeSlide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleSecondaryClick(activeSlide.secondaryCtaAction)}
                className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-700/80 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>{activeSlide.secondaryCtaText}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Carousel Controls & Indicators Overlaid at Bottom Right */}
        <div className="absolute bottom-6 right-4 sm:right-8 z-30 flex items-center gap-3 bg-slate-950/80 backdrop-blur-md p-2 rounded-2xl border border-slate-800">
          
          {/* Play/Pause Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors"
            title={isAutoPlaying ? "Pause slide scroll" : "Play slide scroll"}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-1.5 px-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlideIndex === i ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Jump to banner image ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
            <button
              onClick={setCurrentIndexPrev}
              className="p-1.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
              aria-label="Previous Banner Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={setCurrentIndexNext}
              className="p-1.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
              aria-label="Next Banner Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
