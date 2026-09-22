import React from 'react';
import { genAIConfig } from '../data/portfolioData';
import { GenAICard } from '../data/portfolioData';
import { 
  Sparkles, 
  Wrench, 
  TerminalSquare, 
  Code, 
  Cpu, 
  Bot,
  Brain,
  Layers,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5 text-blue-400" />,
  TerminalSquare: <TerminalSquare className="w-5 h-5 text-indigo-400" />,
  Code: <Code className="w-5 h-5 text-purple-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
};

export const GenerativeAI: React.FC = () => {
  return (
    <section id="generative-ai" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/40 text-xs font-mono text-indigo-300 mb-3 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span>{genAIConfig.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {genAIConfig.heading}
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
            {genAIConfig.description}
          </p>

          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full mt-4" />
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {genAIConfig.cards.map((card: GenAICard, index: number) => (
            <div
              key={card.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all shadow-lg group relative overflow-hidden"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[card.iconName] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    {card.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Card Detail */}
              <div className="pt-4 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>0{index + 1} // GEN-AI</span>
                <span className="text-indigo-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Active Study <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
