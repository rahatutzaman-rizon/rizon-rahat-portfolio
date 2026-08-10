export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  domain: string;
  category: "ERP & SaaS" | "AI & Automation" | "E-Commerce" | "Web Apps";
  featured: boolean;
  role: string;
  period: string;
  client?: string;
  techStack: string[];
  features: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  gradient: string;
  accentColor: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "fto-travels",
    slug: "fto-travels",
    title: "FTO Travels",
    subtitle: "Enterprise Multi-Tenant Travel ERP & Booking Engine",
    shortDescription:
      "Comprehensive multi-tenant travel ERP platform covering Flight, Hotel, Visa, Umrah, CRM, B2B Agent Portals, Accounts, and automated payment/invoicing.",
    fullDescription: [
      "FTO Travels is an end-to-end multi-tenant travel ERP and B2B SaaS platform designed to streamline operations for travel agencies, package operators, and corporate bookers.",
      "The system handles end-to-end travel lifecycle management: real-time flight availability, hotel reservations, visa processing tracking, Umrah custom packages, credit account ledgers, B2B agent balance management, automated PDF invoice generation, refund processing, and automated email notifications.",
      "Built with a decoupled React.js/Next.js frontend and Node.js RESTful services backed by MongoDB multi-tenant data structures, it ensures robust tenant data isolation, sub-second search speeds, and strict role-based access control (RBAC).",
    ],
    domain: "Travel Tech / Multi-Tenant ERP",
    category: "ERP & SaaS",
    featured: true,
    role: "Full Stack Software Engineer (Lead Developer)",
    period: "2024 – Present",
    client: "Implevista / Enterprise Travel Clients",
    techStack: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "PDF Kit",
      "Azure DevOps",
    ],
    features: [
      "Multi-tenant travel agency data isolation with custom branding support",
      "Flight, Hotel, Visa, and Umrah package booking engine workflows",
      "B2B Agent Portal with credit balance, deposit logs, and transaction approvals",
      "Automated PDF invoice generation and branded email receipt delivery",
      "Integrated financial Accounts ERP with ledger entry, refunds, and tax breakdowns",
      "Multi-tier Role-Based Access Control (Super Admin, Agency Admin, Agent, Finance)",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Managing strict tenant data isolation while sharing common booking provider APIs across dozens of agencies.",
        solution:
          "Architected tenant-keyed database middleware in Node.js/MongoDB that dynamically scopes queries and caches session configs per tenant domain.",
      },
      {
        challenge:
          "Handling complex multi-currency financial settlements, deposits, and refunds without race conditions.",
        solution:
          "Implemented atomic database transactions and ledger locking mechanisms for balance credits/debits during instant ticket issuance.",
      },
    ],
    metrics: [
      { label: "Agency Tenants", value: "15+" },
      { label: "Booking Speed", value: "<800ms" },
      { label: "Audit Accuracy", value: "100%" },
    ],
    links: {
      live: "https://ftotravels.com",
    },
    gradient: "from-blue-600/30 via-indigo-600/20 to-cyan-500/10",
    accentColor: "#3b82f6",
  },
  {
    id: "flighttrip",
    slug: "flighttrip",
    title: "FlightTrip Platform",
    subtitle: "Multi-Tenant Flight & Hotel Booking SaaS",
    shortDescription:
      "Scalable B2B/B2C travel platform providing real-time flight search, hotel room selection, visa workflow management, and payment gateway integration.",
    fullDescription: [
      "FlightTrip is a modern cloud-native travel booking SaaS built to power high-frequency flight query operations and multi-supplier GDS API integrations.",
      "The platform aggregates flight and accommodation feeds into a unified dynamic dashboard. It provides travel agencies with instant booking confirmations, agent commissions calculation, customer CRM profiling, and transaction history.",
      "Engineered on Next.js and Node.js with Azure DevOps deployment pipelines, Docker containerization, and automated database backups.",
    ],
    domain: "Travel & Hospitality SaaS",
    category: "ERP & SaaS",
    featured: true,
    role: "Full Stack Developer",
    period: "2024 – Present",
    client: "Implevista",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Docker",
      "Azure Portal",
      "Tailwind CSS",
    ],
    features: [
      "Real-time flight and hotel search aggregation engine",
      "Instant booking status state machine (Pending, Confirmed, Cancelled, Refunded)",
      "Multi-currency payment gateway integrations with webhooks",
      "B2B agency dashboard with real-time sales reporting and analytics charts",
      "Automated email notifications for flight changes and e-ticket issuance",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Handling API latency and timeout fallbacks from third-party supplier GDS endpoints during peak holiday traffic.",
        solution:
          "Built a resilient asynchronous query queue with cached supplier fallback responses and retry mechanisms.",
      },
    ],
    metrics: [
      { label: "API Latency Reduction", value: "35%" },
      { label: "Deployment CI/CD", value: "Azure DevOps" },
    ],
    links: {
      live: "https://flighttrip.com",
    },
    gradient: "from-cyan-600/30 via-teal-600/20 to-blue-500/10",
    accentColor: "#06b6d4",
  },
  {
    id: "ai-rag-automation",
    slug: "ai-rag-automation",
    title: "AI / RAG Enterprise Automation System",
    subtitle: "Knowledge Search & AI-Powered Workflow Engine",
    shortDescription:
      "Retrieval-Augmented Generation system enabling contextual document search, automated policy lookup, email response generation, and workflow automation.",
    fullDescription: [
      "An enterprise AI integration system built to solve document lookup friction across thousands of complex travel policies, terms, and internal operational rules.",
      "Utilizing RAG (Retrieval-Augmented Generation), vector embedding search, and LLMs, the platform allows internal staff and agents to query operational knowledge bases in plain natural language.",
      "Features automated email drafting for customer service inquiries, document summarization, and automated background tasks for invoice data extraction.",
    ],
    domain: "Artificial Intelligence / Enterprise Automation",
    category: "AI & Automation",
    featured: true,
    role: "AI & Automation Lead Developer",
    period: "2025 – Present",
    techStack: [
      "Python",
      "TypeScript",
      "Node.js",
      "Vector DB / Embeddings",
      "LLM APIs (OpenAI/Anthropic)",
      "React.js",
      "Tailwind CSS",
    ],
    features: [
      "Natural language document search over complex travel rule PDF/Doc files",
      "Context-aware AI assistance with exact source citations",
      "Automated email response drafting based on incoming customer queries",
      "Background worker pipeline for automated document vectorization",
      "Role-gated AI query access to ensure sensitive data protection",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Preventing hallucination when retrieving technical travel refund guidelines and penalties.",
        solution:
          "Implemented strict chunking, hybrid vector/keyword search, and prompt guardrails enforcing exact document citation requirements.",
      },
    ],
    metrics: [
      { label: "Search Accuracy", value: "94%" },
      { label: "Support Time Saved", value: "50%" },
    ],
    links: {
      github: "https://github.com/rizonrahat",
    },
    gradient: "from-purple-600/30 via-violet-600/20 to-indigo-500/10",
    accentColor: "#8b5cf6",
  },
  {
    id: "nucleus-institute",
    slug: "nucleus-institute",
    title: "Nucleus Institute Platform",
    subtitle: "High-Performance Canadian Education Web Platform",
    shortDescription:
      "Responsive education website delivering clean course structures, fast page loads, interactive contact modules, and optimized content delivery.",
    fullDescription: [
      "Developed for Canadian client Nucleus Institute, this application presents educational offerings, course catalogs, student consultation request flows, and administrative management features.",
      "Focused heavily on frontend engineering best practices: server-side rendering with Next.js, accessible UI components, localized asset optimization, and SEO metadata.",
      "Achieved Lighthouse performance scores of 95+ across Desktop and Mobile viewports.",
    ],
    domain: "EdTech / Web Application",
    category: "Web Apps",
    featured: true,
    role: "Frontend Developer",
    period: "2024",
    client: "Nucleus Institute (Canada)",
    techStack: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
    features: [
      "Dynamic course catalog with filterable curriculum modules",
      "Interactive consultation & student inquiry intake forms",
      "Fully responsive breakpoint support across all modern devices",
      "Optimized SEO metadata and structured JSON-LD schema",
      "Fast page transitions and accessible keyboard navigation",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Improving low mobile performance scores caused by heavy image assets and unoptimized scripts.",
        solution:
          "Migrated to Next.js Image component, implemented lazy loading, and eliminated redundant third-party script blocking.",
      },
    ],
    metrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Mobile Page Load", value: "<1.2s" },
    ],
    links: {
      live: "https://nucleusinstitute.ca",
    },
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-500/10",
    accentColor: "#10b981",
  },
  {
    id: "shopify-sync-engine",
    slug: "shopify-sync-engine",
    title: "Shopify Custom Merchant Suite",
    subtitle: "Custom E-Commerce Storefront & Order Integration",
    shortDescription:
      "Custom Shopify storefront extension, REST API sync engine, inventory tracking, and specialized order fulfillment workflows.",
    fullDescription: [
      "Custom e-commerce integration built for retail clients using Shopify. Connects Shopify Admin REST/GraphQL APIs with custom web dashboards.",
      "Automates product sync, inventory updates, order status synchronization, and customer record management.",
    ],
    domain: "E-Commerce / Shopify Tech",
    category: "E-Commerce",
    featured: false,
    role: "Full Stack Developer",
    period: "2024",
    techStack: [
      "Shopify Admin API",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Custom Shopify Liquid & React storefront integration",
      "Real-time inventory and order REST API webhook handler",
      "Custom admin dashboard for specialized fulfillment tagging",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Syncing high-volume order webhooks without missing rate limits.",
        solution:
          "Built a durable Redis background queue processing order webhooks asynchronously.",
      },
    ],
    metrics: [
      { label: "Sync Reliability", value: "99.9%" },
    ],
    links: {
      github: "https://github.com/rizonrahat",
    },
    gradient: "from-amber-600/30 via-orange-600/20 to-yellow-500/10",
    accentColor: "#f59e0b",
  },
  {
    id: "property-crm-saas",
    slug: "property-crm-saas",
    title: "Property & Tenant ERP SaaS",
    subtitle: "Lease Management, Rent Ledger & Account Engine",
    shortDescription:
      "Property management platform handling tenant leasing, rent ledger automation, maintenance requests, and landlord balance dashboards.",
    fullDescription: [
      "Full stack SaaS built for property management companies to digitize property units, tenant lease contracts, automated monthly rent invoicing, and tenant communication.",
    ],
    domain: "Property Management & Financial ERP",
    category: "ERP & SaaS",
    featured: false,
    role: "Full Stack Developer",
    period: "2024",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "JWT Auth",
    ],
    features: [
      "Unit and lease contract management with expiry alerts",
      "Tenant payment recording & automated PDF receipt generation",
      "Landlord financial dashboard with income vs expense graphs",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Ensuring monthly recurring rent entries were accurately generated for hundreds of leases.",
        solution:
          "Designed automated cron background workers with transactional ledger verification.",
      },
    ],
    metrics: [
      { label: "Automated Invoices", value: "1,000+" },
    ],
    links: {
      github: "https://github.com/rizonrahat",
    },
    gradient: "from-rose-600/30 via-pink-600/20 to-purple-500/10",
    accentColor: "#f43f5e",
  },
];
