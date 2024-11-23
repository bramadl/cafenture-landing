import { type Metadata } from "next";
import { type WebPage } from "schema-dts";

import { WithLd } from "@cafenture/components/core/with-ld";
import { baseLd, baseUrl } from "@cafenture/lib/seo";

import { FaqSection } from "./_/faq-section";
import { FeaturesBento } from "./_/features-bento";
import { FeaturesSection } from "./_/features-section";
import { HeroSection } from "./_/hero-section";
import { MembershipBenefits } from "./_/membership-benefits";
import { MembershipsSection } from "./_/memberships-section";
import { MerchantBeams } from "./_/merchant-beams";
import { MerchantsSection } from "./_/merchants-section";
import { ProductMockups } from "./_/product-mockup";
import { TestimonialsMarquee } from "./_/testimonials-marquee";
import { TestimonialsSection } from "./_/testimonials-section";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/`,
  },
  description:
    "Cafenture Indonesia adalah platform rekomendasi dan pencarian kedai kopi terbaik di Indonesia yang dirancang penuh menggunakan dukungan teknologi terkini.",
  title: "Platform Rekomendasi dan Pencarian Kedai Kopi",
};

export default function Page() {
  return (
    <WithLd<WebPage>
      jsonLd={({ baseUrl }) => ({
        ...baseLd,
        name: "Platform Rekomendasi dan Pencarian Kedai Kopi | Cafenture Indonesia",
        description:
          "Cafenture Indonesia adalah platform rekomendasi dan pencarian kedai kopi terbaik di Indonesia yang dirancang penuh menggunakan dukungan teknologi terkini.",
        mainEntityOfPage: `${baseUrl}`,
        url: `${baseUrl}`,
      })}
    >
      <HeroSection>
        <ProductMockups />
      </HeroSection>
      <MerchantsSection>
        <MerchantBeams />
      </MerchantsSection>
      <FeaturesSection>
        <FeaturesBento />
      </FeaturesSection>
      <MembershipsSection>
        <MembershipBenefits />
      </MembershipsSection>
      <TestimonialsSection>
        <TestimonialsMarquee />
      </TestimonialsSection>
      <FaqSection />
    </WithLd>
  );
}
