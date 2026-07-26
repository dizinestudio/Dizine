import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/companyData';
import { Testimonial } from '../types';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Pause,
  Play
} from 'lucide-react';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = TESTIMONIALS_DATA;

  // Auto advance every 5 seconds if enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial: Testimonial = testimonials[currentIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Client Satisfaction & Feedback</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Trusted by Visionary Leaders & Brands
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Read real reviews and client feedback on our website design, website development, graphics branding, NVMe cloud hosting, and digital marketing performance.
        </p>
      </div>

      {/* Main Carousel Card */}
      <div 
        className="relative bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl overflow-hidden group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Client Avatar & Metadata */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-xl shadow-amber-500/10 bg-slate-950">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.clientName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-slate-950 border border-emerald-500/40 text-emerald-400 shadow-md">
                <CheckCircle2 className="w-5 h-5 fill-emerald-500/20" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="text-xl font-extrabold text-white">{activeTestimonial.clientName}</h3>
              <p className="text-xs font-bold text-amber-400">{activeTestimonial.role}</p>
              <p className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-1">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{activeTestimonial.company}</span>
              </p>
            </div>

            {activeTestimonial.projectType && (
              <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-cyan-300 text-[11px] font-extrabold">
                {activeTestimonial.projectType}
              </span>
            )}
          </div>

          {/* Right Column: Quote & Testimonial Content */}
          <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <Quote className="w-10 h-10 text-amber-500/30" />
              <p className="text-slate-200 text-base sm:text-lg italic font-medium leading-relaxed sm:leading-loose">
                "{activeTestimonial.comment}"
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              
              {/* Slide Indicators / Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-amber-400'
                        : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons & Autoplay Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500/40 transition-colors"
                  title={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Testimonial Thumbnail Quick Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {testimonials.map((item, idx) => {
          const isActive = currentIndex === idx;
          return (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                isActive
                  ? 'bg-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/80 text-slate-400'
              }`}
            >
              <img
                src={item.avatar}
                alt={item.clientName}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0"
              />
              <div className="overflow-hidden">
                <h4 className={`text-xs font-bold truncate ${isActive ? 'text-amber-400' : 'text-white'}`}>
                  {item.clientName}
                </h4>
                <p className="text-[10px] text-slate-500 truncate">{item.company}</p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
