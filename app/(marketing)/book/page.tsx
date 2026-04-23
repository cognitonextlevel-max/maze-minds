export const metadata = {
  title: "Book a Session | Maza Minds Tutor",
  description: "Schedule your child's first Maza Minds tutoring session today.",
};

export default function BookPage() {
  return (
    <main className="pt-24 pb-32 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl text-brand-navy mb-4">
            Let's start the adventure
          </h1>
          <p className="text-lg text-brand-navy/70">
            Pick a time that works for you. We'll match you with the perfect mentor.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[700px] border border-brand-navy/10 flex items-center justify-center">
          {/* Placeholder for Calendly embed */}
          <div className="text-center p-12">
            <div className="w-20 h-20 bg-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              📅
            </div>
            <h2 className="font-display text-2xl text-brand-navy mb-2">Calendly Integration Ready</h2>
            <p className="text-brand-navy/60 mb-8 max-w-md mx-auto">
              In production, the Calendly widget will render here, allowing parents to seamlessly select their preferred slot.
            </p>
            <div className="animate-pulse flex gap-2 justify-center">
              <div className="w-3 h-3 bg-brand-navy/20 rounded-full"></div>
              <div className="w-3 h-3 bg-brand-navy/20 rounded-full"></div>
              <div className="w-3 h-3 bg-brand-navy/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
