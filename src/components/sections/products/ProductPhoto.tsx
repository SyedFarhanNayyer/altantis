import Image from "next/image";

type Callout = {
  label: string;
  /** Where the pin sits on the product photo, in percent. */
  x: number;
  y: number;
  /** The label sits above the photo at its right edge, or below it at its left. */
  place: "top-right" | "bottom-left";
};

type Props = {
  image: { src: string; alt: string; width: number; height: number };
  callouts: Callout[];
  /** Small line under the photo, such as what's optional in the picture. */
  note?: string;
};

// The product for the dark page hero, with a label and short line for each part
// worth naming. The photo is a dark product on a transparent background, so a
// soft pool of light behind it separates it from the night ground. The photo is
// the likely LCP element, so it's never hidden. Pins are placed against the inner
// box, which is exactly the photo's size, so the note can't shift them.
export function ProductPhoto({ image, callouts, note }: Props) {
  return (
    <figure
      // Capped by height too, so an upright photo doesn't tower over the hero text.
      style={{ maxWidth: Math.min(503, (380 * image.width) / image.height) }}
      className="mx-auto my-12 w-full lg:my-6 lg:mr-0 lg:ml-auto"
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute -inset-y-10 inset-x-0 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-on-dark)_34%,transparent),transparent)] lg:-inset-x-6"
        />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          unoptimized
          priority
          className="relative h-auto w-full"
        />
        {callouts.map((c) => {
          const above = c.place === "top-right";
          return (
            <span key={c.label} aria-hidden="true">
              {/* Runs from the pin to the label, 1.75rem beyond the photo's edge. */}
              <span
                style={
                  above
                    ? { left: `${c.x}%`, top: "-1.75rem", height: `calc(${c.y}% + 1.75rem)` }
                    : { left: `${c.x}%`, top: `${c.y}%`, height: `calc(${100 - c.y}% + 1.75rem)` }
                }
                className="absolute w-px bg-amber"
              />
              <span
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
                className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand ring-2 ring-card"
              />
              <span
                className={`absolute rounded-full bg-card px-3.5 py-1.5 text-small font-medium whitespace-nowrap text-ink ${
                  above ? "right-0 -top-[3.75rem]" : "left-0 -bottom-[3.75rem]"
                }`}
              >
                {c.label}
              </span>
            </span>
          );
        })}
      </div>
      <figcaption className={note ? "mt-20 text-right text-small text-on-dark/85" : "sr-only"}>
        <span className="sr-only">{callouts.map((c) => c.label).join(", ")}. </span>
        {note}
      </figcaption>
    </figure>
  );
}
