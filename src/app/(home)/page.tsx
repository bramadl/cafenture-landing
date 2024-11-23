import { type Metadata } from "next";
import { type WebPage } from "schema-dts";

import { WithLd } from "@cafenture/components/core/with-ld";

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
    canonical: `${process.env.VERCEL_ENV === "local" ? "http" : "https"}://${
      process.env.VERCEL_PROJECT_PRODUCTION_URL
    }/`,
  },
  description:
    "Cafenture Indonesia adalah platform rekomendasi dan pencarian kedai kopi terbaik di Indonesia dengan dukungan teknologi terkini.",
  title: "Platform Rekomendasi dan Pencarian Kedai Kopi",
};

export default function Page() {
  return (
    <WithLd<WebPage>
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Platform Rekomendasi dan Pencarian Kedai Kopi | Cafenture Indonesia",
        description:
          "Cafenture Indonesia adalah platform rekomendasi dan pencarian kedai kopi terbaik di Indonesia dengan dukungan teknologi terkini.",
        publisher: {
          "@type": "Organization",
          name: "PT ABV Digital Indonesia",
        },
        image: {
          "@type": "ImageObject",
          url: `${process.env.VERCEL_ENV === "local" ? "http" : "https"}://${
            process.env.VERCEL_PROJECT_PRODUCTION_URL
          }/logos/alpha-dark.png`,
          height: "630",
          width: "1200",
        },
        mainEntityOfPage: `${
          process.env.VERCEL_ENV === "local" ? "http" : "https"
        }://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
        url: `${process.env.VERCEL_ENV === "local" ? "http" : "https"}://${
          process.env.VERCEL_PROJECT_PRODUCTION_URL
        }`,
        keywords: [
          "Cafenture Indonesia",
          "Rekomendasi Kedai Kopi",
          "Pencarian Kedai Kopi",
          "Platform Rekomendasi Kedai Kopi",
          "Platform Pencarian Kedai Kopi",
          "Keanggotaan Eksklusif untuk Pencari Kedai Kopi",
          "Informasi Kedai Kopi Terlengkap",
          "Rekomendasi dengan Dukungan Teknologi Terkini",
        ],
        sameAs: [
          "https://www.instagram.com/cafenture.indonesia",
          "https://www.tiktok.com/cafenture.indonesia",
        ],
      }}
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
