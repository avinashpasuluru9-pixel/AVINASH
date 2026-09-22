import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Sparkles, Binary, Code2, Network } from 'lucide-react';

export const AbstractAIVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visual' | 'code'>('visual');

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Glassmorphic Container */}
      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-5 shadow-2xl overflow-hidden">
        {/* Terminal / Visual Header */}
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/70" />
            <div className="w-3 h-3 rounded-full bg-amber-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-xs font-mono text-zinc-400">
              avinash_ai_student.py
            </span>
          </div>

          {/* View toggle */}
          <div className="flex items-center bg-zinc-950/60 rounded-lg p-0.5 border border-zinc-800 text-xs">
            <button
              onClick={() => setActiveTab('visual')}
              className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'visual'
                  ? 'bg-indigo-600/30 text-indigo-300 font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Network className="w-3 h-3" />
              <span>Network</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-indigo-600/30 text-indigo-300 font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>Python</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'visual' ? (
          <div className="relative h-64 sm:h-72 w-full flex items-center justify-center overflow-hidden rounded-xl bg-zinc-950/70 border border-zinc-800/50 p-4">
            {/* Grid texture background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:16px_16px]" />

            {/* Neural Network SVG Graph */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Connecting Edges */}
              <line x1="20%" y1="28%" x2="50%" y2="40%" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="20%" y1="50%" x2="50%" y2="40%" stroke="url(#lineGrad1)" strokeWidth="1.5" />
              <line x1="20%" y1="72%" x2="50%" y2="60%" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 2" />
              
              <line x1="50%" y1="40%" x2="80%" y2="35%" stroke="url(#lineGrad2)" strokeWidth="1.5" />
              <line x1="50%" y1="40%" x2="80%" y2="65%" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50%" y1="60%" x2="80%" y2="35%" stroke="url(#lineGrad2)" strokeWidth="1.5" />
              <line x1="50%" y1="60%" x2="80%" y2="65%" stroke="url(#lineGrad2)" strokeWidth="1.5" />
            </svg>

            {/* Layer 1 Nodes (Input: Fundamentals) */}
            <div className="absolute left-[16%] flex flex-col gap-6 items-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-md shadow-indigo-950"
                title="Python"
              >
                <Code2 className="w-5 h-5" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-950"
                title="Web Basics"
              >
                <Binary className="w-5 h-5" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-950"
                title="Math & Logic"
              >
                <Cpu className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Layer 2 Nodes (Hidden: Processing & Practice) */}
            <div className="absolute left-[45%] flex flex-col gap-8 items-center">
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="px-3 py-2 rounded-xl bg-indigo-950/60 border border-indigo-500/50 backdrop-blur-md flex items-center gap-2 text-indigo-200 text-xs font-mono shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                <span>Hands-on Code</span>
              </motion.div>
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="px-3 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/50 backdrop-blur-md flex items-center gap-2 text-cyan-200 text-xs font-mono shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Problem Solving</span>
              </motion.div>
            </div>

            {/* Layer 3 Nodes (Output: AI/ML Exploration) */}
            <div className="absolute right-[14%] flex flex-col gap-8 items-center">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="w-11 h-11 rounded-xl bg-zinc-900 border border-indigo-400/60 flex items-center justify-center text-indigo-300 shadow-lg shadow-indigo-900/50"
                title="Generative AI"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="w-11 h-11 rounded-xl bg-zinc-900 border border-emerald-400/60 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-900/50"
                title="AI / ML Foundation"
              >
                <Network className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Floating Status Pill */}
            <div className="absolute bottom-2.5 inset-x-4 flex justify-between items-center text-[11px] font-mono text-zinc-400 bg-zinc-900/90 py-1.5 px-3 rounded-lg border border-zinc-800">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                First-Year Foundation
              </span>
              <span className="text-zinc-400">CSE (AI/ML)</span>
            </div>
          </div>
        ) : (
          <div className="h-64 sm:h-72 w-full rounded-xl bg-zinc-950 p-4 font-mono text-xs text-zinc-300 overflow-x-auto border border-zinc-800/60 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="text-zinc-500"># Avinash - First-Year B.Tech Student</div>
              <div>
                <span className="text-pink-400">class</span> <span className="text-indigo-400">AIMLStudent</span>:
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">name</span> = <span className="text-emerald-300">"AVINASH"</span>
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">degree</span> = <span className="text-emerald-300">"B.Tech CSE (AI/ML)"</span>
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">year</span> = <span className="text-amber-400">1</span>
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">focus_areas</span> = [
              </div>
              <div className="pl-8 text-emerald-300">
                "Python Programming",<br />
                "Web Development Basics",<br />
                "Generative AI Exploration",<br />
                "Problem Solving"<br />
              </div>
              <div className="pl-4">]</div>
              <div className="pl-4">
                <span className="text-pink-400">def</span> <span className="text-indigo-400">learn_by_building</span>(self):
              </div>
              <div className="pl-8 text-zinc-400">
                <span className="text-pink-400">return</span> <span className="text-emerald-300">"Building projects daily..."</span>
              </div>
            </div>
            
            <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex justify-between">
              <span>status: active_learner</span>
              <span className="text-indigo-400">python 3.12</span>
            </div>
          </div>
        )}

        {/* Footer Feature Badges */}
        <div className="mt-3.5 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/70">
            <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Language</span>
            <span className="font-semibold text-zinc-200">Python</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/70">
            <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Specialization</span>
            <span className="font-semibold text-indigo-300">AI / ML</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/70">
            <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Method</span>
            <span className="font-semibold text-cyan-300">Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};
