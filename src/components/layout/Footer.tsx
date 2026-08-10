"use client";

import Link from "next/link";
import { profileData } from "@/data/profile";
import {
  Mail,
  ArrowUp,
  Heart,
  Code2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { GsapMagnetic } from "@/components/ui/GsapMagnetic";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/90 text-slate-600 dark:text-slate-400 overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand & Subtitle column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10.5px] flex items-center justify-center">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-base">
                    RR
                  </span>
                </div>
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {profileData.name}
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Full Stack Software Engineer specializing in multi-tenant ERP, SaaS architecture, CRM platforms, Shopify development, and AI/RAG workflow automation.
            </p>

            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profileData.availability}</span>
            </div>
          </div>

          {/* Quick Links column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  About & Stats
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  Technical Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/#ai-playground"
                  className="hover:text-dynamic-primary transition-colors"
                >
                  AI Agent & RAG Playground
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="hover:text-dynamic-primary transition-colors"
                >
                  Work Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-dynamic-primary transition-colors"
                >
                  Projects Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-dynamic-primary transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Direct Contact */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Connect & Reach Out
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {profileData.email} · {profileData.location}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <GsapMagnetic strength={0.4}>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-dynamic-primary hover:bg-slate-300 dark:hover:bg-slate-700 transition-all inline-block"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </GsapMagnetic>

              <GsapMagnetic strength={0.4}>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-dynamic-primary hover:bg-slate-300 dark:hover:bg-slate-700 transition-all inline-block"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </GsapMagnetic>

              <GsapMagnetic strength={0.4}>
                <a
                  href={profileData.socials.email}
                  className="p-2.5 rounded-full bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-dynamic-primary hover:bg-slate-300 dark:hover:bg-slate-700 transition-all inline-block"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </GsapMagnetic>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {profileData.name}.</span>
            <span className="text-slate-400 dark:text-slate-500">
              Built with Next.js & Tailwind CSS.
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800/60 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
