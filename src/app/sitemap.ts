import type { MetadataRoute } from "next";
import { allPosts, postPath } from "@/content/posts";
import { type Page, pages } from "@/lib/pages";
import { site } from "@/lib/site";

// Every page in the approved sitemap (src/lib/pages.ts), plus each guide.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...(pages as readonly Page[]).map((page) => ({
      url: page.path === "/" ? site.url : `${site.url}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.path === "/" ? 1 : page.parent ? 0.6 : 0.8,
    })),
    ...allPosts.map((post) => ({
      url: `${site.url}${postPath(post)}`,
      lastModified: new Date(`${post.date}T00:00:00`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
