import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section id="hero-section" className="pt-[100px]">
      <Section.Header className="md:flex-1 pt-20 sm:pt-24">
        <Tag>Fondasi Dasar Cafenture Indonesia</Tag>
        <Section.Title as="h1" keyword="Fondasi Dasar Cafenture Indonesia">
          Cafenture Menghubungkan Pencari dengan{" "}
          <span className="text-primary">Kedai Kopi</span> Terbaik di Indonesia
        </Section.Title>
        <Section.Caption>
          Kami membantu mitra bisnis kami dengan menjalin kemitraan yang
          strategis dalam memperluas jangkauan pemasaran mereka dan menjangkau
          lebih banyak konsumen melalui solusi digital yang komprehensif.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
