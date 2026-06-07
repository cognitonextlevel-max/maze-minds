"use client";

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

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="rounded-[2.5rem] bg-brand-cream border border-brand-navy/5 px-8 py-16 md:py-24 text-center">
          <p className="font-display text-2xl md:text-3xl font-700 text-brand-navy/80 max-w-2xl mx-auto leading-snug">
            Testimonials coming soon from our founding Maze Minds Tutor families.
          </p>
        </div>
      </div>
    </section>
  );
}
