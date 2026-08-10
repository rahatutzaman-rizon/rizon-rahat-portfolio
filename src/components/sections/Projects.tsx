"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";
import { useLanguage } from "@/context/LanguageContext";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { t } = useLanguage();
  const scrollRef = useGsapScrollReveal<HTMLDivElement>({
    stagger: 0.1,
    yOffset: 35,
  });

  const categories = ["All", "ERP & SaaS", "AI & Automation", "E-Commerce", "Web Apps"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-dynamic-primary text-xs font-mono font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>{t("featuredWork")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t("projectsHeader")}
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-200 font-medium">
              {t("projectsSub")}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-dynamic-primary bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-dynamic-primary transition-all self-start md:self-auto"
          >
            <span>{t("viewAllProjects")} ({projectsData.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-dynamic-primary text-white shadow-md shadow-dynamic-primary"
                    : "bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                style={
                  isActive
                    ? { backgroundColor: "var(--primary-hex)" }
                    : {}
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid with GSAP Scroll Trigger */}
        <div ref={scrollRef}>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between overflow-hidden hover:border-dynamic-primary transition-all duration-300 shadow-lg"
                >
                  
                  {/* Visual Mockup Header */}
                  <div
                    className={`h-48 w-full bg-gradient-to-tr ${project.gradient} relative p-6 flex flex-col justify-between overflow-hidden`}
                  >
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-slate-950/80 text-white backdrop-blur-md border border-white/10">
                        {project.domain}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 backdrop-blur-md border border-amber-500/30">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="z-10">
                      <h3 className="text-xl font-extrabold text-white drop-shadow-sm group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-100 font-medium line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>

                      {/* Metrics row */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {project.metrics.slice(0, 2).map((m) => (
                            <div
                              key={m.label}
                              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800"
                            >
                              <div className="text-xs font-bold text-dynamic-primary font-mono">
                                {m.value}
                              </div>
                              <div className="text-[10px] text-slate-600 dark:text-slate-300 font-medium line-clamp-1">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Bottom Links */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between mt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-dynamic-primary transition-colors"
                      >
                        <span>{t("exploreCaseStudy")}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <div className="flex items-center gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-dynamic-primary transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-dynamic-primary transition-colors"
                            aria-label="Live Demo Link"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

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
