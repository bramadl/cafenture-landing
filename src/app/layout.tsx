import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@cafenture/components/core/footer";
import { Navigation } from "@cafenture/components/core/navigation";
import { ReactLenis } from "@cafenture/lib/react-lenis";
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
    "Cafenture, platform terdepan untuk pencinta kedai kopi. Temukan rekomendasi personal dan pengalaman menjelajah unik yang melampaui lebih dari secangkir kopi.",
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
        <ReactLenis root>
          <Navigation />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
