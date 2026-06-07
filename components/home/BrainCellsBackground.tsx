"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function BrainCellsBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-80 mix-blend-multiply">
      <motion.svg
        viewBox="0 0 800 800"
        className="absolute w-[150%] h-[150%] top-[-20%] left-[-20%] text-brand-sky/40"
        style={{ y: y1, rotate: rotate1 }}
      >
        {/* Brain cell nodes */}
        <circle cx="200" cy="300" r="20" fill="currentColor" />
        <circle cx="500" cy="150" r="35" fill="currentColor" />
        <circle cx="650" cy="450" r="15" fill="currentColor" />
        <circle cx="300" cy="600" r="25" fill="currentColor" />
        <circle cx="450" cy="750" r="20" fill="currentColor" />
        <circle cx="100" cy="500" r="18" fill="currentColor" />
        
        {/* Synaptic connections */}
        <path d="M200,300 Q350,225 500,150" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8,8" />
        <path d="M500,150 Q575,300 650,450" fill="none" stroke="currentColor" strokeWidth="5" />
        <path d="M650,450 Q475,525 300,600" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M300,600 Q250,450 200,300" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M300,600 Q375,675 450,750" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="15,10" />
        <path d="M200,300 Q150,400 100,500" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M100,500 Q200,550 300,600" fill="none" stroke="currentColor" strokeWidth="5" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 800 800"
        className="absolute w-[180%] h-[180%] top-[-10%] left-[-30%] text-brand-coral/30"
        style={{ y: y2, rotate: rotate2 }}
      >
        <circle cx="400" cy="400" r="40" fill="currentColor" />
        <circle cx="700" cy="200" r="25" fill="currentColor" />
        <circle cx="200" cy="700" r="30" fill="currentColor" />
        <path d="M400,400 Q550,300 700,200" fill="none" stroke="currentColor" strokeWidth="8" />
        <path d="M400,400 Q300,550 200,700" fill="none" stroke="currentColor" strokeWidth="6" />
      </motion.svg>
    </div>
  );
}
