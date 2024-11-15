import { CallToActionSection } from "./_/cta-section";
import { FaqAccordion } from "./_/faq-accordion";
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

export default function Home() {
  return (
    <main>
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
      <CallToActionSection />
      <FaqSection>
        <FaqAccordion />
      </FaqSection>
    </main>
  );
}
