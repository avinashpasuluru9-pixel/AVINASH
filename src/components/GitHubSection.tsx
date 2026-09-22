import React from 'react';
import { githubSectionConfig } from '../data/portfolioData';
import { Github, ArrowUpRight, Terminal, Code, GitCommit, Sparkles } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Futuristic Developer-Style Card */}
        <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-indigo-950/40 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Cyber / Developer Ambient Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4610_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4610_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-left">
              {/* Terminal-style Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-mono text-indigo-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>github.com/avinashpasuluru9-pixel</span>
              </div>

              {/* Heading: Build. Learn. Share. */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {githubSectionConfig.heading}
              </h2>

              {/* Text */}
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {githubSectionConfig.text}
              </p>

              {/* Student Commitment */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-2">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <span>Publishing my learning code, Python exercises, and mini projects.</span>
              </div>
            </div>

            {/* Action Button: Visit GitHub */}
            <div className="shrink-0">
              <a
                id="btn-visit-github"
                href={githubSectionConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-sm sm:text-base transition-all shadow-xl hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <Github className="w-5 h-5 text-zinc-900 group-hover:rotate-6 transition-transform" />
                <span>{githubSectionConfig.buttonText}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
