"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollRef = useGsapScrollReveal<HTMLDivElement>({
    stagger: 0.12,
    yOffset: 30,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you! Your message has been sent successfully.", {
          description: "Rizon will get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback mailto trigger
        window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(
          formData.subject || "Contact Form Inquiry"
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        toast.info("Opening your mail client...", {
          description: "You can send the email directly.",
        });
      }
    } catch {
      window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(
        formData.subject || "Contact Form Inquiry"
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      toast.info("Opening your mail client...", {
        description: "You can send the email directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-dynamic-primary text-xs font-mono font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Something Scalable Together
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Have a project in mind, need a full stack engineer, or want to discuss multi-tenant ERPs & AI integrations? Drop a message!
          </p>
        </div>

        <div ref={scrollRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <a
              href={`mailto:${profileData.email}`}
              className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-dynamic-primary transition-all group block shadow-sm"
            >
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-dynamic-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Direct Email
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-dynamic-primary transition-colors">
                  {profileData.email}
                </span>
              </div>
            </a>

            {/* Direct Phone Card */}
            <a
              href={`tel:${profileData.phone}`}
              className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-dynamic-primary transition-all group block shadow-sm"
            >
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-dynamic-primary group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Phone / WhatsApp
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-dynamic-primary transition-colors">
                  {profileData.phone}
                </span>
              </div>
            </a>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-rose-500/10 text-rose-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    {profileData.location}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Clock className="w-4 h-4" />
                  <span>Response Time: &lt; 24 hours</span>
                </div>
                <span className="text-slate-400">UTC+6</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-300">
                Social Links & Profiles
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-dynamic-primary transition-all text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-dynamic-primary transition-all text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-dynamic-primary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-dynamic-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Role Opportunity / ERP Consultation"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-dynamic-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project requirements or team role..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-dynamic-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-95 shadow-lg shadow-dynamic-primary transition-all duration-300 group disabled:opacity-50"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--gradient-from, #06b6d4) 0%, var(--gradient-to, #6366f1) 100%)",
                }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
