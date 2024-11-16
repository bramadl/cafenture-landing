import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const ReachabilitySection = () => {
  return (
    <Section id="reachability-section">
      <Section.Header>
        <Tag className="pr-4">Dukungan Jangkauan Platform</Tag>
        <Section.Title>
          Saat Ini, Cafenture Indonesia Telah Menjangkau{" "}
          <span className="text-primary">Kedai Kopi</span> di Jabodetabek
        </Section.Title>
        <Section.Caption>
          Kami berkomitmen untuk terus memperluas cakupan layanan serta mitra
          bisnis, memperbarui informasi kedai kopi secara berkala, dan
          menghadirkan fitur-fitur baru yang memudahkan konsumen dalam memilih,
          mencari, dan mendapatkan rekomendasi kedai kopi yang sesuai dengan
          preferensi mereka.
        </Section.Caption>
      </Section.Header>
    </Section>
  );
};
