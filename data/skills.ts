export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string; // e.g. "Advanced", "Proficient"
    featured?: boolean;
    icon?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    iconName: "Code",
    description: "Core programming and database query languages used for application logic.",
    skills: [
      { name: "TypeScript", level: "Advanced", featured: true },
      { name: "JavaScript (ES6+)", level: "Advanced", featured: true },
      { name: "Python", level: "Proficient", featured: true },
      { name: "SQL", level: "Advanced", featured: true },
      { name: "C++", level: "Intermediate", featured: false },
    ],
  },
  {
    id: "frontend",
    category: "Frontend Development",
    iconName: "Layout",
    description: "Modern, responsive, and performance-focused UI engineering tools.",
    skills: [
      { name: "React.js", level: "Advanced", featured: true },
      { name: "Next.js (App Router)", level: "Advanced", featured: true },
      { name: "Redux / Toolkit", level: "Proficient", featured: true },
      { name: "Tailwind CSS", level: "Advanced", featured: true },
      { name: "HTML5 & CSS3", level: "Advanced", featured: false },
      { name: "Responsive UI/UX", level: "Advanced", featured: true },
      { name: "Framer Motion", level: "Proficient", featured: false },
    ],
  },
  {
    id: "backend",
    category: "Backend & APIs",
    iconName: "Server",
    description: "Scalable server architectures, microservices, and secure API gateways.",
    skills: [
      { name: "Node.js", level: "Advanced", featured: true },
      { name: "Express.js", level: "Advanced", featured: true },
      { name: "RESTful APIs", level: "Advanced", featured: true },
      { name: "JWT & Auth", level: "Advanced", featured: true },
      { name: "RBAC (Role Access)", level: "Advanced", featured: true },
      { name: "Middleware Design", level: "Proficient", featured: false },
    ],
  },
  {
    id: "databases",
    category: "Databases & Architecture",
    iconName: "Database",
    description: "Multi-tenant data isolation, relational & document schema design, and query optimization.",
    skills: [
      { name: "MongoDB", level: "Advanced", featured: true },
      { name: "MySQL", level: "Advanced", featured: true },
      { name: "PostgreSQL", level: "Proficient", featured: true },
      { name: "Multi-Tenant DB Isolation", level: "Advanced", featured: true },
      { name: "Schema Migration", level: "Proficient", featured: false },
      { name: "Query Optimization (+45% speed)", level: "Advanced", featured: true },
    ],
  },
  {
    id: "business-domains",
    category: "Business Domains & ERP",
    iconName: "Building2",
    description: "Specialized experience building enterprise modules for core business processes.",
    skills: [
      { name: "Multi-Tenant ERP", level: "Advanced", featured: true },
      { name: "CRM Platforms", level: "Advanced", featured: true },
      { name: "B2B Portals", level: "Advanced", featured: true },
      { name: "Accounts & Financial ERP", level: "Advanced", featured: true },
      { name: "Booking Systems (Flight/Hotel/Visa)", level: "Advanced", featured: true },
      { name: "Payment & PDF Invoicing", level: "Advanced", featured: true },
      { name: "HRMS & Property Tech", level: "Proficient", featured: false },
    ],
  },
  {
    id: "shopify",
    category: "Shopify Development",
    iconName: "ShoppingBag",
    description: "Custom e-commerce solutions, storefront custom features, and API integrations.",
    skills: [
      { name: "Custom Shopify Storefront", level: "Proficient", featured: true },
      { name: "Shopify API Integration", level: "Proficient", featured: true },
      { name: "Product & Order Workflows", level: "Proficient", featured: false },
      { name: "Theme Customization", level: "Proficient", featured: false },
    ],
  },
  {
    id: "ai-automation",
    category: "AI & Automation",
    iconName: "Sparkles",
    description: "Integrating intelligent contextual agents, vector search, and background automation.",
    skills: [
      { name: "AI Integration (LLMs)", level: "Proficient", featured: true },
      { name: "RAG (Retrieval-Augmented Gen)", level: "Proficient", featured: true },
      { name: "Workflow Automation", level: "Proficient", featured: true },
      { name: "Email & Notification Services", level: "Advanced", featured: true },
      { name: "AI-Assisted Coding (Copilot/Cursor)", level: "Advanced", featured: false },
    ],
  },
  {
    id: "devops",
    category: "DevOps & Cloud Tools",
    iconName: "Cloud",
    description: "CI/CD pipelines, containerization, deployment monitoring, and cloud hosting.",
    skills: [
      { name: "Azure Portal", level: "Proficient", featured: true },
      { name: "Azure DevOps & CI/CD", level: "Proficient", featured: true },
      { name: "Docker & Containerization", level: "Proficient", featured: true },
      { name: "Git & GitHub Workflows", level: "Advanced", featured: true },
      { name: "Vercel / Cloud Deployment", level: "Advanced", featured: false },
    ],
  },
  {
    id: "core-cs",
    category: "Core Computer Science",
    iconName: "Cpu",
    description: "Theoretical foundation, clean code practices, and system engineering principles.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", featured: true },
      { name: "Data Structures & Algorithms", level: "Advanced", featured: true },
      { name: "DBMS Fundamentals", level: "Advanced", featured: true },
      { name: "SDLC & Agile Methodologies", level: "Advanced", featured: false },
      { name: "Testing & Debugging", level: "Advanced", featured: false },
    ],
  },
];
