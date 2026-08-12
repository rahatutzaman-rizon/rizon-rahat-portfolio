"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Bot,
  Search,
  FileText,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Code2,
  FileCode,
  Users,
  Layers,
  Terminal,
} from "lucide-react";

export function AiPlayground() {
  const [activeTab, setActiveTab] = useState<string>("rag");
  const [searchQuery, setSearchQuery] = useState("Show multi-tenant ERP flight booking rules & refund policy");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<any>(null);

  const { t } = useLanguage();
  const scrollRef = useGsapScrollReveal<HTMLDivElement>({
    stagger: 0.12,
    yOffset: 35,
  });

  const handleTestSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setSearchResult({
        query: searchQuery,
        answer: "Retrieved 3 matching tenant policy documents. Flight cancellation policy allows automated refund ledger entries with 99.4% accuracy under tenant RBAC rule #402.",
        confidenceScore: 98.4,
        latencyMs: 142,
        citations: ["fto_travels_tenant_policy_v2.pdf (Page 14)", "b2b_agent_refund_ledger.ts"],
      });
      setIsSearching(false);
    }, 700);
  };

  return (
    <section id="ai-playground" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-dynamic-primary text-xs font-mono font-semibold">
            <Bot className="w-4 h-4" />
            <span>INTERACTIVE AI AGENT & RAG PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Enterprise AI Workflows & RAG Suite
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-200 font-medium">
            Explore live interactive demonstrations of automated knowledge base indexing, access-control RAG, multi-agent handoffs, and structured JSON document extraction.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "rag", label: "Access-Control RAG Engine", icon: <Search className="w-4 h-4" /> },
            { id: "automation", label: "Enterprise Workflow Automation", icon: <Zap className="w-4 h-4" /> },
            { id: "agents", label: "Multi-Agent Handoffs", icon: <Bot className="w-4 h-4" /> },
            { id: "extraction", label: "Structured PDF → JSON", icon: <FileText className="w-4 h-4" /> },
            { id: "guardrails", label: "Reliability & Guardrails", icon: <ShieldCheck className="w-4 h-4" /> },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
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
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Box */}
        <div ref={scrollRef} className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-2xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Access Control RAG */}
            {activeTab === "rag" && (
              <motion.div
                key="rag"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Search className="w-5 h-5 text-dynamic-primary" /> Access-Control-Aware RAG Engine
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      Enforces multi-tenant metadata filtering prior to vector similarity retrieval so users only see context authorized for their role.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold self-start md:self-auto">
                    Live Demo
                  </span>
                </div>

                {/* Interactive Search Bar */}
                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono">
                    Test Query Input:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-dynamic-primary font-mono"
                    />
                    <button
                      onClick={handleTestSearch}
                      disabled={isSearching}
                      className="px-5 py-3 rounded-xl text-white font-bold text-xs flex items-center gap-2 hover:opacity-95 shadow-md shrink-0"
                      style={{
                        backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
                      }}
                    >
                      {isSearching ? (
                        <span>Searching...</span>
                      ) : (
                        <>
                          <Zap className="w-4 h-4" />
                          <span>Run RAG Retrieval</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Live Output Display Box */}
                {searchResult && (
                  <div className="p-5 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-dynamic-primary font-bold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> RAG Context Retrieved
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-600 dark:text-emerald-400">
                          {searchResult.confidenceScore}% Confidence
                        </span>
                        <span className="text-slate-400">{searchResult.latencyMs} ms</span>
                      </div>
                    </div>
                    <p className="text-slate-800 dark:text-slate-200 font-sans leading-relaxed text-sm">
                      {searchResult.answer}
                    </p>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Citations:</span>
                      {searchResult.citations.map((c: string) => (
                        <span key={c} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab: Enterprise Workflow Automation */}
            {activeTab === "automation" && (
              <motion.div
                key="automation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-500" /> Automated Enterprise AI Workflows
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      Event-driven pipelines connecting incoming customer webhooks, AI analysis, CRM database updates, and automated email actions.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold self-start md:self-auto">
                    Automation Engine
                  </span>
                </div>

                {/* Visual Workflow Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    {
                      step: "01. Webhook Event",
                      title: "Flight Refund Request",
                      desc: "Customer submits booking refund form via B2B Portal.",
                      badge: "Triggered",
                      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30",
                    },
                    {
                      step: "02. AI RAG Validation",
                      title: "Policy & Rule Match",
                      desc: "LLM checks tenant fare rules & SQL ledger state.",
                      badge: "Validating (99.4%)",
                      badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
                    },
                    {
                      step: "03. ERP Ledger Update",
                      title: "SQL Transaction",
                      desc: "Auto-executes credit note & updates accounts.",
                      badge: "Executed (42ms)",
                      badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
                    },
                    {
                      step: "04. Notification & PDF",
                      title: "Auto Email & Invoice",
                      desc: "Generates refund PDF & dispatches email notification.",
                      badge: "Dispatched",
                      badgeColor: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
                    },
                  ].map((wf, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 relative hover:border-amber-500/50 transition-all duration-300"
                    >
                      <span className="text-[11px] font-mono font-bold text-slate-400">
                        {wf.step}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {wf.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {wf.desc}
                      </p>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${wf.badgeColor}`}>
                        {wf.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab 2: Multi-Agent Handoffs */}
            {activeTab === "agents" && (
              <motion.div
                key="agents"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Bot className="w-5 h-5 text-dynamic-primary" /> Multi-Agent Handoff Workflows
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                    Specialized sub-agents coordinate complex tasks and hand off execution when escalation thresholds are met.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "AI PR Code Reviewer Agent",
                      desc: "Reviews diffs, flags security vulnerabilities, and posts inline review comments.",
                      icon: <Code2 className="w-5 h-5 text-cyan-500" />,
                    },
                    {
                      title: "Support Escalation Agent",
                      desc: "Handles level 1 queries and hands off complex billing disputes to human agents.",
                      icon: <Users className="w-5 h-5 text-indigo-500" />,
                    },
                    {
                      title: "Meeting Notes & Action Agent",
                      desc: "Parses transcripts, identifies action items, and auto-assigns Jira tasks.",
                      icon: <FileCode className="w-5 h-5 text-purple-500" />,
                    },
                  ].map((agent) => (
                    <div
                      key={agent.title}
                      className="p-5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3"
                    >
                      <div className="p-2.5 rounded-lg bg-slate-200/80 dark:bg-slate-800 w-fit">
                        {agent.icon}
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {agent.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {agent.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab 3: Structured PDF → JSON Extraction */}
            {activeTab === "extraction" && (
              <motion.div
                key="extraction"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-dynamic-primary" /> Structured PDF/Document → JSON Extraction
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                    Extracts unstructured contract PDFs, invoices, and receipts into validated database JSON rows.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                  {/* Left: Input Document */}
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                      Input Unstructured PDF (Flight Invoice):
                    </span>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                      INVOICE #94021 - FTO TRAVELS
                      Passenger: Rahatutzaman Rizon
                      Flight: BG-048 (Dhaka to Dubai)
                      Total Amount: $740.00 USD
                      Payment Status: PAID via Credit Card
                    </div>
                  </div>

                  {/* Right: Extracted JSON */}
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block">
                      ✓ Extracted Validated DB JSON Row:
                    </span>
                    <pre className="p-3 rounded-lg bg-white dark:bg-slate-950 text-emerald-600 dark:text-emerald-400 text-[11px] overflow-x-auto">
{`{
  "invoiceNumber": "94021",
  "passenger": "Rahatutzaman Rizon",
  "flightCode": "BG-048",
  "route": "DAC-DXB",
  "amountUsd": 740.00,
  "status": "PAID"
}`}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 4: Guardrails */}
            {activeTab === "guardrails" && (
              <motion.div
                key="guardrails"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" /> Zero-Hallucination & Trust Guardrails
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                    Multi-layer reflection loops and model fallback chains ensure reliability in critical enterprise workflows.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Confidence threshold scoring (< 95% triggers fallback)",
                    "PII redaction and rate limiting middleware",
                    "Self-critique reflection loops verifying output assertions",
                    "LangSmith-style observability tracing for every LLM call",
                  ].map((rule) => (
                    <div
                      key={rule}
                      className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {rule}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
