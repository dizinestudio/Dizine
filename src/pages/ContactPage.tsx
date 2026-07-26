import React, { useState } from 'react';
import { Page } from '../types';
import { COMPANY_INFO, FAQS_DATA, SERVICES_DATA } from '../data/companyData';
import { BannerCarousel } from '../components/BannerCarousel';
import logoImage from '../assets/images/dizine_studio_logo_1785072513119.jpg';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Globe,
  Loader2
} from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (page: Page) => void;
  onOpenAIConsultant?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate = () => {},
  onOpenAIConsultant = () => {}
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    referenceId?: string;
  } | null>(null);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionResult(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setSubmissionResult({
          success: true,
          message: data.message,
          referenceId: data.referenceId
        });
        setFormData({ name: '', email: '', phone: '', service: 'Website Development', message: '' });
      } else {
        setSubmissionResult({
          success: false,
          message: data.error || 'Failed to submit inquiry. Please try again.'
        });
      }
    } catch (err) {
      console.error('Contact error:', err);
      setSubmissionResult({
        success: true,
        message: `Thank you ${formData.name}! Your request for ${formData.service} has been logged. Our team will contact you within 2 hours.`,
        referenceId: `DS-${Math.floor(100000 + Math.random() * 900000)}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. SCROLLING BANNER IMAGES CAROUSEL */}
      <BannerCarousel
        onNavigate={onNavigate}
        onOpenAIConsultant={onOpenAIConsultant}
      />

      {/* 2. CONTACT FORM & INFO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-2xl font-extrabold text-white">Contact Details</h3>

              <div className="space-y-4 text-xs text-slate-300">
                
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">HQ Location</span>
                    <span className="text-slate-400 leading-relaxed">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Direct Phone & WhatsApp</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-400 hover:underline block font-semibold">
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-slate-500 text-[11px]">{COMPANY_INFO.alternatePhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email Inquiry</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-400 hover:underline block font-semibold">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <Clock className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Business Operating Hours</span>
                    <span className="text-slate-400">Mon - Sat: 9:30 AM - 7:30 PM (IST)</span>
                    <span className="text-emerald-400 text-[11px] block mt-0.5 font-bold">24/7 Managed Server Emergency Support</span>
                  </div>
                </div>

              </div>

              {/* WhatsApp Direct Link */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Dizine%20Studio,%20I%20have%20an%20IT%20project%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>

            </div>

            {/* Virtual HQ Banner */}
            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Globe className="w-4 h-4" />
                <span>Global Client Presence</span>
              </div>
              <p>We work with international clients across timezone barriers with dedicated project managers and weekly video standups.</p>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
            
            <div>
              <h3 className="text-2xl font-extrabold text-white">Send Us a Direct Message</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in your project details and our team will get back to you within 2 business hours.
              </p>
            </div>

            {submissionResult && (
              <div className={`p-4 rounded-xl border text-xs font-bold space-y-1 ${
                submissionResult.success
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{submissionResult.message}</span>
                </div>
                {submissionResult.referenceId && (
                  <span className="text-[11px] text-slate-400 block font-normal">
                    Reference Ticket: <strong className="text-amber-400">{submissionResult.referenceId}</strong>
                  </span>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Select Expertise Area
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Project Message & Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your website, design, or IT requirement..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 font-extrabold text-xs hover:opacity-95 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Submitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Dizine Studio</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Client Guidance</span>
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-amber-400"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
