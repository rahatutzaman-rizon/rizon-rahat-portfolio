"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely in browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable hook for GSAP scroll trigger reveals on target container ref.
 */
export function useGsapScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: {
    stagger?: number;
    yOffset?: number;
    duration?: number;
    delay?: number;
    childSelector?: string;
  } = {}
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const element = containerRef.current;
    const targets = options.childSelector
      ? element.querySelectorAll(options.childSelector)
      : element.children;

    if (!targets || targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: options.yOffset ?? 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.8,
          delay: options.delay ?? 0,
          stagger: options.stagger ?? 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [options.stagger, options.yOffset, options.duration, options.delay, options.childSelector]);

  return containerRef;
}

/**
 * Reusable hook for GSAP interactive card 3D tilt effect.
 */
export function useGsapCardTilt<T extends HTMLElement = HTMLDivElement>() {
  const cardRef = useRef<T>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 12;
      const rotateY = (centerX - x) / 12;

      gsap.to(el, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return cardRef;
}

/**
 * Reusable hook for GSAP count-up number animation.
 */
export function useGsapCountUp<T extends HTMLElement = HTMLSpanElement>(
  targetValue: number,
  duration: number = 2
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || typeof window === "undefined") return;

    const obj = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: targetValue,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        onUpdate: () => {
          if (el) {
            el.textContent = Math.floor(obj.value).toLocaleString();
          }
        },
      });
    });

    return () => ctx.revert();
  }, [targetValue, duration]);

  return elementRef;
}
