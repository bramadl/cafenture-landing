import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";

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
        <Tag className="pr-4">
          <ShieldCheck className="text-secondary" weight="fill" size={20} />
          Merchant Terpercaya
        </Tag>
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
