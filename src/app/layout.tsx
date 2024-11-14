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
  title: "Create Next App",
  description: "Generated by create next app",
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
