import React from 'react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="max-w-7xl mx-auto py-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 px-2 sm:px-0">
      <p>© 2026 Ha Ju-seong. All rights reserved. Crafted with clean data mindset.</p>
      
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-gray-300">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          정직 보증 프로필
        </span>
        <button
          onClick={onOpenResume}
          className="hover:text-white transition underline text-gray-400 cursor-pointer"
        >
          이력서 원본
        </button>
      </div>
    </footer>
  );
};
