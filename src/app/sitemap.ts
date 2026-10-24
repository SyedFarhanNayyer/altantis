import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Add each new public page here as it's built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
