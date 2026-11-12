import Image from "next/image";
import Link from "next/link";
import { headerCta } from "@/lib/site";
import { lift } from "@/components/ui/ButtonLink";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

// Fixed header: transparent over the hero, then a frosted-glass bar once the
// page scrolls (MotionDirector sets data-scrolled). The tint stays dark enough
// for white nav text over the light sections, and goes near-solid where
// backdrop-filter isn't supported. The blur sits on its own layer:
// backdrop-filter on <header> itself would trap the fixed mobile menu.
export function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header data-header data-solid={solid || undefined} className="group fixed inset-x-0 top-0 z-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 border-b border-on-dark/10 bg-night/65 opacity-0 backdrop-blur-xl backdrop-saturate-150 supports-[not(backdrop-filter:blur(1px))]:bg-night/92 transition-opacity duration-500 group-data-[menu-open=true]:opacity-100 group-data-[scrolled=true]:opacity-100 group-data-solid:bg-night group-data-solid:opacity-100"
      />
      <div className="container-page flex h-[5.75rem] items-center justify-between gap-6 transition-[height] duration-500 ease-out group-data-[scrolled=true]:h-[4.5rem] lg:gap-9 xl:gap-6 2xl:gap-9">
        <Link
          href="/"
          data-intro
          className="shrink-0"
          aria-label="Atlantis home"
        >
          <Image
            src="/images/atlantis-logo.svg"
            alt="Atlantis"
            width={98}
            height={60}
            priority
            unoptimized
            className="h-14 w-auto transition-[height] duration-500 group-data-[scrolled=true]:h-11"
          />
        </Link>

        {/* ml-auto groups the nav with the button on the right */}
        <DesktopNav />

        <div data-intro className="ml-auto flex items-center gap-3 xl:ml-0">
          <Link
            href={headerCta.href}
            className={`${lift} hidden h-[2.875rem] items-center justify-center rounded-full border-2 border-on-dark px-6 font-body text-label font-bold tracking-normal whitespace-nowrap text-on-dark hover:bg-on-dark/10 focus-visible:bg-on-dark/10 sm:inline-flex`}
          >
            {headerCta.label}
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
