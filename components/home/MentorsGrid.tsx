"use client";

import { motion } from "framer-motion";
import { BrainCellsBackground } from "./BrainCellsBackground";
import { TiltCard } from "@/components/ui/TiltCard";

const mentors = [
  {
    name: "Dr. Priya Nair",
    specialty: "Mathematics & Logic",
    background: "Former MIT research fellow. 8 years in adaptive learning.",
    rating: "4.97",
    sessions: "1,247",
    accent: "bg-brand-sky/15 text-brand-sky",
    image: "/images/virtual_class_kid_1_1776893403210.jpg",
  },
  {
    name: "Marcus Tran",
    specialty: "Science & Engineering",
    background: "NASA JPL intern turned educator. Specializes in making physics tangible.",
    rating: "4.93",
    sessions: "892",
    accent: "bg-brand-coral/15 text-brand-coral",
    image: "/images/virtual_class_kid_2_1776893425405.jpg",
  },
  {
    name: "Elena Vasquez",
    specialty: "Reading & Writing",
    background: "Published author and literacy coach. Expert in bilingual learning.",
    rating: "4.98",
    sessions: "1,531",
    accent: "bg-brand-red/15 text-brand-red",
    image: "/images/virtual_class_kid_3_1776893447194.jpg",
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
              The Faculty
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight leading-[1.05] text-brand-navy">
              Not tutors. <br className="hidden md:block" />
              <span className="text-brand-red">Mentors.</span>
            </h2>
          </div>
          <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed max-w-sm">
            Only the top 3% of applicants pass our 6-stage vetting. Every mentor is background-checked and continuously rated.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-8 gap-y-12 md:gap-y-16 mt-12 md:mt-20 perspective-1000"
        >
          <TiltCard>
            <motion.div
              variants={fadeUp}
              className="relative group p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-brand-navy/8 shadow-[0_20px_50px_-22px_rgba(27,42,78,0.2)] flex flex-col justify-end min-h-[350px] md:min-h-[400px] transition-all duration-500 hover:shadow-[0_30px_70px_-20px_rgba(27,42,78,0.3)] w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div 
                className="absolute -top-12 right-6 md:-top-16 md:right-10 w-28 h-32 md:w-56 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] z-20 origin-bottom"
                style={{ transform: "translateZ(100px)" }}
              >
                <img src={mentors[0].image} alt={mentors[0].name} className="w-full h-full object-cover scale-110" />
              </div>
              
              <div className="relative z-10 w-full md:w-3/5 pt-12 md:pt-0" style={{ transform: "translateZ(40px)" }}>
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div>
                    <div className="font-display text-2xl font-700 text-brand-navy">{mentors[0].name}</div>
                    <div className="text-sm text-brand-navy/60 font-semibold">{mentors[0].specialty}</div>
                  </div>
                </div>
                <p className="text-brand-navy/80 text-[15px] md:text-[16px] leading-relaxed mb-8 md:mb-10">
                  {mentors[0].background}
                </p>
                
                <div className="flex gap-8 md:gap-12 border-t border-brand-navy/10 pt-6">
                  <div>
                    <div className="font-display text-xl md:text-2xl font-700 text-brand-navy">{mentors[0].rating}</div>
                    <div className="text-[10px] md:text-xs text-brand-navy/55 uppercase tracking-wider font-bold mt-1">Rating</div>
                  </div>
                  <div>
                    <div className="font-display text-xl md:text-2xl font-700 text-brand-navy">{mentors[0].sessions}</div>
                    <div className="text-[10px] md:text-xs text-brand-navy/55 uppercase tracking-wider font-bold mt-1">Sessions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TiltCard>

          <div className="flex flex-col gap-8 md:gap-10 perspective-1000">
            {mentors.slice(1).map((m) => (
              <TiltCard key={m.name}>
                <motion.div
                  variants={fadeUp}
                  className="relative group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-brand-navy/8 shadow-[0_15px_40px_-20px_rgba(27,42,78,0.2)] flex-1 transition-all duration-500 hover:shadow-[0_25px_50px_-20px_rgba(27,42,78,0.25)] h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div 
                    className="absolute -top-8 right-4 md:-top-10 md:right-6 w-20 h-20 md:w-24 md:h-24 rounded-[1rem] md:rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] z-20"
                    style={{ transform: "translateZ(80px)" }}
                  >
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover scale-110" />
                  </div>

                  <div className="relative z-10 pr-16 md:pr-24 pt-4 md:pt-0" style={{ transform: "translateZ(30px)" }}>
                    <div className="font-display text-lg md:text-xl font-700 text-brand-navy">{m.name}</div>
                    <div className="text-xs text-brand-navy/60 font-semibold mb-3 md:mb-4">{m.specialty}</div>
                    <p className="text-brand-navy/75 text-[13px] md:text-sm leading-relaxed mb-5 md:mb-6">{m.background}</p>
                    
                    <div className="flex gap-4 md:gap-6 text-[10px] md:text-xs text-brand-navy/55">
                      <span>
                        <span className="text-brand-navy font-bold text-base md:text-lg">{m.rating}</span> rating
                      </span>
                      <span>
                        <span className="text-brand-navy font-bold text-base md:text-lg">{m.sessions}</span> sessions
                      </span>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
