import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

import { HelpCenterMenu } from "./help-center-menu";

export const HeroSection = () => {
  return (
    <Section id="hero-section" className="pt-[100px]">
      <Section.Header className="md:flex-1 pt-20 sm:pt-24">
        <Tag>Pusat Dukungan dan Bantuan</Tag>
        <Section.Title as="h1">
          Dukungan Komprehensif untuk Platform Rekomendasi{" "}
          <span className="text-primary">Kedai Kopi</span> Kami
        </Section.Title>
        <Section.Caption>
          Temukan solusi terbaik dan panduan eksklusif terkait platform
          Cafenture. Kami hadir untuk memastikan setiap kebutuhan Anda terpenuhi
          dengan sempurna.
        </Section.Caption>
      </Section.Header>
      <HelpCenterMenu />
    </Section>
  );
};
