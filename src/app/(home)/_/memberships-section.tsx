import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const MembershipsSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Section id="memberships-section">
      <Section.Header>
        <Tag>Mengenal Keanggotaan Eksklusif</Tag>
        <Section.Title keyword="Keanggotaan Eksklusif untuk Pencari Kedai Kopi dengan Keuntungan Lebih">
          Keuntungan Lebih yang Diberikan Oleh{" "}
          <span className="text-primary">Kedai Kopi</span> Dengan Bergabung
          Membership
        </Section.Title>
        <Section.Caption>
          Dengan hak mendapatkan akses awal, diskon khusus, hingga hadiah
          istimewa, Cafenture merancang sistem keanggotaan untuk mereka yang
          ingin menikmati pengalaman pencarian kedai kopi dengan keunggulan
          lebih.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
