import { Blog } from "@cafenture/components/core/blog";
import { FaqAccordion } from "@cafenture/app/_/faq-accordion";
import { PinnedSection } from "@cafenture/components/core/pinned-section";
import { Section } from "@cafenture/components/core/section";
import {
  getFaqCategories,
  getFaqQuestions,
} from "@cafenture/content/remotes/faqs";

import { HelpCenterSubMenu } from "../_/help-center-submenu";
import { HeroSection } from "../_/hero-section";

export default async function Page() {
  const categories = await getFaqCategories();
  const faqs = await getFaqQuestions();

  return (
    <main>
      <HeroSection
        label="Pertanyaan Pengguna"
        description="Temukan jawaban dan pertanyaan umum dari pengguna lainnya atau ajukan pertanyaan Anda sendiri seputar platform rekomendasi dan pencarian kedai kopi kami."
      >
        Pertanyaan Umum Terkait Platform Rekomendasi{" "}
        <span className="text-primary">Kedai Kopi</span> Kami
      </HeroSection>
      <Section id="article" className="xl:flex-row xl:justify-start sm:gap-0 xl:gap-[100px]">
        <PinnedSection>
          <HelpCenterSubMenu
            menus={categories.map((category) => ({
              id: category.hash,
              label: category.context,
            }))}
          />
        </PinnedSection>
        <Blog useMarkUp={false}>
          {Object.entries(faqs).map(
            ([category, { context, description, faqs }], key) => {
              return (
                <div key={key} className="first:mt-0 mt-12 lg:mt-16">
                  <h2 id={category}>{context}</h2>
                  <p>{description}</p>
                  <div className="not-prose">
                    <FaqAccordion faqs={faqs} />
                  </div>
                </div>
              );
            }
          )}
        </Blog>
      </Section>
    </main>
  );
}
