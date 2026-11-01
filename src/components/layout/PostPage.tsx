import type { Metadata } from "next";
import Image from "next/image";
import { ContactCard } from "@/components/sections/ContactCard";
import { PageHero } from "@/components/sections/PageHero";
import { PostCard } from "@/components/sections/PostCard";
import {
  allPosts,
  formatPostDate,
  getPost,
  postPath,
  readingTime,
  type Block,
} from "@/content/posts";
import { breadcrumbTrail, type Page } from "@/lib/pages";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { PageShell } from "./PageShell";

// One route file per guide (src/app/blog/<slug>/page.tsx) so unknown URLs
// get a real 404: each exports postMetadata(slug) and renders <PostPage>.

export function postMetadata(slug: string): Metadata {
  const post = getPost(slug)!;
  const path = postPath(post);
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.alt }],
    },
    twitter: { title: post.title, description: post.summary, images: [post.image] },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-12 font-display text-title-lg font-bold text-ink first:mt-0">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="mt-4 space-y-2 pl-6 marker:text-brand list-disc">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="mt-4 first:mt-0">
          {block.text}
        </p>
      );
  }
}

export function PostPage({ slug }: { slug: string }) {
  const post = getPost(slug)!;

  const path = postPath(post);
  const trail = [...breadcrumbTrail("/blog"), { path, title: post.title } as Page];
  // The next newest guides, wrapping round to the start of the list.
  const index = allPosts.indexOf(post);
  const related = [1, 2, 3]
    .map((n) => allPosts[(index + n) % allPosts.length])
    .filter((p) => p !== post);

  return (
    <PageShell
      schema={[
        {
          "@type": "BlogPosting",
          "@id": `${absoluteUrl(path)}#article`,
          headline: post.title,
          description: post.summary,
          image: absoluteUrl(post.image),
          datePublished: post.date,
          dateModified: post.date,
          articleSection: post.category,
          mainEntityOfPage: absoluteUrl(path),
          author: { "@id": `${site.url}/#organization` },
          publisher: { "@id": `${site.url}/#organization` },
        },
        breadcrumbSchema(trail),
      ]}
    >
      <PageHero
        trail={trail}
        title={<span className="font-bold">{post.title}</span>}
        body={
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-bold text-amber">{post.category}</span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{readingTime(post)} min read</span>
          </span>
        }
      />

      <div className="container-page pt-12 lg:pt-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem] lg:aspect-[21/9]">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            priority
            unoptimized
            sizes="(min-width: 1280px) 1200px, 100vw"
            className={`object-cover ${post.position}`}
          />
        </div>
      </div>

      <div className="container-page grid gap-14 py-14 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-16 lg:py-20 xl:gap-24">
        <article className="max-w-[46rem] text-body text-ink">
          <p className="font-display text-title text-ink">{post.summary}</p>
          <div className="mt-8 border-t border-line pt-8">{post.body.map(renderBlock)}</div>
        </article>

        <aside aria-label="Contact Atlantis" className="lg:sticky lg:top-28 lg:self-start">
          <ContactCard title="Talk to an Atlantis specialist" />
        </aside>
      </div>

      <section aria-labelledby="related-title" className="bg-sand py-20 lg:py-24">
        <div className="container-page">
          <h2 id="related-title" data-reveal="lines" className="text-h2 text-ink">
            Keep <span className="font-bold">reading</span>
          </h2>
          <ul data-reveal="stagger" className="mt-10 grid gap-[1.875rem] md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug} className="group/item last:md:col-span-2 last:lg:col-span-1">
                <PostCard post={p} meta />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
