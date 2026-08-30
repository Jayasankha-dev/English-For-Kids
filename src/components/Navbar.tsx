import React, { useState } from 'react';
import { NavTab } from '../types';
import { Sparkles, Phone, Menu, X, BookOpen, GraduationCap, Github } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenJoinModal: () => void;
  onOpenGitHubGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenJoinModal,
  onOpenGitHubGuide
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbfaee]/95 backdrop-blur-md border-b border-[#0061a4]/10 transition-colors">
      {/* Top micro-banner for Sri Lanka hotline & fast GitHub setup info */}
      <div className="bg-[#0061a4] text-white py-1.5 px-4 text-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#f9e534] animate-pulse"></span>
            <span>Online Individual Classes for Kids across Sri Lanka (Grade 1 - 13)</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="header-phone-link"
              href="tel:0741534794"
              className="flex items-center gap-1.5 hover:text-[#f9e534] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>074 153 4794</span>
            </a>
            <button
              id="header-github-guide-btn"
              onClick={onOpenGitHubGuide}
              className="hidden sm:flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded text-[11px] font-medium transition"
              title="View GitHub deployment guide & download index.html"
            >
              <Github className="w-3 h-3" />
              <span>GitHub Publish Ready</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('about')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#0061a4] flex items-center justify-center text-[#f9e534] shadow-md group-hover:scale-105 transition-transform duration-200">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0061a4] font-fredoka flex items-center gap-1">
              English For Kids
              <Sparkles className="w-4 h-4 text-[#f9e534] fill-[#f9e534]" />
            </div>
            <div className="text-[11px] font-semibold text-[#706500] uppercase tracking-wider">
              Online Individual Classes
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#f5f4e8] p-1.5 rounded-full border border-gray-200">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0061a4] text-white shadow-sm'
                    : 'text-gray-700 hover:text-[#0061a4] hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-join-class-btn"
            onClick={onOpenJoinModal}
            className="tactile-btn px-6 py-2.5 rounded-xl bg-[#0061a4] text-white font-fredoka text-base font-bold flex items-center gap-2 hover:bg-[#00497d] transition-colors"
          >
            <span>Join Class</span>
            <span className="text-[#f9e534]">✨</span>
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-join-class-btn"
            onClick={onOpenJoinModal}
            className="px-3.5 py-1.5 rounded-lg bg-[#0061a4] text-white font-fredoka text-sm font-bold"
          >
            Join Class
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#f5f4e8] border border-gray-200 text-gray-700 hover:text-[#0061a4] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbfaee] border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#0061a4] text-white'
                    : 'text-gray-800 hover:bg-[#f5f4e8]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubGuide();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Publish & index.html</span>
            </button>
            <a
              href="tel:0741534794"
              className="w-full py-2.5 px-4 rounded-xl bg-[#f9e534] text-[#706500] font-bold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Teacher: 074 153 4794</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
