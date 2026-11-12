import { Cursor } from "@/components/animation/Cursor";
import { MotionDirector } from "@/components/animation/MotionDirector";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { CopperShutdown } from "@/components/sections/CopperShutdown";
import { Features } from "@/components/sections/Features";
import { Guides } from "@/components/sections/Guides";
import { Hero } from "@/components/sections/Hero";
import { Reviews } from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <CopperShutdown />
        <Features />
        <About />
        <Reviews />
        <ClosingCta image="/images/business-team-coworking.png" />
        <Guides />
      </main>
      <SiteFooter />
      {/* Last in the tree: their effects run once every section above has hydrated. */}
      <SmoothScroll />
      <MotionDirector />
      <Cursor />
    </>
  );
}
