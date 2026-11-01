import Image from "next/image";
import Link from "next/link";
import { formatPostDate, postPath, type Post } from "@/content/posts";

// Homepage guide card: photo, title, summary and "Read More", with the
// whole card clickable. `group-last/item` lets the last card in a 3-up grid
// lie flat on tablets — the <li> wrapping it carries `group/item`.
export function PostCard({ post, meta = false }: { post: Post; meta?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-line-light bg-card group-last/item:md:flex-row group-last/item:lg:flex-col">
      <div className="relative aspect-[380/226] overflow-hidden group-last/item:md:aspect-auto group-last/item:md:min-h-56 group-last/item:md:w-1/2 group-last/item:lg:aspect-[380/226] group-last/item:lg:min-h-0 group-last/item:lg:w-auto">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          unoptimized
          className={`object-cover ${post.position} transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none`}
        />
      </div>
      <div className="flex flex-1 flex-col px-[1.0625rem] pt-5 pb-5 group-last/item:md:px-6 group-last/item:md:pt-6 group-last/item:lg:px-[1.0625rem] group-last/item:lg:pt-5">
        {meta && (
          <p className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-ink/75">
            <span className="font-bold text-brand-strong">{post.category}</span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </p>
        )}
        <h3 className="font-display text-card-title font-bold text-night">
          <Link href={postPath(post)} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-body-sm tracking-[-0.02em] text-night">{post.summary}</p>
        <span
          aria-hidden="true"
          className="mt-auto pt-6 font-display text-small leading-[1.5625rem] font-bold tracking-[-0.02em] text-brand-strong group-hover:underline"
        >
          Read More
        </span>
      </div>
    </article>
  );
}
