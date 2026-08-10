"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import {
  Search,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle,
  Filter,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "ERP & SaaS",
    "AI & Automation",
    "E-Commerce",
    "Web Apps",
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL PROJECTS ARCHIVE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & Case Studies
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Detailed case studies of multi-tenant ERP platforms, AI contextual engines, Shopify integrations, and web applications built by Rahatutzaman Rizon.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-md"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-lg font-bold text-slate-700 dark:text-slate-300">
              No projects found matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-semibold text-cyan-500 hover:underline"
            >
              Reset search filters
            </button>
          </div>
        ) : (
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
                  className="group relative rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
                >
                  <div
                    className={`h-48 w-full bg-gradient-to-tr ${project.gradient} relative p-6 flex flex-col justify-between`}
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
                      <h3 className="text-xl font-extrabold text-white drop-shadow-sm group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-200/90 font-medium line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>

                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {project.metrics.slice(0, 2).map((m) => (
                            <div
                              key={m.label}
                              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
                            >
                              <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                                {m.value}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between mt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        <span>Explore Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <div className="flex items-center gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
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
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
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
        )}

      </div>
    </div>
  );
}
