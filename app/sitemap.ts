import type { MetadataRoute } from "next";
import { SITE_URL, LANDING_PAGES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...LANDING_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
