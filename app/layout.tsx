import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://venturian.way-marketing.com"),
  title: {
    default: "Venturian AI — Earn weekly with the future of AI",
    template: "%s | Venturian AI",
  },
  description:
    "Venturian AI connects student accounts to AI training pipelines. Sign up with your .edu email in 5 minutes and earn $200–$500 per week.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Venturian AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
