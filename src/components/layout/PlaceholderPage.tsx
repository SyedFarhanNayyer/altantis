import type { Metadata } from "next";
import { Cursor } from "@/components/animation/Cursor";
import { MotionDirector } from "@/components/animation/MotionDirector";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { getPage, type PagePath } from "@/lib/pages";
import { site } from "@/lib/site";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

// Stand-in for a sitemap page that hasn't been built yet: header, title and
// footer. Replace it in the page's own route file.

export function placeholderMetadata(path: PagePath): Metadata {
  const { title } = getPage(path)!;
  return {
    title,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${title} | ${site.name}` },
    // Empty until it's built, so keep it out of search results.
    robots: { index: false, follow: true },
  };
}

export function PlaceholderPage({ path }: { path: PagePath }) {
  const page = getPage(path)!;

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section aria-labelledby="page-title" className="bg-night text-on-dark">
          <div className="container-page pt-36 pb-20 lg:pt-44 lg:pb-24">
            <h1 id="page-title" className="text-h1">
              {page.title}
            </h1>
          </div>
        </section>
      </main>
      <SiteFooter />
      <SmoothScroll />
      <MotionDirector />
      <Cursor />
    </>
  );
}
