import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section id="hero-section" className="pt-[100px]">
      <Section.Header className="md:flex-1 pt-20 sm:pt-24">
        <Tag>Tentang Kemitraan Cafenture</Tag>
        <Section.Title as="h1">
          Gabung Bersama Cafenture untuk Menginspirasi Pecinta{" "}
          <span className="text-primary">Kedai Kopi</span>
        </Section.Title>
        <Section.Caption>
          Bersama kami, jadikan kedai kopi Anda lebih dari sekadar tempat minum
          kopi. Tingkatkan eksposur, bangun loyalitas pelanggan, dan jadikan
          kedai Anda destinasi favorit para pecinta kopi.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
