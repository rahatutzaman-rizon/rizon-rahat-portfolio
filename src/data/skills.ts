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
    id: "languages",
    category: "Languages",
    iconName: "Code",
    description: "Core programming languages for web, data analysis, and system architecture.",
    skills: [
      { name: "JavaScript", level: "Advanced", featured: true },
      { name: "TypeScript", level: "Advanced", featured: true },
      { name: "Python", level: "Proficient", featured: true },
      { name: "SQL", level: "Advanced", featured: true },
      { name: "C++", level: "Intermediate", featured: false },
    ],
  },
  {
    id: "frontend",
    category: "Frontend Development",
    iconName: "Layout",
    description: "Modern UI engineering tools, component frameworks, and responsive design systems.",
    skills: [
      { name: "React.js", level: "Advanced", featured: true },
      { name: "Next.js", level: "Advanced", featured: true },
      { name: "Redux", level: "Proficient", featured: true },
      { name: "Tailwind CSS", level: "Advanced", featured: true },
      { name: "HTML5 & CSS3", level: "Advanced", featured: false },
      { name: "Framer Motion", level: "Proficient", featured: false },
    ],
  },
  {
    id: "backend",
    category: "Backend Development",
    iconName: "Server",
    description: "Server-side web frameworks, REST API design, authentication, and authorization.",
    skills: [
      { name: "Node.js", level: "Advanced", featured: true },
      { name: "Express.js", level: "Advanced", featured: true },
      { name: "REST APIs", level: "Advanced", featured: true },
      { name: "JWT", level: "Advanced", featured: true },
      { name: "Authentication", level: "Advanced", featured: true },
      { name: "RBAC", level: "Advanced", featured: true },
    ],
  },
  {
    id: "database",
    category: "Database & Storage",
    iconName: "Database",
    description: "Relational & NoSQL database management, document modeling, and query optimization.",
    skills: [
      { name: "MongoDB", level: "Advanced", featured: true },
      { name: "MySQL", level: "Advanced", featured: true },
      { name: "PostgreSQL", level: "Proficient", featured: true },
      { name: "Mongoose", level: "Advanced", featured: true },
      { name: "Schema Design", level: "Advanced", featured: true },
      { name: "Query Optimization", level: "Advanced", featured: true },
    ],
  },
  {
    id: "business-domain",
    category: "Business & Domain",
    iconName: "Building2",
    description: "Domain modeling and business logic implementation for enterprise platforms.",
    skills: [
      { name: "Business Logic", level: "Advanced", featured: true },
      { name: "Domain Modeling", level: "Advanced", featured: true },
      { name: "ERP & CRM Platforms", level: "Advanced", featured: true },
      { name: "SaaS & B2B Architecture", level: "Advanced", featured: true },
      { name: "Booking & Payments", level: "Advanced", featured: true },
      { name: "Invoices & Accounting", level: "Advanced", featured: true },
      { name: "HRMS & Property Tech", level: "Proficient", featured: false },
    ],
  },
  {
    id: "ai-modern",
    category: "AI & Modern Dev",
    iconName: "Sparkles",
    description: "Artificial intelligence integration, RAG document search, and workflow automation.",
    skills: [
      { name: "AI Integration", level: "Advanced", featured: true },
      { name: "RAG (Retrieval Augmented)", level: "Advanced", featured: true },
      { name: "Document Retrieval", level: "Advanced", featured: true },
      { name: "Claude & Antigravity", level: "Advanced", featured: true },
      { name: "AI-assisted Development", level: "Advanced", featured: true },
      { name: "Workflow Automation", level: "Advanced", featured: true },
    ],
  },
  {
    id: "devops-testing",
    category: "Testing & DevOps",
    iconName: "Cloud",
    description: "Testing methodologies, containerization, CI/CD pipelines, and cloud platform deployment.",
    skills: [
      { name: "API Testing & Postman", level: "Advanced", featured: true },
      { name: "Unit Testing & Debugging", level: "Advanced", featured: true },
      { name: "Azure DevOps & Portal", level: "Proficient", featured: true },
      { name: "CI/CD & Docker", level: "Advanced", featured: true },
      { name: "Git & GitHub", level: "Advanced", featured: true },
    ],
  },
  {
    id: "core-cs",
    category: "Core CS Fundamentals",
    iconName: "Cpu",
    description: "Core computer science principles, algorithmic problem solving, and software design.",
    skills: [
      { name: "OOP (Object-Oriented)", level: "Advanced", featured: true },
      { name: "Data Structures", level: "Advanced", featured: true },
      { name: "Algorithms & Problem Solving", level: "Advanced", featured: true },
      { name: "DBMS", level: "Advanced", featured: true },
      { name: "SDLC & Agile", level: "Advanced", featured: true },
    ],
  },
];
