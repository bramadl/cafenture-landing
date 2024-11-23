import { type FAQPage } from "schema-dts";
import { type Metadata } from "next";

import { Blog } from "@cafenture/components/core/blog";
import { FaqAccordion } from "@cafenture/app/_/faq-accordion";
import { PinnedSection } from "@cafenture/components/core/pinned-section";
import { Section } from "@cafenture/components/core/section";
import { WithLd } from "@cafenture/components/core/with-ld";
import { baseUrl } from "@cafenture/lib/seo";
import {
  getFaqCategories,
  getFaqQuestions,
  groupFAQsByCategory,
} from "@cafenture/content/remotes/faqs";

import { HelpCenterSubMenu } from "../_/help-center-submenu";
import { HeroSection } from "../_/hero-section";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/help-center/frequently-asked-questions`,
  },
  description:
    "Temukan jawaban dan pertanyaan umum dari pengguna lainnya atau ajukan pertanyaan Anda sendiri seputar platform rekomendasi dan pencarian kedai kopi kami.",
  title: "Pertanyaan Umum Seputar Platform",
};

export default async function Page() {
  const categories = await getFaqCategories();
  const faqs = await getFaqQuestions();

  const groupedFaqs = groupFAQsByCategory(faqs);

  return (
    <WithLd<FAQPage>
      jsonLd={({ baseUrl }) => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Beranda",
              item: `${baseUrl}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Pusat Dukungan",
              item: `${baseUrl}/help-center`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Frequently Asked Questions",
              item: `${baseUrl}/help-center/frequently-asked-questions`,
            },
          ],
        },
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.text,
          },
        })),
        url: `${baseUrl}/help-center/frequently-asked-questions`,
      })}
    >
      <HeroSection
        label="Pertanyaan Pengguna"
        description="Temukan jawaban dan pertanyaan umum dari pengguna lainnya atau ajukan pertanyaan Anda sendiri seputar platform rekomendasi dan pencarian kedai kopi kami."
      >
        Pertanyaan Umum Terkait Platform{" "}
        <span className="text-primary">Cafenture Indonesia</span>
      </HeroSection>
      <Section
        id="article"
        className="xl:flex-row xl:justify-start sm:gap-0 xl:gap-[100px]"
      >
        <PinnedSection>
          <HelpCenterSubMenu
            menus={categories.map((category) => ({
              id: category.hash,
              label: category.context,
            }))}
          />
        </PinnedSection>
        <Blog useMarkUp={false}>
          {Object.entries(groupedFaqs).map(
            ([category, { context, description, faqs }], key) => {
              return (
                <div key={key} className="xl:first:mt-0 mt-12 lg:mt-16">
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
    </WithLd>
  );
}
