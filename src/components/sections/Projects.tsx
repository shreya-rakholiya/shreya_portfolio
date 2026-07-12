"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, CheckCircle2, ArrowUpRight, X, Layers } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

const formatBadge = (badge: string) => {
  if (badge.includes("Google Play")) return "Play Store";
  if (badge.includes("Live ·")) return "Live";
  if (badge.includes("Production ·")) return "Production";
  return badge;
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioData.projects)[0] | null
  >(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
              className="!bg-gradient-to-br !from-cyan-400 !to-emerald-400 !text-slate-950 flex flex-col justify-between h-full group p-7 md:p-8 !border-none shadow-[0_10px_35px_-5px_rgba(6,182,212,0.4)] hover:!shadow-[0_15px_45px_-5px_rgba(16,185,129,0.55)] transition-all"
            >
              <div>
                {/* Header with Title and Short Badge AFTER Title */}
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
                    {formatBadge(project.badge)}
                  </Badge>
                </div>

                {/* Concise Summary Description */}
                <p className="text-sm md:text-base font-semibold !text-slate-900 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Compact Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 text-xs font-bold rounded-md bg-slate-950/15 text-slate-950 border border-slate-950/30 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className="inline-block px-2.5 py-1 text-xs font-bold rounded-md bg-slate-950/25 text-slate-950 border border-slate-950/40">
                      +{project.stack.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-950/25">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl !bg-slate-950 !text-white border border-slate-800 font-extrabold text-sm shadow-xl hover:!bg-slate-900 transition-all cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>

                {project.liveUrl && project.liveUrl !== "#" ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-extrabold !text-slate-950 hover:opacity-80 transition-all"
                  >
                    <span>Live App</span>
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

      {/* Detailed View Pop-up Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-2xl !bg-gradient-to-br !from-cyan-400 !to-emerald-400 !text-slate-950 border border-cyan-300 p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header: Title FIRST, Short Badge AFTER Title, Close Icon */}
            <div className="sticky -top-6 md:-top-8 z-30 -mx-6 -mt-6 px-6 py-4 md:-mx-8 md:-mt-8 md:px-8 bg-gradient-to-r from-cyan-400/95 to-emerald-400/95 backdrop-blur-md border-b border-slate-950/20 flex items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-3 min-w-0">
                <h3 className="text-lg md:text-xl font-extrabold text-slate-950">
                  {selectedProject.title}
                </h3>
                <span className="shrink-0 px-2.5 py-1 text-xs font-bold rounded-full bg-slate-950/20 text-slate-950">
                  {formatBadge(selectedProject.badge)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-xl btn-dark-solid shadow-lg transition-all shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div className="pb-5">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-base font-semibold text-slate-950 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Detailed Architecture & Highlights */}
            {selectedProject.bullets && selectedProject.bullets.length > 0 && (
              <div className="py-5 border-t border-slate-950/20">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Key Technical Highlights & Architecture</span>
                </h4>
                <ul className="space-y-3">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm md:text-base font-medium text-slate-950 leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-slate-950 shrink-0 mt-0.5 font-bold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Complete Tech Stack */}
            <div className="py-5 border-t border-slate-950/20">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                Complete Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-950/15 border border-slate-950/30 text-slate-950"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer with Visit Live App Button Below */}
            {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
              <div className="flex items-center justify-end pt-6 border-t border-slate-950/20 mt-2">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl !bg-slate-950 !text-white border border-slate-800 font-extrabold text-sm shadow-xl hover:!bg-slate-900 transition-all"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
