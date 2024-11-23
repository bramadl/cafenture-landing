import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const MerchantsSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Section id="merchants-section">
      <Section.Header>
        <Tag>Informasi Kedai Kopi Terlengkap</Tag>
        <Section.Title>
          Temukan <span className="text-primary">Kedai Kopi</span> yang Terpilih
          dengan Standar Kualitas yang Tinggi
        </Section.Title>
        <Section.Caption>
          Semua merchant di Cafenture melalui proses kurasi ketat dan diproses
          secara terpusat. Kami memastikan pencarian dan rekomendasi yang
          relevan, menghadirkan pengalaman pencarian kedai kopi terbaik.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
