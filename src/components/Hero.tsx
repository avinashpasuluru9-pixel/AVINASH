import React from 'react';
import { motion } from 'motion/react';
import { GITHUB_URL, LINKEDIN_URL, profileConfig } from '../data/portfolioData';
import { AbstractAIVisual } from './AbstractAIVisual';
import { FolderGit2, Github, Linkedin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle blue/purple AI-inspired gradient orbs on deep navy/black */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Subheading, Intro, and 3 Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge: "CSE (AI/ML) • First Year Student" */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-indigo-500/30 text-xs font-semibold text-indigo-300 shadow-sm mb-5 backdrop-blur-md"
              id="hero-student-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <span>{profileConfig.badge}</span>
            </motion.div>

            {/* Main Heading: "Hi, I'm AVINASH" */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-2"
              id="hero-main-heading"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                {profileConfig.name}
              </span>
            </motion.h1>

            {/* Large Secondary Heading: "Computer Science & AI/ML Student" */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-300 mb-5"
              id="hero-secondary-heading"
            >
              {profileConfig.secondaryHeading}
            </motion.h2>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8"
              id="hero-intro"
            >
              {profileConfig.introduction}
            </motion.p>

            {/* Three Buttons: View My Projects, GitHub Profile, LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8"
            >
              {/* Button 1: View My Projects */}
              <a
                id="btn-view-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-indigo-950/60 hover:shadow-indigo-900/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              {/* Button 2: GitHub Profile */}
              <a
                id="btn-github-profile"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-xs sm:text-sm border border-zinc-800 hover:border-zinc-700 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Github className="w-4 h-4 text-zinc-300" />
                <span>GitHub Profile</span>
              </a>

              {/* Button 3: LinkedIn */}
              <a
                id="btn-linkedin-profile"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-950/50 hover:bg-indigo-900/60 text-indigo-300 hover:text-indigo-200 font-medium text-xs sm:text-sm border border-indigo-800/60 hover:border-indigo-700 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            {/* Quick Tech Highlights */}
            <div className="pt-4 border-t border-zinc-800/80 w-full flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Python Beginner
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Web Dev Basics
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Generative AI
              </span>
            </div>
          </div>

          {/* Right Column: Abstract AI / Developer Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex justify-center"
            id="hero-abstract-visual"
          >
            <AbstractAIVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
