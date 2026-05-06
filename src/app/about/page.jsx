import AboutMe from '@/components/ui/HomeComponent/AboutMe/AboutMe';
import SkillsShowcase from '@/components/ui/HomeComponent/SkillsShowcase/SkillsShowcase';
import EducationTimeline from '@/components/ui/HomeComponent/EducationTimeline/EducationTimeline';
import WorkTimeline from '@/components/ui/HomeComponent/WorkTimeline/WorkTimeline';
import AchievementsSection from '@/components/ui/HomeComponent/AchievementsSection/AchievementsSection';
import PersonalInterests from '@/components/ui/HomeComponent/PersonalInterests/PersonalInterests';
import Container from '@/components/sheard/Contatiner/Container';
import React from 'react';

const About = () => {
    return (
      <div className="pt-20 bg-[#09101A]">
        {/* Hero Section */}
       

        {/* Personal Story */}
        <AboutMe />

        {/* Skills Showcase */}
        <SkillsShowcase />

        {/* Work Experience Timeline */}
        <WorkTimeline />

        {/* Education Timeline */}
        <EducationTimeline />

        {/* Achievements */}
        <AchievementsSection />

        {/* Personal Interests */}
        <PersonalInterests />
      </div>
    );
};

export default About;