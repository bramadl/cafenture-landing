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
  title: {
    template: "%s | Cafenture Indonesia",
    default: "Platform Rekomendasi Kedai Kopi",
  },
  description:
    "Platform pencarian dan rekomendasi personal kedai kopi dilengkapi dengan pengalaman menjelajah yang unik.",
  alternates: {
    canonical: process.env.__NEXT_PRIVATE_ORIGIN + "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
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
