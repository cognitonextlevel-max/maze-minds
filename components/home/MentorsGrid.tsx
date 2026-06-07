"use client";

import { motion } from "framer-motion";
import { BrainCellsBackground } from "./BrainCellsBackground";

const approach = [
  {
    icon: "🧠",
    title: "Personalized Learning",
    body: "Instruction adapts to how each student learns best.",
    accent: "bg-brand-sky/15 text-brand-sky",
  },
  {
    icon: "🧩",
    title: "Skill Building",
    body: "Students strengthen academic and cognitive learning skills over time.",
    accent: "bg-brand-coral/15 text-brand-coral",
  },
  {
    icon: "⚡",
    title: "Immediate Feedback",
    body: "Real-time support helps learning become stronger and more automatic.",
    accent: "bg-brand-gold/15 text-brand-gold",
  },
  {
    icon: "🎯",
    title: "Active Engagement",
    body: "Interactive sessions keep students thinking, participating, and problem solving.",
    accent: "bg-brand-red/15 text-brand-red",
  },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function MentorsGrid() {
  return (
    <section id="mentors" className="relative py-24 md:py-40 bg-white overflow-hidden z-0">
      <BrainCellsBackground />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-coral mb-4 block">
              Our Approach
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight leading-[1.05] text-brand-navy">
              More than <br className="hidden md:block" />
              <span className="text-brand-red">homework help.</span>
            </h2>
          </div>
          <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed max-w-sm">
            Maze Minds Tutor combines personalized instruction, active engagement, brain-based learning strategies, and functional-level support to help students grow with confidence.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20"
        >
          {approach.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="relative group p-8 md:p-10 rounded-[2rem] bg-white border border-brand-navy/8 shadow-[0_20px_50px_-22px_rgba(27,42,78,0.2)] transition-all duration-500 hover:-translate-y-[4px] hover:shadow-[0_30px_70px_-20px_rgba(27,42,78,0.3)]"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-2xl mb-6 ${item.accent}`}>
                {item.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-700 text-brand-navy mb-3">
                {item.title}
              </h3>
              <p className="text-brand-navy/75 text-[15px] md:text-base leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
