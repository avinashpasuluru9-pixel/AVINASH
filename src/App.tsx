import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GenerativeAI } from './components/GenerativeAI';
import { LearningJourney } from './components/LearningJourney';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'education',
      'skills',
      'projects',
      'generative-ai',
      'learning-journey',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050814] text-zinc-100 flex flex-col relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Subtle modern dark navy background grid texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-25 -z-20 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:32px_32px]" 
      />

      {/* Ambient gradient top radial highlight with subtle blue/purple AI gradients */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-900/15 via-blue-900/5 to-transparent pointer-events-none -z-10" />

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Education Timeline */}
        <Education />

        {/* 4. Skills & Technologies */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Exploring Generative AI */}
        <GenerativeAI />

        {/* 7. Learning Journey */}
        <LearningJourney />

        {/* 8. Dedicated GitHub Section (Build. Learn. Share.) */}
        <GitHubSection />

        {/* 9. Connect Section (Let's Connect) */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
