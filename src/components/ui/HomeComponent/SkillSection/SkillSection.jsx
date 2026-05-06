"use client";
import { useEffect, useRef, useState } from 'react';
import { skills } from '@/index';
import Container from '@/components/sheard/Contatiner/Container';


const SkillSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const calculateDotPosition = (percent) => {
    const radius = 45; // Circle radius in percentage
    const angle = (percent / 100) * 2 * Math.PI; // Angle in radians
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className='bg-dark-bg'>
      <Container>
        <div
          ref={sectionRef}
          className="flex flex-col items-center py-12"
        >
          <h2 className="font-bold text-4xl text-white mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 max-w-5xl">
            {skills.map((skill) => {
              const { x, y } = calculateDotPosition(skill.percent);

              return (
                <div
                  key={skill.name}
                  className="relative flex items-center justify-center bg-[#1b2a40] rounded-full shadow-2xl p-6 w-36 h-36 transform transition-transform duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgb(0,42,71)] to-[#001c2a] opacity-30 rounded-full"></div>
                  <div
                    className={`relative flex flex-col items-center justify-center
                       z-10 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
                  >
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="8"
                          fill="none"
                        ></circle>
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="#0ef"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="283"
                          strokeDashoffset={isVisible ? 283 - (283 * skill.percent) / 100 : 283}
                          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        ></circle>
                      </svg>
                      <div
                        className="absolute flex items-center justify-center"
                        style={{
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                          transition: 'transform 1s ease, background-color 0.5s ease',
                        }}
                      >
                        {/* Dot or additional content can go here */}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center 
                    text-center text-white">
                      <h2 className="text-2xl font-semibold">
                        {isVisible ? skill.percent : '0'}
                        <span>%</span>
                      </h2>
                      <div className="text-sm text-gray-300 mt-1">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SkillSection;
