import React from 'react';
import { UserCheck, Target, Cpu, Award, Rocket, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onGoToProjects: () => void;
  onGoToContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onGoToProjects,
  onGoToContact,
}) => {
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
            현장 경험을 AI 프로젝트로 확장하는 개발자
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
            "책상 위의 논리적 완벽함보다,
            <br />
            <span className="text-blue-400">
              현장에서 기어코 작동하는 실행력
            </span>
            이 정답을 만듭니다."
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            안녕하세요, 다양한 현장 실무 경험을 바탕으로 Python과 AI 기술을
            직접 구현하고 있는
            <strong className="text-white"> 하주성</strong>입니다.
            병원, 철강 가공, 특수용접 등 서로 다른 환경에서 문제를 해결해 온
            경험을
            <strong className="text-blue-300">
              {' '}
              AI 프로젝트의 구현과 개선 과정
            </strong>
            으로 확장하고 있습니다.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            현재는 Python · PyTorch를 기반으로 머신러닝과 딥러닝 프로젝트를
            진행하며, 모델 학습에서 끝내지 않고
            <strong className="text-white">
              {' '}
              실험 → 성능 비교 → 개선 → 문서화 → 배포
            </strong>
            까지 직접 경험하고 있습니다. 개인 프로젝트에서는 음악 장르 분류
            모델과 Streamlit 서비스를 구현했고, 팀 프로젝트에서는 음성인식
            모델 파인튜닝과 모델 비교·평가, GitHub 협업 과정을 경험하고
            있습니다.
          </p>
        </div>
      </div>

      {/* 3 Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Target className="w-5 h-5" />
            </div>

            <h4 className="text-lg font-bold text-white">
              1. 현장 문제 해결 경험
            </h4>

            <p className="text-xs text-gray-400 leading-relaxed">
              병원, 철강 가공, 특수용접 등 서로 다른 현장에서 직접 문제를
              해결하며 상황 판단과 실행 경험을 쌓았습니다. 이러한 경험을
              바탕으로 기술을 실제 문제에 적용하는 과정을 중요하게
              생각합니다.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-blue-400 font-mono">
            Focus: Problem Solving
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>

            <h4 className="text-lg font-bold text-white">
              2. 직접 구현하고 검증
            </h4>

            <p className="text-xs text-gray-400 leading-relaxed">
              Python과 PyTorch를 활용해 모델을 직접 학습하고, 성능을
              비교하며 개선합니다. 결과를 Streamlit 웹 애플리케이션으로
              연결해 실제로 사용할 수 있는 형태까지 구현합니다.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-blue-400 font-mono">
            Focus: Build & Validate
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Award className="w-5 h-5" />
            </div>

            <h4 className="text-lg font-bold text-white">
              3. 실험과 기록
            </h4>

            <p className="text-xs text-gray-400 leading-relaxed">
              결과만 남기기보다 모델 선택 이유, 실험 과정, 성능 변화와 개선
              내용을 GitHub에 기록합니다. 개인 프로젝트와 팀 프로젝트 모두
              코드와 문서를 함께 남기는 것을 중요하게 생각합니다.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-blue-400 font-mono">
            Focus: Experiment & Documentation
          </div>
        </div>
      </div>

      {/* Call to action bar */}
      <div className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-blue-500/30 bg-blue-950/20">
        <div className="flex items-center gap-3">
          <Rocket className="w-6 h-6 text-blue-400 shrink-0" />

          <div>
            <p className="text-sm font-bold text-white">
              하주성 님의 프로젝트 성과물이 궁금하신가요?
            </p>

            <p className="text-xs text-gray-400">
              GitHub 레포지토리와 실제 작동 아키텍처를 확인해 보세요.
            </p>
          </div>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={onGoToProjects}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl blue-glow transition flex items-center gap-1.5"
          >
            프로젝트 보기
            <ArrowRight className="w-3.5 h-3.5" />
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