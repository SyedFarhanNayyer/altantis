import type { Icon } from "@phosphor-icons/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Feature = { title: string; body: string; Icon: Icon };

function FeatureItem({ feature, right = false }: { feature: Feature; right?: boolean }) {
  const { title, body, Icon: FeatureIcon } = feature;
  return (
    <li className={`flex flex-col ${right ? "lg:items-start" : "lg:items-end lg:text-right"}`}>
      <FeatureIcon size={30} aria-hidden="true" className="text-brand" />
      <h3 className="mt-3 font-display text-title-sm font-bold">{title}</h3>
      <p className="mt-1.5 max-w-[22rem] text-body-snug">{body}</p>
    </li>
  );
}

// The product in the middle with its features on either side, read outward from
// the phone. On small screens the photo comes first, then the features in order.
export function ProductFeatures({
  id,
  title,
  features,
  image,
}: {
  id: string;
  title: ReactNode;
  features: Feature[];
  image: { src: string; width: number; height: number };
}) {
  const half = Math.ceil(features.length / 2);
  return (
    <section aria-labelledby={id} className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id={id} align="center">
          {title}
        </SectionHeading>
        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)]">
          <ul className="space-y-10">
            {features.slice(0, half).map((feature) => (
              <FeatureItem key={feature.title} feature={feature} />
            ))}
          </ul>
          {/* Same photo as the hero, which already describes it. */}
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            unoptimized
            style={{ maxWidth: Math.min(503, (420 * image.width) / image.height) }}
            className="mx-auto h-auto w-full max-lg:order-first"
          />
          <ul className="space-y-10">
            {features.slice(half).map((feature) => (
              <FeatureItem key={feature.title} feature={feature} right />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
