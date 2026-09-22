import React, { useState } from 'react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS, connectConfig } from '../data/portfolioData';
import { 
  MessageSquare, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {connectConfig.heading}
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
            {connectConfig.text}
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Three Connected Cards: GitHub, LinkedIn, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. GitHub Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-105 transition-all mb-4">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                GitHub
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                @avinashpasuluru9-pixel
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Explore student repositories, Python scripts, and beginner development code.
              </p>
            </div>

            <a
              id="connect-card-github"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold transition-colors"
            >
              <span>View GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* 2. LinkedIn Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 flex flex-col justify-between hover:border-indigo-800/60 transition-all shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:scale-105 transition-all mb-4">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-1">
                LinkedIn
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Avinash Pasuluru
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Connect with me on LinkedIn for academic discussions and student networking.
              </p>
            </div>

            <a
              id="connect-card-linkedin"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-indigo-950/70 hover:bg-indigo-900/80 text-indigo-300 hover:text-indigo-200 border border-indigo-800/60 text-xs font-semibold transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
            </a>
          </div>

          {/* 3. Email Card with editable placeholder */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-105 transition-all mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Email
              </span>
              <h3 className="text-base font-bold font-mono text-white mb-2 truncate">
                {EMAIL_ADDRESS}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Editable placeholder. Update with your real address anytime in <code className="text-indigo-300">src/data/portfolioData.ts</code>.
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied placeholder!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy Placeholder</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
