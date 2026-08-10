"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES, Language } from "@/data/translations";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageSelector() {
  const { language, currentLanguageInfo, setLanguage } = useLanguage();
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 transition-all text-xs font-semibold shadow-sm active:scale-95 group"
        title="Change Portfolio Language"
        aria-label="Change Portfolio Language"
      >
        <span className="text-sm">{currentLanguageInfo.flag}</span>
        <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:rotate-45 transition-transform" />
        <span className="font-mono text-[11px] uppercase">{language}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 p-2.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl z-50"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800 px-1">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-dynamic-primary" /> Select Language
              </span>
              <span className="text-[10px] text-slate-400 font-mono">6 Locales</span>
            </div>

            <div className="space-y-1">
              {LANGUAGES.map((lang) => {
                const isActive = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all text-xs ${
                      isActive
                        ? "bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white"
                        : "hover:bg-slate-100/70 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{lang.flag}</span>
                      <span className="text-[12px]">{lang.nativeName}</span>
                      <span className="text-[10px] text-slate-400 font-mono uppercase">
                        ({lang.code})
                      </span>
                    </div>
                    {isActive && <Check className="w-3.5 h-3.5 text-dynamic-primary stroke-[3]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
