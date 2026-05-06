"use client";
import Container from '@/components/sheard/Contatiner/Container';
import { useState, useEffect } from 'react';
import { MdWork, MdLocationOn, MdCalendarToday, MdStar } from 'react-icons/md';

const TimelineItem = ({ experience, index, isLeft }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'} items-center mb-12 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } transition-all duration-500`}>
      
      {/* Content Card */}
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-[#0ef]/50 transition-all duration-300 relative overflow-hidden group">
          
          {/* Best Performer Badge */}
          {experience.achievement && (
            <div className="absolute top-0 right-0 bg-[#0ef] text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 animate-pulse">
              <MdStar /> {experience.achievement.toUpperCase()}
            </div>
          )}

          <div className="flex items-center mb-4">
            <div className="p-2 bg-[#0ef]/10 rounded-full mr-3 group-hover:bg-[#0ef] group-hover:text-black transition-colors duration-300">
              <MdWork className="text-[#0ef] group-hover:text-inherit text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
              <p className="text-[#0ef] font-medium">{experience.company} <span className="text-gray-500 text-xs ml-2">({experience.type})</span></p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-3 gap-y-2">
            <div className="flex items-center mr-4">
              <MdCalendarToday className="mr-2 text-[#0ef]" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center">
              <MdLocationOn className="mr-2 text-[#0ef]" />
              <span>{experience.location}</span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-slate-900 border border-slate-700 text-[#0ef] text-xs rounded-md hover:bg-[#0ef]/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Central Dot on Timeline */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0ef] rounded-full border-4 border-slate-900 z-10"></div>
      
      <div className="hidden md:block w-1/2"></div>
    </div>
  );
};

const WorkTimeline = () => {
  const experiences = [
    {
      position: "Web Developer",
      company: "AJ Global IT",
      duration: "2024 - 2025",
      location: "Dhaka, Bangladesh (Onsite)",
      type: "Full-time",
      description: "Driving full-stack development for high-traffic e-commerce platforms. Executing end-to-end web solutions with a focus on MySQL database optimization and PHP Laravel backend integration.",
      technologies: ["PHP Laravel", "MySQL", "JavaScript", "Tailwind CSS", "REST APIs"]
    },
    {
      position: "Front-End Web Developer",
      company: "Edulife IT Institute",
      duration: "2023 - 2024",
      location: "Khagrachari, Bangladesh (Onsite)",
      type: "Full-time",
      achievement: "Best Performer",
      description: "Recognized as 'Best Performer of the Month' for delivering high-quality UI components ahead of schedule. Engineered responsive applications using React/Next.js and focused on performance optimization.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"]
    },
    {
      position: "Web Development Mentor",
      company: "WIT Institute",
      duration: "2021 - 2022",
      location: "Dhaka, Bangladesh",
      type: "Part-time",
      description: "Facilitated technical training for students on modern web stacks. Led code reviews and mentored learners through the development of production-ready portfolio applications.",
      technologies: ["JavaScript (ES6+)", "React", "Git", "GitHub", "Responsive Design"]
    }
  ];

  return (
    <section className="py-20 bg-[#09101A] overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-[#0ef]">Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#0ef] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional growth, technical contributions, and recognized achievements.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#0ef] via-blue-500 to-transparent opacity-30"></div>
          
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={index} 
                experience={experience} 
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkTimeline;