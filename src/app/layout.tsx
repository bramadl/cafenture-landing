import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@cafenture/components/core/footer";
import { Navigation } from "@cafenture/components/core/navigation";
import { SmoothScroller } from "@cafenture/components/core/smooth-scroller";

import { CallToActionSection } from "../components/core/cta-section";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: {
    default: "Platform Rekomendasi dan Pencarian Kedai Kopi",
    template: "%s | Cafenture Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Cafenture" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body>
        <SmoothScroller>
          <Navigation />
          {children}
          <CallToActionSection />
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
