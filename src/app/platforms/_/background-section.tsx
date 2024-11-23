import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const BackgroundSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Section id="background-section">
      <Section.Header className="mx-0 lg:items-start">
        <Tag className="pr-4">Latar Belakang Perancangan Sistem</Tag>
        <Section.Title className="lg:text-left">
          Memahami Tantangan dalam Menemukan{" "}
          <span className="text-primary">Kedai Kopi</span> yang Sesuai
          Preferensi
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Kami memahami bahwa mencari kedai kopi yang ideal bisa menjadi
          tantangan besar. Setiap orang memiliki preferensi yang sangat
          spesifik. Informasi yang tersedia kerap kali membingungkan dan
          rekomendasi yang diterima tidak selalu sesuai dengan ekspektasi.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
