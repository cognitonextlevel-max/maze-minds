"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";

export function FinalCta() {
  return (
    <section className="relative py-40 md:py-56 bg-brand-navy overflow-hidden z-0">
      {/* Liquid Aura Backgrounds */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-80 mix-blend-screen">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-brand-red blur-[80px] md:blur-[120px] opacity-40 translate-x-[-20%] translate-y-[-10%]"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] rounded-full bg-brand-sky blur-[80px] md:blur-[120px] opacity-30 translate-x-[20%] translate-y-[20%]"
        />
        <motion.div
          animate={{
            rotate: 180,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
          className="absolute w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] rounded-full bg-brand-coral blur-[60px] md:blur-[100px] opacity-40 translate-x-[10%] translate-y-[-30%]"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-[6rem] font-700 tracking-tight leading-[1.0] text-white mb-8 drop-shadow-xl"
        >
          Your child&apos;s next <br />
          <span className="text-white/90">breakthrough starts here.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 text-lg md:text-xl max-w-lg mx-auto mb-16 font-medium"
        >
          First session free. No contracts. Cancel anytime. We believe in earning your trust every single week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <MagneticWrapper magneticStrength={0.3}>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-12 py-6 rounded-full bg-white text-brand-navy font-bold text-lg md:text-xl shadow-[0_20px_50px_-10px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 active:scale-95"
            >
              Book a Free Session
            </Link>
          </MagneticWrapper>
        </motion.div>
      </div>
    </section>
  );
}
