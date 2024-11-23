import { FaqAccordion } from "@cafenture/app/_/faq-accordion";
import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";
import { getFeaturedFaqs } from "@cafenture/content/remotes/faqs";

export const FaqSection = async () => {
  const faqs = await getFeaturedFaqs();

  return (
    <Section id="faq-section">
      <Section.Header>
        <Tag>Pertanyaan Umum Tentang Platform</Tag>
        <Section.Title>
          Jawaban Seputar Platform Rekomendasi{" "}
          <span className="text-primary">Kedai Kopi</span> yang Kami Rancang
        </Section.Title>
        <Section.Caption>
          Temukan jawaban atas pertanyaan seputar penggunaan platform
          rekomendasi dan pencarian dari Cafenture. Kami memahami pentingnya
          pengalaman yang mulus dalam mencari dan menjelajahi kedai kopi
          terbaik.
        </Section.Caption>
      </Section.Header>
      <FaqAccordion faqs={faqs} />
    </Section>
  );
};
