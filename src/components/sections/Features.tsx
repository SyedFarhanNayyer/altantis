import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Auto Attendant",
    body: "Greet every caller with a professional message and send them to the right person or department in seconds.",
    icon: "/icons/auto-attendant.svg",
    size: 55,
  },
  {
    title: "Voicemail to Email",
    body: "Get voicemails in your inbox as audio files, so you can listen and call back from anywhere.",
    icon: "/icons/voicemail-to-email.svg",
    size: 48,
  },
  {
    title: "Call Forwarding",
    body: "Send calls to your cell, a coworker or another office, so customers always reach someone.",
    icon: "/icons/call-forwarding.svg",
    size: 50,
  },
  {
    title: "Multiple Locations",
    body: "Connect every office on one system. Transfer calls and dial coworkers by extension, wherever they are.",
    icon: "/icons/multiple-locations.svg",
    size: 55,
  },
];

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,27fr)_minmax(0,37.25fr)] lg:gap-16 xl:gap-[10.75rem]">
          <h2 id="features-title" data-reveal="lines" className="text-h2">
            Turn every ring
            {" "}
            <br />
            <span className="font-bold">into a customer.</span>
          </h2>
          <div data-reveal="fade" className="lg:pt-1.5">
            <p className="text-body">
              The features your team needs to answer faster, route smarter and
              stay reachable, whether they’re at the desk, in the field or
              working from home.
            </p>
            <Link
              href="/services"
              className="mt-1 inline-block text-body font-bold text-brand-strong underline underline-offset-2 hover:no-underline"
            >
              Explore All Features
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-[4.625rem] lg:grid-cols-[minmax(0,36.75fr)_minmax(0,37.25fr)] lg:items-center">
          <div data-reveal="wipe" className="relative aspect-[588/550] overflow-hidden rounded-[0.625rem] md:aspect-video lg:aspect-[588/550]">
            <Image
              src="/images/business-owner-phone-call.jpg"
              alt="Business owner taking a call on an Atlantis phone system"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <ul data-reveal="stagger" className="grid gap-x-6 gap-y-[1.375rem] sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="rounded-2xl border border-dashed border-line-strong bg-paper px-4 pt-4 pb-6"
              >
                <div className="flex h-14 items-center">
                  <Image src={f.icon} alt="" width={f.size} height={f.size} />
                </div>
                <h3 className="mt-3 font-display text-title-sm font-bold">{f.title}</h3>
                <p className="mt-2 text-body-snug">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
