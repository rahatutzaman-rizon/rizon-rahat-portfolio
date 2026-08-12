"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowLeft,
  Search,
  Bot,
  Smartphone,
  Database,
  Layers,
  Sparkles,
  ArrowUpRight,
  BookOpen,
  X,
  Share2,
  Check,
  Rss,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export interface BlogArticle {
  id: string;
  title: string;
  category: "ai-rag" | "nosql-data" | "mobile" | "fullstack";
  categoryLabel: string;
  summary: string;
  content: string;
  takeaway: string;
  dateStr: string;
  readTime: string;
  icon: string;
  tags: string[];
  weekNumber: number;
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [articlesData, setArticlesData] = useState<{
    dateRangeLabel: string;
    weekNumber: number;
    articles: BlogArticle[];
  }>({
    dateRangeLabel: "Loading Weekly Window...",
    weekNumber: 0,
    articles: [],
  });

  useEffect(() => {
    fetch("/api/tech-news")
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticlesData({
            dateRangeLabel: data.dateRangeLabel,
            weekNumber: data.weekNumber,
            articles: data.articles,
          });
        }
      })
      .catch((err) => console.error("Error loading weekly tech news:", err));
  }, []);

  const categoryIcons: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-cyan-500" />,
    Smartphone: <Smartphone className="w-5 h-5 text-indigo-500" />,
    Database: <Database className="w-5 h-5 text-emerald-500" />,
    Layers: <Layers className="w-5 h-5 text-purple-500" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  };

  const filteredArticles = useMemo(() => {
    return articlesData.articles.filter((art) => {
      const matchesCategory = activeCategory === "all" || art.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [articlesData.articles, activeCategory, searchQuery]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Navigation & Title */}
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-dynamic-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio Home
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-dynamic-primary text-xs font-mono font-semibold">
                  <Newspaper className="w-4 h-4" />
                  <span>AUTOMATED WEEKLY TECH RADAR & BLOG</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Engineering Insights & Weekly Tech Radar
                </h1>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Automated 7-day rolling updates covering AI/RAG architectures, React Native mobile releases, NoSQL schema migrations, and high-performance cloud systems.
                </p>
              </div>

              {/* Weekly Rotation Badge */}
              <div className="p-4 rounded-2xl glass-card border border-cyan-500/30 space-y-2 bg-slate-900 text-white min-w-[260px]">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Rolling 7-Day Window
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <Rss className="w-3 h-3 animate-pulse" /> Auto Sync
                  </span>
                </div>
                <div className="text-sm font-extrabold font-mono text-white">
                  {articlesData.dateRangeLabel}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  Cycle #{articlesData.weekNumber} • Updates every 7 days automatically
                </div>
              </div>
            </div>
          </div>

          {/* Controls: Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Articles" },
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
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-dynamic-primary text-white shadow-lg shadow-dynamic-primary"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-dynamic-primary"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics, tags, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-dynamic-primary font-mono shadow-sm"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedArticle(article)}
                  className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-4 hover:border-dynamic-primary/80 transition-all shadow-sm flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                          {categoryIcons[article.icon] || <Sparkles className="w-5 h-5 text-dynamic-primary" />}
                        </div>
                        <span className="text-xs font-mono font-bold text-dynamic-primary uppercase tracking-wider">
                          {article.categoryLabel}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-dynamic-primary transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="p-3 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-[11px] space-y-1">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 block font-mono">
                        💡 Key Takeaway:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 font-sans">
                        {article.takeaway}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-200/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono font-semibold text-dynamic-primary group-hover:translate-x-1 transition-transform">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> Read Full Article
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* Article Reader Modal Drawer */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 text-slate-900 dark:text-white"
            >
              {/* Close & Share Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold">
                    {selectedArticle.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedArticle.dateStr}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                    title="Share Article Link"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}
                  </span>
                  <span>Automated 7-Day Cycle #{selectedArticle.weekNumber}</span>
                </div>
              </div>

              {/* Summary Highlight Box */}
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">
                {selectedArticle.summary}
              </div>

              {/* Detailed Article Body */}
              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                <p>{selectedArticle.content}</p>
                <p>
                  Engineering teams adopting this automated pattern reduce regression issues, maintain 100% tenant data boundaries, and streamline multi-platform deployments across web and mobile.
                </p>
              </div>

              {/* Key Takeaway Banner */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block font-mono">
                  💡 Takeaway Summary:
                </span>
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  {selectedArticle.takeaway}
                </p>
              </div>

              {/* Tag Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full font-bold text-xs text-white bg-dynamic-primary hover:opacity-90 shadow-md"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
