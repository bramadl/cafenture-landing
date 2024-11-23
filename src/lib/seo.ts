export const baseUrl = `${
  process.env.VERCEL_ENV === "local" ? "http" : "https"
}://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const baseLd: any = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  publisher: {
    "@type": "Organization",
    name: "PT ABV Digital Indonesia",
  },
  image: {
    "@type": "ImageObject",
    url: `${baseUrl}/logos/alpha-dark.png`,
    height: "630",
    width: "1200",
  },
  sameAs: [
    "https://www.instagram.com/cafenture.indonesia",
    "https://www.tiktok.com/cafenture.indonesia",
  ],
};
