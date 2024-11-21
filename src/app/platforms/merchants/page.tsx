import { type Metadata } from "next";

import { HeroSection } from "./_/hero-section";
import { MerchantsMarquee } from "./_/merchants-marquee";
import { MerchantsBenefitSection } from "./_/merchants-benefit-section";
import { MerchantsStepsSection } from "./_/merchant-steps-section";

export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: process.env.__NEXT_PRIVATE_ORIGIN + "/platforms/merchants",
  },
};

export default function Page() {
  return (
    <main>
      <HeroSection>
        <MerchantsMarquee />
      </HeroSection>
      <MerchantsBenefitSection />
      <MerchantsStepsSection />
    </main>
  );
}
