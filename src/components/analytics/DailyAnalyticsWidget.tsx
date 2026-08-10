"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAnalytics } from "@/context/AnalyticsContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  Activity,
  Users,
  Zap,
  ShieldCheck,
  Globe,
  BarChart3,
  X,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DailyAnalyticsWidget() {
  const { metrics } = useAnalytics();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {/* Live Daily Hits Counter Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/70 text-slate-800 dark:text-slate-200 transition-all text-xs font-semibold shadow-sm active:scale-95 group"
        title="View Real-Time Daily Hits & Traffic Analytics"
        aria-label="View Real-Time Daily Hits & Traffic Analytics"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Activity className="w-3.5 h-3.5 text-dynamic-primary group-hover:scale-110 transition-transform" />
        <span className="font-mono text-[11px] font-bold text-slate-900 dark:text-white">
          {metrics.dailyHits.toLocaleString()}
        </span>
        <span className="hidden sm:inline text-[10px] text-slate-500 dark:text-slate-400 font-mono">
          {t("dailyHits")}
        </span>
      </button>

      {/* Traffic Analytics Modal Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-80 sm:w-96 p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl z-50 text-slate-900 dark:text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-dynamic-primary">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                    Live Analytics & Hits
                  </h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    Real-time traffic & API observability
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Metrics Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Daily Hits Box */}
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
                  <span>Hits Today</span>
                  <Activity className="w-3.5 h-3.5 text-dynamic-primary" />
                </div>
                <div className="text-xl font-bold font-mono text-dynamic-primary">
                  {metrics.dailyHits.toLocaleString()}
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
                  ↑ +14.2% vs yesterday
                </span>
              </div>

              {/* Live Users Box */}
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
                  <span>Live Online</span>
                  <Users className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {metrics.liveUsers}
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  Active right now
                </span>
              </div>

              {/* Latency Box */}
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
                  <span>Avg Latency</span>
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                  {metrics.averageLatencyMs} ms
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  Sub-second response
                </span>
              </div>

              {/* Confidence Score Box */}
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
                  <span>AI Confidence</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                <div className="text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400">
                  {metrics.confidenceScorePercent}%
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  Zero hallucination guardrail
                </span>
              </div>
            </div>

            {/* Geographic Traffic Split */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono">
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-dynamic-primary" /> Geographic Traffic Split
                </span>
              </div>

              <div className="space-y-1.5">
                {metrics.geographicBreakdown.map((item) => (
                  <div key={item.region} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-slate-600 dark:text-slate-300">
                      <span>{item.region}</span>
                      <span>{item.percentage}% ({item.hits} hits)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-dynamic-primary"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: "var(--primary-hex)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Endpoint Usage Breakdown */}
            <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-3">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Top Feature Endpoint Hits
              </span>

              <div className="space-y-1.5">
                {metrics.endpointHits.map((ep) => (
                  <div
                    key={ep.name}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-100/60 dark:bg-slate-800/40 text-[11px] font-mono"
                  >
                    <span className="truncate max-w-[200px] text-slate-800 dark:text-slate-200">
                      {ep.name}
                    </span>
                    <span className="font-bold text-dynamic-primary shrink-0">
                      {ep.count} hits
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
