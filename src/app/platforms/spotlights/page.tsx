import { type Metadata } from "next";

import { HeroSection } from "./_/hero-section";
import { FeaturedSpotlight } from "./_/featured-spotlight";
import { SpotlightsSection } from "./_/spotlights-section";

export const metadata: Metadata = {
  title: {
    absolute:
      "Inspirasi dan Artikel Seputar Dunia Kedai Kopi | Cafenture Spotlights",
  },
  description:
    "Dari panduan untuk pemilik hingga rekomendasi terbaik, temukan artikel, tips, dan inspirasi menarik seputar kedai kopi di Cafenture Spotlights.",
  alternates: {
    canonical: process.env.__NEXT_PRIVATE_ORIGIN + "/platforms/spotlights",
  },
};

export default function Page() {
  return (
    <main>
      <HeroSection>
        <FeaturedSpotlight />
      </HeroSection>
      <SpotlightsSection />
    </main>
  );
}
