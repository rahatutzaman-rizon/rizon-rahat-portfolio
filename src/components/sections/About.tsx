"use client";

import { profileData } from "@/data/profile";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";
import {
  Briefcase,
  Code2,
  Layers,
  GraduationCap,
  CheckCircle2,
  Terminal,
  Cpu,
} from "lucide-react";

export function About() {
  const statsScrollRef = useGsapScrollReveal<HTMLDivElement>({
    stagger: 0.1,
    yOffset: 25,
  });

  const statIcons: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-6 h-6 text-dynamic-primary" />,
    Code2: <Code2 className="w-6 h-6 text-dynamic-primary" />,
    Layers: <Layers className="w-6 h-6 text-dynamic-primary" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-500" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-dynamic-primary text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>ABOUT ME & SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering High-Performance Systems with Precision
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A look into who I am, what drives my software development, and the core metrics of my career.
          </p>
        </div>

        {/* Quick Stats Grid Row with GSAP Scroll Trigger */}
        <div ref={statsScrollRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {profileData.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl glass-card relative overflow-hidden group hover:border-dynamic-primary transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                  {statIcons[stat.icon] || <Briefcase className="w-6 h-6 text-dynamic-primary" />}
                </div>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Card */}
          <div className="lg:col-span-7 p-8 rounded-2xl glass-card space-y-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-dynamic-primary" />
                <span>Full Stack & Systems Background</span>
              </h3>
              {profileData.aboutParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Education Callout */}
            <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">
                  B.Sc. in Information & Communication Technology
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  Mawlana Bhashani Science and Technology University (2019–2024)
                </p>
              </div>
              <span className="font-mono font-bold text-white bg-dynamic-primary px-2.5 py-1 rounded-md" style={{ backgroundColor: "var(--primary-hex)" }}>
                CGPA 3.50
              </span>
            </div>
          </div>

          {/* Key Achievements & Capabilities Checklist */}
          <div className="lg:col-span-5 p-8 rounded-2xl glass-card space-y-6 border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Core Technical Strengths
            </h3>

            <div className="space-y-4">
              {profileData.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-dynamic-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                  &quot;I believe engineering is about clean abstractions, predictable state, robust tenant data boundaries, and continuous performance optimization.&quot;
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
