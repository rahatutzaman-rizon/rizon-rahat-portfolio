"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/skills";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";
import {
  Code,
  Layout,
  Server,
  Database,
  Building2,
  ShoppingBag,
  Sparkles,
  Cloud,
  Cpu,
  Star,
  BarChart3,
} from "lucide-react";

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const scrollRef = useGsapScrollReveal<HTMLDivElement>({
    stagger: 0.08,
    yOffset: 30,
  });

  const categoryIcons: Record<string, React.ReactNode> = {
    Code: <Code className="w-4 h-4" />,
    Layout: <Layout className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    Database: <Database className="w-4 h-4" />,
    Building2: <Building2 className="w-4 h-4" />,
    ShoppingBag: <ShoppingBag className="w-4 h-4" />,
    Sparkles: <Sparkles className="w-4 h-4" />,
    Cloud: <Cloud className="w-4 h-4" />,
    Cpu: <Cpu className="w-4 h-4" />,
    BarChart3: <BarChart3 className="w-4 h-4" />,
  };

  const filteredCategories =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-dynamic-primary text-xs font-mono font-semibold">
            <Code className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Enterprise Tech Stack
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A breakdown of technologies, frameworks, databases, and domain specializations I work with daily.
          </p>
        </div>

        {/* Filter Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeTab === "all"
                ? "bg-dynamic-primary text-white shadow-md shadow-dynamic-primary"
                : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
            style={
              activeTab === "all"
                ? { backgroundColor: "var(--primary-hex)" }
                : {}
            }
          >
            All Skills ({skillsData.flatMap((c) => c.skills).length})
          </button>
          {skillsData.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-dynamic-primary text-white shadow-md shadow-dynamic-primary"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                style={
                  isActive
                    ? { backgroundColor: "var(--primary-hex)" }
                    : {}
                }
              >
                {categoryIcons[cat.iconName]}
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid with GSAP Scroll Trigger */}
        <div ref={scrollRef}>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4 hover:border-dynamic-primary transition-colors shadow-sm"
                >
                  {/* Category Title */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-dynamic-primary">
                        {categoryIcons[category.iconName]}
                      </div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {category.skills.length} items
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          skill.featured
                            ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white border-dynamic-primary shadow-sm"
                            : "bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        {skill.featured && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] opacity-70 font-mono">
                            ({skill.level})
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
