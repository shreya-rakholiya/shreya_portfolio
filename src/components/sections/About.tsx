import React from "react";
import { Terminal, ShieldCheck, Rocket } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-12 md:scroll-mt-6 py-10 md:py-14 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          tag="About Me"
          title={portfolioData.about.tagline}
          description="Engineering high-concurrency server infrastructure with precision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Side Bio Info - Normal text with vertical bar at the start of paragraphs */}
          <div className="lg:col-span-2 space-y-6 border-l border-cyan-400 pl-6">
            <div className="space-y-6 text-base md:text-lg text-slate-300 leading-relaxed">
              {portfolioData.about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Side Cards with Cyan Border */}
          <div className="space-y-6">
            <Card className="p-6 !bg-transparent !border-2 !border-cyan-400 hover:!border-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.35)]">
              <div className="flex items-center gap-3 mb-3">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <h4 className="font-bold text-white">System Reliability</h4>
              </div>
              <p className="text-sm text-slate-400">
                Architecting stateless microservices and stateful game servers designed to survive spikes and network partitions.
              </p>
            </Card>

            <Card className="p-6 !bg-transparent !border-2 !border-cyan-400 hover:!border-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.35)]">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-white">Security & Integrity</h4>
              </div>
              <p className="text-sm text-slate-400">
                End-to-end webhook validation, secure JWT auth, Razorpay live signatures, and strict rate-limiting.
              </p>
            </Card>

            <Card className="p-6 !bg-transparent !border-2 !border-cyan-400 hover:!border-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.35)]">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-5 h-5 text-purple-400" />
                <h4 className="font-bold text-white">Production Velocity</h4>
              </div>
              <p className="text-sm text-slate-400">
                Delivering maintainable TypeScript codebases with Docker containers and CI/CD automation.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
