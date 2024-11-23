import { type Metadata } from "next";
import { type WebPage } from "schema-dts";

import { WithLd } from "@cafenture/components/core/with-ld";
import { baseLd, baseUrl } from "@cafenture/lib/seo";

import { BackgroundStories } from "./_/background-stories";
import { BackgroundSection } from "./_/background-section";
import { HeroSection } from "./_/hero-section";
import { MarketBeams } from "./_/market-beams";
import { ReachabilitySection } from "./_/reachability-section";
import { SolutionsList } from "./_/solutions-list";
import { SolutionsSection } from "./_/solutions-section";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/platforms`,
  },
  description:
    "Cafenture Indonesia menghubungkan pencari dengan kedai kopi terbaik di Indonesia melalui algoritma rekomendasi yang menyesuaikan preferensi.",
  title: "Fondasi, Latar Belakang, dan Nilai Utama",
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
              position: 1,
              name: "Beranda",
              item: `${baseUrl}/platforms`,
            },
          ],
        },
        name: "Fondasi, Latar Belakang, dan Nilai Utama Platform | Cafenture Indonesia",
        description:
          "Cafenture Indonesia menghubungkan pencari dengan kedai kopi terbaik di Indonesia melalui algoritma rekomendasi yang menyesuaikan preferensi.",
        mainEntityOfPage: `${baseUrl}/platforms`,
        url: `${baseUrl}/platforms`,
      })}
    >
      <HeroSection>
        <MarketBeams />
      </HeroSection>
      <BackgroundSection>
        <BackgroundStories />
      </BackgroundSection>
      <SolutionsSection>
        <SolutionsList />
      </SolutionsSection>
      <ReachabilitySection />
    </WithLd>
  );
}
