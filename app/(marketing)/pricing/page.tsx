"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Explorer",
      price: isAnnual ? 39 : 49,
      period: "/wk",
      description: "Perfect for homework help and concept review.",
      features: ["1 hour of 1-on-1 tutoring", "Basic progress reports", "Email support", "Math or Reading only"],
      popular: false,
    },
    {
      name: "Pathfinder",
      price: isAnnual ? 75 : 89,
      period: "/wk",
      description: "Our most popular plan for accelerated growth.",
      features: ["2 hours of 1-on-1 tutoring", "Detailed weekly insights", "Priority messaging", "Access to all subjects", "Session recordings"],
      popular: true,
    },
    {
      name: "Astronaut",
      price: isAnnual ? 129 : 149,
      period: "/wk",
      description: "For students who need comprehensive support.",
      features: ["4 hours of 1-on-1 tutoring", "Advanced cognitive mapping", "24/7 parent support line", "All subjects + advanced prep", "Dedicated success manager"],
      popular: false,
    }
  ];

  return (
    <main className="pt-24 pb-32">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-6">
          Transparent pricing. No surprises.
        </h1>
        <p className="text-xl text-brand-navy/70 max-w-2xl mx-auto mb-10">
          Choose the pathway that best fits your child's needs. Pause or cancel anytime.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`font-medium ${!isAnnual ? "text-brand-navy" : "text-brand-navy/50"}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 bg-brand-navy rounded-full p-1 relative transition-colors"
          >
            <motion.div 
              className="w-6 h-6 bg-brand-yellow rounded-full shadow-sm"
              animate={{ x: isAnnual ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`font-medium ${isAnnual ? "text-brand-navy" : "text-brand-navy/50"}`}>
            Annually <span className="text-brand-red text-sm font-bold ml-1">(Save 20%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-3xl p-8 relative flex flex-col ${plan.popular ? 'border-2 border-brand-yellow shadow-[0_0_30px_rgba(245,197,24,0.3)] transform md:-translate-y-4' : 'border border-brand-navy/10 shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-brand-navy font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl text-brand-navy mb-2">{plan.name}</h3>
              <p className="text-brand-navy/60 mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-display text-brand-navy">${plan.price}</span>
                <span className="text-brand-navy/50">{plan.period}</span>
                {isAnnual && <div className="text-sm text-brand-red font-medium mt-1">Billed annually</div>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-brand-navy/80">
                    <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" variant={plan.popular ? "default" : "outline"} asChild className="w-full rounded-full">
                <Link href="/book">Choose {plan.name}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
