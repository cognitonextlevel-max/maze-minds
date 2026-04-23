"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, BrainCircuit, Target, Lightbulb, ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";

const WaveTop = ({ className = "" }: { className?: string }) => (
  <div className={`absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 ${className}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
    </svg>
  </div>
);

const WaveBottom = ({ className = "" }: { className?: string }) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10 ${className}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
    </svg>
  </div>
);

export function LocationView({ data }: { data: any }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  // Zajno Parallax
  const yHeroText = useTransform(heroScroll, [0, 1], [0, 200]);
  const opacityHeroText = useTransform(heroScroll, [0, 0.8], [1, 0]);
  
  const approachRef = useRef<HTMLElement>(null);
  const { scrollYProgress: approachScroll } = useScroll({ target: approachRef, offset: ["start end", "center center"] });
  const scaleApproachCard = useTransform(approachScroll, [0, 1], [0.8, 1]);
  const yApproachCard = useTransform(approachScroll, [0, 1], [100, 0]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-cream overflow-hidden">
      
      {/* HERO SECTION - Asymmetric Layout with Zajno Scroll */}
      <section ref={heroRef} className="relative w-full pt-32 pb-40 lg:pt-48 lg:pb-48 flex items-center bg-brand-yellow">
        <WaveBottom className="text-white" />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20">
          <motion.div 
            className="lg:col-span-8 flex flex-col items-start text-left space-y-8"
            style={{ y: yHeroText, opacity: opacityHeroText }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-coral font-bold shadow-sm shadow-brand-coral/20">
              <MapPin className="w-5 h-5" />
              <span className="text-sm tracking-wide uppercase">
                Now Serving {data.city}, {data.state}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-display font-bold text-brand-navy leading-[1.05] drop-shadow-sm max-w-[15ch]">
              {data.hero.h1.split(data.city)[0]}
              <span className="text-brand-coral block mt-3 drop-shadow-sm">{data.city}, {data.state}</span>
            </h1>
          </motion.div>

          <motion.div 
            className="lg:col-span-4 relative mt-12 lg:mt-0"
            style={{ y: useTransform(heroScroll, [0, 1], [0, -100]) }}
          >
             <div className="space-y-6 bg-white/60 p-8 rounded-[2.5rem] backdrop-blur-md border-2 border-white/60 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <h2 className="text-2xl md:text-3xl text-brand-navy font-display font-semibold leading-tight">
                {data.hero.h2}
              </h2>
              <p className="text-lg text-brand-navy/80 font-medium font-sans">
                {data.hero.supportLine}
              </p>
              
              <MagneticWrapper>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-3 w-full py-5 px-8 bg-brand-coral text-white text-xl font-display font-bold rounded-full hover:bg-brand-coral/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Book Session
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </MagneticWrapper>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION - Clean White */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-20 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center justify-center p-5 rounded-full bg-brand-teal/10 text-brand-teal mb-6">
              <Lightbulb className="w-12 h-12" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-navy leading-tight">
              {data.problem.title}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-xl md:text-2xl text-brand-navy/70 leading-relaxed font-sans">
            <p>{data.problem.p1}</p>
            <div className="relative p-8 rounded-3xl bg-brand-coral/10 border-l-8 border-brand-coral">
              <p className="font-semibold text-brand-coral">{data.problem.p2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION - Sky Blue */}
      <section ref={approachRef} className="py-32 px-6 relative bg-brand-sky text-white">
        <WaveTop className="text-white" />
        <WaveBottom className="text-brand-cream" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-20">
          <div className="space-y-8 pr-8">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-white text-brand-sky shadow-lg shadow-black/5">
              <BrainCircuit className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] drop-shadow-sm">
              {data.approach.title}
            </h2>
            <div className="space-y-6 text-xl font-medium font-sans text-white/90">
              <p>{data.approach.p1}</p>
              <p>{data.approach.p2}</p>
            </div>
          </div>
          
          <motion.div 
            className="relative"
            style={{ scale: scaleApproachCard, y: yApproachCard }}
          >
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl relative border-8 border-white/20 -rotate-2 hover:rotate-0 transition-transform duration-700">
              <h3 className="text-3xl font-display font-bold text-brand-navy mb-8 text-left">{data.howItWorks.title}</h3>
              <div className="space-y-6 relative z-10">
                {data.howItWorks.steps.map((step: string, index: number) => (
                  <div key={index} className="flex gap-6 items-center bg-brand-cream rounded-full p-3 pr-6 hover:bg-brand-yellow/20 transition-colors">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center text-brand-navy font-display font-bold text-2xl shadow-inner">
                      {index + 1}
                    </div>
                    <p className="text-brand-navy font-semibold text-lg leading-tight">{step}</p>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-center text-brand-coral font-bold text-xl bg-brand-coral/10 py-4 px-6 rounded-full inline-block w-full">
                {data.howItWorks.closing}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SESSION STRUCTURE & WHO WE HELP */}
      <section className="py-32 px-6 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 relative z-20">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-[3rem] p-10 md:p-12 shadow-xl border-4 border-brand-teal/20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy flex items-center gap-5 mb-10">
              <div className="p-4 bg-brand-teal text-white rounded-full">
                <Target className="w-8 h-8" />
              </div>
              {data.session.title}
            </h2>
            <div className="grid gap-5">
              {data.session.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-brand-cream border border-brand-teal/10">
                  <CheckCircle2 className="w-8 h-8 text-brand-teal flex-shrink-0" />
                  <span className="text-brand-navy font-bold text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <p className="text-brand-navy/60 font-semibold italic mt-10 text-center bg-black/5 py-5 rounded-2xl">
              "{data.session.closing}"
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-[3rem] p-10 md:p-12 shadow-xl border-4 border-brand-yellow/20 mt-12 lg:mt-24"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy flex items-center gap-5 mb-10">
              <div className="p-4 bg-brand-yellow text-brand-navy rounded-full">
                <MapPin className="w-8 h-8" />
              </div>
              {data.whoWeHelp.title}
            </h2>
            <div className="space-y-5">
              {data.whoWeHelp.items.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-brand-cream rounded-2xl">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow flex-shrink-0 shadow-sm" />
                  <p className="text-brand-navy font-bold text-lg">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA - High Contrast */}
      <section className="py-40 px-6 relative overflow-hidden bg-brand-teal text-white flex justify-center text-center">
        <WaveTop className="text-brand-cream" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold drop-shadow-md leading-tight">
            {data.cta.title}
          </h2>
          <p className="text-2xl text-white/90 font-sans max-w-2xl mx-auto font-medium">
            {data.cta.p1}
          </p>
          
          <div className="pt-8">
            <MagneticWrapper magneticStrength={0.2}>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-brand-yellow text-brand-navy text-2xl font-display font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                {data.cta.buttonText}
                <ArrowRight className="w-8 h-8" />
              </Link>
            </MagneticWrapper>
          </div>
        </div>
      </section>
      
    </div>
  );
}
