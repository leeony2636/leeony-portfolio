import React from 'react';
import {
  SKILL_CATEGORIES,
  SKILL_PROOF_METRICS,
} from '../data/portfolioData';

import {
  BrainCircuit,
  Code,
  Globe,
  Zap,
  Award,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-blue-400" />;

      case 'Code':
        return <Code className="w-5 h-5 text-blue-400" />;

      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;

      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-400" />;

      default:
        return <Code className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <div className="w-1.5 h-7 bg-blue-500 rounded-full" />

          <h2 className="text-2xl font-bold text-white">
            사용 기술 및 경험
          </h2>
        </div>

        <p className="text-xs text-gray-500 ml-4 uppercase tracking-wider">
          Technologies Used in Projects & Learning
        </p>
      </div>

      {/* Project Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_PROOF_METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="glass-card p-6 flex flex-col justify-between border-blue-500/20 hover:border-blue-500/50 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-950 text-blue-400 border border-blue-500/30">
                  {metric.badge}
                </span>

                <Award className="w-4 h-4 text-blue-400 opacity-60" />
              </div>

              <p className="text-2xl md:text-3xl font-black text-white font-mono mb-1">
                {metric.value}
              </p>

              <h3 className="text-xs font-bold text-blue-300 mb-2">
                {metric.title}
              </h3>
            </div>

            <p className="text-[11px] text-gray-400 leading-relaxed pt-3 border-t border-white/5">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="glass-card p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  {getCategoryIcon(cat.iconName)}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">
                    {cat.category}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill List */}
              <div className="space-y-3 mt-6">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />

                      <span className="text-xs text-gray-200">
                        {skill.name}
                      </span>
                    </div>

                    {skill.highlight && (
                      <span className="shrink-0 px-2 py-1 rounded-md text-[9px] font-medium bg-blue-950/80 text-blue-300 border border-blue-500/30">
                        {skill.highlight}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Current Direction */}
      <div className="glass-card p-8 border-blue-500/30 bg-blue-950/10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
              <BookOpen className="w-3.5 h-3.5" />
              현재 학습 및 프로젝트 방향
            </span>

            <h3 className="text-xl font-bold text-white">
              학습한 내용을 직접 구현하고 웹 프로젝트로 연결
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
              Python과 머신러닝·딥러닝을 학습하며 분류, 회귀, 음악 장르
              분류 프로젝트를 진행하고 있습니다. 모델 학습 결과를
              Streamlit 웹앱으로 연결하고 GitHub에 구현 과정과 결과를
              기록하고 있습니다.
            </p>
          </div>

          <div className="shrink-0 p-4 bg-gray-900/90 rounded-2xl border border-white/10 text-center">
            <p className="text-xs text-gray-400 mb-1">
              현재 상태
            </p>

            <p className="text-sm font-bold text-blue-400">
              Learning & Building
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};