import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const FeaturesSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Section id="features-section">
      <Section.Header>
        <Tag>Fitur Unggulan Terdepan</Tag>
        <Section.Title>
          Dukungan Teknologi Terkini untuk Pencarian{" "}
          <span className="text-primary">Kedai Kopi</span> yang Lebih Personal
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
