import { HowItWorks } from "@/components/home/HowItWorks";

export const metadata = {
  title: "How It Works | Maze Minds Tutor",
  description: "See how Maze Minds Tutor works in three simple steps.",
};

export default function HowItWorksPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-6">
          Your launchpad to success
        </h1>
        <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto">
          We've made getting started as easy as 1-2-3. No complicated onboarding, 
          just a seamless path to better learning.
        </p>
      </div>
      
      <HowItWorks />
    </main>
  );
}
