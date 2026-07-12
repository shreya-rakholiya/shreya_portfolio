import React from "react";
import { Server, Zap, Cpu, Workflow, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Server: <Server className="w-6 h-6 text-cyan-400" />,
    Zap: <Zap className="w-6 h-6 text-emerald-400" />,
    Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
    Workflow: <Workflow className="w-6 h-6 text-cyan-400" />,
  };

  return (
    <section id="services" className="scroll-mt-12 md:scroll-mt-6 py-10 md:py-14 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          tag="What I Build"
          title="Architectural Specializations"
          description="High-throughput infrastructure built for resilience, low latency, and production reliability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.services.map((service) => (
            <Card
              key={service.id}
              className="p-8 flex flex-col justify-between !bg-transparent !border-2 !border-cyan-400 hover:!border-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.35)]"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-md">
                    {iconMap[service.iconName] || (
                      <Server className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
