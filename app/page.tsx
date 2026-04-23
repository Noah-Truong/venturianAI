import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Team } from "@/components/sections/Team";
import { Reviews } from "@/components/sections/Reviews";
import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Meridian AI — Infrastructure for Intelligent Systems",
  description:
    "Meridian provides the evaluation, observability, and deployment infrastructure that makes AI reliable in production. Used by scale-stage engineering teams.",
  alternates: {
    canonical: "https://meridian.ai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: "https://meridian.ai",
  logo: "https://meridian.ai/logo.png",
  description: company.tagline,
  foundingDate: String(company.founded),
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://twitter.com/meridianai",
    "https://linkedin.com/company/meridianai",
    "https://github.com/meridianai",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Team />
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
