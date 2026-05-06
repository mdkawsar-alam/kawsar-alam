"use client";
import Container from '@/components/sheard/Contatiner/Container';
import { useState, useEffect } from 'react';
import { 
  MdCode, 
  MdCameraAlt, 
  MdSportsSoccer, 
  MdBook, 
  MdTravelExplore,
  MdLightbulb,
  MdLanguage,
  MdKeyboard
} from 'react-icons/md';

const InterestCard = ({ interest, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`bg-slate-800 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700 hover:border-[#0ef]/40 transition-all duration-300 transform hover:-translate-y-2 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="flex items-center mb-4">
        <div className="p-3 bg-[#0ef]/10 rounded-lg mr-4">
          <interest.icon className="text-[#0ef] text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">{interest.title}</h3>
      </div>
      
      <p className="text-gray-400 text-sm mb-5 leading-relaxed">{interest.description}</p>
      
      {interest.details && (
        <div className="space-y-2">
          {interest.details.map((detail, detailIndex) => (
            <div key={detailIndex} className="flex items-center text-xs font-medium text-gray-400">
              <div className="w-1.5 h-1.5 bg-[#0ef] rounded-full mr-3 shadow-[0_0_5px_#0ef]"></div>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PersonalInterests = () => {
  const interests = [
    {
      title: "Tech Exploration",
      icon: MdCode,
      description: "Constantly researching emerging technologies to build scalable, future-proof web applications and digital solutions.",
      details: [
        "Open Source Contribution",
        "System Architecture Design",
        "Edge Computing Trends",
        "Modern JS Frameworks"
      ]
    },
    {
      title: "Visual Storytelling",
      icon: MdCameraAlt,
      description: "Photography hones my attention to detail and composition, directly influencing my UI/UX design philosophy.",
      details: [
        "Digital Post-Processing",
        "Visual Composition",
        "Perspective Analysis",
        "Lighting & Color Theory"
      ]
    },
    {
      title: "Strategic Fitness",
      icon: MdSportsSoccer,
      description: "Active sports improve my teamwork, discipline, and stamina, keeping my mind sharp for complex problem-solving.",
      details: [
        "Competitive Football",
        "Endurance Training",
        "Team Leadership",
        "Mind-Body Balance"
      ]
    },
    {
      title: "Knowledge Growth",
      icon: MdBook,
      description: "A commitment to lifelong learning through technical documentation, personal development, and case studies.",
      details: [
        "Software Engineering Books",
        "Leadership Psychology",
        "Technical Whitepapers",
        "Online Certification"
      ]
    }
  ];

  const funFacts = [
    { icon: MdKeyboard, text: "80+ WPM Professional Typing Speed" },
    { icon: MdTravelExplore, text: "Explored 5+ Countries & Cultures" },
    { icon: MdLanguage, text: "Multilingual: Fluent in 3 Languages" },
    { icon: MdBook, text: "50+ Books & Research Papers Read Yearly" },
    { icon: MdLightbulb, text: "Passionate Open-Source Advocate" }
  ];

  return (
    <section className="py-20 bg-[#09101A]" id="interests">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Personal <span className="text-[#0ef]">Interests</span>
          </h2>
          <div className="h-1 w-20 bg-[#0ef] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The passions and pursuits that fuel my creativity, discipline, and unique perspective as a developer.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {interests.map((interest, index) => (
            <InterestCard key={index} interest={interest} index={index} />
          ))}
        </div>

        {/* Fun Facts Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Quick <span className="text-[#0ef]">Insights</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <div 
                key={index}
                className="flex items-center p-5 bg-slate-900/50 border border-slate-700/50 rounded-xl hover:border-[#0ef]/30 hover:bg-slate-800 transition-all duration-300 group"
              >
                <fact.icon className="text-[#0ef] text-2xl mr-4 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 font-medium text-sm md:text-base">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PersonalInterests;