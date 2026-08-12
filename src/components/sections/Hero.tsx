"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  BarChart3,
  TrendingUp,
  Globe2,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"engineer" | "analyst">("engineer");
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
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-dynamic-glow blur-[140px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-dynamic-glow blur-[120px] rounded-full pointer-events-none opacity-60" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-md backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-dynamic-primary font-semibold">
                {t("availableForRoles")}
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
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
              {profileData.heroHook}
            </p>

            {/* Key Skill Badges Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Full Stack Eng",
                "React Native Mobile",
                "NoSQL & Data Migration",
                "Data Analysis & BI",
                "React & Next.js",
                "Node.js & Python",
                "AI / RAG Search",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-slate-200/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-sm"
                >
                  #{badge}
                </span>
              ))}
            </div>

            {/* Spoken Languages Quick Preview */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-dynamic-primary" /> Languages:
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold">
                {profileData.spokenLanguages.map((lang) => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Competitive Programming Shield Badges Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold mr-1">
                CP Profiles:
              </span>
              {profileData.cpProfiles.map((cp) => (
                <a
                  key={cp.name}
                  href={cp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform inline-block"
                  title={`${cp.name} Profile (${cp.username})`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cp.badgeUrl} alt={cp.name} className="h-6 rounded shadow-sm" />
                </a>
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

          {/* Right Showcase: Profile Portrait Card + Code Terminal */}
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

            {/* GSAP Interactive 3D Tilt Card Container */}
            <div
              ref={cardTiltRef}
              className="relative z-10 rounded-3xl overflow-hidden glass-card p-6 shadow-2xl border border-slate-200/90 dark:border-slate-800 backdrop-blur-xl space-y-6"
            >
              {/* Profile Image & Floating Skill Badges */}
              <div className="relative flex flex-col items-center">
                {/* Glowing Outer Ring */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 shadow-xl shadow-cyan-500/20 group">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/40 dark:border-slate-900/60 bg-slate-900">
                    <Image
                      src={profileData.profileImage}
                      alt={profileData.name}
                      fill
                      priority
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 176px, 208px"
                    />
                  </div>

                  {/* Status Indicator Dot */}
                  <div className="absolute bottom-2 right-2 p-1 bg-white dark:bg-slate-900 rounded-full shadow-lg">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse border-2 border-white dark:border-slate-900" />
                  </div>
                </div>

                {/* Floating Skill Chips Over Image */}
                <div className="absolute -top-2 left-0 sm:-left-2 px-3 py-1 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/40 text-[11px] font-mono font-bold shadow-lg flex items-center gap-1 backdrop-blur-md">
                  <Code2 className="w-3.5 h-3.5" /> Full Stack Eng
                </div>

                <div className="absolute top-8 -right-2 sm:-right-4 px-3 py-1 rounded-full bg-slate-900/90 text-indigo-400 border border-indigo-500/40 text-[11px] font-mono font-bold shadow-lg flex items-center gap-1 backdrop-blur-md">
                  <BarChart3 className="w-3.5 h-3.5" /> React Native
                </div>

                <div className="absolute bottom-4 -left-2 sm:-left-4 px-3 py-1 rounded-full bg-slate-900/90 text-emerald-400 border border-emerald-500/40 text-[11px] font-mono font-bold shadow-lg flex items-center gap-1 backdrop-blur-md">
                  <TrendingUp className="w-3.5 h-3.5" /> NoSQL & Migration
                </div>

                <div className="absolute -bottom-3 right-0 sm:right-2 px-3 py-1 rounded-full bg-slate-900/90 text-amber-400 border border-amber-500/40 text-[11px] font-mono font-bold shadow-lg flex items-center gap-1 backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 500+ CP Solved
                </div>
              </div>

              {/* Tab Selector & Code Terminal Box */}
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 text-slate-200 shadow-inner space-y-3">
                {/* Tab Controls */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab("engineer")}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-colors flex items-center gap-1 ${
                        activeTab === "engineer"
                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5" /> Engineer
                    </button>
                    <button
                      onClick={() => setActiveTab("analyst")}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-colors flex items-center gap-1 ${
                        activeTab === "analyst"
                          ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/40"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <BarChart3 className="w-3.5 h-3.5" /> Analyst
                    </button>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">profile.ts</span>
                </div>

                {/* Code Terminal View */}
                {activeTab === "engineer" ? (
                  <div className="space-y-2 font-mono text-xs leading-relaxed text-slate-300">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-cyan-400 font-bold">fullStackDev</span> = &#123;
                    </p>
                    <p className="pl-4">
                      name: <span className="text-emerald-400">&quot;{profileData.name}&quot;</span>,
                    </p>
                    <p className="pl-4">
                      core: [<span className="text-cyan-300">&quot;React&quot;</span>, <span className="text-cyan-300">&quot;Next.js&quot;</span>, <span className="text-cyan-300">&quot;Node.js&quot;</span>],
                    </p>
                    <p className="pl-4">
                      systems: <span className="text-amber-400">&quot;Multi-Tenant ERP & SaaS&quot;</span>,
                    </p>
                    <p className="pl-4">
                      aiIntegration: <span className="text-indigo-400">true</span>, // RAG Search
                    </p>
                    <p>&#125;;</p>
                  </div>
                ) : (
                  <div className="space-y-2 font-mono text-xs leading-relaxed text-slate-300">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-indigo-400 font-bold">dataAnalyst</span> = &#123;
                    </p>
                    <p className="pl-4">
                      expertise: <span className="text-emerald-400">&quot;SQL & Business Intelligence&quot;</span>,
                    </p>
                    <p className="pl-4">
                      dataSystems: <span className="text-cyan-300">&quot;NoSQL &amp; Schema Migration&quot;</span>,
                    </p>
                    <p className="pl-4">
                      tools: [<span className="text-amber-300">&quot;Python&quot;</span>, <span className="text-amber-300">&quot;Pandas&quot;</span>, <span className="text-amber-300">&quot;Tableau&quot;</span>],
                    </p>
                    <p className="pl-4">
                      languages: <span className="text-emerald-300">&quot;EN, BN, HI, ES&quot;</span>,
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}
              </div>

              {/* Quick Highlight Stats Row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-center">
                  <div className="text-xl font-bold text-dynamic-primary font-mono">2+ Years</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Full Stack &amp; Analytics</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-center">
                  <div className="text-xl font-bold text-gradient-dynamic font-mono">SQL / NoSQL</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Data Migration</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

