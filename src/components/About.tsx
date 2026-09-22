import React from 'react';
import { aboutConfig } from '../data/portfolioData';
import { GraduationCap, Cpu, Hammer, Sparkles, User, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  Hammer: <Hammer className="w-5 h-5 text-purple-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {aboutConfig.heading}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Paragraphs Container */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 space-y-5 shadow-xl">
              {aboutConfig.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Honest representation: Actively learning without inflated claims.</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Small Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutConfig.infoCards.map((card, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-5 flex flex-col justify-between hover:border-indigo-500/40 hover:bg-zinc-900 transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {iconMap[card.iconName]}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    {card.title}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {card.subtitle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
