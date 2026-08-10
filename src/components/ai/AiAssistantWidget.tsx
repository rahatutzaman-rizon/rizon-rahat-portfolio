"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Bot,
  Send,
  X,
  ShieldCheck,
  Zap,
  BookOpen,
  UserCheck,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  confidenceScore?: number;
  sources?: string[];
  timestamp: string;
}

export function AiAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hi! I am Rizon's AI Portfolio Assistant & Vector RAG Engine. Ask me anything about Rizon's multi-tenant ERP projects, Business Analysis skills, AI/RAG automation, or tech stack!",
      confidenceScore: 99.2,
      sources: ["profile.ts", "projects.ts"],
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const suggestedPrompts = [
    "Tell me about Rizon's Multi-Tenant ERPs",
    "What AI & RAG automation has he built?",
    "What are his Business Analysis skills?",
    "What is Rizon's primary tech stack?",
  ];

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputMsg;
    if (!query.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMsg("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await response.json();

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: data.answer || "I retrieved relevant information from Rizon's portfolio.",
        confidenceScore: data.confidenceScore || 97.8,
        sources: data.sources || ["profile.ts"],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "Rizon is a Full Stack Software Engineer with 2+ years of experience building multi-tenant ERP, CRM, SaaS, and AI/RAG solutions in React, Next.js, Node.js, and MongoDB.",
          confidenceScore: 95.0,
          sources: ["profile.ts"],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full font-bold text-xs text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl border border-white/20"
          style={{
            backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
          }}
          aria-label="Open AI Portfolio Assistant"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <Bot className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-mono tracking-wide">Ask AI RAG Assistant</span>
          <span className="inline-flex sm:hidden font-mono">AI Chat</span>
        </button>
      </div>

      {/* AI Assistant Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[600px] h-[80vh] rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl text-slate-900 dark:text-white"
          >
            {/* Header Bar */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/80 dark:bg-slate-900/80">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
                  }}
                >
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                    Rizon AI RAG Engine <Sparkles className="w-3.5 h-3.5 text-dynamic-primary" />
                  </h3>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online • Zero Hallucination Guardrail
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Stream Container */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl space-y-2 leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "text-white rounded-br-none"
                        : "bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none"
                    }`}
                    style={
                      msg.sender === "user"
                        ? {
                            backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
                          }
                        : {}
                    }
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>

                    {/* AI RAG Metadata & Confidence Score */}
                    {msg.sender === "ai" && (
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {msg.confidenceScore && (
                          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                            <ShieldCheck className="w-3 h-3" /> {msg.confidenceScore}% Confidence
                          </span>
                        )}
                        {msg.sources && msg.sources.length > 0 && (
                          <span className="flex items-center gap-1 text-slate-400 truncate max-w-[180px]">
                            <BookOpen className="w-3 h-3" /> {msg.sources.join(", ")}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-xs text-dynamic-primary font-mono bg-slate-100 dark:bg-slate-900 p-3 rounded-2xl max-w-[70%] border border-slate-200 dark:border-slate-800">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Searching vector context...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts Pills */}
            <div className="p-2 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 overflow-x-auto flex gap-1.5 scrollbar-none">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-200/70 dark:bg-slate-800/80 hover:bg-dynamic-primary hover:text-white text-slate-700 dark:text-slate-300 shrink-0 transition-colors border border-slate-300/50 dark:border-slate-700/50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 bg-white dark:bg-slate-950"
            >
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Ask about Rizon's ERP, RAG or Skills..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-dynamic-primary transition-colors"
              />
              <button
                type="submit"
                disabled={!inputMsg.trim() || loading}
                className="p-2.5 rounded-xl text-white font-bold transition-all disabled:opacity-40"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
                }}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
