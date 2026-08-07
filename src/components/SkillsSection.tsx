import React from 'react';
import { SKILL_CATEGORIES, SKILL_PROOF_METRICS } from '../data/portfolioData';
import { BrainCircuit, Code, Database, Zap, ShieldAlert, Award, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-blue-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="mb-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full blue-glow"></span>
          역량 증명 (Skill Proof & Metrics)
        </h2>
        <p className="text-xs text-gray-400 ml-4.5 tracking-wider uppercase font-medium">
          Quantified Competencies & Practical Problem Solving
        </p>
      </div>

      {/* Proof Metrics Top Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_PROOF_METRICS.map((metric, idx) => (
          <div key={idx} className="glass-card p-6 flex flex-col justify-between border-blue-500/20 hover:border-blue-500/50 transition-all">
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
              <h3 className="text-xs font-bold text-blue-300 mb-2">{metric.title}</h3>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed pt-3 border-t border-white/5">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Skills Competency Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="glass-card p-6 flex flex-col justify-between">
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{cat.category}</h3>
                  <p className="text-xs text-gray-400">{cat.description}</p>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-4 mt-6">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-gray-200 flex items-center gap-1.5">
                        {skill.name}
                        {skill.highlight && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] bg-blue-900/80 text-blue-300 border border-blue-500/30">
                            {skill.highlight}
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-blue-400 font-bold">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full blue-glow transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Case Study Banner */}
      <div className="glass-card p-8 border-blue-500/30 bg-blue-950/10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
              <ShieldAlert className="w-3.5 h-3.5" />
              현장 문제 해결 트러블슈팅 케이스
            </span>
            <h3 className="text-xl font-bold text-white">
              "비IT 작업자의 수기 오류 & LLM 할루시네이션 동시 차단"
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
              현장에서 입력되는 거친 은어 및 줄임말 입력을 Gemini Structured Output Schema와 Pydantic 가드레일 레이어로 감싸 99.7% 수치 정확도를 달성하고 할루시네이션(환각)을 완전 제어했습니다.
            </p>
          </div>
          <div className="shrink-0 p-4 bg-gray-900/90 rounded-2xl border border-white/10 text-center">
            <p className="text-xs text-gray-400">데이터 신뢰도</p>
            <p className="text-2xl font-black text-blue-400 font-mono">99.7%</p>
          </div>
        </div>
      </div>
    </section>
  );
};
