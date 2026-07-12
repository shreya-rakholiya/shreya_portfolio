import React from "react";
import { portfolioData } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export const Stack: React.FC = () => {
  return (
    <section
      id="stack"
      className="scroll-mt-12 md:scroll-mt-6 py-12 md:py-16 relative bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header tailored for high contrast on bright cyan-emerald background */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-950/30 bg-slate-950/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 mb-3">
            Tools of the Trade
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Technology Stack & Proficiency
          </h2>
          <p className="mt-3 text-base md:text-lg font-semibold text-slate-900 max-w-2xl">
            A curated selection of languages, databases, message brokers, and AI frameworks I use to engineer robust software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.stackCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 card-solid shadow-2xl rounded-2xl"
            >
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-slate-800">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      skill.highlight ? "pill-highlight" : "pill-normal"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
