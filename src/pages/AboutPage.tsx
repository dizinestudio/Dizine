import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO, TEAM_DATA } from '../data/companyData';
import logoImage from '../assets/images/dizine_studio_logo_1785072513119.jpg';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { BannerCarousel } from '../components/BannerCarousel';
import { 
  Sparkles, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  Users, 
  Zap, 
  Code2, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  MapPin
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
  onOpenAIConsultant: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenAIConsultant }) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. SCROLLING BANNER IMAGES CAROUSEL */}
      <BannerCarousel
        onNavigate={onNavigate}
        onOpenAIConsultant={onOpenAIConsultant}
      />

      {/* 2. VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To empower startups, SMEs, and enterprise brands by crafting intuitive website designs, robust web development, striking graphic branding, NVMe cloud hosting, and data-backed digital marketing.
            </p>
          </div>

          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To be the most trusted full-service IT technology partner recognized for sub-second web performance, modern AI-driven solutions, and transparent, measurable client growth.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Foundation</span>
          <h2 className="text-3xl font-extrabold text-white">The Dizine Studio Standard</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6 text-amber-400" />,
              title: "Sub-Second Speed",
              desc: "Every codebase is written for lightning-fast DOM render and Google PageSpeed 95+ performance."
            },
            {
              icon: <Award className="w-6 h-6 text-cyan-400" />,
              title: "Pixel-Perfect UI",
              desc: "Combining luxury aesthetics, micro-interactions, and responsive mobile-first typography."
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
              title: "Uncompromising Security",
              desc: "ISO 27001 guidelines, automated SSL, DDoS firewalls, and clean sanitized code paths."
            },
            {
              icon: <Globe className="w-6 h-6 text-violet-400" />,
              title: "Global Reach",
              desc: "Serving 65+ happy clients across India, USA, UAE, Europe, and Southeast Asia."
            }
          ].map((pillar, idx) => (
            <div key={idx} className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3 shadow-lg">
              <div className="p-3 rounded-xl bg-slate-950 w-fit">{pillar.icon}</div>
              <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COMPANY TIMELINE / MILESTONES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Growth Journey</span>
          <h2 className="text-3xl font-extrabold text-white">Milestones Over the Years</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { year: "2020", title: "Inception", desc: "Founded Dizine Studio as a specialized Web Design & Graphics agency in New Delhi." },
            { year: "2022", title: "Fullstack Expansion", desc: "Expanded into enterprise React/Node web app development and NVMe cloud hosting." },
            { year: "2024", title: "Digital Marketing & SEO", desc: "Launched dedicated SEO and performance marketing division for ROAS optimization." },
            { year: "2026", title: "AI-Integrated Solutions", desc: "Crossed 180+ successful projects with AI-driven scope tools and cloud operations." }
          ].map((m, idx) => (
            <div key={idx} className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2 relative">
              <span className="text-3xl font-black text-amber-400 block">{m.year}</span>
              <h4 className="text-base font-bold text-white">{m.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM MEMBERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Leadership & Experts</span>
          <h2 className="text-3xl font-extrabold text-white">Meet Our Core Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_DATA.map((member) => (
            <div key={member.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 space-y-4 shadow-xl">
              <div className="h-60 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-base font-extrabold text-white">{member.name}</h3>
                  <span className="text-xs font-bold text-amber-400 block">{member.role}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {member.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS CAROUSEL */}
      <TestimonialsCarousel />

      {/* 7. TECHNOLOGY STACK MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
            <Code2 className="w-4 h-4" />
            <span>Tech Stack Mastery</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">Frameworks & Tools We Work With</h2>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {[
              "React 19", "TypeScript", "Node.js", "Express.js", "Next.js", "Tailwind CSS",
              "Figma", "Adobe Illustrator", "Photoshop", "Blender 3D", "AWS Cloud",
              "DigitalOcean", "Docker", "Cloudflare", "MongoDB", "PostgreSQL",
              "Semrush", "Google Analytics 4", "Meta Ads Suite"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold hover:border-amber-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Have a specific idea or requirement in mind?</h3>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg"
        >
          Contact Our Team Today
        </button>
      </section>

    </div>
  );
};
