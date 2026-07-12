"use client";

import React, { useState } from "react";
import { Send, Mail, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", company: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="scroll-mt-12 md:scroll-mt-6 py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          tag="Get in Touch"
          title="Let's Build Something Extraordinary"
          description="Have a high-scale backend challenge, need a production AI integration, or looking to collaborate? Drop me a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Interactive Contact Form (Left Side, 3 Columns) with Cyan-Emerald Gradient Background + Right Accent Divider */}
          <div className="lg:col-span-3 lg:border-r lg:border-cyan-500/40 lg:pr-10">
            <Card className="p-8 !bg-gradient-to-br !from-cyan-400 !to-emerald-400 !border-none shadow-[0_0_25px_rgba(6,182,212,0.35)] rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-extrabold uppercase tracking-wider !text-slate-950 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full rounded-lg input-themed px-4 py-3 text-sm placeholder-slate-500 focus:border-slate-950 focus:outline-none focus:ring-1 focus:ring-slate-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-extrabold uppercase tracking-wider !text-slate-950 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full rounded-lg input-themed px-4 py-3 text-sm placeholder-slate-500 focus:border-slate-950 focus:outline-none focus:ring-1 focus:ring-slate-950 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-extrabold uppercase tracking-wider !text-slate-950 mb-2"
                  >
                    Company / Organization (Optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    placeholder="Acme Corp"
                    className="w-full rounded-lg input-themed px-4 py-3 text-sm placeholder-slate-500 focus:border-slate-950 focus:outline-none focus:ring-1 focus:ring-slate-950 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-extrabold uppercase tracking-wider !text-slate-950 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about your project, timeline, or engineering goals..."
                    className="w-full rounded-lg input-themed px-4 py-3 text-sm placeholder-slate-500 focus:border-slate-950 focus:outline-none focus:ring-1 focus:ring-slate-950 transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "submitting"}
                    className="!bg-slate-950 !bg-none !text-white hover:!bg-slate-900 border border-slate-800 shadow-xl font-bold"
                  >
                    <span>
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </span>
                    <Send className="w-4 h-4" />
                  </Button>

                  {status === "success" && (
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message sent successfully!</span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-rose-400 text-sm font-medium">
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}
                </div>
              </form>
            </Card>
          </div>

          {/* Contact Info (Right Side, 2 Columns) - Normal open layout */}
          <div className="lg:col-span-2 space-y-6 lg:pl-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Direct Contact
            </h3>
            <p className="text-sm text-slate-300 mb-8 leading-relaxed">
              I typically respond within 24 hours. Feel free to reach out directly via email, phone, or LinkedIn.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-3.5 p-4 rounded-xl input-themed hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-xs text-slate-400">Email Address</div>
                  <div className="text-sm font-semibold">
                    {portfolioData.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${portfolioData.phone}`}
                className="flex items-center gap-3.5 p-4 rounded-xl input-themed hover:border-cyan-500/40 hover:text-emerald-300 transition-all"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-xs text-slate-400">Phone Number</div>
                  <div className="text-sm font-semibold">
                    {portfolioData.phone}
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl input-themed hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
              >
                <svg
                  className="w-5 h-5 text-cyan-400 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.5C6.96 6.5 6.3 7.18 6.3 8.05c0 .88.66 1.55 1.53 1.55s1.53-.67 1.53-1.55c0-.87-.66-1.55-1.53-1.55Z" />
                </svg>
                <div>
                  <div className="text-xs text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-semibold">
                    linkedin.com/in/shreyarakholiya
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
