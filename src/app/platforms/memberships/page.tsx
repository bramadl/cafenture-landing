import { HeroSection } from "./_/hero-section";
import { MembershipsBenefits } from "./_/membership-benefits";
import { MembershipSection } from "./_/membership-section";
import { PricingGrids } from "./_/pricing-grids";

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
