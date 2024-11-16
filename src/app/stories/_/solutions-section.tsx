import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const SolutionsSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Section id="solutions-section">
      <Section.Header className="mx-0 lg:items-start">
        <Tag className="pr-4">Perancangan Dibalik Platform</Tag>
        <Section.Title className="lg:text-left">
          Rekomendasi <span className="text-primary">Kedai Kopi</span> Tepat
          Sasaran, Informasi Lengkap, dan Fitur yang Relevan
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Melalui Cafenture, kami menawarkan lebih dari sekadar daftar kedai
          kopi. Solusi kami mencakup rekomendasi yang sangat personal, informasi
          mendalam yang memudahkan keputusan Anda, serta fitur-fitur tambahan
          yang membuat pengalaman Anda berkunjung menjadi lebih mudah dan
          berkesan.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
