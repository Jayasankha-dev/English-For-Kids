import React from 'react';
import { Sparkles, Star, Rocket, Laptop, Heart, Users, Video, Award, Phone, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Interactive3DCanvas } from './Interactive3DCanvas';
import heroImg from '../assets/images/hero_kids_learning_1788130643393.jpg';
import classroomImg from '../assets/images/modern_learning_space_1788130660467.jpg';

interface AboutSectionProps {
  onOpenJoinModal: () => void;
  onNavigateCourses: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenJoinModal,
  onNavigateCourses,
}) => {
  return (
    <div id="about-section-container" className="space-y-16 pb-12">
      {/* Hero Presentation */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f9e534]/40 text-[#706500] border border-[#f9e534]">
                <Star className="w-3.5 h-3.5 fill-[#706500]" />
                Fun Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ff5748]/15 text-[#bb1614] border border-[#ff5748]/30">
                <Rocket className="w-3.5 h-3.5" />
                Playful Environment
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2196f3]/15 text-[#0061a4] border border-[#2196f3]/30">
                <Laptop className="w-3.5 h-3.5" />
                Tech Education
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#0061a4] tracking-tight font-fredoka leading-tight">
              Online Individual <br className="hidden sm:inline" />
              <span className="text-[#bb1614]">English</span> &{' '}
              <span className="text-[#00497d]">ICT</span> Classes!
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl font-medium">
              At <strong className="text-[#0061a4]">English For Kids</strong>, we believe that learning should be an adventure. Our mission is to make education accessible and engaging through personalized online individual classes for students across Sri Lanka. We offer comprehensive English classes for <strong>Grade 1 up to Grade 13</strong>, alongside specialized ICT classes for <strong>Grades 6-11</strong>. We blend creative teaching methods with a joyful virtual environment to inspire a lifelong love for language and technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-enroll-btn"
                onClick={onOpenJoinModal}
                className="tactile-btn px-8 py-3.5 rounded-2xl bg-[#0061a4] text-white font-fredoka text-lg font-bold flex items-center gap-2.5 hover:bg-[#00497d]"
              >
                <span>Enroll Today</span>
                <Sparkles className="w-5 h-5 text-[#f9e534]" />
              </button>

              <button
                id="hero-view-courses-btn"
                onClick={onNavigateCourses}
                className="tactile-btn-yellow px-7 py-3.5 rounded-2xl bg-[#f9e534] text-[#706500] font-fredoka text-lg font-bold hover:bg-[#ebd520]"
              >
                Explore Courses
              </button>

              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/94741534794?text=Hello!%20I%20am%20interested%20in%20online%20individual%20English%20and%20ICT%20classes%20for%20my%20child."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-green-300 text-green-700 font-bold hover:bg-green-50 shadow-sm transition"
              >
                <MessageCircle className="w-5 h-5 fill-green-500 text-white" />
                <span>WhatsApp: 074 153 4794</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">100% 1-on-1 Individual</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">Flexible Time Slots</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">All Island Students</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white group">
              <img
                src={heroImg}
                alt="Children engaged in joyful English learning"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f9e534] text-[#706500] text-xs font-bold uppercase tracking-wider mb-2">
                    Friendly & Patient Mentoring
                  </span>
                  <p className="text-base font-bold font-fredoka drop-shadow">
                    Interactive Individual Sessions Tailored to Your Child's Pace
                  </p>
                </div>
              </div>
            </div>

            {/* Floating joyful badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#fbfaee] p-3 rounded-2xl border-2 border-[#0061a4] shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0061a4] text-[#f9e534] flex items-center justify-center font-bold text-xl font-fredoka">
                A+
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Proven Fluency</p>
                <p className="text-[11px] text-gray-500 font-medium">Confidence in speaking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Learning Blocks Demo */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0061a4]/15 tactile-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#d1e4ff] text-[#00497d]">
              <Sparkles className="w-3.5 h-3.5 text-[#0061a4]" />
              <span>Interactive Learning Tools</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0061a4] font-fredoka">
              Hands-On Digital Exploration
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              We bring lessons to life with interactive 3D visual aids, digital whiteboards, and immersive visual storytelling. Kids don't just memorize — they touch, explore, and master each concept with pure enthusiasm!
            </p>
            <div className="flex flex-col gap-2 pt-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0061a4]"></span>
                <span>Touch or drag the blocks to rotate them in 3D space</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f9e534]"></span>
                <span>Visual alphabet connections & phonetic pronunciation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5748]"></span>
                <span>Personalized curriculum matching Sri Lankan school syllabi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Interactive3DCanvas />
          </div>
        </div>
      </section>

      {/* Our Impact Bento Grid (matching user screenshot) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#706500] bg-[#f9e534]/50 px-3 py-1 rounded-full">
            Our Milestone
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0061a4] font-fredoka">
            Our Impact in Sri Lanka
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium">
            Over a decade of bringing joyful education to students in Colombo, Kandy, Galle, Jaffna, and nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="bg-white rounded-3xl p-8 text-center border border-[#0061a4]/10 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#d1e4ff] text-[#0061a4] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#0061a4] font-fredoka tracking-tight">
              5,000+
            </div>
            <div className="mt-2 text-sm font-bold text-gray-600 uppercase tracking-wider">
              Happy Students
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Empowered with confident speaking & ICT skills across all 9 provinces.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-3xl p-8 text-center border border-[#f9e534]/40 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#f9e534]/30 text-[#706500] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Video className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#706500] font-fredoka tracking-tight">
              200+
            </div>
            <div className="mt-2 text-sm font-bold text-gray-600 uppercase tracking-wider">
              Videos Produced
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Engaging multimedia lesson archives, pronunciation guides & quizzes.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-3xl p-8 text-center border border-[#ff5748]/20 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#ff5748]/15 text-[#bb1614] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#bb1614] font-fredoka tracking-tight">
              10+
            </div>
            <div className="mt-2 text-sm font-bold text-gray-600 uppercase tracking-wider">
              Years Experience
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Dedicated teaching expertise in Cambridge, Edexcel & National curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Where The Magic Happens (matching user screenshot) */}
      <section className="bg-[#f5f4e8] rounded-3xl p-6 sm:p-10 border border-gray-200">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0061a4] bg-white px-3 py-1 rounded-full shadow-sm">
            Learning Spaces
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0061a4] font-fredoka">
            Where The Magic Happens
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium">
            Take a look inside our lively virtual and creative classroom setups!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-white">
            <img
              src={classroomImg}
              alt="Interactive Classroom Space"
              referrerPolicy="no-referrer"
              className="w-full h-[280px] sm:h-[320px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 bg-white">
              <span className="text-xs font-bold text-[#0061a4] uppercase">Virtual & Physical Spaces</span>
              <h3 className="text-lg font-bold text-gray-900 font-fredoka">Interactive Classrooms</h3>
              <p className="text-xs text-gray-500 mt-1">
                Modern tools, tablets, and interactive screens designed to capture every child's imagination.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#f9e534]/40 text-[#706500] flex items-center justify-center font-bold">
                <Heart className="w-6 h-6 fill-[#706500]" />
              </div>
              <h3 className="text-xl font-bold text-[#0061a4] font-fredoka">Cozy & Creative</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                A warm, supportive environment where questions are celebrated and curiosity is encouraged. No student feels left behind in our 1-on-1 personalized sessions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2196f3]/15 text-[#0061a4] flex items-center justify-center font-bold">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0061a4] font-fredoka">Tailored Individual Attention</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Every child has their own unique strengths and learning speed. Our individual attention ensures your child overcomes hesitation, improves pronunciation, and excels in school exams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
