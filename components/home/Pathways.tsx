"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pathways = [
  {
    level: "Foundation Pathway",
    ages: "Building Core Learning Skills",
    description:
      "Strengthening foundational reading, math, attention, memory, processing, and learning confidence through engaging, brain-based instruction.",
    accent: "bg-brand-sky",
    chip: "text-brand-sky bg-brand-sky/10",
    highlightTitle: "Built on the science of learning",
    highlightBody:
      "Students learn best when instruction includes active engagement, repetition, feedback, and personalized support.",
    image: "/images/virtual_class_kid_1_1776893403210.jpg",
    align: "mr-auto", // Left aligned
  },
  {
    level: "Growth Pathway",
    ages: "Building Understanding & Independence",
    description:
      "Strengthening comprehension, reasoning, problem solving, and academic independence through personalized learning experiences and guided practice.",
    accent: "bg-brand-coral",
    chip: "text-brand-coral bg-brand-coral/10",
    highlightTitle: "",
    highlightBody:
      "Active learning experiences designed to help skills stick, transfer, and grow over time.",
    image: "/images/virtual_class_kid_2_1776893425405.jpg",
    align: "ml-auto", // Right aligned
  },
  {
    level: "Mastery Pathway",
    ages: "Advanced Thinking & Application",
    description:
      "Developing higher-level reasoning, executive functioning, strategy use, and independent academic application skills.",
    accent: "bg-brand-red",
    chip: "text-brand-red bg-brand-red/10",
    highlightTitle: "",
    highlightBody:
      "Every session combines personalized academic support, active engagement, and brain-based learning strategies designed around how students learn best.",
    image: "/images/virtual_class_kid_3_1776893447194.jpg",
    align: "mr-auto", // Left aligned
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 80, scale: 0.96, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  },
};

export function Pathways() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section id="pathways" ref={containerRef} className="relative py-28 md:py-40 bg-white overflow-hidden">
      {/* Background SVG Maze */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full max-w-[1200px] h-[110%] absolute top-0"
        >
          {/* Faded track */}
          <path
            d="M 50 0 C 90 15, 90 30, 50 35 C 10 40, 10 60, 50 65 C 90 70, 90 90, 50 100"
            fill="none"
            stroke="rgba(27,42,78,0.03)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Glowing animated line */}
          <motion.path
            d="M 50 0 C 90 15, 90 30, 50 35 C 10 40, 10 60, 50 65 C 90 70, 90 90, 50 100"
            fill="none"
            stroke="url(#maze-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            style={{ pathLength: pathProgress }}
            className="drop-shadow-[0_0_30px_rgba(230,57,70,0.4)]"
          />
          <defs>
            <linearGradient id="maze-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2BA8E8" />
              <stop offset="50%" stopColor="#E63946" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
            Personalized Learning Pathways
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 tracking-tight leading-[1.05] text-brand-navy max-w-2xl">
            Every Student Gets <br />
            <span className="text-brand-coral">A Pathway That Fits.</span>
          </h2>
          <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed max-w-xl mt-6">
            Students are supported based on their functional learning level, strengths, and support needs — not simply age or grade placement. We build forward at their pace, with their goals in mind.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {pathways.map((path) => (
            <motion.div
              key={path.level}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`group overflow-hidden relative p-8 md:p-12 rounded-[2.5rem] bg-white border border-brand-navy/10 shadow-[0_20px_50px_-20px_rgba(27,42,78,0.15)] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_40px_80px_-20px_rgba(27,42,78,0.25)] max-w-3xl ${path.align}`}
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-4">
                    <div className={`w-4 h-4 rounded-full ${path.accent} mt-1.5 shadow-lg hidden md:block`} />
                    <div>
                      <h3 className="font-display text-3xl font-700 text-brand-navy tracking-tight">
                        {path.level}
                      </h3>
                      <span className={`inline-block text-xs font-bold mt-3 px-4 py-2 rounded-full ${path.chip}`}>
                        {path.ages}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-brand-navy/80 text-[17px] leading-relaxed mt-6">
                    {path.description}
                  </p>

                  <div className="mt-8 pt-8 border-t border-brand-navy/10 text-center md:text-left">
                    {path.highlightTitle && (
                      <p className="font-display text-xl font-700 text-brand-navy tracking-tight mb-2">
                        {path.highlightTitle}
                      </p>
                    )}
                    <p className="text-[15px] text-brand-navy/70 font-medium leading-relaxed">
                      {path.highlightBody}
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-2/5 shrink-0 relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-brand-navy/10 z-10 mix-blend-overlay" />
                  <img
                    src={path.image}
                    alt={path.level}
                    className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
