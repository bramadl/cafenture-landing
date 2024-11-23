import { type Metadata } from "next";
import { type WebPage } from "schema-dts";

import { WithLd } from "@cafenture/components/core/with-ld";
import { baseLd, baseUrl } from "@cafenture/lib/seo";

import { HeroSection } from "./_/hero-section";
import { FeaturedSpotlight } from "./_/featured-spotlight";
import { SpotlightsSection } from "./_/spotlights-section";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/platforms/merchants`,
  },
  description:
    "Dari panduan untuk pemilik hingga rekomendasi terbaik, temukan artikel, tips, dan inspirasi menarik seputar kedai kopi di Cafenture Spotlights.",
  title: {
    absolute:
      "Inspirasi dan Artikel Seputar Dunia Kedai Kopi | Cafenture Spotlights",
  },
};

export default function Page() {
  return (
    <WithLd<WebPage>
      jsonLd={({ baseUrl }) => ({
        ...baseLd,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Beranda",
              item: `${baseUrl}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Tentang Platform",
              item: `${baseUrl}/platforms`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Cafenture Spotlights",
              item: `${baseUrl}/platforms/spotlights`,
            },
          ],
        },
        name: "Inspirasi dan Artikel Seputar Dunia Kedai Kopi | Cafenture Spotlights",
        description:
          "Dari panduan untuk pemilik hingga rekomendasi terbaik, temukan artikel, tips, dan inspirasi menarik seputar kedai kopi di Cafenture Spotlights.",
        mainEntityOfPage: `${baseUrl}/platforms`,
        url: `${baseUrl}/platforms`,
      })}
    >
      <HeroSection>
        <FeaturedSpotlight />
      </HeroSection>
      <SpotlightsSection />
    </WithLd>
  );
}
