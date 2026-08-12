import { NextResponse } from "next/server";

export interface TechNewsArticle {
  id: string;
  title: string;
  category: "ai-rag" | "nosql-data" | "mobile" | "fullstack";
  categoryLabel: string;
  summary: string;
  content: string;
  takeaway: string;
  dateStr: string;
  readTime: string;
  icon: string;
  tags: string[];
  weekNumber: number;
}

export function generateWeeklyArticles(): {
  dateRangeLabel: string;
  weekNumber: number;
  articles: TechNewsArticle[];
} {
  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  const now = new Date();
  
  // Compute epoch week number (changes every 7 days automatically)
  const weekNumber = Math.floor(now.getTime() / ONE_WEEK_MS);
  
  // Calculate exact 7-day start and end dates
  const startDate = new Date(weekNumber * ONE_WEEK_MS);
  const endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);
  
  const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const dateRangeLabel = `${startDate.toLocaleDateString("en-US", options)} – ${endDate.toLocaleDateString("en-US", options)}, ${endDate.getFullYear()}`;

  // Pool of rotating weekly article topics (rotates based on week index)
  const articlePool: TechNewsArticle[][] = [
    // Cycle A
    [
      {
        id: `ai-rag-agents-${weekNumber}`,
        title: "Enterprise Multi-Agent Orchestration & Access-Controlled RAG",
        category: "ai-rag",
        categoryLabel: "AI & RAG",
        summary:
          "Production AI engineering teams are standardizing on metadata-filtered vector retrieval prior to similarity search, preventing cross-tenant data leaks in enterprise LLM workflows.",
        content:
          "Implementing Retrieval-Augmented Generation (RAG) in multi-tenant enterprise software requires strict data boundary enforcement. By combining vector embeddings with role-based access control (RBAC) metadata filters, queries only return documents belonging to the authenticated tenant context.",
        takeaway: "Role-based access control (RBAC) metadata filters ensure 100% tenant data isolation in LLM RAG pipelines.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "3 min read",
        icon: "Bot",
        tags: ["RAG", "LLM", "Multi-Agent", "Vector DB", "RBAC"],
        weekNumber,
      },
      {
        id: `react-native-arch-${weekNumber}`,
        title: "React Native New Architecture & Synchronous Native Bridges",
        category: "mobile",
        categoryLabel: "React Native Mobile",
        summary:
          "React Native's new architecture defaults eliminate async serialization overhead, granting 60FPS UI thread performance across cross-platform iOS & Android apps.",
        content:
          "With JSI (JavaScript Interface), JavaScript can directly hold reference to C++ Host Objects and execute synchronous calls to native iOS and Android modules without bridge latency.",
        takeaway: "Direct JSI memory sharing speeds up mobile app rendering and complex list animations.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "4 min read",
        icon: "Smartphone",
        tags: ["React Native", "Expo", "iOS", "Android", "JSI"],
        weekNumber,
      },
      {
        id: `nosql-migration-${weekNumber}`,
        title: "Zero-Downtime NoSQL Schema Evolution & Document Migration",
        category: "nosql-data",
        categoryLabel: "NoSQL & Data",
        summary:
          "Strategies for migrating high-velocity MongoDB collections and multi-tenant document schemas without locking database reads or interrupting production traffic.",
        content:
          "Using dual-write schema adapters and lazy version transformations allows MongoDB applications to update schema versions on-the-fly as documents are read and written.",
        takeaway: "Dual-write schema adapters enable seamless NoSQL version upgrades for multi-tenant SaaS.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "5 min read",
        icon: "Database",
        tags: ["MongoDB", "NoSQL", "Schema Migration", "ETL"],
        weekNumber,
      },
      {
        id: `nextjs-ppr-${weekNumber}`,
        title: "Next.js 16 Partial Prerendering & Instant Server State Sync",
        category: "fullstack",
        categoryLabel: "Full-Stack",
        summary:
          "Combining static shell rendering with dynamic server-streamed slots delivers sub-100ms first contentful paint (FCP) for web enterprise applications.",
        content:
          "Partial Prerendering (PPR) combines static shell optimization with dynamic Suspense boundaries, streaming personalized user data without sacrificing initial CDN hit rates.",
        takeaway: "PPR delivers static CDN speed with live server dynamic data streaming.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "3 min read",
        icon: "Layers",
        tags: ["Next.js", "React 19", "Server Actions", "Vercel"],
        weekNumber,
      },
      {
        id: `python-arrow-${weekNumber}`,
        title: "Real-Time BI Dashboards with Apache Arrow & Python Pandas 2.2",
        category: "nosql-data",
        categoryLabel: "NoSQL & Data",
        summary:
          "In-memory column formats and WebSocket analytics streams empower business intelligence dashboards to process millions of rows directly in the browser.",
        content:
          "Apache Arrow memory buffers eliminate object allocation bottlenecks when streaming analytical datasets from Python backends to web dashboard visualizations.",
        takeaway: "Arrow memory formats cut web visualization data parsing overhead by over 70%.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "4 min read",
        icon: "Database",
        tags: ["Python", "Pandas", "BI", "Analytics"],
        weekNumber,
      },
      {
        id: `pdf-json-llm-${weekNumber}`,
        title: "Automated Email & Invoice Parsing via Structured LLM Output",
        category: "ai-rag",
        categoryLabel: "AI & RAG",
        summary:
          "Replacing brittle regex matchers with validated JSON schema enforcement allows enterprise web apps to automatically extract invoice data from PDFs.",
        content:
          "By coupling vision-language models with Zod/Pydantic schema constraints, unstructured PDF invoices convert cleanly into normalized JSON database records.",
        takeaway: "Zod / Pydantic schema validation ensures zero-hallucination JSON extraction.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "3 min read",
        icon: "Sparkles",
        tags: ["Workflow Automation", "JSON Schema", "PDF Extraction"],
        weekNumber,
      },
    ],
    // Cycle B
    [
      {
        id: `vector-db-scaling-${weekNumber}`,
        title: "HNSW Index Optimization & Distributed Vector Search",
        category: "ai-rag",
        categoryLabel: "AI & RAG",
        summary:
          "Hierarchical Navigable Small World (HNSW) graph tuning reduces vector embedding query latency below 15ms for multi-million document RAG collections.",
        content:
          "Tuning M and efConstruction parameters balances memory footprint against recall accuracy in high-dimensional vector search indices.",
        takeaway: "HNSW graph tuning ensures sub-15ms vector retrieval at scale.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "4 min read",
        icon: "Bot",
        tags: ["Vector Search", "HNSW", "Pinecone", "Qdrant"],
        weekNumber,
      },
      {
        id: `expo-router-v4-${weekNumber}`,
        title: "Expo Router v4 & Universal File-Based React Navigation",
        category: "mobile",
        categoryLabel: "React Native Mobile",
        summary:
          "Expo Router v4 unifies web and mobile app navigation under a single directory structure with automatic deep linking and SSR support.",
        content:
          "File-based routing for React Native brings web-like URL navigation, typed routes, and server-side rendering capability to mobile apps.",
        takeaway: "Universal typed routes simplify cross-platform mobile navigation.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "3 min read",
        icon: "Smartphone",
        tags: ["Expo", "React Native", "Deep Linking"],
        weekNumber,
      },
      {
        id: `mongodb-time-series-${weekNumber}`,
        title: "MongoDB Time-Series Collections for High-Volume ERP Audit Logs",
        category: "nosql-data",
        categoryLabel: "NoSQL & Data",
        summary:
          "Using native MongoDB time-series collections reduces storage compression ratio by 80% while accelerating temporal telemetry queries.",
        content:
          "Bucketing measurements automatically into optimized column formats speeds up time-range queries for enterprise financial logs.",
        takeaway: "Native time-series collections save 80% storage for enterprise logs.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "4 min read",
        icon: "Database",
        tags: ["MongoDB", "Time-Series", "Telemetry", "ERP"],
        weekNumber,
      },
      {
        id: `server-actions-security-${weekNumber}`,
        title: "Securing Next.js Server Actions with Tenant-Level RBAC",
        category: "fullstack",
        categoryLabel: "Full-Stack",
        summary:
          "Best practices for validating authentication context, CSRF tokens, and tenant scoping inside Next.js 16 Server Actions.",
        content:
          "Server Actions act as public HTTP endpoints; wrapping action handlers in reusable authentication middleware prevents unauthorized data mutation.",
        takeaway: "Always wrap Server Actions with tenant context authorization middleware.",
        dateStr: `Week #${weekNumber} • Rolling Update`,
        readTime: "5 min read",
        icon: "Layers",
        tags: ["Next.js", "Server Actions", "RBAC", "Security"],
        weekNumber,
      },
    ],
  ];

  // Pick cycle based on current week number
  const activeCycle = articlePool[weekNumber % articlePool.length];

  return {
    dateRangeLabel,
    weekNumber,
    articles: activeCycle,
  };
}

export async function GET() {
  const data = generateWeeklyArticles();
  return NextResponse.json({
    success: true,
    ...data,
    automatedRotation: "Updates automatically every 7 days based on current epoch week index.",
  });
}
