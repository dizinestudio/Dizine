import React, { useState } from 'react';
import { AIProposal, Page } from '../types';
import { 
  Sparkles, 
  X, 
  Check, 
  Cpu, 
  Clock, 
  DollarSign, 
  ListCheck, 
  Lightbulb, 
  ArrowRight,
  Code2,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react';

interface AIConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: Page) => void;
}

const SERVICE_OPTIONS = [
  "Website Design (UI/UX)",
  "Website Development",
  "Graphics Designing",
  "Hosting Service",
  "Digital Marketing",
  "SEO Optimization"
];

const BUDGET_OPTIONS = [
  "₹10,000 - ₹25,000 ($150 - $350)",
  "₹25,000 - ₹60,000 ($350 - $800)",
  "₹60,000 - ₹1,500,00 ($800 - $2,000)",
  "₹1,500,00+ ($2,000+ Enterprise)"
];

const TIMELINE_OPTIONS = [
  "Urgent (1 - 2 Weeks)",
  "Standard (3 - 4 Weeks)",
  "Flexible (1 - 2 Months)",
  "Ongoing Retainer"
];

export const AIConsultantModal: React.FC<AIConsultantModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Website Development", "SEO Optimization"]);
  const [projectGoal, setProjectGoal] = useState("Build a high converting, fast loading web app to capture new client leads.");
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[1]);
  const [requirements, setRequirements] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [proposal, setProposal] = useState<AIProposal | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleGenerateProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProposal(null);
    setSubmittedMessage(false);

    // Simulated progress steps
    const steps = [
      "Analyzing project requirements...",
      "Matching Dizine Studio tech stack & frameworks...",
      "Calculating timeline benchmarks & deliverables...",
      "Finalizing AI digital strategy proposal..."
    ];

    for (let i = 0; i < steps.length; i++) {
      setLoadingStep(i);
      await new Promise(res => setTimeout(res, 500));
    }

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: selectedServices,
          projectGoal,
          budgetRange: budget,
          timeline,
          requirements
        })
      });

      const data = await res.json();
      if (data.success && data.proposal) {
        setProposal(data.proposal);
      }
    } catch (err) {
      console.error("Failed to generate AI proposal:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleBookProposal = () => {
    setSubmittedMessage(true);
    setTimeout(() => {
      onClose();
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full my-8 overflow-hidden shadow-2xl relative text-slate-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-950 via-slate-900 to-amber-950/60 p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                <span>Dizine AI Scope & Cost Builder</span>
              </h3>
              <p className="text-xs text-slate-400">Powered by Gemini AI Engine & Dizine Studio Benchmarks</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {!proposal && !loading && (
            <form onSubmit={handleGenerateProposal} className="space-y-5">
              
              {/* Select Services */}
              <div>
                <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  1. Select Required Services (Choose 1 or more)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICE_OPTIONS.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`p-3 rounded-xl text-xs font-bold text-left border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                            : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <span className="truncate">{srv}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Goal */}
              <div>
                <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  2. What is your main project goal?
                </label>
                <input
                  type="text"
                  value={projectGoal}
                  onChange={(e) => setProjectGoal(e.target.value)}
                  placeholder="e.g. Build a fast e-commerce site with high SEO rankings and 3D product view..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    3. Estimated Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    4. Desired Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  5. Specific Details or Features (Optional)
                </label>
                <textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  rows={2}
                  placeholder="e.g., Need payment gateway integration, multi-language support, custom logo design..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 font-extrabold text-sm hover:opacity-95 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Generate Instant AI Project Strategy</span>
              </button>
            </form>
          )}

          {/* Loading Animation State */}
          {loading && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 animate-bounce">
                  <Cpu className="w-8 h-8" />
                </div>
                <Loader2 className="w-20 h-20 text-amber-400 animate-spin absolute -top-2 -left-2 opacity-50" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">AI Strategy Engine Working...</h4>
                <p className="text-sm text-amber-400 font-medium">
                  {["Analyzing requirements...", "Matching tech stack...", "Calculating benchmarks...", "Finalizing proposal..."][loadingStep]}
                </p>
              </div>
            </div>
          )}

          {/* Proposal Output View */}
          {proposal && !loading && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
              
              {/* Proposal Header Card */}
              <div className="bg-gradient-to-r from-slate-950 via-violet-950/40 to-slate-950 p-5 rounded-xl border border-amber-500/30">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Custom AI Scope Blueprint</span>
                </div>
                <h4 className="text-xl font-extrabold text-white mb-2">{proposal.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{proposal.summary}</p>
              </div>

              {/* Estimates Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Estimated Timeline</span>
                    <span className="text-base font-extrabold text-white">{proposal.estimatedTimeline}</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Estimated Budget Scope</span>
                    <span className="text-base font-extrabold text-emerald-400">{proposal.estimatedCostRange}</span>
                  </div>
                </div>
              </div>

              {/* Recommended Tech Stack */}
              <div>
                <h5 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Recommended Technology Stack</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {proposal.recommendedTechStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h5 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <ListCheck className="w-4 h-4 text-amber-400" />
                  <span>Key Included Deliverables</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {proposal.keyDeliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Strategy Advice */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs space-y-1">
                <span className="font-extrabold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Dizine AI Strategy Tip</span>
                </span>
                <p className="text-slate-300 leading-relaxed">{proposal.aiStrategyTips}</p>
              </div>

              {/* Success Message Feedback */}
              {submittedMessage ? (
                <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-sm font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Blueprint attached to Contact Form! Redirecting...</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={handleBookProposal}
                    className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Proceed with this Blueprint</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProposal(null)}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700"
                  >
                    Adjust Parameters
                  </button>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
