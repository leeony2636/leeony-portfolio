import React, { useState } from 'react';
import { NavTab, Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { TimelineSection } from './components/TimelineSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactChatSection } from './components/ContactChatSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  // 'projects' is active by default as shown in user prototype
  const [activeTab, setActiveTab] = useState<NavTab>('projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans p-4 md:p-10 relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Background Radial Gradient Blur */}
      <div 
        className="fixed top-10 right-10 w-[450px] h-[450px] pointer-events-none z-0 opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(10, 10, 12, 0) 70%)',
        }}
      />
      <div 
        className="fixed bottom-10 left-10 w-[400px] h-[400px] pointer-events-none z-0 opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(10, 10, 12, 0) 70%)',
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col min-h-screen justify-between">
        <div>
          {/* Header Navigation */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Content Area */}
          <main className="relative">
            {/* Hero Section */}
            <HeroSection
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenContact={() => setActiveTab('contact')}
            />

            {/* Dynamic Tab Content */}
            {activeTab === 'projects' && (
              <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />
            )}

            {activeTab === 'about' && (
              <AboutSection
                onGoToProjects={() => setActiveTab('projects')}
                onGoToContact={() => setActiveTab('contact')}
              />
            )}

            {activeTab === 'timeline' && <TimelineSection />}

            {activeTab === 'skills' && <SkillsSection />}

            {activeTab === 'contact' && (
              <ContactChatSection onOpenResume={() => setIsResumeOpen(true)} />
            )}
          </main>
        </div>

        {/* Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
