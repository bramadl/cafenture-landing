import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";
import { getSpotlights } from "@cafenture/content/remotes/spotlights";

import { SpotlightCard } from "./spotlight-card";
import { SpotlightCategories } from "./spotlight-categories";
import { SpotlightFilters } from "./spotlight-filters";

export const SpotlightsSection = async () => {
  const spotlights = await getSpotlights();

  return (
    <Section id="spotlights-section">
      <Section.Header className="mx-0 lg:items-start">
        <Tag className="pr-4">Eksplor Cafenture Spotlights</Tag>
        <Section.Title className="lg:text-left">
          Inspirasi dan Wawasan Eksklusif seputar Dunia{" "}
          <span className="text-primary">Kedai Kopi</span> di Indonesia
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Cafenture Spotlights adalah destinasi elegan untuk menemukan artikel,
          wawasan, dan inspirasi seputar dunia kedai kopi. Dari inovasi bisnis
          hingga cerita di balik cangkir, jelajahi dunia kopi.
        </Section.Caption>
      </Section.Header>
      <section className="flex flex-col gap-10">
        <header className="flex items-center justify-between gap-16">
          <SpotlightCategories />
          <SpotlightFilters />
        </header>
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {spotlights.map((spotlight, key) => (
            <li key={key}>
              <SpotlightCard {...spotlight} />
            </li>
          ))}
        </ul>
      </section>
    </Section>
  );
};
