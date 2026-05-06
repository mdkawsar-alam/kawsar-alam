import AboutMe from "@/components/ui/HomeComponent/AboutMe/AboutMe";
import EducationSection from "@/components/ui/HomeComponent/EducationSection/EducationSection";
import HeroSection from "@/components/ui/HomeComponent/HeroSection/HeroSection";
import Projects from "@/components/ui/HomeComponent/ProjectSection/ProjectSection";
import Services from "@/components/ui/HomeComponent/ServiceSection/ServiceSection";
import Testimonial from "@/components/ui/HomeComponent/TestimonialSection/TestimonialSection";
import WorkExperience from "@/components/ui/HomeComponent/WorkExperience/WorkExperience";
import StatisticsSection from "@/components/ui/HomeComponent/StatisticsSection/StatisticsSection";
import CallToAction from "@/components/ui/HomeComponent/CallToAction/CallToAction";
import Footer from "@/components/sheard/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <AboutMe /> */}
      <Services />
      <Projects />
      <WorkExperience />
      <EducationSection />
      <Testimonial />
      <StatisticsSection />
      <CallToAction />
      {/* <Footer /> */}
    </div>
  );
}
