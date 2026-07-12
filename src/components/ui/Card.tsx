import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
}) => {
  return (
    <div
      className={`card-glass rounded-xl bg-slate-900/60 p-6 backdrop-blur-md border border-slate-800/80 ${
        hoverEffect
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
