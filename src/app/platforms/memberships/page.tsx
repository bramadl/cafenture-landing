import { type Metadata } from "next";

import { HeroSection } from "./_/hero-section";
import { MembershipsBenefits } from "./_/membership-benefits";
import { MembershipSection } from "./_/membership-section";
import { PricingGrids } from "./_/pricing-grids";

export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: process.env.__NEXT_PRIVATE_ORIGIN + "/platforms/memberships",
  },
};

export default function Page() {
  return (
    <main>
      <HeroSection>
        <PricingGrids />
      </HeroSection>
      <MembershipSection>
        <MembershipsBenefits />
      </MembershipSection>
    </main>
  );
}
