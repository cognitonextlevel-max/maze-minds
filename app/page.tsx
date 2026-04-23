import { Hero } from "@/components/home/Hero";
import { MentorsGrid } from "@/components/home/MentorsGrid";
import { Pathways } from "@/components/home/Pathways";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustBlock } from "@/components/home/TrustBlock";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Pathways />
      <MentorsGrid />
      <HowItWorks />
      <TrustBlock />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
