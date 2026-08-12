"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { achievementsData } from "@/data/achievements";
import {
  GraduationCap,
  Trophy,
  Award,
  Terminal,
  Building2,
  Zap,
  Sparkles,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

export function EducationAchievements() {
  const achievementIcons: Record<string, React.ReactNode> = {
    Terminal: <Terminal className="w-5 h-5 text-amber-500" />,
    Building2: <Building2 className="w-5 h-5 text-cyan-500" />,
    Zap: <Zap className="w-5 h-5 text-emerald-500" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-500" />,
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>ACADEMIC & PROBLEM SOLVING HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Engineering Milestones
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Formal university foundation alongside competitive programming and engineering impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  University Degree
                </h3>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  {educationData[0].period}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  {educationData[0].degree}
                </h4>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  CGPA {educationData[0].cgpa}
                </span>
              </div>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                {educationData[0].field}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {educationData[0].institution} • {educationData[0].location}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {educationData[0].description}
            </p>

            {/* Core Coursework */}
            <div className="space-y-2 pt-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                <span>Core Engineering Coursework:</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {educationData[0].courses.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Achievements & CP Grid */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Key Technical Achievements</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievementsData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-3 hover:border-cyan-500/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                      {achievementIcons[item.iconName]}
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                      {item.metric}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {item.id === "cp-500" && (
                    <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-slate-200 dark:border-slate-800">
                      <a
                        href="https://leetcode.com/u/rizon525/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-transform inline-block"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://img.shields.io/badge/LeetCode-rizon525-FFA116?style=for-the-badge&logo=leetcode&logoColor=black"
                          alt="LeetCode Profile"
                          className="h-5 rounded shadow-sm"
                        />
                      </a>
                      <a
                        href="https://www.codechef.com/users/redwantamim525"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-transform inline-block"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://img.shields.io/badge/CodeChef-redwantamim525-5B4638?style=for-the-badge&logo=codechef&logoColor=white"
                          alt="CodeChef Profile"
                          className="h-5 rounded shadow-sm"
                        />
                      </a>
                      <a
                        href="https://judge.beecrowd.com/en/profile/334994"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-transform inline-block"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://img.shields.io/badge/Beecrowd-View_Profile-6021D1?style=for-the-badge"
                          alt="Beecrowd Profile"
                          className="h-5 rounded shadow-sm"
                        />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
