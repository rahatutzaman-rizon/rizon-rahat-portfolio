export interface AchievementItem {
  id: string;
  title: string;
  category: "Competitive Programming" | "Production Systems" | "Optimization" | "Innovation";
  metric: string;
  description: string;
  iconName: string;
  tags: string[];
  gradient: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "cp-500",
    title: "500+ Competitive Programming Problems Solved",
    category: "Competitive Programming",
    metric: "500+ Solved",
    description:
      "Solved 500+ algorithmic problems across LeetCode, CodeChef, and Beecrowd, mastering trees, graphs, dynamic programming, and greedy algorithms.",
    iconName: "Terminal",
    tags: ["LeetCode", "CodeChef", "Beecrowd", "C++", "Algorithms"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "production-erp",
    title: "Shipped Multi-Tenant Production ERP & SaaS Systems",
    category: "Production Systems",
    metric: "15+ Modules",
    description:
      "Architected and deployed multi-tenant travel ERPs (Flight, Hotel, Visa, Umrah, Accounts, Refunds, B2B Agent Portals) actively powering live travel agencies.",
    iconName: "Building2",
    tags: ["Multi-Tenant", "React.js", "Node.js", "MongoDB", "Azure"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "db-optimization",
    title: "45% Enterprise SQL Query Optimization",
    category: "Optimization",
    metric: "45% Speedup",
    description:
      "Engineered database indexing, query restructuring, and execution plan optimization at Business Automation Ltd, reducing database query overhead by ~45%.",
    iconName: "Zap",
    tags: ["SQL", "MySQL", "Indexing", "Performance Tuning"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "ai-rag-integration",
    title: "Integrated AI / RAG Enterprise Automation",
    category: "Innovation",
    metric: "RAG & LLMs",
    description:
      "Built document retrieval and vector embedding workflows that automate context lookup and customer service email generation inside enterprise software.",
    iconName: "Sparkles",
    tags: ["AI", "RAG", "LLM", "Python", "Vector DB"],
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
];
