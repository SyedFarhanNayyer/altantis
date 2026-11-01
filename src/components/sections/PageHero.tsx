import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Page } from "@/lib/pages";

type Action = { label: string; href: string };

type Props = {
  trail: Page[];
  title: ReactNode;
  body?: ReactNode;
  primary?: Action;
  secondary?: Action;
  /** In-page links shown along the bottom ("On this page"). */
  contents?: Action[];
};

// Inner-page hero: content-height rather than full screen, optionally with
// actions and an index of the page's sections so visitors can jump to what
// they came for. Same night ground and intro sequence as the homepage hero,
// with a smaller title.
export function PageHero({ trail, title, body, primary, secondary, contents }: Props) {
  return (
    <section aria-labelledby="hero-title" className="bg-night text-on-dark">
      <div className={`container-page pt-36 lg:pt-44 ${contents ? "" : "pb-16 lg:pb-24"}`}>
        <nav data-intro aria-label="Breadcrumb">
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

        <div className="mt-6 max-w-[48rem] lg:mt-8">
          <h1 id="hero-title" data-intro="lines" className="text-h2">
            {title}
          </h1>

          {body && (
            <p data-intro className="mt-5 max-w-[37.5rem] text-body text-on-dark/85">
              {body}
            </p>
          )}

          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-4 sm:gap-5">
              {primary && (
                <ButtonLink href={primary.href} data-intro className="w-full sm:w-auto sm:px-9">
                  {primary.label}
                </ButtonLink>
              )}
              {secondary && (
                <ButtonLink
                  href={secondary.href}
                  data-intro
                  variant="outline-light"
                  className="w-full sm:w-auto sm:px-9"
                >
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>

        {contents && (
          <nav
            data-intro
            aria-label="On this page"
            className="mt-14 flex flex-col gap-3 border-t border-on-dark/15 py-5 lg:mt-20 lg:flex-row lg:items-center lg:gap-10"
          >
            <p className="shrink-0 text-small text-on-dark/75">On this page</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-display text-label font-bold">
              {contents.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="inline-flex min-h-6 items-center underline-offset-4 transition-colors hover:text-amber hover:underline focus-visible:text-amber"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
