import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section id="hero-section" className="pt-[100px]">
      <Section.Header className="md:flex-1 pt-20 sm:pt-24">
        <Tag>Tentang Kemitraan Cafenture</Tag>
        <Section.Title as="h1">
          Perluas Jangkauan Pemasaran Bisnis{" "}
          <span className="text-primary">Kedai Kopi</span> Anda Bersama
          Cafenture Indonesia
        </Section.Title>
        <Section.Caption>
          Jadikan kedai kopi Anda lebih dari sekedar tempat minum kopi.
          Tingkatkan eksposur, bangun loyalitas pelanggan, dan jadikan kedai
          Anda destinasi favorit para pencari kedai kopi di Indonesia.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
