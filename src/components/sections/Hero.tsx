"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Hero3DCanvas } from "@/components/3d/Hero3DCanvas";
import { useGsapCardTilt } from "@/hooks/useGsapAnimations";
import { GsapMagnetic } from "@/components/ui/GsapMagnetic";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Box,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const cardTiltRef = useGsapCardTilt<HTMLDivElement>();
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % profileData.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Grid & Dynamic Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-30 pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-dynamic-glow blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-dynamic-glow blur-[100px] rounded-full pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dynamic-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-dynamic-primary"></span>
              </span>
              <span className="font-mono text-dynamic-primary font-semibold">
                {t("availableForRoles")}
              </span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3 h-3 text-rose-500" />
                {profileData.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {t("hiIm")}{" "}
                <span className="text-gradient-dynamic">
                  {profileData.name}
                </span>
              </h1>

              {/* Animated Title Switcher */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <motion.div
                  key={currentTitleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 font-mono flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-dynamic-primary shrink-0" />
                  <span>{profileData.titles[currentTitleIndex]}</span>
                </motion.div>
              </div>
            </div>

            {/* Hook Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-medium">
              {t("heroHook")}
            </p>

            {/* Key Skill Badges Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Multi-Tenant ERP",
                "React & Next.js",
                "Node.js & MongoDB",
                "AI / RAG Workflows",
                "Azure & Docker",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80"
                >
                  #{badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <GsapMagnetic>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm text-white hover:opacity-95 shadow-lg shadow-dynamic-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
                  }}
                >
                  <span>{t("viewProjects")}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GsapMagnetic>

              <GsapMagnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700/90 border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4 mr-2 text-dynamic-primary" />
                  <span>{t("contactMe")}</span>
                </Link>
              </GsapMagnetic>

              <GsapMagnetic>
                <a
                  href={profileData.resumeUrl}
                  download="Rahatutzaman_Rizon_Resume.pdf"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4 mr-1.5 text-slate-400" />
                  <span>{t("resumePdf")}</span>
                </a>
              </GsapMagnetic>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-xs font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold">
                {t("findMeOn")}
              </span>
              <div className="flex items-center gap-3">
                <GsapMagnetic strength={0.4}>
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-dynamic-primary hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-block"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </GsapMagnetic>

                <GsapMagnetic strength={0.4}>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-dynamic-primary hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-block"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </GsapMagnetic>

                <GsapMagnetic strength={0.4}>
                  <a
                    href={profileData.socials.email}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-dynamic-primary hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-block"
                    aria-label="Email Me"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </GsapMagnetic>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive 3D Showcase & Code Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* 3D WebGL Canvas Layer */}
            <div className="absolute -inset-10 opacity-70 dark:opacity-90 z-0">
              <Hero3DCanvas />
            </div>

            {/* GSAP Interactive 3D Tilt Card */}
            <div
              ref={cardTiltRef}
              className="relative z-10 rounded-2xl overflow-hidden glass-card p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl"
            >
              {/* Terminal Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-300 ml-2 flex items-center gap-1 font-semibold">
                    <Box className="w-3 h-3 text-dynamic-primary" /> {t("developerProfileTs")}
                  </span>
                </div>
                <Terminal className="w-4 h-4 text-dynamic-primary" />
              </div>

              {/* Code Snippet Display */}
              <div className="space-y-3 font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                <p>
                  <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                  <span className="text-dynamic-primary font-bold">engineer</span> = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-600 dark:text-emerald-400">&quot;{profileData.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  specialty: <span className="text-amber-600 dark:text-amber-400">&quot;Multi-Tenant ERP & SaaS&quot;</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-dynamic-primary">&quot;Next.js&quot;</span>, <span className="text-dynamic-primary">&quot;Node.js&quot;</span>, <span className="text-dynamic-primary">&quot;MongoDB&quot;</span>, <span className="text-dynamic-primary">&quot;Azure&quot;</span>],
                </p>
                <p className="pl-4">
                  aiIntegration: <span className="text-indigo-500 dark:text-indigo-400">true</span>, // RAG & Vector Search
                </p>
                <p className="pl-4">
                  sqlOptimization: <span className="text-emerald-500 dark:text-emerald-400">&quot;+45% query speedup&quot;</span>,
                </p>
                <p className="pl-4">
                  problemSolving: <span className="text-amber-500 dark:text-amber-400">&quot;500+ CP Solved&quot;</span>,
                </p>
                <p>&#125;;</p>
              </div>

              {/* Quick Highlight Stats Row */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="text-xl font-bold text-dynamic-primary font-mono">2+ Years</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">{t("fullStackEng")}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="text-xl font-bold text-gradient-dynamic font-mono">500+ CP</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">{t("problemsSolved")}</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
