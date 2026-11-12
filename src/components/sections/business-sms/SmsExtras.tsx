import { ChatText, Phone } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { textReasons } from "@/content/business-sms";

// Why customers text first, on the soft glow band.
export function SmsWhyText() {
  return (
    <section aria-labelledby="sms-why-title" className="bg-soft-glow text-ink">
      <div className="container-page py-20 lg:py-28">
        <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
          Why Customers Text
        </p>
        <h2 id="sms-why-title" data-reveal="lines" className="max-w-[40rem] text-h2">
          For a lot of customers, <span className="font-bold">a text is the first choice.</span>
        </h2>
        <ul className="mt-12 grid gap-8 border-t border-line-strong/30 pt-8 md:grid-cols-3 lg:mt-16">
          {textReasons.map((r) => (
            <li key={r.title}>
              <h3 className="font-display text-route-title font-bold">{r.title}</h3>
              <p className="mt-2 text-body-snug text-ink/80">{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Calls and texts on one number: copy beside a photo of an owner texting at his laptop.
export function SmsCallsAndTexts() {
  return (
    <section aria-labelledby="sms-one-number-title" className="bg-sand py-20 lg:py-28">
      <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div data-reveal="wipe" className="relative mx-auto aspect-[3/4] w-full max-w-[28rem] overflow-hidden rounded-[1.25rem]">
          <Image
            src="/images/business-sms-reply-from-laptop-and-phone.jpg"
            alt="Business owner at a laptop replying to a customer text on his phone"
            fill
            unoptimized
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover object-[68%_50%]"
          />
        </div>
        <div>
          <SectionHeading id="sms-one-number-title" eyebrow="One Number">
            Calls and texts, <span className="font-bold">on the same business number.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-4 max-w-[34rem] text-body">
            Texting isn’t a separate tool with a separate number. It’s part of your Atlantis phone system, so
            customers reach you the same way whether they call or text.
          </p>
          <dl className="mt-8 grid max-w-[36rem] gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-2">
            <div className="bg-paper p-6">
              <dt className="flex items-center gap-3 font-display text-title-sm font-bold">
                <ChatText size={24} aria-hidden="true" className="text-brand" />
                Text it
              </dt>
              <dd className="mt-2 text-body-snug text-ink/80">Quick answers, confirmations, photos and files.</dd>
            </div>
            <div className="bg-paper p-6">
              <dt className="flex items-center gap-3 font-display text-title-sm font-bold">
                <Phone size={24} aria-hidden="true" className="text-brand" />
                Call it
              </dt>
              <dd className="mt-2 text-body-snug text-ink/80">When it’s quicker to talk it through, call from the same number.</dd>
            </div>
          </dl>
          <ButtonLink href="/business-phone-systems" variant="outline-brand" data-reveal="fade" className="mt-8 w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9">
            Explore Business Phone Systems
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
