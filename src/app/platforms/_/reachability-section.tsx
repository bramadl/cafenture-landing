import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

import { ReachabilityGlobe } from "./reachability-globe";

export const ReachabilitySection = () => {
  return (
    <Section id="reachability-section">
      <Section.Header>
        <Tag className="pr-4">Dukungan dan Jangkauan Platform</Tag>
        <Section.Title>
          Menjangkau lebih banyak{" "}
          <span className="text-primary">Kedai Kopi</span> dan Pencinta Kopi di
          Seluruh Indonesia
        </Section.Title>
        <Section.Caption>
          Kami berkomitmen untuk terus memperluas cakupan layanan serta mitra
          bisnis, memperbarui informasi kedai kopi secara berkala, dan
          menghadirkan fitur-fitur baru yang memudahkan konsumen dalam memilih,
          mencari, dan mendapatkan rekomendasi kedai kopi yang sesuai dengan
          preferensi mereka.
        </Section.Caption>
      </Section.Header>
      <ReachabilityGlobe />
    </Section>
  );
};
