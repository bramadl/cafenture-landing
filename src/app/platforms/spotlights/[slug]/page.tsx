import { type Metadata } from "next";

import { ArticleSection } from "./_/article-section";
import { HeroSection } from "./_/hero-section";
import { MoreSpotlightsSection } from "./_/more-spotlights-section";
import { SocialSharing } from "./_/spotlight-article/social-sharing";
import { SpotlightArticle } from "./_/spotlight-article/spotlight-article";
import { StickyArticle } from "./_/spotlight-article/sticky-article";
import { TableOfContent } from "./_/spotlight-article/table-of-content";
import { spotlight } from "@cafenture/content/spotlights";
import { Separator } from "@cafenture/components/ui/separator";

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
        <StickyArticle>
          <TableOfContent contents={spotlight.contents} />
          <SocialSharing className="hidden xl:flex" />
        </StickyArticle>
        <SpotlightArticle>{spotlight.content}</SpotlightArticle>
        <Separator className="xl:hidden" />
        <SocialSharing className="xl:hidden" />
      </ArticleSection>
      <MoreSpotlightsSection />
    </main>
  );
}
