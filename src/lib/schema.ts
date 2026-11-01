import type { Page } from "./pages";
import { site } from "./site";

// schema.org nodes shared across pages. Each page passes them to PageShell.

export const absoluteUrl = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export const breadcrumbSchema = (trail: Page[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.title,
    item: absoluteUrl(crumb.path),
  })),
});

export const webPageSchema = (type: string, path: string, name: string, description: string) => ({
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
});
