import { type Metadata } from "next";

import { Blog } from "@cafenture/components/core/blog";
import { PinnedSection } from "@cafenture/components/core/pinned-section";
import { Separator } from "@cafenture/components/ui/separator";
import { spotlight } from "@cafenture/content/spotlights";

import { ArticleSection } from "./_/article-section";
import { HeroSection } from "./_/hero-section";
import { MoreSpotlightsSection } from "./_/more-spotlights-section";
import { SocialSharing } from "./_/spotlight-article/social-sharing";
import { TableOfContent } from "./_/spotlight-article/table-of-content";

export const generateMetadata = (): Metadata => {
  return {
    title: {
      absolute: " | Cafenture Spotlights",
    },
    description: "",
    alternates: {
      canonical: process.env.__NEXT_PRIVATE_ORIGIN + "/platforms/slug",
    },
  };
};

export default function Page() {
  return (
    <main>
      <HeroSection caption={spotlight.caption} title={spotlight.title} />
      <ArticleSection>
        <PinnedSection>
          <TableOfContent contents={spotlight.contents} />
          <SocialSharing className="hidden xl:flex" />
        </PinnedSection>
        <Blog>{spotlight.content}</Blog>
        <Separator className="xl:hidden" />
        <SocialSharing className="xl:hidden" />
      </ArticleSection>
      <MoreSpotlightsSection />
    </main>
  );
}
