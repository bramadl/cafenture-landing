import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

import { SpotlightCard } from "../../_/spotlight-card";

export const MoreSpotlightsSection = () => {
  return (
    <Section id="background-section">
      <Section.Header className="mx-0 lg:items-start">
        <Tag className="pr-4">Eksplorasi Lebih Lanjut</Tag>
        <Section.Title className="lg:text-left">
          Lanjut Perluas Wawasan Seputar Dunia{" "}
          <span className="text-primary">Kedai Kopi</span> di Indonesia
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Cafenture Spotlights adalah sumber utama Anda untuk panduan bisnis
          kedai kopi, eksplorasi budaya kopi, dan wawasan eksklusif untuk
          pemilik, pengusaha, serta penikmat kedai kopi.
        </Section.Caption>
      </Section.Header>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array(3)
          .fill(null)
          .map((_, key) => (
            <li key={key}>
              <SpotlightCard />
            </li>
          ))}
      </ul>
    </Section>
  );
};
