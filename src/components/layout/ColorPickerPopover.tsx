"use client";

import React, { useState, useRef, useEffect } from "react";
import { useColorTheme, COLOR_PRESETS } from "@/context/ColorThemeContext";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ColorPickerPopover() {
  const { activePreset, setColorPreset } = useColorTheme();
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
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 transition-all text-xs font-medium shadow-sm active:scale-95 group"
        title="Change Primary Theme Color"
        aria-label="Change Primary Theme Color"
      >
        <span
          className="w-3.5 h-3.5 rounded-full transition-transform group-hover:scale-110 shadow-sm"
          style={{ backgroundColor: activePreset.hex }}
        />
        <Palette className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:rotate-45 transition-transform" />
        <span className="hidden sm:inline font-mono text-[11px]">{activePreset.name}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-64 p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl z-50"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-cyan-500" /> Primary Color Theme
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Real-time</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {COLOR_PRESETS.map((preset) => {
                const isActive = preset.id === activePreset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setColorPreset(preset.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all text-xs ${
                      isActive
                        ? "border-slate-900 dark:border-white bg-slate-100 dark:bg-slate-800 font-semibold shadow-sm"
                        : "border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-100/70 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 shadow-inner"
                      style={{ backgroundColor: preset.hex }}
                    >
                      {isActive && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                    </span>
                    <span className="truncate text-[11px] text-slate-700 dark:text-slate-300">
                      {preset.name}
                    </span>
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
