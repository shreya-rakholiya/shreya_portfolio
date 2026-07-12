import React from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-12 md:scroll-mt-6 py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          tag="Selected Work"
          title="Production Systems & Applications"
          description="High-throughput backends, real-time game servers, and automated pipelines shipped to production."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <Card
              key={project.id}
              className="!bg-gradient-to-br !from-cyan-400 !to-emerald-400 !text-slate-950 flex flex-col justify-between h-full group p-8 !border-none shadow-[0_10px_35px_-5px_rgba(6,182,212,0.4)] hover:!shadow-[0_15px_45px_-5px_rgba(16,185,129,0.55)]"
            >
              <div>
                {/* Header with Title and Live Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-extrabold !text-slate-950 transition-colors">
                    {project.title}
                  </h3>
                  <Badge
                    variant={
                      project.badge.includes("Live") ? "status" : "tag"
                    }
                    className="shrink-0 w-fit !bg-slate-950/20 !text-slate-950 !border-slate-950/30 font-bold"
                  >
                    {project.badge}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base font-semibold !text-slate-900 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Detailed Bullets from Resume */}
                {project.bullets && project.bullets.length > 0 && (
                  <ul className="space-y-2.5 mb-6">
                    {project.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs md:text-sm font-medium !text-slate-950 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 !text-slate-950 shrink-0 mt-0.5 font-bold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-950/25">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 text-xs font-bold rounded-md bg-slate-950/15 text-slate-950 border border-slate-950/30 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Action */}
                {project.liveUrl && project.liveUrl !== "#" ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-extrabold !text-slate-950 hover:opacity-80 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Production</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-xs font-bold !text-slate-800">
                    Production Architecture Shipped
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
