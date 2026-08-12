"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Calendar,
  Clock,
  Tag,
  ArrowUpRight,
  Sparkles,
  Bot,
  Database,
  Smartphone,
  Layers,
  Search,
} from "lucide-react";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";

export interface TechNewsItem {
  id: string;
  title: string;
  category: "ai-rag" | "nosql-data" | "mobile" | "fullstack";
  categoryLabel: string;
  summary: string;
  takeaway: string;
  dateStr: string;
  readTime: string;
  icon: string;
  tags: string[];
}

export function TechNews() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const scrollRef = useGsapScrollReveal<HTMLDivElement>({
    stagger: 0.1,
    yOffset: 30,
  });

  // Calculate 7-day rolling date window dynamically
  const dateRangeLabel = useMemo(() => {
    const now = new Date();
    const past = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    return `${past.toLocaleDateString("en-US", options)} – ${now.toLocaleDateString("en-US", options)}, ${now.getFullYear()}`;
  }, []);

  const newsItems: TechNewsItem[] = [
    {
      id: "ai-rag-agents",
      title: "Enterprise Multi-Agent Orchestration & Access-Controlled RAG",
      category: "ai-rag",
      categoryLabel: "AI & RAG",
      summary:
        "Production AI teams are standardizing on metadata-filtered vector retrieval prior to similarity search, preventing cross-tenant data leaks in enterprise LLM workflows.",
      takeaway: "Role-based access control (RBAC) metadata filters ensure 100% tenant data isolation in LLM RAG pipelines.",
      dateStr: "Updated 2 days ago",
      readTime: "3 min read",
      icon: "Bot",
      tags: ["RAG", "LLM", "Multi-Agent", "Vector DB"],
    },
    {
      id: "react-native-new-arch",
      title: "React Native New Architecture & Synchronous Native Bridges",
      category: "mobile",
      categoryLabel: "Mobile & React Native",
      summary:
        "React Native's new architecture defaults eliminate async serialization overhead, granting 60FPS UI thread performance across cross-platform iOS & Android apps.",
      takeaway: "Direct JSI memory sharing speeds up mobile app rendering and complex list animations.",
      dateStr: "Updated 3 days ago",
      readTime: "4 min read",
      icon: "Smartphone",
      tags: ["React Native", "Expo", "iOS", "Android"],
    },
    {
      id: "nosql-schema-migrations",
      title: "Zero-Downtime NoSQL Schema Evolution & Document Data Migration",
      category: "nosql-data",
      categoryLabel: "NoSQL & Data",
      summary:
        "Strategies for migrating high-velocity MongoDB collections and multi-tenant document schemas without locking database reads or interrupting production traffic.",
      takeaway: "Dual-write schema adapters enable seamless NoSQL version upgrades for multi-tenant SaaS.",
      dateStr: "Updated 4 days ago",
      readTime: "5 min read",
      icon: "Database",
      tags: ["MongoDB", "NoSQL", "Schema Migration", "ETL"],
    },
    {
      id: "nextjs-app-router-advances",
      title: "Next.js 16 Partial Prerendering & Instant Server State Sync",
      category: "fullstack",
      categoryLabel: "Full-Stack",
      summary:
        "Combining static shell rendering with dynamic server-streamed slots delivers sub-100ms first contentful paint (FCP) for web enterprise applications.",
      takeaway: "PPR delivers static CDN speed with live server dynamic data streaming.",
      dateStr: "Updated 5 days ago",
      readTime: "3 min read",
      icon: "Layers",
      tags: ["Next.js", "React 19", "Server Actions", "Vercel"],
    },
    {
      id: "python-data-analytics",
      title: "Real-Time BI Dashboards with Apache Arrow & Python Pandas 2.2",
      category: "nosql-data",
      categoryLabel: "NoSQL & Data",
      summary:
        "In-memory column formats and WebSocket analytics streams empower business intelligence dashboards to process millions of rows directly in the browser.",
      takeaway: "Arrow memory formats cut web visualization data parsing overhead by over 70%.",
      dateStr: "Updated 6 days ago",
      readTime: "4 min read",
      icon: "Database",
      tags: ["Python", "Pandas", "BI", "Analytics"],
    },
    {
      id: "micro-agent-automation",
      title: "Automated Email & Invoice Parsing via Structured LLM Output",
      category: "ai-rag",
      categoryLabel: "AI & RAG",
      summary:
        "Replacing brittle regex matchers with validated JSON schema enforcement allows enterprise web apps to automatically extract invoice data from PDFs.",
      takeaway: "Zod / Pydantic schema validation ensures zero-hallucination JSON extraction.",
      dateStr: "Updated 7 days ago",
      readTime: "3 min read",
      icon: "Sparkles",
      tags: ["Workflow Automation", "JSON Schema", "PDF Extraction"],
    },
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-cyan-500" />,
    Smartphone: <Smartphone className="w-5 h-5 text-indigo-500" />,
    Database: <Database className="w-5 h-5 text-emerald-500" />,
    Layers: <Layers className="w-5 h-5 text-purple-500" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  };

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const matchesCat = activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        searchFilter.trim() === "" ||
        item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchFilter.toLowerCase()));
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchFilter]);

  return (
    <section id="tech-news" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-dynamic-primary text-xs font-mono font-semibold">
            <Newspaper className="w-4 h-4" />
            <span>WORLD WEEKLY TECH RADAR & INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            7-Day Engineering & AI Tech Radar
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Automated rolling insights covering AI/RAG architectures, React Native mobile, NoSQL data migrations, and cloud systems.
          </p>

          {/* Dynamic 7-Day Rolling Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-dynamic-primary" />
            <span>Rolling 7-Day Window: </span>
            <strong className="text-dynamic-primary font-bold">{dateRangeLabel}</strong>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All News" },
              { id: "ai-rag", label: "AI & RAG" },
              { id: "mobile", label: "React Native Mobile" },
              { id: "nosql-data", label: "NoSQL & Data" },
              { id: "fullstack", label: "Full-Stack" },
            ].map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-dynamic-primary text-white shadow-md shadow-dynamic-primary"
                      : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech insights..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-dynamic-primary font-mono"
            />
          </div>
        </div>

        {/* Tech News Cards Grid */}
        <div ref={scrollRef}>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredNews.map((news) => (
                <motion.article
                  key={news.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4 hover:border-dynamic-primary/60 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Top Metadata Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                          {categoryIcons[news.icon] || <Sparkles className="w-5 h-5 text-dynamic-primary" />}
                        </div>
                        <span className="text-[11px] font-mono font-bold text-dynamic-primary uppercase tracking-wider">
                          {news.categoryLabel}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {news.readTime}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {news.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {news.summary}
                    </p>

                    {/* Key Takeaway Box */}
                    <div className="p-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-[11px] space-y-1">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 block font-mono">
                        💡 Key Takeaway:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 font-sans">
                        {news.takeaway}
                      </p>
                    </div>
                  </div>

                  {/* Footer Tags & Update Date */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {news.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{news.dateStr}</span>
                      <span className="text-dynamic-primary flex items-center gap-0.5 font-bold">
                        Weekly Automated Radar <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
