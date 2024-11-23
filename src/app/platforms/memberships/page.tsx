import { type Metadata } from "next";
import { type WebPage } from "schema-dts";

import { WithLd } from "@cafenture/components/core/with-ld";
import { baseLd, baseUrl } from "@cafenture/lib/seo";

import { HeroSection } from "./_/hero-section";
import { MembershipsBenefits } from "./_/membership-benefits";
import { MembershipSection } from "./_/membership-section";
import { PricingGrids } from "./_/pricing-grids";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/platforms/memberships`,
  },
  description:
    "Cafenture Indonesia menawarkan program keanggotaan ekslusif yang dirancang khusus bagi para pecinta kedai kopi untuk berbagai manfaat eksklusif.",
  title: "Mengenal Keanggotaan Eksklusif",
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
              name: "Cafenture Memberships",
              item: `${baseUrl}/platforms/memberships`,
            },
          ],
        },
        name: "Mengenal Keanggotaan Eksklusif | Cafenture Indonesia",
        description:
          "Cafenture Indonesia menawarkan program keanggotaan ekslusif yang dirancang khusus bagi para pecinta kedai kopi untuk berbagai manfaat eksklusif.",
        mainEntityOfPage: `${baseUrl}/platforms`,
        url: `${baseUrl}/platforms`,
      })}
    >
      <HeroSection>
        <PricingGrids />
      </HeroSection>
      <MembershipSection>
        <MembershipsBenefits />
      </MembershipSection>
    </WithLd>
  );
}
