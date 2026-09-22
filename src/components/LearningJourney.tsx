import React from 'react';
import { journeyConfig } from '../data/portfolioData';
import { JourneyStep } from '../data/portfolioData';
import { Compass, ArrowDown, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section id="learning-journey" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {journeyConfig.heading}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full mt-3" />
        </div>

        {/* Vertical/Horizontal Interactive Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Track Line */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-16 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600/40" />

          <div className="space-y-8 md:space-y-12">
            {journeyConfig.steps.map((step: JourneyStep, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Left Column content or spacer */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'}`}>
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-md p-6 shadow-xl hover:border-zinc-700 transition-all group">
                      <div className={`flex items-center gap-2.5 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-xs font-mono text-indigo-400 font-bold">
                          Phase {step.step}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                            step.status === 'In Progress'
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {step.step} — {step.title}
                      </h3>

                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-950 border-2 border-indigo-500 items-center justify-center text-xs font-mono font-bold text-indigo-300 shadow-md shadow-indigo-950 z-10">
                    {step.step}
                  </div>

                  {/* Spacer for opposite side */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
                </div>
              );
            })}
          </div>

          {/* Closing Banner at End: "The journey has just started." */}
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/60 to-purple-950/40 border border-indigo-500/40 shadow-xl backdrop-blur-md">
              <Sparkles className="w-6 h-6 text-indigo-400 mb-2 animate-bounce" />
              <p className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 tracking-wide">
                "{journeyConfig.closingText}"
              </p>
              <span className="text-xs font-mono text-zinc-400 mt-1">
                B.Tech CSE (AI/ML) • First-Year Student
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
