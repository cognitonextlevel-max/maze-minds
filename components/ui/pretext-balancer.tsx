"use client";

import React, { useEffect, useState, useRef } from "react";
import { prepareWithSegments, measureLineStats } from "@chenglou/pretext";

interface PretextBalancerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /**
   * If true, this disables pretext measurement and returns standard DOM children.
   * Useful as a fallback if pretext isn't installed yet.
   */
  fallback?: boolean;
}

export function PretextBalancer({ children, className = "", as: Component = "div", fallback = false }: PretextBalancerProps) {
  const [balancedWidth, setBalancedWidth] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (fallback) return;
    
    const el = containerRef.current;
    if (!el) return;
    
    // Extract raw text from children
    const text = el.textContent || "";
    if (!text.trim()) return;

    const measure = () => {
      // Temporarily remove width constraint to get true parent bounds
      el.style.width = 'auto';
      const styles = window.getComputedStyle(el);
      const font = `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;
      const letterSpacing = styles.letterSpacing !== 'normal' ? parseFloat(styles.letterSpacing) : 0;
      
      // Get the width of the parent container to know our maximum available space
      const parentWidth = el.parentElement?.clientWidth || el.clientWidth;

      try {
        const prepared = prepareWithSegments(text, font, { letterSpacing });
        
        // Measure what the tightest "shrink-wrap" width is for the text within the available space
        const { maxLineWidth } = measureLineStats(prepared, parentWidth);
        
        // Add 2px to prevent browser subpixel rounding from causing an unwanted extra line break
        setBalancedWidth(Math.ceil(maxLineWidth) + 2);
      } catch (e) {
        console.warn("Pretext layout measurement failed:", e);
      }
    };

    // Initial measurement
    measure();
    
    // Re-measure on resize since font-size might be vw-based
    const observer = new ResizeObserver(measure);
    if (el.parentElement) {
      observer.observe(el.parentElement);
    }
    
    return () => observer.disconnect();
  }, [children, fallback]);

  return (
    <Component 
      ref={containerRef} 
      className={className} 
      style={balancedWidth && !fallback ? { width: balancedWidth + "px", marginInline: "auto" } : {}}
    >
      {children}
    </Component>
  );
}
