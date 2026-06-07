import { MentorsGrid } from "@/components/home/MentorsGrid";

export const metadata = {
  title: "Meet Our Mentors | Maze Minds Tutor",
  description: "Browse our directory of vetted, world-class mentors ready to guide your child's learning adventure.",
};

export default function MentorsPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-6">
          The best guides for the journey
        </h1>
        <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto">
          Every Maze Minds mentor is an expert in their field and trained in our proprietary 
          pathways methodology. We match your child with a mentor who fits their learning style.
        </p>
      </div>
      
      <MentorsGrid />
      
      {/* Additional full directory would go here */}
    </main>
  );
}
