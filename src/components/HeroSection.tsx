import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Mail, Zap, Briefcase, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      {/* Left Hero Card */}
      <div className="lg:col-span-2 glass-card p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[450px]">
        {/* Decorative background glow inside card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
          {PERSONAL_INFO.badge}
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-white">
          현장 감각을 이제는 AI로 !<br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
            변수 없는 AI같은 인재
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 z-10">
          <button
            onClick={onOpenResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 blue-glow shadow-lg active:scale-95 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            단정한 이력서 보기
          </button>
          <button
            onClick={onOpenContact}
            className="bg-gray-800/80 border border-white/10 hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer hover:border-white/20"
          >
            <Mail className="w-4 h-4" />
            협업 제안 및 문의
          </button>
        </div>
      </div>

      {/* Right Core Values Card */}
      <div className="glass-card p-8 flex flex-col gap-4 relative overflow-hidden justify-between">
        <div>
          <h3 className="text-xs font-bold text-gray-500 tracking-tighter mb-4 uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
            CORE VALUES
          </h3>

          <div className="space-y-3">
            <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/5 flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-200">
                {PERSONAL_INFO.coreValues[0].title}
              </span>
            </div>

            <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/5 flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-200">
                {PERSONAL_INFO.coreValues[1].title}
              </span>
            </div>

            <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/5 flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-200">
                {PERSONAL_INFO.coreValues[2].title}
              </span>
            </div>
          </div>
        </div>

        {/* Motto Box */}
        <div className="p-5 bg-blue-950/20 rounded-xl border border-blue-500/20 relative mt-4">
          <p className="text-xs text-blue-400 font-bold mb-2 flex items-center gap-1">
            <span>◎</span> 신조 및 가치관
          </p>
          <p className="text-xs text-gray-300 leading-relaxed italic">
            {PERSONAL_INFO.motto}
          </p>
        </div>
      </div>
    </div>
  );
};
