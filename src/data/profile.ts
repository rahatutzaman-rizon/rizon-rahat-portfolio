export interface SpokenLanguage {
  name: string;
  nativeName: string;
  flag: string;
  level: string;
  percentage: number;
  description: string;
}

export interface CpProfile {
  name: string;
  username: string;
  url: string;
  badgeUrl: string;
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
  cpProfiles: CpProfile[];
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
  role: "Full Stack & React Native Engineer | Data Analyst",
  profileImage: "/images/profile.jpg",
  titles: [
    "Full Stack Software Engineer",
    "React Native Mobile Engineer",
    "Data Analyst & BI Specialist",
    "ERP & Multi-Tenant SaaS Architect",
    "AI & RAG Automation Developer",
  ],
  tagline: "Building scalable multi-tenant ERPs, React Native mobile apps, data analytics solutions, and AI-powered enterprise automation.",
  heroHook:
    "I build multi-tenant ERP, CRM, React Native mobile apps, and SaaS platforms — combining robust full-stack engineering with NoSQL/SQL data migration, BI analytics, and AI-powered workflow automation.",
  location: "Dhaka, Bangladesh",
  email: "rizonrahat199@gmail.com",
  phone: "+8801771276400",
  resumeUrl: "/resume.pdf",
  availability: "Open for Full-Stack, React Native Mobile & Data Engineering Roles",
  bio: "I'm a Full Stack Software Engineer, React Native Mobile Developer, and Data Analyst with 2+ years of experience building multi-tenant ERP, CRM, SaaS, mobile applications, and database-driven solutions. I specialize in React, React Native, Next.js, Node.js, Python, NoSQL/SQL data migration, data visualization, and AI/RAG document workflows.",
  aboutParagraphs: [
    "I'm a Full Stack Software Engineer, React Native Mobile Developer, and Data Analyst with 2+ years of hands-on experience designing enterprise-grade multi-tenant ERP, CRM, cross-platform mobile apps, and data analytics dashboards.",
    "My technical expertise spans Full Stack & Mobile (React.js, React Native, Next.js, Node.js, Express, TypeScript) and Data Systems (SQL/NoSQL database architecture, schema migration, Python Pandas/NumPy, data visualization, ETL, and automated reporting). I specialize in end-to-end solutions — from multi-tenant access control to cross-platform mobile apps.",
    "Over my career, I've delivered mission-critical travel ERP modules (Flight, Hotel, Visa, Umrah, Accounts, Refund), interactive analytics dashboards, custom Shopify integrations, React Native mobile features, and AI document retrieval engines.",
  ],
  socials: {
    github: "https://github.com/rahatutzaman-rizon/",
    linkedin: "https://www.linkedin.com/in/rahatutzaman-rizon-373529172/",
    email: "mailto:rizonrahat199@gmail.com",
    phone: "tel:+8801771276400",
  },
  cpProfiles: [
    {
      name: "LeetCode",
      username: "rizon525",
      url: "https://leetcode.com/u/rizon525/",
      badgeUrl: "https://img.shields.io/badge/LeetCode-rizon525-FFA116?style=for-the-badge&logo=leetcode&logoColor=black",
    },
    {
      name: "CodeChef",
      username: "redwantamim525",
      url: "https://www.codechef.com/users/redwantamim525",
      badgeUrl: "https://img.shields.io/badge/CodeChef-redwantamim525-5B4638?style=for-the-badge&logo=codechef&logoColor=white",
    },
    {
      name: "Beecrowd",
      username: "334994",
      url: "https://judge.beecrowd.com/en/profile/334994",
      badgeUrl: "https://img.shields.io/badge/Beecrowd-View_Profile-6021D1?style=for-the-badge",
    },
  ],
  stats: [
    {
      label: "Experience",
      value: "2+ Years",
      description: "Building production ERP, SaaS, Mobile & Analytics apps",
      icon: "Briefcase",
    },
    {
      label: "Problem Solving",
      value: "500+",
      description: "Solved on LeetCode, CodeChef & Beecrowd",
      icon: "Code2",
    },
    {
      label: "Database & Migration",
      value: "SQL / NoSQL",
      description: "Data migration, indexing & multi-tenant isolation",
      icon: "Database",
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
    "Engineered React Native mobile app components and cross-platform UI workflows for iOS & Android",
    "Executed NoSQL & relational database schema migrations, query tuning, and multi-tenant data isolation",
    "Built data visualization pipelines & business intelligence dashboards using Python & modern web tech",
    "Integrated AI/RAG contextual document search, vector retrieval, and email workflow automation",
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
