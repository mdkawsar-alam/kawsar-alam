"use client";
import React, { useState, useEffect } from 'react';
import { 
  MdEmojiEvents, 
  MdCode, 
  MdPeople, 
  MdTrendingUp, 
  MdWorkspacePremium, 
  MdVerified 
} from 'react-icons/md';
import Container from '@/components/sheard/Contatiner/Container';

/**
 * SEO-Optimized Achievement Card Component
 */
const AchievementCard = ({ achievement, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <article
      className={`bg-slate-800 border border-slate-700 rounded-xl p-5 md:p-6 hover:bg-slate-700 hover:border-[#0ef]/50 transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-[#0ef]/10 rounded-lg shrink-0 group shadow-[0_0_15px_rgba(0,238,255,0.1)]">
          <achievement.icon className="text-[#0ef] text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
            {achievement.title}
          </h3>
          <p className="text-[#0ef] text-sm font-semibold mt-1 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0ef] rounded-full animate-pulse"></span>
            {achievement.year}
          </p>
        </div>
      </div>

      <p className="text-gray-300 text-sm md:text-base mb-5 leading-relaxed">
        {achievement.description}
      </p>

      {achievement.metrics && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {achievement.metrics.map((metric, metricIndex) => (
            <span
              key={metricIndex}
              className=" px-3 py-1 bg-slate-900 border border-slate-600 text-[#0ef] text-[11px] md:text-xs font-medium rounded-md uppercase tracking-wider"
            >
              {metric}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

/**
 * Main Achievements Section
 * Optimized with modern web development keywords for SEO
 */
const AchievementsSection = () => {
  // Data array placed outside the return but inside the component to avoid import errors
  const achievements = [
    {
      title: "Best Performer of the Month",
      year: "2024",
      description: "Recognized at Edulife IT Institute for outstanding contributions to frontend architecture, UI consistency, and rapid feature deployment.",
      icon: MdWorkspacePremium,
      metrics: ["Top Performer", "React/Next.js", "Edulife IT"]
    },
    {
      title: "Best Project Award",
      year: "2023",
      description: "Won 1st place in a regional coding competition for architecting a scalable MERN stack e-commerce platform with secure API integration.",
      icon: MdEmojiEvents,
      metrics: ["1st Place", "Competition", "Full-Stack"]
    },
    {
      title: "Open Source Contributor",
      year: "2023 - Present",
      description: "Active contributor to JavaScript libraries and UI kits on GitHub, focusing on accessible code and community-driven development.",
      icon: MdCode,
      metrics: ["100+ Commits", "GitHub", "Clean Code"]
    },
    {
      title: "Technical Mentorship",
      year: "2022 - 2024",
      description: "Mentored over 20+ aspiring developers in full-stack engineering, guiding them from fundamentals to production-ready projects.",
      icon: MdPeople,
      metrics: ["20+ Mentees", "Workshops", "Leadership"]
    },
    {
      title: "Freelance Success",
      year: "2023 - 2024",
      description: "Delivered 15+ high-impact web applications for global clients, ensuring 100% satisfaction and high-performance business solutions.",
      icon: MdTrendingUp,
      metrics: ["15+ Projects", "5-Star Rated", "Agile"]
    },
    {
      title: "Certification Excellence",
      year: "2022 - 2024",
      description: "Validated technical expertise with professional certifications from Meta and Interactive Cares in Full-Stack and React Engineering.",
      icon: MdVerified,
      metrics: ["Meta Certified", "Laravel Expert", "Continuous Learning"]
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "20+", label: "Mentored Students" },
    { number: "5+", label: "Certifications" }
  ];

  return (
    <section className="bg-[#09101A] py-16 md:py-24 px-4 overflow-hidden" id="achievements">
      <Container>
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="text-[#0ef] italic">Achievements</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#0ef] to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            A track record of professional milestones, technical excellence, and industry recognition 
            that drives my passion for building world-class web applications.
          </p>
        </header>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={`achievement-${index}`} 
              achievement={achievement} 
              index={index} 
            />
          ))}
        </div>

        {/* Statistics Banner */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 md:p-14 backdrop-blur-md relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#0ef]/5 rounded-3xl -z-10"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
            {stats.map((stat, index) => (
              <div key={`stat-${index}`} className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-black text-[#0ef] mb-3 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#0ef] transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AchievementsSection;