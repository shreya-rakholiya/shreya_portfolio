import React from "react";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  centered = false,
}) => {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
        {tag}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base md:text-lg text-slate-400 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
