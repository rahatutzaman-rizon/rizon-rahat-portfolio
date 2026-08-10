"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { ColorPickerPopover } from "./ColorPickerPopover";
import { BackgroundMusic } from "./BackgroundMusic";
import { LanguageSelector } from "./LanguageSelector";
import { DailyAnalyticsWidget } from "@/components/analytics/DailyAnalyticsWidget";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";
import { Download, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navAbout"), href: "/#about" },
    { name: t("navSkills"), href: "/#skills" },
    { name: "AI Suite", href: "/#ai-playground" },
    { name: t("navExperience"), href: "/#experience" },
    { name: t("navProjects"), href: "/projects" },
    { name: t("navContact"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Initials */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-base">
                  RR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-900 dark:text-white text-base group-hover:text-dynamic-primary transition-colors">
                Rizon<span className="text-dynamic-primary">.dev</span>
              </span>
              <span className="text-[10px] text-slate-600 dark:text-slate-300 -mt-1 font-mono tracking-wider font-semibold">
                SOFTWARE ENGINEER
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white dark:bg-slate-800 text-dynamic-primary shadow-sm"
                      : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Items with Proper Gaps */}
          <div className="hidden md:flex items-center gap-2.5 sm:gap-3">
            <DailyAnalyticsWidget />
            <BackgroundMusic />
            <LanguageSelector />
            <ColorPickerPopover />
            <ThemeToggle />

            {/* Download Resume Button */}
            <a
              href={profileData.resumeUrl}
              download="Rahatutzaman_Rizon_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-300 rounded-full group hover:opacity-95 shadow-md hover:scale-[1.02] active:scale-[0.98] shrink-0"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
              }}
            >
              <Download className="w-3.5 h-3.5 mr-1.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              <span>{t("resumeBtn")}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <DailyAnalyticsWidget />
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 transition-all">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
            <BackgroundMusic />
            <ColorPickerPopover />
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href={profileData.resumeUrl}
              download="Rahatutzaman_Rizon_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white rounded-lg shadow-md"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              {t("resumePdf")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
