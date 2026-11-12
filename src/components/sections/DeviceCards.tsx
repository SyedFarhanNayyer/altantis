import { Check } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

export type Device = {
  /** Who or what it's for, shown above the name. */
  label: string;
  name: string;
  points: string[];
  href: string;
  linkLabel: string;
  image: { src: string; alt: string; width: number; height: number };
};

// Four devices in a row, in the same card as the Products page: photo on
// sand, a short label, the name and key specs, then one link.
export function DeviceCards({ devices }: { devices: Device[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.875rem]">
      {devices.map((d) => (
        <li key={d.label + d.name}>
          <article className="flex h-full flex-col rounded-[1.25rem] border border-line bg-card p-4 sm:p-5">
            <Link
              href={d.href}
              tabIndex={-1}
              aria-hidden="true"
              className="relative block aspect-[4/3] overflow-hidden rounded-[0.875rem] bg-sand"
            >
              <Image
                src={d.image.src}
                alt=""
                width={d.image.width}
                height={d.image.height}
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw"
                unoptimized
                className="absolute inset-0 h-full w-full object-contain p-6"
              />
            </Link>
            <div className="flex flex-1 flex-col px-1 pt-5 pb-1">
              <p className="text-small font-bold text-subhead">{d.label}</p>
              <h3 className="mt-1 font-display text-title-sm font-bold text-ink">
                <Link
                  href={d.href}
                  className="underline-offset-4 transition-colors hover:text-brand-strong hover:underline focus-visible:text-brand-strong"
                >
                  {d.name}
                </Link>
              </h3>
              <ul className="mt-3 space-y-2">
                {d.points.map((point) => (
                  <li key={point} className="flex gap-2 text-small text-ink/80">
                    <Check size={16} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <ButtonLink href={d.href} size="sm" variant="outline-brand">
                  {d.linkLabel}
                </ButtonLink>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
