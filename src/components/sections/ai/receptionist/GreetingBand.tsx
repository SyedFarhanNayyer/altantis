import { PhoneIncoming } from "@phosphor-icons/react/ssr";
import Image from "next/image";

// Bar heights for the waveform, as fractions of the full height.
const bars = [0.4, 0.7, 0.5, 0.9, 0.6, 1, 0.75, 0.45, 0.85, 0.55, 0.95, 0.6, 0.8, 0.4, 0.7, 0.5];

// The first thing a caller hears, set as a large quote on the soft glow band with a
// voice waveform under it, beside a photo of someone taking the call that was
// routed to them.
export function GreetingBand() {
  return (
    <section aria-labelledby="rec-greeting-title" className="relative isolate overflow-hidden bg-soft-glow py-20 text-ink lg:py-28">
      <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
        <div>
          <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
            The First Hello
          </p>
          <h2 id="rec-greeting-title" className="sr-only">
            How your AI receptionist greets callers
          </h2>
          <blockquote data-reveal="lines" className="mt-4">
            <p className="font-display text-h2">“Thanks for calling Harbor Dental.</p>
            <p className="mt-2 font-display text-route-title font-bold text-brand-strong">What can I help you with today?”</p>
          </blockquote>

          {/* Waveform: decorative, so screen readers skip it. */}
          <div aria-hidden="true" className="mt-10 flex h-14 items-center gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className="w-1.5 origin-center rounded-full bg-brand-gradient motion-safe:animate-[voice-wave_1.4s_ease-in-out_infinite]"
                style={{ height: `${h * 100}%`, animationDelay: `${(i % 8) * 0.12}s` }}
              />
            ))}
          </div>

          <p data-reveal="fade" className="mt-8 max-w-[36rem] text-body text-ink/80">
            Callers hear your business name and a friendly question, not a list of numbers to press. They answer in
            their own words, and your AI receptionist takes it from there.
          </p>
        </div>

        <div className="relative">
          <div data-reveal="wipe" className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/business-owner-mobile-call.jpg"
              alt="Business owner taking a call that was sent straight to her"
              fill
              unoptimized
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[60%_50%]"
            />
          </div>
          <p
            aria-hidden="true"
            className="absolute -bottom-5 left-5 flex items-center gap-2.5 rounded-full bg-card px-5 py-3 text-small font-bold text-ink shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] lg:-left-8"
          >
            <PhoneIncoming size={18} weight="fill" className="text-brand" />
            Billing call, sent to the front desk
          </p>
        </div>
      </div>
    </section>
  );
}
