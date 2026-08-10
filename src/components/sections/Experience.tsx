"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  ExternalLink,
  Zap,
} from "lucide-react";

export function Experience() {
  const scrollRef = useGsapScrollReveal<HTMLDivElement>({
    stagger: 0.15,
    yOffset: 40,
  });

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-dynamic-primary text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Work Experience
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A chronological timeline of my engineering roles, enterprise contributions, and shipped production platforms.
          </p>
        </div>

        {/* Vertical Timeline with GSAP Scroll Reveal */}
        <div ref={scrollRef} className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="relative pl-6 md:pl-10"
            >
              {/* Timeline Dot Icon */}
              <div
                className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full p-[2px] shadow-lg shadow-dynamic-primary"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
                }}
              >
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Date Callout for Desktop (Left aligned offset) */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className="text-xs font-mono font-bold text-dynamic-primary block">
                  {item.period}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {item.type}
                </span>
              </div>

              {/* Main Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-5 hover:border-dynamic-primary transition-colors shadow-sm">
                
                {/* Mobile Date Header */}
                <div className="flex md:hidden items-center gap-2 text-xs font-mono text-dynamic-primary font-semibold mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                  <span>•</span>
                  <span>{item.type}</span>
                </div>

                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-dynamic-primary font-semibold mt-0.5">
                      <Building2 className="w-4 h-4" />
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          <span>{item.company}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span>{item.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {item.summary}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-300">
                    Key Responsibilities & Deliverables:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {item.responsibilities.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dynamic-primary mt-2 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements Highlight Box */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-dynamic-primary">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Key Achievements & Impact:</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
