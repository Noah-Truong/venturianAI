import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const META_TITLE = "Meridian AI — AI Infrastructure for Engineering Teams";
const META_DESC =
  "Meridian gives engineering teams the evaluation frameworks, deployment tooling, and reliability primitives to ship AI models in production — without flying blind.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  metadataBase: new URL("https://meridianai.com"),
  alternates: { canonical: "https://meridianai.com" },
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: "https://meridianai.com",
    siteName: "Meridian AI",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: META_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meridian AI",
  url: "https://meridianai.com",
  logo: "https://meridianai.com/logo.png",
  foundingDate: "2022",
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
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@meridianai.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
