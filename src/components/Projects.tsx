import React, { useState } from 'react';
import { projectsConfig } from '../data/portfolioData';
import { ProjectItem } from '../data/portfolioData';
import { 
  FolderGit2, 
  Terminal, 
  Code2, 
  Play, 
  Clock, 
  CheckCircle2, 
  Info, 
  ChevronRight,
  Calculator,
  Vote
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  // Interactive state for Project 01 (Student Grade Calculator)
  const [marksInput, setMarksInput] = useState<string>('85');
  const [calculatedGrade, setCalculatedGrade] = useState<string>('A (Excellent)');

  const handleCalculateGrade = (val: string) => {
    setMarksInput(val);
    const marks = parseFloat(val);
    if (isNaN(marks)) {
      setCalculatedGrade('Please enter a valid number');
      return;
    }
    if (marks > 100 || marks < 0) {
      setCalculatedGrade('Marks must be between 0 and 100');
    } else if (marks >= 90) {
      setCalculatedGrade('A+ (Outstanding)');
    } else if (marks >= 80) {
      setCalculatedGrade('A (Excellent)');
    } else if (marks >= 70) {
      setCalculatedGrade('B (Good)');
    } else if (marks >= 60) {
      setCalculatedGrade('C (Satisfactory)');
    } else if (marks >= 50) {
      setCalculatedGrade('D (Pass)');
    } else {
      setCalculatedGrade('F (Needs Improvement)');
    }
  };

  // Interactive state for Project 02 (Voting Eligibility Calculator)
  const [ageInput, setAgeInput] = useState<string>('19');
  const [votingResult, setVotingResult] = useState<string>('Eligible to vote in democratic elections!');

  const handleCalculateVoting = (val: string) => {
    setAgeInput(val);
    const age = parseInt(val, 10);
    if (isNaN(age)) {
      setVotingResult('Please enter a valid age');
      return;
    }
    if (age < 0 || age > 120) {
      setVotingResult('Please enter a realistic age');
    } else if (age >= 18) {
      setVotingResult('Eligible to vote in democratic elections!');
    } else {
      const yearsLeft = 18 - age;
      setVotingResult(`Not eligible yet. You can vote in ${yearsLeft} year(s).`);
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRACTICAL WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsConfig.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl group relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                    {project.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-950/60 text-blue-300 border border-blue-500/30">
                    {project.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technology Pill */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-mono text-zinc-400">Technology:</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-950 border border-zinc-800 text-indigo-300">
                    {project.technology}
                  </span>
                </div>
              </div>

              {/* Interactive Python Demonstration Accordion */}
              <div className="border-t border-zinc-800/80 pt-5 space-y-4">
                <button
                  onClick={() => setActiveDemo(activeDemo === project.id ? null : project.id)}
                  className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 font-mono transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{activeDemo === project.id ? 'Hide Interactive Logic' : 'Run / View Python Logic'}</span>
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${
                      activeDemo === project.id ? 'rotate-90 text-indigo-400' : ''
                    }`}
                  />
                </button>

                {/* Interactive Demo Panel */}
                {activeDemo === project.id && (
                  <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800/80 space-y-3 font-mono text-xs animate-in fade-in duration-200">
                    {project.demoType === 'grades' ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-1 border-b border-zinc-800">
                          <span>Interactive Logic Runner</span>
                          <span className="text-indigo-400">python grade_calc.py</span>
                        </div>
                        <div>
                          <label className="block text-zinc-400 mb-1 text-[11px]">
                            Enter marks (0 - 100):
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={marksInput}
                            onChange={(e) => handleCalculateGrade(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs focus:outline-none focus:border-indigo-500 font-mono"
                          />
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-900/50">
                          <span className="text-zinc-400 block text-[10px] uppercase">Calculated Result:</span>
                          <span className="text-emerald-300 font-bold text-sm">{calculatedGrade}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-1 border-b border-zinc-800">
                          <span>Interactive Logic Runner</span>
                          <span className="text-indigo-400">python voting_calc.py</span>
                        </div>
                        <div>
                          <label className="block text-zinc-400 mb-1 text-[11px]">
                            Enter your age:
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="120"
                            value={ageInput}
                            onChange={(e) => handleCalculateVoting(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs focus:outline-none focus:border-indigo-500 font-mono"
                          />
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-900/50">
                          <span className="text-zinc-400 block text-[10px] uppercase">Calculated Result:</span>
                          <span className="text-cyan-300 font-bold text-xs">{votingResult}</span>
                        </div>
                      </div>
                    )}

                    <pre className="text-[11px] text-zinc-400 bg-zinc-900/80 p-2.5 rounded-lg overflow-x-auto border border-zinc-800/60 max-h-36">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* Button: View Project / Repository Coming Soon */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    disabled
                    title="Code will be uploaded to GitHub repository soon"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-zinc-950/90 text-zinc-400 border border-zinc-800 cursor-not-allowed opacity-80"
                  >
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Repository Coming Soon</span>
                  </button>

                  <span className="text-[11px] font-mono text-zinc-400">
                    Beginner Practical
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
