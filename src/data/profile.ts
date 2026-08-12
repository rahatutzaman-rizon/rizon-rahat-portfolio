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
  role: "Software Engineer | Full Stack Developer",
  profileImage: "/images/profile.jpg",
  titles: [
    "Software Engineer",
    "Full Stack Developer",
    "ERP, CRM & SaaS Specialist",
    "B2B & AI/RAG Automation Developer",
  ],
  tagline: "ERP | SaaS | CRM | B2B | AI & Automation — Building scalable multi-tenant platforms for real-world production clients.",
  heroHook:
    "Full Stack Software Engineer with 2+ years building and scaling multi-tenant ERP, CRM, SaaS, B2B, booking, payment, and Shopify platforms for production travel and business-automation systems.",
  location: "Dhaka, Bangladesh",
  email: "rizonrahat199@gmail.com",
  phone: "+8801771276400",
  resumeUrl: "/resume.pdf",
  availability: "Open for Full-Stack, ERP, SaaS & AI Automation Roles",
  bio: "Full Stack Software Engineer with 2+ years building and scaling multi-tenant ERP, CRM, SaaS, B2B, booking, payment, and Shopify platforms for production travel and business-automation systems. Skilled in JavaScript, TypeScript, React.js, Next.js, Node.js, MongoDB, SQL, REST APIs, testing, and Docker, with hands-on experience designing business logic, domain workflows, RBAC-driven multi-tenant architectures, and AI/RAG-powered automation for real-world clients.",
  aboutParagraphs: [
    "I'm a Full Stack Software Engineer with 2+ years of hands-on experience building and scaling multi-tenant ERP, CRM, SaaS, B2B, booking, payment, and Shopify platforms for production travel and business-automation systems.",
    "My technical skills span JavaScript, TypeScript, React.js, Next.js, Node.js, MongoDB, SQL, REST APIs, testing, Docker, Azure DevOps, and CI/CD. I specialize in designing business logic, domain workflows, RBAC-driven multi-tenant architectures, and AI/RAG-powered document retrieval and workflow automation for real-world clients.",
    "At Implevista, I develop and maintain a multi-tenant travel ERP spanning Flight, Hotel, Visa, Work Visa, Umrah, Tour, CRM, B2B, and Accounts modules, shipping key features for production platforms FTO Travels and FlightTrip.",
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
      description: "Building production ERP, SaaS, CRM & B2B platforms",
      icon: "Briefcase",
    },
    {
      label: "Problem Solving",
      value: "500+",
      description: "Solved across LeetCode, CodeChef & Beecrowd",
      icon: "Code2",
    },
    {
      label: "Database & Architecture",
      value: "SQL & NoSQL",
      description: "MongoDB, MySQL, PostgreSQL & Schema Design",
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
    "Develop and maintain multi-tenant travel ERP (Flight, Hotel, Visa, Work Visa, Umrah, Tour, CRM, B2B, Accounts)",
    "Build & ship production features for FTO Travels and FlightTrip using React.js, Next.js, Node.js, TypeScript & MongoDB",
    "Architect business logic, RBAC, authentication, tenant-aware data access, booking, payment, invoice, refund & reporting",
    "Contribute to AI/RAG-based document retrieval and workflow automation applying modern AI-assisted tools",
    "Own testing, debugging, code reviews, CI/CD, Docker, Git, Azure DevOps, and production deployment",
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
