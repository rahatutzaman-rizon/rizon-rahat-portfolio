"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function GsapCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if coarse pointer (mobile / touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(dot, {
        x: x,
        y: y,
        duration: 0.05,
        ease: "power2.out",
      });

      gsap.to(ring, {
        x: x,
        y: y,
        duration: 0.22,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{
          backgroundColor: "var(--primary-hex, #06b6d4)",
        }}
      />

      {/* Smooth Trailing Glow Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered
            ? "w-12 h-12 border-2 opacity-80 scale-125 bg-dynamic-glow"
            : "w-8 h-8 border opacity-40 scale-100"
        }`}
        style={{
          borderColor: "var(--primary-hex, #06b6d4)",
          boxShadow: isHovered
            ? "0 0 20px rgba(var(--primary-rgb, 6, 182, 212), 0.6)"
            : "0 0 8px rgba(var(--primary-rgb, 6, 182, 212), 0.25)",
        }}
      />
    </>
  );
}
