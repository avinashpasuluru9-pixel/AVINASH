import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, footerConfig } from '../data/portfolioData';
import { Code2, Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900 text-center md:text-left">
          {/* Brand & Role */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold text-base tracking-wider text-white">
                {footerConfig.name}
              </span>
            </div>
            <p className="text-sm text-zinc-300 font-medium">
              {footerConfig.role}
            </p>
            <p className="text-xs text-indigo-400/90 mt-1 font-mono">
              "{footerConfig.quote}"
            </p>
          </div>

          {/* Social Links: GitHub | LinkedIn */}
          <div className="flex items-center gap-4 text-xs font-semibold text-zinc-300">
            <a
              id="footer-github-link"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub</span>
            </a>

            <span className="text-zinc-600">|</span>

            <a
              id="footer-linkedin-link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-indigo-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 text-center sm:text-left">
          <div>{footerConfig.copyright}</div>
          <div className="font-mono text-[11px] text-zinc-500">
            First-Year Undergraduate Portfolio • Computer Science & Engineering (AI/ML)
          </div>
        </div>
      </div>
    </footer>
  );
};
