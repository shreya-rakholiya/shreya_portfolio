import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "status" | "tag" | "glow";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "tag",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-all duration-200";

  const variants = {
    status:
      "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    tag: "border border-slate-700/60 bg-slate-800/50 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300",
    glow: "border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
