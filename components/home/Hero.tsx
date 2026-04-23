"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { PretextBalancer } from "@/components/ui/pretext-balancer";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Zajno physics-based transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const yVideo = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rotateVideo = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  // Massive Zajno Rocket Physics
  const rocketY = useTransform(scrollYProgress, [0, 1], [250, -1000]);
  const rocketX = useTransform(scrollYProgress, [0, 1], [-100, 600]);
  const rocketScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.6]);
  const rocketRotate = useTransform(scrollYProgress, [0, 1], [15, 35]);

  return (
    <section ref={containerRef} className="relative isolate overflow-hidden bg-brand-cream pt-28 md:pt-32 pb-40">
      {/* Floating doodles */}
      <FloatingDoodle className="absolute left-[6%] top-[18%] w-16 h-16 text-brand-red" delay={0}>
        <RocketDoodle />
      </FloatingDoodle>
      <FloatingDoodle className="absolute left-[3%] bottom-[26%] w-12 h-12 text-brand-sky" delay={0.6}>
        <SparkDoodle />
      </FloatingDoodle>
      <FloatingDoodle className="absolute right-[4%] top-[14%] w-14 h-14 text-brand-sky" delay={0.3}>
        <BookDoodle />
      </FloatingDoodle>
      <FloatingDoodle className="absolute right-[8%] bottom-[28%] w-10 h-10 text-brand-coral" delay={0.9}>
        <SparkDoodle />
      </FloatingDoodle>
      <FloatingDoodle className="absolute left-[44%] top-[10%] w-8 h-8 text-brand-red" delay={1.2}>
        <SparkDoodle />
      </FloatingDoodle>
      <DotCluster className="absolute left-[20%] bottom-[20%]" />
      <DotCluster className="absolute right-[28%] top-[22%]" />

      {/* Massive Zajno Scroll Rocket */}
      <motion.div
        className="absolute -left-16 bottom-0 md:left-[-10%] md:bottom-[-20%] z-0 pointer-events-none w-[200px] h-[300px] md:w-[600px] md:h-[800px] opacity-20 md:opacity-95"
        style={{ y: rocketY, x: rocketX, scale: rocketScale, rotateZ: rocketRotate }}
      >
        <SpeedStreaks className="absolute inset-[-20%] w-[140%] h-[140%] -z-10 opacity-40 md:opacity-60" />
        <BlastingRocket className="w-full h-full drop-shadow-2xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          {/* Copy - Scroll Parallax */}
          <motion.div 
            className="lg:col-span-7"
            style={{ y: yText, opacity: opacityText }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-brand-navy/10 mb-8 shadow-[0_4px_14px_-6px_rgba(27,42,78,0.18)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red" />
              </span>
              <span className="text-sm font-semibold text-brand-navy">
                Enrolling for Summer 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-[9vw] lg:text-[6.5vw] font-700 tracking-tight leading-[1] md:leading-[0.9] text-brand-navy"
            >
              <PretextBalancer as="span" className="inline-block">
                Tutoring that{" "}
                <span className="text-brand-red">rewires how kids think</span>
              </PretextBalancer>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg md:text-xl text-brand-navy/75 max-w-[54ch] leading-relaxed"
            >
              1-on-1 virtual mentorship for ages 6–14. Vetted mentors, adaptive
              pathways, and weekly progress parents can actually see.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <MagneticWrapper>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-red text-white font-semibold text-base shadow-[0_10px_28px_-8px_rgba(230,57,70,0.55)] transition-all duration-300 hover:bg-brand-coral hover:-translate-y-[2px] active:scale-[0.98]"
                >
                  Book a Free Session
                </Link>
              </MagneticWrapper>
              <MagneticWrapper magneticStrength={0.15}>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-navy/20 bg-white text-brand-navy font-semibold text-base transition-all duration-300 hover:border-brand-navy hover:bg-white"
                >
                  How It Works
                </Link>
              </MagneticWrapper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-14 flex flex-wrap gap-x-10 gap-y-6"
            >
              <Stat value="2,400+" label="Families mentored" />
              <Stat value="98.2%" label="Report grade gains" />
              <Stat value="4.9★" label="Avg. mentor rating" />
            </motion.div>
          </motion.div>

          {/* Video Player Column - Zajno Scroll Linked */}
          <motion.div 
            className="lg:col-span-5 relative h-[460px] lg:h-[600px] z-20 perspective-1000 mt-24 lg:mt-0"
            style={{ y: yVideo, scale: scaleVideo, rotateZ: rotateVideo }}
          >
            <motion.div
              initial={{ opacity: 0, x: 60, y: 40, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center p-4"
            >
              {/* Heavy pill-shaped container for the video */}
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-brand-navy">
                {/* Fallback pattern while video loads */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                
                <video 
                  autoPlay 
                  loop 
                  muted
                  defaultMuted
                  playsInline
                  preload="auto"
                  src="/videos/video_background.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* White wave divider */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 leading-[0]">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px]">
          <path
            d="M0,80 C240,140 480,20 720,60 C960,100 1200,140 1440,80 L1440,140 L0,140 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl font-700 text-brand-navy leading-none">
        {value}
      </div>
      <div className="text-sm text-brand-navy/65 mt-1.5">{label}</div>
    </div>
  );
}

function FloatingDoodle({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}

function DotCluster({ className }: { className: string }) {
  return (
    <div aria-hidden className={`${className} grid grid-cols-3 gap-1.5`}>
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="block w-1.5 h-1.5 rounded-full bg-brand-navy/25" />
      ))}
    </div>
  );
}

function SpeedStreaks({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 600" fill="none" aria-hidden>
      {[
        { x1: 100, y1: 540, x2: 60, y2: 580, c: "#E63946" },
        { x1: 130, y1: 520, x2: 90, y2: 575, c: "#FF6B35" },
        { x1: 170, y1: 520, x2: 120, y2: 588, c: "#F5C518" },
        { x1: 220, y1: 530, x2: 175, y2: 596, c: "#2BA8E8" },
        { x1: 90, y1: 470, x2: 30, y2: 520, c: "#FF6B35" },
        { x1: 60, y1: 420, x2: 10, y2: 470, c: "#E63946" },
      ].map((s, i) => (
        <motion.line
          key={i}
          x1={s.x1}
          y1={s.y1}
          x2={s.x2}
          y2={s.y2}
          stroke={s.c}
          strokeWidth={5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.85, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: i * 0.18,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}

/* ── SVGs ─────────────────────────────────────────── */

function BlastingRocket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 460 620" className={className} fill="none">
      <defs>
        <linearGradient id="flameOuter" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="60%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flameInner" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFE598" />
          <stop offset="60%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="trailBlue" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#2BA8E8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2BA8E8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Smoke puffs at the bottom of the trail */}
      <g opacity="0.55">
        <circle cx="120" cy="560" r="42" fill="#FBF7EF" />
        <circle cx="160" cy="585" r="34" fill="#FBF7EF" />
        <circle cx="92" cy="595" r="28" fill="#FBF7EF" />
        <circle cx="200" cy="568" r="24" fill="#FBF7EF" />
      </g>

      {/* Long swirling blue trail */}
      <path
        d="M180 320 C140 380 100 430 90 510 C84 555 110 580 160 590"
        stroke="url(#trailBlue)"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M210 340 C180 390 160 450 170 520"
        stroke="#2BA8E8"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Outer flame */}
      <motion.path
        d="M210 290 C150 340 130 430 175 540 C195 480 240 480 245 540 C285 430 270 340 230 290 Z"
        fill="url(#flameOuter)"
        animate={{ scaleY: [1, 1.08, 1], scaleX: [1, 0.96, 1] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "210px 320px" }}
      />
      {/* Inner flame */}
      <motion.path
        d="M215 310 C188 350 178 410 205 490 C218 450 232 450 240 490 C260 410 245 350 225 310 Z"
        fill="url(#flameInner)"
        animate={{ scaleY: [1, 1.18, 1], scaleX: [1, 0.9, 1] }}
        transition={{ duration: 0.32, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "220px 330px" }}
      />

      {/* Rocket body — tilted-up shape (the whole svg gets rotated by the parent for the launch angle) */}
      <g>
        {/* Fins */}
        <path d="M150 240 L90 320 L160 315 Z" fill="#1B2A4E" />
        <path d="M270 240 L330 320 L260 315 Z" fill="#1B2A4E" />

        {/* Body */}
        <path
          d="M210 30 C260 80 285 150 285 220 L285 290 C285 305 273 317 258 317 L162 317 C147 317 135 305 135 290 L135 220 C135 150 160 80 210 30 Z"
          fill="#E63946"
          stroke="#1B2A4E"
          strokeWidth="6"
        />
        {/* Body highlight */}
        <path
          d="M170 110 C180 80 195 60 210 50 L210 270 C195 270 180 270 175 250 C168 220 162 170 170 110 Z"
          fill="#FFFFFF"
          opacity="0.18"
        />

        {/* Tip stripe */}
        <path
          d="M195 50 C200 44 220 44 225 50 L228 70 C218 78 202 78 192 70 Z"
          fill="#FFE598"
        />

        {/* Window */}
        <circle cx="210" cy="180" r="38" fill="#FBF7EF" stroke="#1B2A4E" strokeWidth="6" />
        <circle cx="210" cy="180" r="24" fill="#2BA8E8" />
        <circle cx="200" cy="170" r="8" fill="#FBF7EF" />

        {/* Body band */}
        <rect x="135" y="265" width="150" height="14" fill="#1B2A4E" opacity="0.9" />
      </g>

      {/* Sparkles flying off */}
      <Spark x={70} y={150} fill="#F5C518" />
      <Spark x={360} y={120} fill="#2BA8E8" />
      <Spark x={380} y={240} fill="#E63946" />
      <Spark x={50} y={260} fill="#FF6B35" />
      <Spark x={400} y={350} fill="#F5C518" />
      <Spark x={30} y={380} fill="#2BA8E8" />
    </svg>
  );
}

function Spark({ x, y, fill }: { x: number; y: number; fill: string }) {
  return (
    <motion.g
      transform={`translate(${x} ${y})`}
      animate={{ scale: [0.6, 1, 0.6], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: (x + y) % 1.2 }}
    >
      <path
        d="M0 -10 L2.5 -2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5 -2.5 Z"
        fill={fill}
      />
    </motion.g>
  );
}

function RocketDoodle() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <path
        d="M32 6 C40 14 44 24 44 34 L44 42 L20 42 L20 34 C20 24 24 14 32 6 Z"
        fill="currentColor"
        stroke="#1B2A4E"
        strokeWidth="3"
      />
      <circle cx="32" cy="26" r="5" fill="#FBF7EF" stroke="#1B2A4E" strokeWidth="2" />
      <path d="M20 36 L12 46 L20 46 Z M44 36 L52 46 L44 46 Z" fill="#1B2A4E" />
      <path d="M28 46 L26 58 M36 46 L38 58 M32 46 L32 60" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function BookDoodle() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="10" y="14" width="44" height="36" rx="4" fill="currentColor" stroke="#1B2A4E" strokeWidth="3" />
      <path d="M32 14 L32 50" stroke="#1B2A4E" strokeWidth="3" />
      <path d="M16 24 L26 24 M16 32 L26 32 M38 24 L48 24 M38 32 L48 32" stroke="#FBF7EF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SparkDoodle() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <path d="M16 2 L19 13 L30 16 L19 19 L16 30 L13 19 L2 16 L13 13 Z" fill="currentColor" />
    </svg>
  );
}
