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
      "Engineered high-scale multi-tenant enterprise ERP systems, travel booking engines, financial accounts, and AI/RAG workflow automations.",
    responsibilities: [
      "Developed multi-tenant travel ERP modules covering Flight, Hotel, Visa, Work Visa, Umrah, Tour, CRM, B2B, Accounts, Payment, Invoice, Refund, and Reporting workflows.",
      "Built and maintained core SaaS products FTO Travels and FlightTrip using React.js, Next.js, Node.js, Express, REST APIs, and MongoDB.",
      "Implemented complex booking state machines, multi-tier Role-Based Access Controls (RBAC), credit balance handling, payment gateways, and auto-generated PDF invoices.",
      "Managed multi-tenant database isolation, data migrations, Azure Portal cloud resources, Azure DevOps CI/CD pipelines, and Docker container deployments.",
      "Engineered B2B agent portals, account ledgers, transaction management, real-time dashboards, and AI/RAG document automation features.",
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
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Azure Portal",
      "Azure DevOps",
      "Docker",
      "REST APIs",
      "RBAC",
      "AI/RAG",
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
      "Built enterprise ERP/CRM modules, custom Shopify e-commerce extensions, property tech applications, and client solutions for international clients.",
    responsibilities: [
      "Developed modular ERP, CRM, property management, tenant leasing, account settlement, payment tracking, and executive dashboard modules.",
      "Engineered custom Shopify storefront features, product catalog customizations, order workflows, and REST API integrations.",
      "Delivered major frontend UI and application speed improvements for Canadian client Nucleus Institute.",
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
      "Shopify API",
      "MongoDB",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
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
      "Supported enterprise backend software development, database query optimization, system API testing, and Git collaborative workflows.",
    responsibilities: [
      "Supported enterprise product development, automated API regression testing, bug debugging, and system documentation.",
      "Optimized complex SQL queries, indexes, and database execution plans to reduce query latency.",
      "Collaborated using Git branch strategies, code reviews, and Agile daily standup sprints.",
    ],
    achievements: [
      "Optimized heavy enterprise SQL queries, improving execution speed by approximately 45%.",
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
