import React from "react";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden">
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-cyan rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] glow-purple rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Status Badge */}
        {/* <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Globe className="w-3.5 h-3.5" />
          <span>{portfolioData.availability}</span>
        </div> */}

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl">
          <span className="block">{portfolioData.name}</span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            {portfolioData.role.includes("·")
              ? portfolioData.role.split("·")[0].trim()
              : portfolioData.role}
          </span>
          {portfolioData.role.includes("·") && (
            <span className="block text-3xl sm:text-5xl lg:text-6xl text-slate-300 font-bold mt-2">
              · {portfolioData.role.split("·")[1].trim()}
            </span>
          )}
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
          {portfolioData.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects" variant="primary" size="lg">
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            <span>Get in Touch</span>
          </Button>
        </div>

        {/* Key Metrics / Stats Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-xs md:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
