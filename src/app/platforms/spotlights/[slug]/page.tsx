import { type Metadata } from "next";

import { Blog } from "@cafenture/components/core/blog";
import { PinnedSection } from "@cafenture/components/core/pinned-section";
import { Separator } from "@cafenture/components/ui/separator";

import { ArticleSection } from "./_/article-section";
import { HeroSection } from "./_/hero-section";
import { MoreSpotlightsSection } from "./_/more-spotlights-section";
import { SocialSharing } from "./_/spotlight-article/social-sharing";
import { TableOfContent } from "./_/spotlight-article/table-of-content";
import { getSpotlight } from "@cafenture/content/remotes/spotlights";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: PageProps<Promise<{ slug: string }>>): Promise<Metadata> => {
  const slug = (await params).slug;
  const spotlight = await getSpotlight(slug);

  if (!spotlight) throw new Error("No Spotlight Could Be Found");
  const { caption, slug: url, title } = spotlight;

  return {
    title: {
      absolute: `${title} | Cafenture Spotlights`,
    },
    description: caption,
    alternates: {
      canonical:
        process.env.__NEXT_PRIVATE_ORIGIN + `/platforms/spotlights/${url}`,
    },
  };
};

export default async function Page({
  params,
}: PageProps<Promise<{ slug: string }>>) {
  const slug = (await params).slug;
  const spotlight = await getSpotlight(slug);

  if (!spotlight) return notFound();
  const {
    caption,
    content,
    relatedSpotlights,
    tableOfContent,
    tags,
    thumbnail,
    title,
  } = spotlight;

  return (
    <main>
      <HeroSection
        caption={caption}
        thumbnail={thumbnail}
        tags={tags}
        title={title}
      />
      <ArticleSection>
        <PinnedSection>
          <TableOfContent contents={tableOfContent} />
          <SocialSharing
            caption={caption}
            className="hidden xl:flex"
            tags={tags}
            title={title}
          />
        </PinnedSection>
        <Blog>{content.html}</Blog>
        <Separator className="xl:hidden" />
        <SocialSharing
          caption={caption}
          className="xl:hidden"
          tags={tags}
          title={title}
        />
      </ArticleSection>
      {relatedSpotlights && (
        <MoreSpotlightsSection spotlights={relatedSpotlights} />
      )}
    </main>
  );
}
