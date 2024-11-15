import { Quotes } from "@phosphor-icons/react/dist/ssr";

import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const TestimonialsSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div id="testimonials-section" className="flex flex-col gap-16 sm:gap-[100px] pb-16 sm:pb-[100px]">
      <Section noPadding>
        <Section.Header>
          <Tag className="pr-4">
            <Quotes className="text-secondary" weight="fill" size={20} />
            Suara Pengguna
          </Tag>
          <Section.Title>
            Pengalaman Tak Ternilai dari Mereka yang Telah Menemukan{" "}
            <span className="text-primary">Kedai Kopi</span> Terbaik
          </Section.Title>
          <Section.Caption>
            Dengarkan langsung cerita-cerita unik dari pengalaman pengguna kami
            yang telah merasakan kemudahan, keistimewaan, dan sentuhan personal
            dari platform Cafenture dalam mencari rekomendasi kedai kopi
            terbaik.
          </Section.Caption>
        </Section.Header>
      </Section>
      {children}
    </div>
  );
};
