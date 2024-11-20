import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

import { MembershipsBento } from "./_/membership-bento";

export default function Page() {
  return (
    <main>
      <Section id="module-section" className="pt-[100px]">
        <Section.Header className="md:flex-1 pt-20 sm:pt-24 mx-0">
          <Tag>Keanggotaan Ekslusif</Tag>
          <Section.Title as="h1">
            Lebih dari Sekedar <span className="text-primary">Kedai Kopi</span>:
            Nikmati Privilege yang Istimewa
          </Section.Title>
          <Section.Caption>
            Dirancang untuk Anda yang menginginkan pengalaman kedai kopi yang
            melampaui batas. Kami menghadirkan manfaat premium bagi mereka yang
            menghargai keunggulan dalam setiap momen.
          </Section.Caption>
        </Section.Header>
        <MembershipsBento />
      </Section>
    </main>
  );
}
