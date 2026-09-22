import React from 'react';
import { skillsConfig } from '../data/portfolioData';
import { SkillCategory } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Sparkles, 
  BrainCircuit, 
  ShieldCheck,
  FileCode,
  Layers,
  Wrench,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

const categoryIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Layout: <Layout className="w-5 h-5 text-indigo-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
};

const getLevelBadge = (level: 'Basic' | 'Beginner' | 'Learning') => {
  switch (level) {
    case 'Basic':
      return (
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-500/40">
          Basic
        </span>
      );
    case 'Beginner':
      return (
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/40">
          Beginner
        </span>
      );
    case 'Learning':
      return (
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-purple-950/70 text-purple-300 border border-purple-500/40">
          Learning
        </span>
      );
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-purple-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SKILLS & TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Honest Level Indicator Note */}
        <div className="mb-10 p-4 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Honest Student Skill Assessment:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-md font-mono text-[11px] border bg-emerald-950/70 text-emerald-300 border-emerald-500/40">
                Basic
              </span>
              <span className="text-zinc-400 text-[11px]">Core syntax & fundamentals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-md font-mono text-[11px] border bg-blue-950/70 text-blue-300 border-blue-500/40">
                Beginner
              </span>
              <span className="text-zinc-400 text-[11px]">Initial concepts & experimentation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-md font-mono text-[11px] border bg-purple-950/70 text-purple-300 border-purple-500/40">
                Learning
              </span>
              <span className="text-zinc-400 text-[11px]">Ongoing daily study</span>
            </div>
          </div>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsConfig.map((category: SkillCategory) => (
            <div
              key={category.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 space-y-4 hover:border-zinc-700 transition-all shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
                <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  {categoryIconMap[category.iconName]}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills in Category */}
              <div className="space-y-2.5 pt-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70 flex items-center justify-between hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span className="text-sm font-medium text-zinc-200">
                        {skill.name}
                      </span>
                    </div>
                    <div>{getLevelBadge(skill.level)}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
