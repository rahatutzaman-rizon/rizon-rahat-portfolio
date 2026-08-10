"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface AnalyticsMetrics {
  dailyHits: number;
  liveUsers: number;
  totalRequests: number;
  averageLatencyMs: number;
  confidenceScorePercent: number;
  geographicBreakdown: { region: string; percentage: number; hits: number }[];
  endpointHits: { name: string; category: string; count: number }[];
}

interface AnalyticsContextType {
  metrics: AnalyticsMetrics;
  incrementHit: () => void;
}

const initialMetrics: AnalyticsMetrics = {
  dailyHits: 1428,
  liveUsers: 14,
  totalRequests: 18452,
  averageLatencyMs: 142,
  confidenceScorePercent: 96.4,
  geographicBreakdown: [
    { region: "North America (US/CA)", percentage: 42, hits: 600 },
    { region: "Asia Pacific (BD/IN/SG)", percentage: 32, hits: 456 },
    { region: "Europe (UK/DE/FR)", percentage: 18, hits: 257 },
    { region: "Middle East (UAE/SA)", percentage: 8, hits: 115 },
  ],
  endpointHits: [
    { name: "/api/rag/document-retrieval", category: "AI & RAG", count: 642 },
    { name: "/api/erp/flight-booking-engine", category: "Multi-Tenant ERP", count: 485 },
    { name: "/api/agents/code-reviewer", category: "Multi-Agent Handoff", count: 312 },
    { name: "/api/analytics/daily-hits", category: "Analytics Engine", count: 248 },
  ],
};

const AnalyticsContext = createContext<AnalyticsContextType>({
  metrics: initialMetrics,
  incrementHit: () => {},
});

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<AnalyticsMetrics>(initialMetrics);

  useEffect(() => {
    // Increment hit on mount
    setMetrics((prev) => ({
      ...prev,
      dailyHits: prev.dailyHits + 1,
      totalRequests: prev.totalRequests + 1,
    }));

    // Periodically simulate live traffic increments
    const interval = setInterval(() => {
      setMetrics((prev) => {
        const hitAdd = Math.floor(Math.random() * 2) + 1;
        const liveUserDelta = (Math.random() > 0.5 ? 1 : -1);
        const newLive = Math.max(8, Math.min(24, prev.liveUsers + liveUserDelta));
        return {
          ...prev,
          dailyHits: prev.dailyHits + hitAdd,
          totalRequests: prev.totalRequests + hitAdd,
          liveUsers: newLive,
        };
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const incrementHit = () => {
    setMetrics((prev) => ({
      ...prev,
      dailyHits: prev.dailyHits + 1,
      totalRequests: prev.totalRequests + 1,
    }));
  };

  return (
    <AnalyticsContext.Provider value={{ metrics, incrementHit }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);
