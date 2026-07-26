import React from 'react';
import { PortfolioItem, Page } from '../types';
import { X, ExternalLink, Code2, Trophy, Layers, Send } from 'lucide-react';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onNavigate: (page: Page) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onNavigate
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full my-8 overflow-hidden shadow-2xl relative text-slate-200">
        
        {/* Header Bar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400">• {project.client} ({project.year})</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Project Title */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2">{project.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{project.shortDesc}</p>
          </div>

          {/* Project Banner Image */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-xl group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>

          {/* Key Metrics / Benchmark Results */}
          <div>
            <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Project Outcome & Performance Metrics</span>
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 block">{m.value}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          <div>
            <h4 className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Full Case Study & Implementation</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              {project.fullCaseStudy}
            </p>
          </div>

          {/* Tech Stack Used */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-slate-400" />
              <span>Technologies & Tools Employed</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Build Similar Project</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Live Demo Simulation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
