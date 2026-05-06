"use client";
import Container from '@/components/sheard/Contatiner/Container';
import { skills, softSkills } from '@/index';
import { useState, useEffect } from 'react';

const SkillCard = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
        <span className="text-[#0ef] font-bold">{skill.percent}%</span>
      </div>
      
      <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
        <div 
          className="bg-gradient-to-r from-[#0ef] to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.percent}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        ></div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skill.technologies?.map((tech, techIndex) => (
          <span 
            key={techIndex}
            className="px-3 py-1 bg-[#0ef]/10 text-[#0ef] text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsShowcase = () => {

  return (
    <section className="py-16 bg-slate-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-[#0ef]">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-[#0ef] hover:text-black transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsShowcase;
