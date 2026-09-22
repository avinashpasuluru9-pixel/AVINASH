import React from 'react';
import { educationConfig } from '../data/portfolioData';
import { GraduationCap, Calendar, CheckCircle2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Education Timeline Card */}
        <div className="relative">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 shadow-xl relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Core Degree & Description */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Status: {educationConfig.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    Year: {educationConfig.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {educationConfig.degree}
                </h3>

                <p className="text-zinc-300 text-base leading-relaxed bg-zinc-950/40 p-4 rounded-xl border border-zinc-800/70">
                  {educationConfig.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Foundational Areas Being Studied:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {educationConfig.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Timeline Roadmap Visualization */}
              <div className="lg:col-span-5 rounded-xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800">
                  <span>Undergraduate Program</span>
                  <span className="text-indigo-400 font-semibold">{educationConfig.timeline}</span>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Year 1 */}
                  <div className="flex items-start gap-3 relative">
                    <div className="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-500 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-bold text-white">First Year (Current)</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                          Active
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Core programming, web fundamentals, discrete math & logic
                      </p>
                    </div>
                  </div>

                  {/* Year 2 */}
                  <div className="flex items-start gap-3 opacity-60">
                    <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-300">Second Year</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Data structures, algorithms, object-oriented concepts, probability
                      </p>
                    </div>
                  </div>

                  {/* Year 3 */}
                  <div className="flex items-start gap-3 opacity-40">
                    <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-300">Third Year</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Machine Learning, Deep Learning, Neural Networks & NLP
                      </p>
                    </div>
                  </div>

                  {/* Year 4 */}
                  <div className="flex items-start gap-3 opacity-30">
                    <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-300">Fourth Year</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Advanced AI systems, Generative AI models & capstone projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
