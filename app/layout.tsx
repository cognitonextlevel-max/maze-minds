import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Maze Minds | 1-on-1 Mentorship That Rewires How Kids Think",
  description:
    "Virtual 1-on-1 mentorship for ages 6-14. Vetted mentors, adaptive pathways, and real results parents can track weekly.",
  openGraph: {
    title: "Maze Minds | 1-on-1 Mentorship",
    description: "Virtual 1-on-1 mentorship for ages 6-14. Vetted mentors, adaptive pathways, and real results parents can track weekly.",
    url: "https://mazeminds.com",
    siteName: "Maze Minds",
    images: [
      {
        url: "https://mazeminds.com/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maze Minds | 1-on-1 Mentorship",
    description: "Virtual 1-on-1 mentorship for ages 6-14.",
    images: ["https://mazeminds.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased bg-brand-cream text-brand-navy min-h-[100dvh] overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
