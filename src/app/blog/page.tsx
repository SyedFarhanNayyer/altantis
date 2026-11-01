import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { PostCard } from "@/components/sections/PostCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { allPosts, formatPostDate, postPath, readingTime } from "@/content/posts";
import { breadcrumbTrail } from "@/lib/pages";
import { absoluteUrl, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/blog";
const title = "Business Phone System Guides & Insights | Atlantis";
const description =
  "Practical guides for business owners on phone systems, copper line retirement, missed calls and switching providers without downtime, from Atlantis.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function BlogPage() {
  const trail = breadcrumbTrail(path);
  const [featured, ...rest] = allPosts;

  return (
    <PageShell
      schema={[
        {
          ...webPageSchema("Blog", path, title, description),
          publisher: { "@id": `${site.url}/#organization` },
          blogPost: allPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(postPath(p)),
            datePublished: p.date,
          })),
        },
        breadcrumbSchema(trail),
      ]}
    >
      <PageHero
        trail={trail}
        title={
          <>
            Guides and insights{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">for growing businesses</span>
          </>
        }
        body="Practical advice on business phone systems, copper line retirement and keeping every customer call answered."
      />

      <section aria-labelledby="featured-title" className="pt-20 lg:pt-28">
        <div className="container-page">
          <h2 id="featured-title" data-reveal="fade" className="font-display text-eyebrow text-orange-strong">
            Latest guide
          </h2>

          <article className="group relative mt-6 grid overflow-hidden rounded-[1.25rem] border border-line-light bg-card lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[26rem]">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 58vw, 100vw"
                className={`object-cover ${featured.position} transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none`}
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-ink/75">
                <span className="font-bold text-brand-strong">{featured.category}</span>
                <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
                <span>{readingTime(featured)} min read</span>
              </p>
              <h3 className="mt-4 font-display text-h2 font-bold text-ink">
                <Link href={postPath(featured)} className="after:absolute after:inset-0">
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-4 text-body">{featured.summary}</p>
              <span
                aria-hidden="true"
                className="mt-8 font-display text-label font-bold text-brand-strong group-hover:underline"
              >
                Read the Guide
              </span>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="more-title" className="py-20 lg:py-28">
        <div className="container-page">
          <h2 id="more-title" data-reveal="lines" className="text-h2 text-ink">
            More <span className="font-bold">guides</span>
          </h2>
          <ul data-reveal="stagger" className="mt-10 grid gap-[1.875rem] md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug} className="group/item last:md:col-span-2 last:lg:col-span-1">
                <PostCard post={p} meta />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="ask-title" className="bg-sand py-20 lg:py-24">
        <div className="container-page flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="ask-title" data-reveal="lines" className="text-h2 text-ink">
              Have a question we{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">haven’t covered yet?</span>
            </h2>
            <p data-reveal="fade" className="mt-4 max-w-[35rem] text-body">
              Browse our answers to common questions, or ask an Atlantis specialist
              about your business directly.
            </p>
          </div>
          <div data-reveal="fade" className="flex w-full flex-wrap gap-4 sm:w-auto sm:gap-5">
            <ButtonLink href="/contact-us" className="w-full sm:w-auto sm:px-9">
              Ask a Specialist
            </ButtonLink>
            <ButtonLink href="/faq" variant="outline-brand" className="w-full sm:w-auto sm:px-9">
              Read the FAQ
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
