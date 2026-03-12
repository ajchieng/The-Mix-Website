"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  variant?: RevealVariant;
};

const variantClassByName: Record<RevealVariant, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.2,
  variant = "up",
}: ScrollRevealProps) {
  const revealRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const target = revealRef.current;
    if (!target) {
      return;
    }

    document.documentElement.classList.add("js");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const initialViewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const initialRect = target.getBoundingClientRect();
    const initiallyVisible =
      initialRect.top <= initialViewportHeight * 0.92 &&
      initialRect.bottom >= initialViewportHeight * 0.08;
    setIsVisible(initiallyVisible);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [once, threshold]);

  const classes = [
    "scroll-reveal",
    variantClassByName[variant],
    isVisible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div ref={revealRef} className={classes} style={style}>
      {children}
    </div>
  );
}
