import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { Github, Search, Code2, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI / Deep Learning', 'Data / Streamlit', 'Learning & Practice'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-1.5 h-7 bg-blue-500 rounded-full" />
            <h2 className="text-2xl font-bold text-white">경험과 프로젝트</h2>
          </div>
          <p className="text-xs text-gray-500 ml-4 uppercase tracking-wider">
            GitHub Projects & Experience Archives
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="프로젝트 / 기술 스택 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-900/80 border border-white/10 rounded-xl text-xs text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-md blue-glow border border-blue-500/50'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat === 'All' ? '전체 보기 (All)' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid Container */}
      {filteredProjects.length === 0 ? (
        <div className="glass-card min-h-[350px] w-full p-8 flex flex-col items-center justify-center border-dashed border-2 border-white/10 text-center">
          <div className="text-5xl mb-4 opacity-30">🔍</div>
          <p className="text-gray-400 font-medium">검색 조건에 해당되는 프로젝트가 없습니다.</p>
          <p className="text-xs text-gray-600 mt-1">다른 검색어 또는 필터 카테고리를 선택해 보세요.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-gray-800 text-xs text-gray-300 rounded-lg hover:text-white hover:bg-gray-700 transition"
          >
            필터 초기화
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-950/80 text-blue-400 border border-blue-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Repo Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2 mb-1.5 font-mono">
                  <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-400 shrink-0" />
                  <span className="truncate">{project.title}</span>
                </h3>

                <p className="text-xs text-gray-300 font-medium mb-3 line-clamp-1">
                  {project.subTitle}
                </p>

                <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Key Metrics Highlight Box */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-4 p-3 bg-white/[0.02] rounded-xl border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gray-400 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-blue-400" />
                        {project.metrics[0].label}
                      </span>
                      <span className="font-bold text-blue-300 font-mono">
                        {project.metrics[0].value}
                      </span>
                    </div>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] bg-gray-900/90 text-gray-300 rounded border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="px-3.5 py-2 text-xs bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg font-medium transition flex items-center gap-1.5 cursor-pointer border border-blue-500/30"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  프로젝트 상세
                </button>

                <div className="flex items-center gap-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};