export interface SpokenLanguage {
  name: string;
  nativeName: string;
  flag: string;
  level: string;
  percentage: number;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  profileImage: string;
  titles: string[];
  tagline: string;
  heroHook: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  availability: string;
  bio: string;
  aboutParagraphs: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
    icon: string;
  }[];
  keyHighlights: string[];
  spokenLanguages: SpokenLanguage[];
}

export const profileData: Profile = {
  name: "Rahatutzaman Rizon",
  role: "Full Stack Engineer & Data Analyst",
  profileImage: "/images/profile.jpg",
  titles: [
    "Full Stack Software Engineer",
    "Data Analyst & BI Specialist",
    "ERP & Multi-Tenant SaaS Architect",
    "AI & RAG Automation Developer",
  ],
  tagline: "Building scalable multi-tenant ERPs, CRM platforms, data analytics solutions, and AI-powered enterprise automation.",
  heroHook:
    "I build multi-tenant ERP, CRM, and SaaS platforms — combining robust full-stack engineering with data analysis, SQL performance tuning, and AI-powered workflow automation.",
  location: "Dhaka, Bangladesh",
  email: "rizonrahat199@gmail.com",
  phone: "+8801771276400",
  resumeUrl: "/resume.pdf",
  availability: "Open for Full-Stack, Data Analytics & Engineering Roles",
  bio: "I'm a Full Stack Software Engineer and Data Analyst with 2+ years of experience building multi-tenant ERP, CRM, SaaS, data analytics dashboards, and database-driven applications. I specialize in React, Next.js, Node.js, Python, SQL query optimization, data visualization, and AI/RAG document workflows.",
  aboutParagraphs: [
    "I'm a Full Stack Software Engineer and Data Analyst with 2+ years of hands-on experience designing enterprise-grade multi-tenant ERP, CRM, data dashboards, and database-driven web applications.",
    "My technical expertise spans Full Stack Development (React.js, Next.js, Node.js, Express, TypeScript) and Data Analytics & BI (SQL query optimization, Python Pandas/NumPy, data visualization, ETL, and automated reporting). I specialize in end-to-end solutions — from multi-tenant access control to database tuning that boosts query speed by +45%.",
    "Over my career, I've delivered mission-critical travel ERP modules (Flight, Hotel, Visa, Umrah, Accounts, Refund), interactive analytics dashboards, custom Shopify integrations, and AI document retrieval engines.",
  ],
  socials: {
    github: "https://github.com/rahatutzaman-rizon/",
    linkedin: "https://www.linkedin.com/in/rahatutzaman-rizon-373529172/",
    email: "mailto:rizonrahat199@gmail.com",
    phone: "tel:+8801771276400",
  },
  stats: [
    {
      label: "Experience",
      value: "2+ Years",
      description: "Building production ERP, SaaS & Analytics apps",
      icon: "Briefcase",
    },
    {
      label: "Problem Solving",
      value: "500+",
      description: "Solved on LeetCode, CodeChef & Beecrowd",
      icon: "Code2",
    },
    {
      label: "SQL Optimization",
      value: "+45%",
      description: "Database speed & query execution boost",
      icon: "TrendingUp",
    },
    {
      label: "B.Sc. CGPA",
      value: "3.50 / 4.00",
      description: "Information & Communication Technology",
      icon: "GraduationCap",
    },
  ],
  keyHighlights: [
    "Architected multi-tenant travel ERP & data analytics modules (Flight, Hotel, Visa, Accounts, Invoicing, Refunds)",
    "Optimized enterprise SQL database queries and indexes, improving performance by up to 45%",
    "Built data visualization pipelines & business intelligence dashboards using Python & modern web tech",
    "Integrated AI/RAG contextual document search, vector retrieval, and email workflow automation",
    "Engineered custom Shopify storefront features, REST API integrations, and RBAC security systems",
  ],
  spokenLanguages: [
    {
      name: "English",
      nativeName: "English",
      flag: "🇬🇧",
      level: "Full Professional / Fluent",
      percentage: 95,
      description: "Fluent engineering communication, technical documentation, and client collaboration.",
    },
    {
      name: "Bangla",
      nativeName: "বাংলা",
      flag: "🇧🇩",
      level: "Native / Mother Tongue",
      percentage: 100,
      description: "Native language proficiency with complete mastery in spoken and written communication.",
    },
    {
      name: "Hindi",
      nativeName: "हिन्दी",
      flag: "🇮🇳",
      level: "Conversational / Proficient",
      percentage: 85,
      description: "Fluent spoken communication and cross-cultural technical team collaboration.",
    },
    {
      name: "Spanish",
      nativeName: "Español",
      flag: "🇪🇸",
      level: "Working Proficiency / Conversational",
      percentage: 70,
      description: "Conversational fluency and active skill development for international teams.",
    },
  ],
};
