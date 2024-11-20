import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const MembershipSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Section id="membership-section">
      <Section.Header className="mx-0 lg:items-start">
        <Tag>Manfaat Keanggotaan</Tag>
        <Section.Title as="h1" className="lg:text-left">
          Lebih dari Sekedar <span className="text-primary">Kedai Kopi</span>:
          Nikmati Privilege yang Istimewa
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Dirancang untuk Anda yang menginginkan pengalaman kedai kopi yang
          melampaui batas. Kami menghadirkan manfaat premium bagi mereka yang
          menghargai keunggulan dalam setiap momen.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
