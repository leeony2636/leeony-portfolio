import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { X, Printer, Mail, MapPin, Github, Award, CheckCircle2, UserCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-10 bg-gray-950/95 border-white/10 relative shadow-2xl text-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <h2 className="text-lg font-bold text-white">단정한 이력서 (Curriculum Vitae)</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              인쇄 / PDF 저장
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-gray-900 text-gray-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-8 print:text-black print:bg-white print:p-0">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-3xl font-black text-white mb-1">
                {RESUME_DATA.name} <span className="text-base font-medium text-gray-400">({RESUME_DATA.englishName})</span>
              </h1>
              <p className="text-sm font-semibold text-blue-400">AI Service Planner & Builder</p>
            </div>

            <div className="space-y-1 text-xs text-gray-300">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{RESUME_DATA.contact.email}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{RESUME_DATA.contact.location}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="hover:underline text-blue-300">
                  {RESUME_DATA.contact.github}
                </a>
              </p>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-blue-400" />
              핵심 요약 (Profile Summary)
            </h3>
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Core Strengths */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              핵심 경쟁력 및 차별점
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {RESUME_DATA.strengths.map((str, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 bg-white/[0.02] rounded-xl border border-white/5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                학력 및 전문 과정 (Education)
              </h3>
              <div className="space-y-3">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex justify-between text-xs font-bold text-white mb-1">
                      <span>{edu.degree}</span>
                      <span className="text-blue-400 font-mono">{edu.period}</span>
                    </div>
                    <p className="text-xs text-gray-400">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-400" />
                자격 및 주요 수료 (Certifications)
              </h3>
              <div className="space-y-2">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-gray-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-xs font-bold transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
