import React from 'react';
import Navigation from './components/Navigation';
import SpaceBackground from './components/SpaceBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import EducationSection from './components/EducationSection';
import VideoResumeSection from './components/VideoResumeSection';
import FooterSection from './components/FooterSection';
import FloatingAstronaut from './components/FloatingAstronaut';
import ScrollIndicator from './components/ScrollIndicator';
import BlogSection from './components/BlogSection';

function App() {
  // Easter egg console message
  React.useEffect(() => {
    console.log("Hey recruiter 👀 — you've found Ravi's secret tech vault!");
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-x-hidden">
      <SpaceBackground />
      <Navigation />
      <FloatingAstronaut />
      <ScrollIndicator />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <TechStackSection />
        <EducationSection />
        <VideoResumeSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;