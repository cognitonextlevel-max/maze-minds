"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Match",
    description:
      "Take a 3-minute learning profile quiz. Our algorithm pairs your child with the ideal mentor based on learning style, personality, and goals.",
    accent: "bg-brand-sky",
    textAccent: "text-brand-sky",
    shadow: "shadow-[8px_8px_0_0_#2BA8E8]",
    shadowHover: "hover:shadow-[12px_12px_0_0_#2BA8E8]",
  },
  {
    number: "02",
    title: "Meet",
    description:
      "A free 30-minute intro session where mentor and child connect. No pressure. If the fit isn't right, we rematch instantly.",
    accent: "bg-brand-coral",
    textAccent: "text-brand-coral",
    shadow: "shadow-[8px_8px_0_0_#FF6B35]",
    shadowHover: "hover:shadow-[12px_12px_0_0_#FF6B35]",
  },
  {
    number: "03",
    title: "Grow",
    description:
      "Weekly 1-on-1 sessions with a personalized curriculum. Track progress in the parent dashboard. Cancel anytime.",
    accent: "bg-brand-red",
    textAccent: "text-brand-red",
    shadow: "shadow-[8px_8px_0_0_#E63946]",
    shadowHover: "hover:shadow-[12px_12px_0_0_#E63946]",
  },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="how" className="relative py-28 md:py-40 bg-white overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B2A4E 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sky mb-4 block">
              Getting Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 tracking-tight leading-[1.05] text-brand-navy">
              Three steps. <br className="hidden md:block" />
              <span className="text-brand-coral">Zero friction.</span>
            </h2>
          </div>
          <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed max-w-sm hidden md:block">
            Grab a block, drag it around! We made starting tutoring as playful as the learning itself.
          </p>
        </div>

        <motion.div
          ref={containerRef}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              drag
              dragConstraints={containerRef}
              dragElastic={0.4}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
              whileDrag={{ scale: 1.05, rotate: Math.random() * 4 - 2, zIndex: 50, cursor: "grabbing" }}
              className={`group relative p-8 md:p-12 rounded-[2rem] bg-white border-4 border-brand-navy ${step.shadow} ${step.shadowHover} transition-shadow duration-300 cursor-grab active:cursor-grabbing flex flex-col h-full z-10 bg-grid-pattern`}
            >
              <div className="flex justify-between items-start mb-8 pointer-events-none">
                <span className={`inline-flex items-center justify-center w-14 h-14 rounded-full font-display font-900 text-2xl border-2 border-brand-navy bg-white ${step.textAccent} shadow-[4px_4px_0_0_#1B2A4E]`}>
                  {step.number}
                </span>
                
                {/* Decorative dots to indicate draggable */}
                <div className="flex gap-1 opacity-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                </div>
              </div>
              
              <h3 className="font-display text-3xl font-800 text-brand-navy tracking-tight mb-4 pointer-events-none">
                {step.title}
              </h3>
              <p className="text-brand-navy/80 text-[16px] md:text-[17px] leading-relaxed font-medium pointer-events-none">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
