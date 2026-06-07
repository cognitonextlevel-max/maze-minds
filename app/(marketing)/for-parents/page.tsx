import { TrustBlock } from "@/components/home/TrustBlock";
import { ShieldCheck, LineChart, MessageCircle } from "lucide-react";

export const metadata = {
  title: "For Parents | Maze Minds Tutor",
  description: "Learn about our commitment to safety, progress reporting, and transparent pricing.",
};

export default function ForParentsPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-6">
          Peace of mind, built in.
        </h1>
        <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto mb-16">
          We built Maze Minds because we know what parents actually want: 
          results you can see, safety you can trust, and pricing that makes sense.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl mb-32">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-cyan/20 rounded-xl flex items-center justify-center text-brand-cyan mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-display text-2xl text-brand-navy">Bank-level Safety</h3>
            <p className="text-brand-navy/70">All sessions are recorded, monitored, and hosted on our secure proprietary platform. Every mentor undergoes rigorous state and federal background checks.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center text-brand-red mb-6">
              <LineChart size={24} />
            </div>
            <h3 className="font-display text-2xl text-brand-navy">Weekly Progress</h3>
            <p className="text-brand-navy/70">No more guessing. You'll receive a detailed breakdown after every session detailing concepts mastered and areas for improvement.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center text-brand-yellow mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-display text-2xl text-brand-navy">Direct Communication</h3>
            <p className="text-brand-navy/70">Message your mentor directly through our parent portal to align on goals, upcoming tests, or specific homework assignments.</p>
          </div>
        </div>
      </div>
      
      <TrustBlock />
    </main>
  );
}
