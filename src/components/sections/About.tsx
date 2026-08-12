"use client";

import Image from "next/image";
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
  TrendingUp,
  Globe2,
  BarChart3,
  Languages,
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
    TrendingUp: <TrendingUp className="w-6 h-6 text-cyan-500" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-indigo-500" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-dynamic-primary text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>ABOUT ME & SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Full Stack Engineering & Data Analytics Excellence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A look into my background, core metrics, technical capabilities, and spoken languages.
          </p>
        </div>

        {/* Quick Stats Grid Row with GSAP Scroll Trigger */}
        <div ref={statsScrollRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Detailed Narrative & Portrait Card */}
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
              <span className="font-mono font-bold text-white bg-dynamic-primary px-2.5 py-1 rounded-md">
                CGPA 3.50
              </span>
            </div>
          </div>

          {/* Key Achievements & Capabilities Checklist */}
          <div className="lg:col-span-5 p-8 rounded-2xl glass-card space-y-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
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
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                  &quot;I believe engineering is about clean abstractions, predictable state, robust data pipelines, and continuous query optimization.&quot;
                </p>
              </div>

              <a
                href={profileData.resumeUrl}
                download="Rahatutzaman_Rizon_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.01]"
              >
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Spoken Languages Showcase Card Grid */}
        <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-dynamic-primary" />
                <span>Spoken Languages & Communication</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Multilingual communication capabilities for global collaboration and cross-cultural engineering teams.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
              4 Languages Spoken
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.spokenLanguages.map((lang) => (
              <div
                key={lang.name}
                className="p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-dynamic-primary/60 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {lang.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {lang.nativeName}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-dynamic-primary">
                    {lang.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
                    {lang.level}
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    {lang.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

