export interface Profile {
  name: string;
  role: string;
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
}

export const profileData: Profile = {
  name: "Rahatutzaman Rizon",
  role: "Software Engineer | Full Stack Developer",
  titles: [
    "Full Stack Software Engineer",
    "ERP & Multi-Tenant SaaS Architect",
    "AI & RAG Automation Developer",
    "React & Node.js Engineer",
  ],
  tagline: "Building scalable multi-tenant ERPs, CRM platforms, Shopify solutions, and AI-powered enterprise automation.",
  heroHook:
    "I build multi-tenant ERP, CRM, and SaaS platforms — from complex booking workflows to AI-powered document retrieval and workflow automation.",
  location: "Dhaka, Bangladesh",
  email: "rizonrahat199@gmail.com",
  phone: "+8801771276400",
  resumeUrl: "/resume.pdf",
  availability: "Open for Full-Stack, ERP & SaaS Engineering Opportunities",
  bio: "I'm a Full Stack Software Engineer with 2+ years of experience building multi-tenant ERP, CRM, SaaS, B2B, booking, payment, Shopify, and database-driven applications. I work across React.js, Next.js, Node.js, TypeScript, MongoDB, SQL, and Azure DevOps, with a growing focus on AI/RAG integration and workflow automation.",
  aboutParagraphs: [
    "I'm a Full Stack Software Engineer with 2+ years of hands-on experience designing and building enterprise-grade multi-tenant ERP, CRM, SaaS, B2B, booking, payment, and database-driven web applications.",
    "My technical core spans React.js, Next.js, Node.js, Express, TypeScript, MongoDB, SQL, and cloud devops on Azure Portal & Azure DevOps. I specialize in building complete workflows — from multi-tier role-based access controls (RBAC) and payment gateways to automated invoice PDF generation and AI/RAG document processing systems.",
    "Over my career, I've delivered mission-critical travel ERP modules (Flight, Hotel, Visa, Umrah, Accounts, Refund), client-facing SaaS storefronts, custom Shopify integrations, and query optimization projects that improved database speed by up to 45%.",
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
      description: "Building production ERP, SaaS & web applications",
      icon: "Briefcase",
    },
    {
      label: "Problem Solving",
      value: "500+",
      description: "Solved on LeetCode, CodeChef & Beecrowd",
      icon: "Code2",
    },
    {
      label: "Enterprise Modules",
      value: "15+",
      description: "Multi-tenant ERP, CRM & B2B portal modules",
      icon: "Layers",
    },
    {
      label: "B.Sc. CGPA",
      value: "3.50 / 4.00",
      description: "Information & Communication Technology",
      icon: "GraduationCap",
    },
  ],
  keyHighlights: [
    "Architected multi-tenant travel ERP modules (Flight, Hotel, Visa, Umrah, CRM, Accounts, Invoicing, Refunds)",
    "Optimized enterprise SQL database queries, improving performance by up to 45%",
    "Integrated AI/RAG contextual document search, knowledge retrieval, and email workflow automation",
    "Engineered custom Shopify storefront features, REST API integrations, and RBAC authentication systems",
  ],
};
