import { Lightning } from "@phosphor-icons/react/dist/ssr";

import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const FeaturesSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Section id="features-section" noPadding>
      <Section.Header>
        <Tag className="pr-4">
          <Lightning className="text-secondary" weight="fill" size={20} />
          Fitur Unggulan
        </Tag>
        <Section.Title>
          Dilengkapi Dengan AI yang Menjadikan Pencarian{" "}
          <span className="text-primary">Kedai Kopi</span> Lebih Personal
        </Section.Title>
        <Section.Caption>
          Dilengkapi dengan fitur-fitur seperti rekomendasi pintar hingga filter
          pencarian lengkap yang canggih, Cafenture memberikan kemudahan dalam
          menemukan kedai kopi yang sempurna dan menyesuaikan preferensi Anda.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
