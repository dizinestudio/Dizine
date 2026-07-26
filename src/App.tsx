/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Page, PortfolioItem, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIConsultantModal } from './components/AIConsultantModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [aiConsultantOpen, setAiConsultantOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('dizine_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  // Sync theme class on <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('dizine_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSelectServiceFromHome = (service: ServiceItem) => {
    setCurrentPage('services');
    setTimeout(() => {
      const el = document.getElementById(service.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950 transition-colors duration-300">
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Header Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenAIConsultant={() => setAiConsultantOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Active Page View */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenAIConsultant={() => setAiConsultantOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
            onSelectService={handleSelectServiceFromHome}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenAIConsultant={() => setAiConsultantOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenAIConsultant={() => setAiConsultantOpen(true)}
            onSelectService={(service) => {
              const el = document.getElementById(service.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenAIConsultant={() => setAiConsultantOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenAIConsultant={() => setAiConsultantOpen(true)}
          />
        )}
      </main>

      {/* Global Modals */}
      <AIConsultantModal
        isOpen={aiConsultantOpen}
        onClose={() => setAiConsultantOpen(false)}
        onNavigate={(page) => setCurrentPage(page)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={(page) => setCurrentPage(page)}
      />

      {/* Global Footer */}
      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onOpenAIConsultant={() => setAiConsultantOpen(true)}
      />

    </div>
  );
}
