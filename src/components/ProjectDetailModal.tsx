import React from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, ShieldCheck, Cpu, AlertCircle, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-gray-950/90 border-white/10 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="space-y-2 mb-6 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-950 text-blue-400 border border-blue-500/30">
              {project.category}
            </span>
            <span className="text-xs text-gray-500 font-mono">ID: {project.id}</span>
          </div>

          <h2 className="text-2xl font-black text-white font-mono">{project.title}</h2>
          <p className="text-sm font-semibold text-blue-300">{project.subTitle}</p>
        </div>

        {/* Overview & Story */}
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-400" />
              프로젝트 개요
            </h3>
            <p className="text-xs text-gray-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem Solved in Field */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-yellow-400" />
              해결한 현장 문제 (Pain Point Solved)
            </h3>
            <div className="p-4 bg-yellow-950/20 border border-yellow-500/20 rounded-xl text-xs text-yellow-200/90 leading-relaxed">
              {project.fieldProblemSolved}
            </div>
          </div>

          {/* Metrics Grid */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              핵심 수치 성과 (KPI Metrics)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[11px] text-gray-400 mb-1">{m.label}</p>
                  <p className="text-base font-bold text-blue-300 font-mono">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              주요 핵심 기능
            </h3>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-200 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Flow */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-400" />
              시스템 파이프라인 아키텍처
            </h3>
            <div className="p-4 bg-gray-900/90 rounded-xl border border-white/10 font-mono text-xs text-blue-300 leading-relaxed overflow-x-auto">
              {project.architectureSummary}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              사용한 기술 스택
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-900 text-gray-200 rounded-lg text-xs font-medium border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              데모 확인하기
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-white/10"
          >
            <Github className="w-4 h-4" />
            GitHub 소스코드 보기
          </a>
        </div>
      </div>
    </div>
  );
};
