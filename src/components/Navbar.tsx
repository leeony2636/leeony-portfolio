import React, { useState } from 'react';
import { NavTab } from '../types';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'about', label: '소개' },
    { id: 'projects', label: '경험과 프로젝트' },
    { id: 'timeline', label: '연혁' },
    { id: 'skills', label: '역량 증명' },
    { id: 'contact', label: '문의 & AI 챗' },
  ];

  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto mb-10 px-2 sm:px-0 relative z-40">
      {/* Brand Logo & Name */}
      <div 
        onClick={() => setActiveTab('projects')}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center blue-glow group-hover:scale-105 transition-transform">
          <Sparkles className="w-5 h-5 text-white animate-pulse" />
        </div>
        <div>
          <h1 className="text-xl font-bold flex items-center gap-1.5 text-white">
            하주성 
            <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded font-normal border border-white/5">
              PORTFOLIO
            </span>
          </h1>
          <p className="text-xs text-gray-400">AI Service Planner & Builder</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex bg-gray-900/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg blue-glow'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-xl bg-gray-900 border border-white/10 text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-gray-950/95 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col gap-2 z-50">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition ${
                  isActive
                    ? 'bg-blue-600 text-white blue-glow'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};
