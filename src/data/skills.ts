export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
    icon?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "business-analysis",
    category: "Business Analysis & Systems",
    iconName: "Building2",
    description: "Enterprise requirements gathering, process workflow mapping, BRD/PRD documentation, and solution specification.",
    skills: [
      { name: "Business Analysis (BRD/PRD)", level: "Advanced", featured: true },
      { name: "Process Workflow Mapping", level: "Advanced", featured: true },
      { name: "Enterprise ERP Specs", level: "Advanced", featured: true },
      { name: "Requirement Gathering", level: "Advanced", featured: true },
      { name: "SQL Query Tuning (+45%)", level: "Advanced", featured: true },
      { name: "Multi-Tenant Data Boundaries", level: "Advanced", featured: true },
      { name: "Shopify Custom Development", level: "Proficient", featured: true },
      { name: "Agile / Scrum Leadership", level: "Proficient", featured: false },
    ],
  },
  {
    id: "data-analytics",
    category: "Data Analysis & Business Intelligence",
    iconName: "BarChart3",
    description: "Statistical data analysis, relational query optimization, interactive visualization dashboards, and business reporting.",
    skills: [
      { name: "Data Analysis & Visualization", level: "Advanced", featured: true },
      { name: "SQL Query Optimization (+45%)", level: "Advanced", featured: true },
      { name: "Python Data Stack (Pandas, NumPy)", level: "Advanced", featured: true },
      { name: "Tableau & Power BI Dashboards", level: "Proficient", featured: true },
      { name: "Data Modeling & Schema Design", level: "Advanced", featured: true },
      { name: "ETL Pipelines & Data Cleaning", level: "Proficient", featured: true },
      { name: "Business Intelligence & Metrics", level: "Advanced", featured: true },
      { name: "Statistical & Trend Analysis", level: "Proficient", featured: false },
    ],
  },
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
