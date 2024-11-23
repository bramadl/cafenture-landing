import { type Metadata } from "next";
import { type WebPage } from "schema-dts";

import { WithLd } from "@cafenture/components/core/with-ld";
import { baseLd, baseUrl } from "@cafenture/lib/seo";

import { HeroSection } from "./_/hero-section";
import { MerchantsMarquee } from "./_/merchants-marquee";
import { MerchantsBenefitSection } from "./_/merchants-benefit-section";
import { MerchantsStepsSection } from "./_/merchant-steps-section";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/platforms/merchants`,
  },
  description:
    "Cafenture Indonesia membantu kedai kopi dalam memperluas jangkauan pemasaran dan eksposur bisnis mereka di Indonesia melalui proses kemitraan yang mudah.",
  title: "Proses Kemitraan Bisnis Kedai Kopi",
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
              name: "Cafenture Merchants",
              item: `${baseUrl}/platforms/merchants`,
            },
          ],
        },
        name: "Proses Kemitraan Bisnis Kedai Kopi | Cafenture Indonesia",
        description:
          "Cafenture Indonesia membantu kedai kopi dalam memperluas jangkauan pemasaran dan eksposur bisnis mereka di Indonesia melalui proses kemitraan yang mudah.",
        mainEntityOfPage: `${baseUrl}/platforms`,
        url: `${baseUrl}/platforms`,
      })}
    >
      <HeroSection>
        <MerchantsMarquee />
      </HeroSection>
      <MerchantsBenefitSection />
      <MerchantsStepsSection />
    </WithLd>
  );
}
