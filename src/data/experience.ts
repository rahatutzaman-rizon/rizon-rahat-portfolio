export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  featured?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "implevista",
    role: "Software Engineer",
    company: "Implevista",
    companyUrl: "https://implevista.com",
    period: "Dec 2024 – Present",
    startDate: "2024-12",
    endDate: "Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    summary:
      "Develop and maintain multi-tenant travel ERP systems (Flight, Hotel, Visa, Work Visa, Umrah, Tour, CRM, B2B, Accounts), shipping features for FTO Travels and FlightTrip.",
    responsibilities: [
      "Develop and maintain a multi-tenant travel ERP spanning Flight, Hotel, Visa, Work Visa, Umrah, Tour, CRM, B2B, and Accounts modules, serving multiple production tenants.",
      "Build and ship production features for FTO Travels and FlightTrip using React.js, Next.js, Node.js, TypeScript, and MongoDB.",
      "Architect business logic, RBAC, authentication, tenant-aware data access, booking, payment, invoice, refund, and reporting workflows used across the full platform.",
      "Build reusable APIs and UI components covering PDF generation, notifications, validation, error handling, and administrative workflows, reducing duplicate implementation across modules.",
      "Contribute to AI/RAG-based document retrieval and workflow automation, applying modern AI-assisted development practices to speed up feature delivery.",
      "Own testing, debugging, code reviews, CI/CD, Docker, Git, Azure DevOps, and production deployment for the platform.",
    ],
    achievements: [
      "Successfully launched multi-tenant architecture supporting independent data segregation and customizable brand workflows for travel agency tenants.",
      "Automated complete invoice-to-receipt processing pipeline, reducing manual financial audit time by over 60%.",
      "Pioneered internal RAG (Retrieval-Augmented Generation) document retrieval feature for rapid knowledge lookup across complex travel rules.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "REST APIs",
      "RBAC",
      "AI/RAG",
      "Docker",
      "Git",
      "Azure DevOps",
    ],
    featured: true,
  },
  {
    id: "jmc-technology",
    role: "Junior Software Developer",
    company: "JMC Technology Ltd",
    period: "Jun 2024 – Nov 2024",
    startDate: "2024-06",
    endDate: "2024-11",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    summary:
      "Developed ERP/CRM features, Shopify solutions, React interfaces, and REST APIs using React.js, Node.js, Express.js, and MongoDB.",
    responsibilities: [
      "Developed ERP/CRM features, Shopify solutions, React interfaces, and REST APIs using React.js, Node.js, Express.js, and MongoDB.",
      "Engineered custom Shopify storefront features, product catalog customizations, order workflows, and REST API integrations.",
      "Built secure CRUD operations, JWT authentication flows, customizable reporting views, and a library of reusable UI components.",
    ],
    achievements: [
      "Delivered client project Nucleus Institute ahead of schedule with 95+ mobile performance score.",
      "Created reusable React UI component library used across 3 distinct client projects, speeding up dev velocity by 30%.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Shopify",
      "MongoDB",
      "JavaScript",
      "REST APIs",
    ],
    featured: true,
  },
  {
    id: "business-automation",
    role: "Software Engineering Intern",
    company: "Business Automation Ltd",
    period: "Feb 2024 – Apr 2024",
    startDate: "2024-02",
    endDate: "2024-04",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    summary:
      "Built foundational experience across software development, APIs, databases, testing, debugging, Git, and end-to-end development workflows.",
    responsibilities: [
      "Built foundational experience across software development, APIs, databases, testing, debugging, Git, and end-to-end development workflows.",
      "Supported enterprise backend software development, database query optimization, system API testing, and Git collaborative workflows.",
    ],
    achievements: [
      "Optimized heavy enterprise SQL queries and indexes, significantly boosting query response times and reducing database server load.",
      "Authored comprehensive API documentation and test suites adopted by incoming developers.",
    ],
    technologies: [
      "SQL",
      "MySQL",
      "JavaScript",
      "Node.js",
      "Postman",
      "Git",
      "Agile/Scrum",
    ],
    featured: true,
  },
];
