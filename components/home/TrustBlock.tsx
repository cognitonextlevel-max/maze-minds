"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "100%", label: "Background-Checked Tutors", accent: "text-brand-sky" },
  { value: "24hr", label: "Parent Communication", accent: "text-brand-coral" },
  { value: "✓", label: "Personalized Learning Plans", accent: "text-brand-red" },
  { value: "✓", label: "Functional-Level Support", accent: "text-brand-gold" },
];

export function TrustBlock() {
  return (
    <section className="relative py-28 md:py-32 bg-brand-navy overflow-hidden">
      {/* Brand-color accent dots */}
      <div aria-hidden className="absolute top-10 right-10 w-3 h-3 rounded-full bg-brand-coral" />
      <div aria-hidden className="absolute top-24 right-24 w-2 h-2 rounded-full bg-brand-sky" />
      <div aria-hidden className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-brand-gold" />
      <div aria-hidden className="absolute bottom-32 left-40 w-2 h-2 rounded-full bg-brand-red" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-coral mb-4 block">
              Built for Trust
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-700 tracking-tight leading-[1.05] text-white mb-6">
              Parents deserve <br />
              <span className="text-brand-gold">total transparency.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[48ch]">
              Every session includes a parent summary delivered within 24 hours.
              You always know what was covered, how your child responded, and what
              comes next.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="bg-white rounded-3xl p-8 md:p-10 transition-transform duration-300 hover:-translate-y-[3px]"
              >
                <div className={`font-display text-4xl md:text-5xl font-700 tracking-tight mb-2 ${m.accent}`}>
                  {m.value}
                </div>
                <div className="text-sm text-brand-navy/65">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
