"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, X, Sparkles, Send } from "lucide-react";
import { profileData } from "@/data/profile";

export function QuickContactCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show card automatically after 2.5 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("contact_popup_dismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("contact_popup_dismissed", "true");
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full p-4 rounded-3xl glass-card border border-cyan-500/30 shadow-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl space-y-4"
        >
          {/* Header Bar with Close Button */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500 shadow-md">
                <Image
                  src={profileData.profileImage}
                  alt={profileData.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white dark:border-slate-900" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                  {profileData.name} <Sparkles className="w-3 h-3 text-cyan-500" />
                </h4>
                <p className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  ● Available for Hire & Projects
                </p>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              aria-label="Close Contact Card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Intro Message */}
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug font-medium">
            Need a Full Stack Engineer or Data Analyst? Let's connect directly on WhatsApp or Messenger!
          </p>

          {/* Quick Connect Action Buttons */}
          <div className="grid grid-cols-1 gap-2 pt-1">
            {/* WhatsApp Direct Chat Button */}
            <a
              href="https://wa.me/8801771276400"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>WhatsApp: +880 1771-276400</span>
              </div>
              <Send className="w-3.5 h-3.5" />
            </a>

            {/* Facebook Messenger Button */}
            <a
              href="https://web.facebook.com/rahatutzaman.rizon/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Facebook Messenger</span>
              </div>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
