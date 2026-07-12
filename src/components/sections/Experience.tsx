import React from "react";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-12 md:scroll-mt-6 py-10 md:py-14 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          tag="Career & Background"
          title="Work Experience & Education"
          description="1.5+ years of professional backend engineering experience delivering scalable production web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Work Experience Column */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Professional Experience
              </h3>
            </div>

            {portfolioData.experience.map((exp, idx) => (
              <Card
                key={idx}
                className="p-8 !bg-transparent !border-2 !border-cyan-400 hover:!border-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.35)] flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-base font-semibold text-cyan-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-slate-400 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-full w-fit">
                      {exp.period}
                    </div>
                  </div>

                  {exp.location && (
                    <p className="text-xs text-slate-400 mb-6">{exp.location}</p>
                  )}

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Education & Academic Column */}
          <div className="flex flex-col h-full space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              {portfolioData.education.map((edu, idx) => (
                <Card
                  key={idx}
                  className="p-6 !bg-transparent !border-2 !border-cyan-400 hover:!border-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.35)]"
                >
                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-purple-300 mb-3">
                    {edu.institution}
                  </p>
                  <span className="inline-block text-xs font-semibold text-slate-400 bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </Card>
              ))}
            </div>

            {/* Core Strengths Card (stretches to match bottom of left column) */}
            <Card className="p-6 !bg-transparent !border-2 !border-cyan-400 hover:!border-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.35)] flex-1 flex flex-col justify-center">
              <h4 className="text-base font-bold text-white mb-4">
                Core Engineering Strengths
              </h4>
              <ul className="space-y-3">
                {portfolioData.about.strengths.map((str, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-sm text-slate-300 leading-relaxed flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
