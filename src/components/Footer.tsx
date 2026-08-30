import React from 'react';
import { GraduationCap, Phone, MessageCircle, Mail, MapPin, Heart, Github } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenGitHubGuide: () => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenGitHubGuide,
  onOpenJoinModal
}) => {
  return (
    <footer className="bg-[#1b1c15] text-[#fbfaee] pt-14 pb-8 border-t-4 border-[#f9e534]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#0061a4] flex items-center justify-center text-[#f9e534]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-fredoka text-white">
                English For Kids
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Online individual English (Grade 1 to 13) and ICT (Grade 6 to 11) classes for school students across Sri Lanka. Inspiring curiosity, confidence, and linguistic mastery.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenJoinModal}
                className="px-4 py-2 rounded-xl bg-[#f9e534] text-[#706500] font-bold text-xs font-fredoka hover:bg-[#edd81f] transition"
              >
                Join Class Today ✨
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-fredoka uppercase tracking-wider">
              Quick Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f9e534] transition"
                >
                  Explore All Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f9e534] transition"
                >
                  About Our Teaching Methods
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f9e534] transition"
                >
                  Our Classroom Memories & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f9e534] transition"
                >
                  Contact & Class Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Sri Lanka Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-fredoka uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f9e534] flex-shrink-0" />
                <a href="tel:0741534794" className="hover:text-white font-semibold">
                  074 153 4794
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href="https://wa.me/94741534794"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: 074 153 4794
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f9e534] flex-shrink-0" />
                <span>Colombo, Sri Lanka (Online Islandwide)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f9e534] flex-shrink-0" />
                <span>englishforkids.lk@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* GitHub Pages & Export Center */}
          <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10">
            <h4 className="text-sm font-bold text-[#f9e534] font-fredoka flex items-center gap-1.5">
              <Github className="w-4 h-4 text-white" />
              <span>GitHub Publish Ready</span>
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Requested: "hadala denna mata github ekata dala public krnna index.html ekk hadala".
            </p>
            <button
              onClick={onOpenGitHubGuide}
              className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition"
            >
              <span>GitHub Instructions & HTML</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} English For Kids. All Rights Reserved. Online Individual Classes.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with care for young minds</span>
            <Heart className="w-3.5 h-3.5 text-[#ff5748] fill-[#ff5748]" />
            <span>in Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
