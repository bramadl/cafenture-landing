import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${new URL(
      `${process.env.VERCEL_ENV === "local" ? "http" : "https"}://${
        process.env.VERCEL_PROJECT_PRODUCTION_URL
      }`
    )}sitemap.xml`,
  };
}
