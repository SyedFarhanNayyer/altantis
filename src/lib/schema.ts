import { site } from "./site";

// schema.org nodes shared across pages. Each page passes them to PageShell.

export const absoluteUrl = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export const webPageSchema = (type: string, path: string, name: string, description: string) => ({
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
});
