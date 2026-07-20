import React from "react";
import { portfolioData } from "../../data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyan-500/30 bg-gradient-to-br from-cyan-400 to-emerald-400 py-12 text-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-bold text-slate-950">
            © {new Date().getFullYear()} {portfolioData.name}
          </p>
        </div>
        <div className="flex items-center gap-6 font-bold">
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-950 hover:text-slate-800 underline-offset-4 hover:underline transition-all"
          >
            LinkedIn
          </a>
          {/* <a
            href="https://matchly.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-950 hover:text-slate-800 underline-offset-4 hover:underline transition-all"
          >
            matchly.me
          </a> */}
          {/* <a
            href="https://genxi.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-950 hover:text-slate-800 underline-offset-4 hover:underline transition-all"
          >
            genxi.io
          </a> */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-sm text-slate-950 hover:text-slate-800 underline-offset-4 hover:underline transition-all"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
