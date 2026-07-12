import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-lg transition-all duration-300 active:scale-95 focus:outline-none";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-black font-semibold shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:brightness-110",
    secondary:
      "bg-slate-800/80 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white",
    outline:
      "border border-cyan-500/50 bg-cyan-500/5 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]",
  };

  const styles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
