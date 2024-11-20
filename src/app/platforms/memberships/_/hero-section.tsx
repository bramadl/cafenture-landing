import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section id="hero-section" className="pt-[100px]">
      <Section.Header className="md:flex-1 pt-20 sm:pt-24 mx-0 lg:items-start">
        <Tag>Keanggotaan Ekslusif</Tag>
        <Section.Title as="h1" className="lg:text-left">
          Keistimewaan Sebagai Anggota Eksklusif{" "}
          <span className="text-primary">Cafenture Indonesia</span>
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Bergabunglah dengan keanggotaan Cafenture untuk menikmati berbagai
          manfaat eksklusif yang dirancang khusus bagi para pecinta kedai kopi.
          Pilih paket keanggotaan yang sesuai dengan kebutuhan Anda—bulanan atau
          tahunan—dan nikmati pengalaman kedai kopi yang lebih personal, penuh
          kemudahan, dan tak tertandingi.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
