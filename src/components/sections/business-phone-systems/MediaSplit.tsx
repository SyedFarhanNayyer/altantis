import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PlayCircleIcon } from "@/components/ui/PlayCircleIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Action = { label: string; href: string };

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  points: ReactNode[];
  primary: Action;
  secondary?: Action;
  image: { src: string; alt: string };
  imageSide: "left" | "right";
  /** Sizes the frame to the photo's own shape (width / height) so nothing is cropped. */
  aspect?: number;
  /** Shows a play button over the photo. Visual only until a video is supplied. */
  play?: boolean;
  className?: string;
};

// Homepage Copper Shutdown layout: copy with a checklist beside a photo.
// The photo wipes in from its outer edge.
export function MediaSplit({
  id,
  eyebrow,
  title,
  intro,
  points,
  primary,
  secondary,
  image,
  imageSide,
  play = false,
  aspect,
  className = "",
}: Props) {
  const imageLeft = imageSide === "left";
  return (
    <section aria-labelledby={id} className={className}>
      <div
        className={`container-page grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:gap-16 ${
          imageLeft
            ? "lg:grid-cols-[minmax(0,37.25fr)_minmax(0,36.6875fr)]"
            : "lg:grid-cols-[minmax(0,36.6875fr)_minmax(0,37.25fr)]"
        }`}
      >
        <div className={imageLeft ? "lg:order-2" : ""}>
          <SectionHeading id={id} eyebrow={eyebrow} className="max-w-[36.6875rem]">
            {title}
          </SectionHeading>
          <p data-reveal="fade" className="mt-3 max-w-[33.4375rem] text-body">
            {intro}
          </p>
          <ul data-reveal="steps" className="mt-5 space-y-2">
            {points.map((point, i) => (
              <li key={i} data-step className="flex items-start gap-4 text-body">
                <Image
                  src="/icons/check.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="mt-1.5 size-[1.1875rem] shrink-0"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div data-reveal="fade" className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href={primary.href} className="w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 max-sm:text-center max-sm:whitespace-normal sm:w-auto sm:px-9">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="outline-brand" className="w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 max-sm:text-center max-sm:whitespace-normal sm:w-auto sm:px-8">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>

        <div
          data-reveal="wipe"
          {...(imageLeft ? {} : { "data-wipe-from": "right" })}
          {...(aspect ? { "data-wipe-full": "" } : {})}
          className={`relative overflow-hidden rounded-[0.625rem] ${
            aspect ? "" : "aspect-[596/466] md:aspect-video lg:aspect-[596/466]"
          } ${imageLeft ? "lg:order-1" : ""}`}
          style={aspect ? { aspectRatio: aspect } : undefined}
        >
          <Image src={image.src} alt={image.alt} fill unoptimized className="object-cover" />
          {play && (
            <span aria-hidden="true" className="absolute inset-0 grid place-items-center">
              <span className="grid size-20 place-items-center rounded-full bg-brand-gradient text-paper lg:size-24">
                <PlayCircleIcon size={64} className="lg:size-20" />
              </span>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
