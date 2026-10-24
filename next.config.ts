import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    // Photos opt out with `unoptimized` and ship as the original files.
    // This covers the small images that still go through Next (avatars,
    // logo): WebP at 95, as AVIF smooths fine texture.
    qualities: [95],
    formats: ["image/webp"],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
