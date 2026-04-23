"use client";

const testimonials = [
  {
    quote: "My daughter went from struggling with fractions to teaching her classmates. In six weeks.",
    name: "Maria Sandoval",
    location: "Austin, TX",
    accent: "bg-brand-sky/15 text-brand-sky",
  },
  {
    quote: "This is not tutoring. My son's mentor became his role model. He actually looks forward to sessions.",
    name: "James Thornton",
    location: "Brooklyn, NY",
    accent: "bg-brand-coral/15 text-brand-coral",
  },
  {
    quote: "The parent dashboard alone is worth it. I see exactly what is happening and never have to guess.",
    name: "Aisha Khalil",
    location: "Dallas, TX",
    accent: "bg-brand-red/15 text-brand-red",
  },
  {
    quote: "Two grade levels ahead in math after one semester. We cancelled every other program.",
    name: "David Liang",
    location: "Chicago, IL",
    accent: "bg-brand-navy/12 text-brand-navy",
  },
  {
    quote: "My son was diagnosed with ADHD. His mentor adapted every session. We finally found something that works.",
    name: "Rachel Okonkwo",
    location: "Atlanta, GA",
    accent: "bg-brand-gold/25 text-brand-navy",
  },
  {
    quote: "Worth every cent. The structure, the reports, the way my kid lights up — nothing else compares.",
    name: "Carlos Medina",
    location: "Denver, CO",
    accent: "bg-brand-sky/15 text-brand-sky",
  },
];

const doubled = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-40 bg-white overflow-hidden z-10 transition-colors duration-700">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
          From Parents
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 tracking-tight text-brand-navy">
          Real families. <br className="hidden md:block" />
          <span className="text-brand-coral">Real words.</span>
        </h2>
      </div>

      <div className="relative group/track py-10 -my-10">
        {/* Track that pauses on hover */}
        <div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex-shrink-0 w-[320px] md:w-[420px] p-8 md:p-10 rounded-[2rem] bg-brand-cream border border-brand-navy/5 shadow-[0_10px_30px_-22px_rgba(27,42,78,0.2)] transition-all duration-500 opacity-100 group-hover/track:opacity-30 group-hover/track:scale-[0.98] group-hover/track:blur-[2px] hover:!opacity-100 hover:!scale-105 hover:!blur-none hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(27,42,78,0.3)] hover:border-brand-navy/20 cursor-default"
            >
              <div className="text-brand-coral text-4xl leading-none font-serif font-black opacity-30 mb-2">&ldquo;</div>
              <p className="text-brand-navy text-[16px] md:text-[18px] leading-relaxed mb-10 font-medium">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-brand-navy/10 pt-6">
                <div className={`w-12 h-12 rounded-full ${t.accent} flex items-center justify-center text-sm font-bold shadow-inner`}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm md:text-base font-bold text-brand-navy">{t.name}</div>
                  <div className="text-[11px] md:text-xs text-brand-navy/55 uppercase tracking-wider font-semibold mt-0.5">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fades on the edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
