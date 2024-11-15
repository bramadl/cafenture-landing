import { Crown } from "@phosphor-icons/react/dist/ssr";

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
        <Tag className="pr-4">
          <Crown className="text-secondary" weight="fill" size={20} />
          Keanggotaan Eksklusif
        </Tag>
        <Section.Title>
          Keuntungan lebih dari <span className="text-primary">Kedai Kopi</span>{" "}
          dengan bergabung Membership
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
