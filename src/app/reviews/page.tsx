import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { reviews } from "@/content/reviews";
import { webPageSchema } from "@/lib/schema";
import { business } from "@/lib/site";

const path = "/reviews";
const title = "Customer Reviews | Atlantis Business Phone Systems";
const description =
  "Read what Ventura County businesses say about Atlantis phone systems, installation and local support, and share your own experience on Google.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
  // The reviews below are placeholders; index the page once real ones are in.
  robots: { index: false, follow: true },
};

export default function ReviewsPage() {
  return (
    <PageShell schema={[webPageSchema("WebPage", path, title, description)]}>
      <PageHero
        title={
          <>
            What our customers say{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">about working with Atlantis</span>
          </>
        }
        body="Reviews from businesses whose phone systems we’ve installed and support."
        primary={{ label: "Read Our Google Reviews", href: business.reviewsUrl }}
        secondary={{ label: "Submit Review", href: business.reviewsUrl }}
      />

      <section aria-labelledby="all-reviews-title" className="py-20 lg:py-28">
        <div className="container-page">
          <h2 id="all-reviews-title" className="sr-only">
            All reviews
          </h2>
          <ul data-reveal="stagger" className="grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <li key={i} className="rounded-[1.25rem] border border-line px-5 pt-[1.5625rem] pb-8 sm:px-8">
                <ReviewCard review={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="leave-review-title" className="bg-sand py-20 lg:py-24">
        <div className="container-page flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="leave-review-title" data-reveal="lines" className="text-h2 text-ink">
              Worked with Atlantis?{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">Tell others how it went.</span>
            </h2>
            <p data-reveal="fade" className="mt-4 max-w-[35rem] text-body">
              Your review helps other local businesses choose a phone system with
              confidence, and tells our team what to keep doing.
            </p>
          </div>
          <ButtonLink href={business.reviewsUrl} data-reveal="fade" className="w-full shrink-0 sm:w-auto sm:px-9">
            Write a Google Review
          </ButtonLink>
        </div>
      </section>

      <ClosingCta />
    </PageShell>
  );
}
