import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Zap,
  Building2,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header Banner */}
        <div
          className={`rounded-3xl bg-gradient-to-tr ${project.gradient} p-8 sm:p-12 relative overflow-hidden border border-white/10 shadow-2xl space-y-6`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 z-10 relative">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/80 text-white backdrop-blur-md border border-white/10">
              {project.domain}
            </span>
            <span className="text-xs font-mono text-slate-200 bg-black/30 px-3 py-1 rounded-full backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <div className="space-y-2 z-10 relative">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-100 font-medium">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 z-10 relative text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-300" />
              <span>Role: {project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Period: {project.period}</span>
            </div>
          </div>

          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-500" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Project Links & Resources
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Platform</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Overview & Deep Dive */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <div className="p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-500" />
                <span>Project Overview & Architecture</span>
              </h2>
              {project.fullDescription.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Features */}
            <div className="p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Key Platform Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
              <div className="p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span>Engineering Challenges & Solutions</span>
                </h2>

                <div className="space-y-4">
                  {project.challengesAndSolutions.map((cs, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-3"
                    >
                      <div className="flex items-start gap-2 text-rose-500 font-semibold text-xs sm:text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Challenge: {cs.challenge}</span>
                      </div>
                      <div className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-xs sm:text-sm pt-2 border-t border-slate-200 dark:border-slate-800">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Solution: {cs.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Tech Stack & Metrics Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Key Results / Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                  Impact & Key Metrics
                </h3>
                <div className="space-y-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {m.label}
                      </span>
                      <span className="text-base font-extrabold font-mono text-cyan-600 dark:text-cyan-400">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack List */}
            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
