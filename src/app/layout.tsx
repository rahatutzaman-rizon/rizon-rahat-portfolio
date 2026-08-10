import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ColorThemeProvider } from "@/context/ColorThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { AnalyticsProvider } from "@/context/AnalyticsContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GsapCursor } from "@/components/ui/GsapCursor";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Rahatutzaman Rizon — Full Stack Software Engineer | ERP, SaaS & AI Specialist",
  description:
    "Portfolio of Rahatutzaman Rizon, Full Stack Software Engineer specializing in multi-tenant ERP, CRM platforms, SaaS platforms, Shopify development, and AI/RAG workflow automation.",
  keywords: [
    "Rahatutzaman Rizon",
    "Rizon",
    "Software Engineer",
    "Full Stack Developer",
    "React Engineer",
    "Next.js Developer",
    "Node.js Engineer",
    "Multi-Tenant ERP",
    "SaaS Architect",
    "AI RAG Developer",
    "Shopify Developer",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: "Rahatutzaman Rizon" }],
  creator: "Rahatutzaman Rizon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rizon-portfolio.vercel.app",
    title: "Rahatutzaman Rizon — Full Stack Software Engineer",
    description:
      "Building scalable multi-tenant ERPs, CRM platforms, Shopify solutions, and AI-powered enterprise automation.",
    siteName: "Rahatutzaman Rizon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahatutzaman Rizon — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in ERP, SaaS, and AI automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-slate-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <AnalyticsProvider>
              <ColorThemeProvider>
                <GsapCursor />
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
                <Toaster position="bottom-right" richColors />
              </ColorThemeProvider>
            </AnalyticsProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
