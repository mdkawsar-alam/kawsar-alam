"use client";
import Container from '@/components/sheard/Contatiner/Container';
import { useState, useEffect } from 'react';
import { MdSchool, MdCalendarToday, MdLocationOn, MdGrade, MdVerified } from 'react-icons/md';

const EducationItem = ({ education, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`relative pl-8 pb-12 group transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`}>
      {/* Vertical Timeline Line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-slate-800 group-last:h-1/2">
        <div className="absolute top-0 left-[-7px] w-4 h-4 rounded-full bg-slate-900 border-2 border-[#0ef] z-10 shadow-[0_0_10px_#0ef]" />
      </div>

      <div className="bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:border-[#0ef]/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#0ef] transition-colors">
              {education.degree}
            </h3>
            <p className="text-[#0ef] font-semibold text-lg">{education.institution}</p>
          </div>
          <div className="flex items-center bg-[#0ef]/10 px-4 py-2 rounded-xl border border-[#0ef]/20">
            <MdGrade className="text-[#0ef] mr-2 text-xl" />
            <span className="text-white font-bold">{education.gpa}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
          <span className="flex items-center"><MdCalendarToday className="mr-2 text-[#0ef]" />{education.duration}</span>
          <span className="flex items-center"><MdLocationOn className="mr-2 text-[#0ef]" />{education.location}</span>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6 italic border-l-2 border-slate-600 pl-4">
          {education.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {education.courses.map((course, idx) => (
            <span key={idx} className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 bg-slate-900/50 text-gray-400 border border-slate-700 rounded-md">
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationTimeline = () => {
  const education = [
    {
      degree: "Diploma in Computer Science & Technology",
      institution: "Comilla Polytechnic Institute",
      duration: "2019 - 2023",
      location: "Comilla, Bangladesh",
      gpa: "3.59/4.0",
      description: "Specialized in System Architecture and Algorithm Optimization. Developed a deep understanding of full-stack engineering and relational database design.",
      courses: ["Data Structures", "OOP", "RDBMS", "Software Engineering", "Web Dev", "Networking"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Textile Vocational Institute",
      duration: "2017 - 2019",
      location: "Dhaka, Bangladesh", 
      gpa: "4.29/5.0",
      description: "Focused on technical sciences and foundational computer science principles.",
      courses: ["Advanced Math", "Physics", "Chemistry", "CS Essentials"]
    }
  ];

  const certifications = [
    {
      name: "Meta Front-End Developer",
      issuer: "Meta (Facebook)",
      date: "2023",
      description: "Mastered React.js, UI/UX design, and professional frontend workflows."
    },
    {
      name: "Full-Stack MERN Development",
      issuer: "WIT Institute",
      date: "2023",
      description: "Build scalable applications using MongoDB, Express, React, and Node.js."
    },
    {
      name: "PHP & Laravel Full-Stack",
      issuer: "Interactive Cares",
      date: "2024", 
      description: "Advanced backend architecture, MVC patterns, and REST API integration."
    }
  ];

  return (
    <section className="py-20 bg-[#09101A] relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#0ef]/5 rounded-full blur-[100px]" />

      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Academic <span className="text-[#0ef]">Milestones</span>
          </h2>
          <p className="text-gray-400 text-lg">Education & Professional Verifications</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <MdSchool className="text-[#0ef] text-3xl" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Education</h3>
            </div>
            <div className="space-y-2">
              {education.map((edu, idx) => (
                <EducationItem key={idx} education={edu} index={idx} />
              ))}
            </div>
          </div>

          {/* Right Column: Certifications Grid */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <MdVerified className="text-[#0ef] text-3xl" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Certifications</h3>
            </div>
            <div className="grid gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-2xl hover:scale-[1.02] transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <MdVerified className="text-[#0ef] text-4xl" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1 pr-10">{cert.name}</h4>
                  <p className="text-[#0ef] text-sm font-medium mb-3">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs mb-4 flex items-center">
                    <MdCalendarToday className="mr-2" /> {cert.date}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EducationTimeline;