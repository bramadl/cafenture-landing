import { addIdsToH2Tags, extractH2WithId } from "@cafenture/lib/content-parser";

export interface TableOfContent {
  id: string;
  label: string;
}

export interface Thumbnail {
  fileName: string;
  height: number;
  width: number;
  url: string;
}

export interface Spotlight {
  caption: string;
  content: {
    html: string;
  };
  createdAt: string;
  createdBy: {
    name: string;
    picture: string;
  };
  id: string;
  isFeatured: boolean;
  publishedAt: Date | null;
  slug: string;
  tableOfContent: TableOfContent[];
  tags: string[];
  thumbnail: Thumbnail;
  title: string;
  relatedSpotlights: null | Spotlight[];
}

export async function getSpotlights(skip: number = 0) {
  const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT!;
  const response = await fetch(NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query GetSpotlights {
        spotlights(stage: DRAFT, first: 9, skip: ${skip}) {
          caption
          content {
            html
          }
          createdAt
          createdBy {
            name
            picture
          }
          id
          isFeatured
          publishedAt
          slug
          tags
          thumbnail {
            fileName
            height
            width
            url
          }
          title
        }
      }`,
    }),
  });
  const json = await response.json();
  return json.data.spotlights as Spotlight[];
}

export async function getSpotlight(slug: string) {
  const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT!;
  const response = await fetch(NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query GetSpotlight {
        spotlight(
          stage: DRAFT
          where: {slug: "${slug}"}
        ) {
          caption
          content {
            html
          }
          createdAt
          createdBy {
            name
            picture
          }
          id
          isFeatured
          publishedAt
          slug
          tags
          thumbnail {
            fileName
            height
            width
            url
          }
          title
        }
      }`,
    }),
  });
  const json = await response.json();

  const spotlight = json.data.spotlight as Spotlight;
  spotlight.tableOfContent = extractH2WithId(spotlight.content.html);
  spotlight.content.html = addIdsToH2Tags(spotlight.content.html);

  return json.data.spotlight as Spotlight;
}
