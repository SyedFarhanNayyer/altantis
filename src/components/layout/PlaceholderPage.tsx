import type { Metadata } from "next";
import Link from "next/link";
import { Cursor } from "@/components/animation/Cursor";
import { MotionDirector } from "@/components/animation/MotionDirector";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbTrail, getPage, type PagePath } from "@/lib/pages";
import { site } from "@/lib/site";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

// Stand-in for a sitemap page that hasn't been built yet: header,
// breadcrumb, title and footer. Replace it in the page's own route file.

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
  const trail = breadcrumbTrail(path);

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section aria-labelledby="page-title" className="bg-night text-on-dark">
          <div className="container-page pt-36 pb-20 lg:pt-44 lg:pb-24">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-on-dark/75">
                {trail.map((crumb, i) => {
                  const last = i === trail.length - 1;
                  return (
                    <li key={crumb.path} className="flex items-center gap-2">
                      {last ? (
                        <span aria-current="page" className="text-on-dark">
                          {crumb.title}
                        </span>
                      ) : (
                        <>
                          <Link href={crumb.path} className="underline-offset-4 hover:text-amber hover:underline">
                            {crumb.title}
                          </Link>
                          <span aria-hidden="true">›</span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
            <h1 id="page-title" className="mt-5 text-h1">
              {page.title}
            </h1>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.title,
            item: `${site.url}${crumb.path === "/" ? "" : crumb.path}`,
          })),
        }}
      />
      <SmoothScroll />
      <MotionDirector />
      <Cursor />
    </>
  );
}
