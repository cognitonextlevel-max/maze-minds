"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Pathways", href: "#pathways" },
  { name: "Our Tutors", href: "#mentors" },
  { name: "How It Works", href: "#how" },
  { name: "Pricing", href: "/pricing" },
  { name: "For Parents", href: "/for-parents" },
];

const socials = [
  { name: "Facebook", href: "https://facebook.com", color: "bg-brand-sky", icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com", color: "bg-brand-coral", icon: InstagramIcon },
  { name: "YouTube", href: "https://youtube.com", color: "bg-brand-red", icon: YouTubeIcon },
];

export function Navbar() {
  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <motion.img
            src="/images/brand/logo_full.png"
            alt="Maze Minds® Tutor — Connecting The Different Pathways of Learning"
            width={260}
            height={64}
            className="h-12 md:h-16 w-auto object-contain"
            animate={{ scale: [1, 1.015, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-brand-navy/80 hover:text-brand-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden md:flex items-center gap-2">
            {socials.map(({ name, href, color, icon: Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
                className={`${color} h-9 w-9 rounded-full inline-flex items-center justify-center text-white shadow-[0_4px_12px_rgba(27,42,78,0.18)] hover:-translate-y-[2px] transition-transform`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <Link
            href="/book"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-red text-white text-sm font-semibold shadow-[0_8px_22px_-8px_rgba(230,57,70,0.6)] hover:bg-brand-coral transition-colors"
          >
            Book a Learning Snapshot
          </Link>
        </div>
      </div>
    </header>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5H16.5V4.4C16.2 4.4 15.2 4.3 14 4.3c-2.4 0-4 1.4-4 4v2.2H7.5v3H10V21h3.5z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.6 7.2c-.2-1-.9-1.7-1.9-2C18 5 12 5 12 5s-6 0-7.7.2c-1 .3-1.7 1-1.9 2C2.2 8.9 2.2 12 2.2 12s0 3.1.2 4.8c.2 1 .9 1.7 1.9 2C6 19 12 19 12 19s6 0 7.7-.2c1-.3 1.7-1 1.9-2 .2-1.7.2-4.8.2-4.8s0-3.1-.2-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z" />
    </svg>
  );
}
