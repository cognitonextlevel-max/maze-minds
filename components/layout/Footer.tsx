"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Pathways",
    links: [
      { name: "Foundation (6–8)", href: "#pathways" },
      { name: "Acceleration (9–11)", href: "#pathways" },
      { name: "Mastery (12–14)", href: "#pathways" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Mentors", href: "#mentors" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-navy text-white pt-20 pb-10 overflow-hidden">
      <div aria-hidden className="absolute top-12 right-12 w-3 h-3 rounded-full bg-brand-coral" />
      <div aria-hidden className="absolute top-24 right-32 w-2 h-2 rounded-full bg-brand-sky" />
      <div aria-hidden className="absolute bottom-24 left-16 w-2 h-2 rounded-full bg-brand-gold" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <img
                src="/brand/maza-minds-logo.png"
                alt="Maze Minds Tutor"
                width={220}
                height={56}
                className="h-14 w-auto object-contain mix-blend-screen"
                style={{ filter: "brightness(1.5)" }}
              />
            </Link>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs">
              Connecting the different pathways. 1-on-1 virtual mentorship for
              ages 6 to 14.
            </p>

            <div className="flex items-center gap-2 mt-6">
              {[
                { href: "https://facebook.com", color: "bg-brand-sky", label: "Facebook" },
                { href: "https://instagram.com", color: "bg-brand-coral", label: "Instagram" },
                { href: "https://youtube.com", color: "bg-brand-red", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.color} h-9 w-9 rounded-full inline-flex items-center justify-center text-white hover:-translate-y-[2px] transition-transform`}
                >
                  <span className="text-[11px] font-bold">{s.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-coral mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-sky mb-4">
              Get Started
            </h4>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-red text-white text-sm font-semibold shadow-[0_8px_22px_-8px_rgba(230,57,70,0.6)] hover:bg-brand-coral transition-colors"
            >
              Book Free Session
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Maze Minds Tutor. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with care for curious kids.
          </p>
        </div>
      </div>
    </footer>
  );
}
