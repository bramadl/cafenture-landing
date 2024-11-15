import { Question } from "@phosphor-icons/react/dist/ssr";

import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const FaqSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Section id="faq-section">
      <Section.Header>
        <Tag className="pr-4">
          <Question className="text-secondary" weight="fill" size={20} />
          Pertanyaan Umum
        </Tag>
        <Section.Title>
          Pertanyaan Seputar Platform Rekomendasi{" "}
          <span className="text-primary">Kedai Kopi</span> yang Kami Rancang
        </Section.Title>
        <Section.Caption>
          Temukan jawaban atas pertanyaan seputar penggunaan platform
          rekomendasi dan pencarian dari Cafenture. Kami memahami pentingnya
          pengalaman yang mulus dalam mencari dan menjelajahi kedai kopi
          terbaik.
        </Section.Caption>
      </Section.Header>
      {children}
    </Section>
  );
};
