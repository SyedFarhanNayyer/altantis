import Image from "next/image";
import Link from "next/link";
import { headerCta, mainNav } from "@/lib/site";
import { lift } from "@/components/ui/ButtonLink";
import { MobileMenu } from "./MobileMenu";

// Fixed header: transparent over the hero, then a dark blurred bar once the
// page scrolls (MotionDirector sets data-scrolled). The blur sits on its own
// layer — backdrop-filter on <header> itself would trap the fixed mobile menu.
export function SiteHeader() {
  return (
    <header data-header className="group fixed inset-x-0 top-0 z-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-night/92 opacity-0 backdrop-blur-md backdrop-saturate-150 transition-opacity duration-500 group-data-[scrolled=true]:opacity-100"
      />
      <div className="container-page flex h-[5.75rem] items-center justify-between gap-6 transition-[height] duration-500 ease-out group-data-[scrolled=true]:h-[4.5rem] lg:gap-9">
        <Link
          href="/"
          data-intro
          className="shrink-0 lg:ml-[1.3rem]"
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
        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-[1.375rem] font-body text-label font-medium tracking-normal text-on-dark">
            {mainNav.map((item) => (
              <li key={item.href} data-intro>
                <Link
                  href={item.href}
                  className={`inline-block hover:text-amber focus-visible:text-amber ${lift}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div data-intro className="flex items-center gap-3">
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
