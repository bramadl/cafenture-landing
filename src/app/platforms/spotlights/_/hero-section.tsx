import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section id="hero-section" className="pt-[100px]">
      <Section.Header className="md:flex-1 pt-20 sm:pt-24">
        <Tag>Jelajahi Dunia Kedai Kopi</Tag>
        <Section.Title as="h1">
          Di Balik Platform: Inspirasi untuk Pemilik, Pencari, dan Penikmat{" "}
          <span className="text-primary">Kedai Kopi</span>
        </Section.Title>
        <Section.Caption>
          Cafenture Spotlights adalah sumber utama Anda untuk panduan bisnis
          kedai kopi, eksplorasi budaya kopi, dan wawasan eksklusif untuk
          pemilik, pengusaha, serta penikmat kedai kopi.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
