"use client";
import Container from '@/components/sheard/Contatiner/Container';
import { useState, useEffect } from 'react';

const StatCard = ({ number, label, icon: Icon, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const increment = number / 50;
        const timer2 = setInterval(() => {
          setCount(prev => {
            if (prev >= number) {
              clearInterval(timer2);
              return number;
            }
            return Math.min(prev + increment, number);
          });
        }, 30);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div 
      id={`stat-${label}`}
      className="text-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
    >
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-[#0ef]/10 rounded-full group-hover:bg-[#0ef]/20 transition-colors duration-300">
          <Icon className="text-[#0ef] text-3xl" />
        </div>
      </div>
      <div className="text-4xl font-bold text-white mb-2">
        {Math.floor(count)}+
      </div>
      <div className="text-gray-300 text-lg">{label}</div>
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      number: 2,
      label: "Years Experience",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.777 0-5.454-.343-8-1.308z" />
        </svg>
      ),
      delay: 0
    },
    {
      number: 25,
      label: "Projects Completed",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: 200
    },
    {
      number: 15,
      label: "Happy Clients",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      delay: 400
    },
    {
      number: 12,
      label: "Technologies",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      delay: 600
    }
  ];

  return (
    <section className="bg-slate-900 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-[#0ef]">Achievements</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Numbers that reflect my dedication and expertise in web development
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatisticsSection;
