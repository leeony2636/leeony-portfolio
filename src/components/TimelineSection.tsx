import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Milestone } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full blue-glow"></span>
          연혁 및 경력 이력
        </h2>
        <p className="text-xs text-gray-400 ml-4.5 tracking-wider uppercase font-medium">
          Career Journey & Field Experience Timeline
        </p>
      </div>

      {/* Timeline Container */}
      <div className="glass-card p-6 md:p-10 relative">
        <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-8 space-y-10 pl-6 md:pl-10">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot Icon */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-950 border-2 border-blue-500 flex items-center justify-center text-blue-400 blue-glow group-hover:scale-110 transition-transform">
                <Milestone className="w-3 h-3 md:w-4 md:h-4" />
              </div>

              {/* Card Body */}
              <div className="bg-white/[0.02] hover:bg-white/[0.04] p-6 rounded-2xl border border-white/5 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-950/80 text-blue-400 border border-blue-500/30">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-gray-800 text-gray-300 border border-white/5">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <p className="text-xs text-blue-300 font-medium mb-4 flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5" />
                  {item.company}
                </p>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements list */}
                <div className="space-y-2 pt-3 border-t border-white/5">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    KEY ACHIEVEMENTS & CONTRIBUTIONS
                  </p>
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
