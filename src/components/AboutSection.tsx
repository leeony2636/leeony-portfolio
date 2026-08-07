import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { UserCheck, Target, Cpu, CheckCircle2, Award, Rocket, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onGoToProjects: () => void;
  onGoToContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onGoToProjects, onGoToContact }) => {
  return (
    <section className="mb-12 space-y-8 animate-fadeIn">
      {/* Title */}
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full blue-glow"></span>
          소개 (About Ha Ju-seong)
        </h2>
        <p className="text-xs text-gray-400 ml-4.5 tracking-wider uppercase font-medium">
          The Story of a Practical AI Builder
        </p>
      </div>

      {/* Main Story Box */}
      <div className="glass-card p-8 md:p-10 relative overflow-hidden">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <UserCheck className="w-3.5 h-3.5" />
            현장 문제를 AI로 돌파하는 기획자 겸 빌더
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
            "책상 위의 논리적 완벽함보다,<br />
            <span className="text-blue-400">현장에서 기어코 작동하는 실행력</span>이 정답을 만듭니다."
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            안녕하세요, AI 서비스 기획자이자 프론트엔드/백엔드 MVP 빌더 <strong className="text-white">하주성</strong>입니다.
            저는 수많은 산업 현장 실무와 서비스 운영 파트에서 발로 뛰며 <strong className="text-blue-300">비IT 직무 작업자들의 실제 페인 포인트(Pain Point)</strong>를 눈으로 목격했습니다.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            아무리 뛰어난 인공지능 알고리즘이라도 현장의 작업자가 사용하기 어렵거나 실제 업무 절차와 동떨어져 있다면 아무 가치를 만들어내지 못합니다. 
            저는 현장의 요구사항을 정확하게 정의하고, 이를 최신 <strong className="text-white">LLM (Gemini API 등) 프롬프트 파이프라인 및 풀스택 코드</strong>로 직접 구현하여 즉각적인 생산성 향상으로 연결시킵니다.
          </p>
        </div>
      </div>

      {/* 3 Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">1. 현장 밀착형 기획</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              모호한 가설 대신 현장 인터뷰와 업무 모니터링을 통해 진짜 병목을 발굴합니다. 비IT 작업자도 1분 만에 이해할 수 있는 직관적 UX를 설계합니다.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-blue-400 font-mono">
            Focus: Pain Point Mapping
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">2. 48시간 MVP 구축</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              기획서 전달에 머무르지 않고, React, TypeScript, Express, Gemini API를 활용해 아이디어를 48시간 이내에 실제로 동작하는 서비스로 직접 만듭니다.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-blue-400 font-mono">
            Focus: Rapid AI Prototyping
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">3. 성실함과 실적 증명</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              약속된 개발 일정과 요구사항은 반드시 사수합니다. 85% 작업 시간 단축, 35% 수주율 향상 등 명확한 수치로 결과물을 증명해냅니다.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-blue-400 font-mono">
            Focus: KPI & Accountability
          </div>
        </div>
      </div>

      {/* Call to action bar */}
      <div className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-blue-500/30 bg-blue-950/20">
        <div className="flex items-center gap-3">
          <Rocket className="w-6 h-6 text-blue-400 shrink-0" />
          <div>
            <p className="text-sm font-bold text-white">하주성 님의 프로젝트 성과물이 궁금하신가요?</p>
            <p className="text-xs text-gray-400">GitHub 레포지토리와 실제 작동 아키텍처를 확인해 보세요.</p>
          </div>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={onGoToProjects}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl blue-glow transition flex items-center gap-1.5"
          >
            프로젝트 보기 <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onGoToContact}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold rounded-xl border border-white/10 transition"
          >
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
};
