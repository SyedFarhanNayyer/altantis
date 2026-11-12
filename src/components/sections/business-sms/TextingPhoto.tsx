import Image from "next/image";

export type Bubble = {
  text: string;
  from: "business" | "customer";
  /** Tailwind position classes for the bubble over the photo, e.g. "top-[12%] right-[6%]". */
  position: string;
};

type Props = {
  src: string;
  alt: string;
  bubbles: Bubble[];
  /** Tailwind object-position for the photo. */
  focus?: string;
  className?: string;
};

// A photo of someone texting with one frosted message floating beside them.
// The bubbles are decoration that repeats the page's idea, so they are hidden
// from screen readers; the photo's alt text carries the meaning.
export function TextingPhoto({ src, alt, bubbles, focus = "object-center", className = "" }: Props) {
  return (
    <div data-reveal="wipe" className={`relative overflow-hidden rounded-[1.25rem] ${className}`}>
      <Image src={src} alt={alt} fill unoptimized sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover ${focus}`} />
      <div aria-hidden="true">
        {bubbles.map((b, i) => (
          <p
            key={b.text}
            className={`absolute max-w-[70%] rounded-[1rem] border border-on-dark/35 bg-night/45 px-4 py-2.5 text-small font-medium text-on-dark backdrop-blur-md motion-safe:animate-[sms-in_0.7s_cubic-bezier(0.22,1,0.36,1)_both] sm:max-w-[17rem] sm:text-body-sm ${b.position}`}
            style={{ animationDelay: `${0.4 + i * 0.5}s` }}
          >
            {b.text}
          </p>
        ))}
      </div>
    </div>
  );
}
