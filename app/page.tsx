import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Team } from "@/components/sections/Team";
import { Reviews } from "@/components/sections/Reviews";
import { Security } from "@/components/sections/Security";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { ScrollStats } from "@/components/sections/ScrollStats";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Venturian AI — Earn weekly with the future of AI.",
  description:
    "Venturian connects student accounts to verified AI training pipelines. Sign up with your .edu email in 5 minutes. Then $200–$500 weekly — with nothing else required.",
  alternates: {
    canonical: "https://venturian.way-marketing.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: "https://venturian.way-marketing.com",
  logo: "https://venturian.way-marketing.com/logo.png",
  description: company.tagline,
  foundingDate: String(company.founded),
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://twitter.com/venturianai",
    "https://linkedin.com/company/venturianai",
    "https://github.com/venturianai",
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
      <main id="main-content">
        <Hero />
        <ScrollStats />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Team />
        <Reviews />
        <Security />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
