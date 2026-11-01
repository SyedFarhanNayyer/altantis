import type { ReactNode } from "react";
import { Cursor } from "@/components/animation/Cursor";
import { MotionDirector } from "@/components/animation/MotionDirector";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { JsonLd } from "@/components/ui/JsonLd";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

// Header, main, footer and the page's structured data, plus the motion
// leaves. Those come last in the tree so their effects run once every
// section above has hydrated.
export function PageShell({
  children,
  schema,
}: {
  children: ReactNode;
  schema?: Record<string, unknown>[];
}) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      {schema && <JsonLd data={{ "@context": "https://schema.org", "@graph": schema }} />}
      <SmoothScroll />
      <MotionDirector />
      <Cursor />
    </>
  );
}
