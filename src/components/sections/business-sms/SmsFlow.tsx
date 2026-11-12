import type { ReactNode } from "react";
import { ChatCircleText, CheckCircle, Image as PhotoIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const team = ["M", "J", "D"];

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line-light bg-card px-4 py-2 text-small font-bold whitespace-nowrap">
      {children}
    </span>
  );
}

function TeamCard() {
  return (
    <div className="w-full max-w-60 rounded-[1.5rem] border border-line-light bg-card p-5 text-center">
      <div className="flex justify-center -space-x-3">
        {team.map((t, i) => (
          <span
            key={t}
            className={`flex size-12 items-center justify-center rounded-full border-2 border-card font-display text-body-sm font-bold ${
              i === 1 ? "bg-brand-strong text-on-dark" : "bg-sand text-ink"
            }`}
          >
            {t}
          </span>
        ))}
        <span className="flex size-12 items-center justify-center rounded-full border-2 border-card bg-card text-small font-bold shadow-[0_8px_20px_-12px_rgb(0_0_0/0.4)]">
          +5
        </span>
      </div>
      <p className="mt-4 rounded-[0.75rem] bg-sand px-3 py-2.5 text-small">
        Your team sees the text in the mobile or desktop app and replies.
      </p>
    </div>
  );
}

function MessageCard({ photo }: { photo?: boolean }) {
  return (
    <div className="w-full max-w-72 rounded-[1.5rem] border border-line-light bg-card p-3">
      <div className="flex items-center justify-between rounded-[0.875rem] bg-sand px-4 py-3">
        <span className="font-display text-small font-bold tabular-nums">(805) 555-0142</span>
        <CheckCircle size={20} weight="fill" className="text-brand" />
      </div>
      {photo ? (
        <div className="mt-3">
          <div className="relative h-28 overflow-hidden rounded-[0.875rem]">
            <Image src="/images/business-sms-phone-on-office-desk.jpg" alt="" fill unoptimized sizes="18rem" className="object-cover" />
          </div>
          <p className="mt-3 px-1 text-small">Here’s a photo of your order before it ships.</p>
        </div>
      ) : (
        <div className="mt-3 px-1 pb-1">
          <p className="text-xs font-bold text-ink/70">Messages</p>
          <p className="mt-1 text-small">Your table for 4 is booked for 7 PM tonight. See you then!</p>
        </div>
      )}
    </div>
  );
}

// How a business text travels, drawn as a flow on a soft panel: the customer's
// text reaches your number, your team replies, and the reply arrives as a text
// or as a message with a photo. The drawing is illustrative; the caption says it in words.
export function SmsFlow() {
  return (
    <section aria-labelledby="sms-flow-title" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id="sms-flow-title" eyebrow="Business Texting" align="center">
          One number for every <span className="font-bold">customer conversation.</span>
        </SectionHeading>
        <p data-reveal="fade" className="mx-auto mt-4 max-w-[40rem] text-center text-body">
          Customers text the number they already know. Your team answers from the app, with a quick text or a
          photo, and every reply comes from your business number.
        </p>

        <figure className="mt-12 overflow-hidden rounded-[2rem] bg-soft-glow px-6 py-12 lg:mt-16 lg:px-12 lg:py-16">
          {/* Desktop: left to right, splitting into two reply cards. */}
          <div aria-hidden="true" className="hidden items-center justify-center lg:flex">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-brand-gradient text-on-dark">
              <ChatCircleText size={30} weight="fill" />
            </span>
            <span className="h-px w-8 shrink-0 bg-line-strong/40" />
            <Pill>Customer texts your number</Pill>
            <span className="h-px w-8 shrink-0 bg-line-strong/40" />
            <TeamCard />
            <span className="h-px w-8 shrink-0 bg-line-strong/40" />

            {/* Split: a bracket from the team card to each reply. Each row draws
                its own half of the vertical line (from its center to the gap),
                so the bracket meets both branches whatever the card heights. */}
            <div className="flex flex-col gap-8">
              {[false, true].map((photo) => (
                <div key={String(photo)} className="relative flex items-center">
                  <span
                    className={`absolute left-0 w-px bg-line-strong/40 ${photo ? "-top-4 bottom-1/2" : "top-1/2 -bottom-4"}`}
                  />
                  <span className="h-px w-6 bg-line-strong/40" />
                  <Pill>{photo ? "MMS" : "SMS"}</Pill>
                  <span className="h-px w-6 bg-line-strong/40" />
                  <MessageCard photo={photo} />
                </div>
              ))}
            </div>
          </div>

          {/* Phones and tablets: the same flow, top to bottom. */}
          <div aria-hidden="true" className="flex flex-col items-center lg:hidden">
            <span className="flex size-14 items-center justify-center rounded-[1.125rem] bg-brand-gradient text-on-dark">
              <ChatCircleText size={26} weight="fill" />
            </span>
            <span className="h-5 w-px bg-line-strong/40" />
            <Pill>Customer texts your number</Pill>
            <span className="h-5 w-px bg-line-strong/40" />
            <TeamCard />
            <span className="h-5 w-px bg-line-strong/40" />
            <Pill>Reply by SMS or MMS</Pill>
            <span className="h-5 w-px bg-line-strong/40" />
            <div className="grid justify-items-center gap-4 sm:grid-cols-2">
              <MessageCard />
              <MessageCard photo />
            </div>
          </div>

          <figcaption className="mx-auto mt-10 flex max-w-[36rem] items-center justify-center gap-2 text-center text-small text-ink/80">
            <PhotoIcon size={18} aria-hidden="true" className="shrink-0 text-brand" />
            Texts, photos, videos and files all go out from your business number.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
