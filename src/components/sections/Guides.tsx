import { ButtonLink } from "@/components/ui/ButtonLink";
import { getPost } from "@/content/posts";
import { PostCard } from "./PostCard";

// The three guides featured on the homepage, in this order.
const guides = [
  "real-cost-of-missed-business-calls",
  "copper-line-retirement",
  "signs-your-phone-system-is-costing-you-customers",
].map((slug) => getPost(slug)!);

export function Guides() {
  return (
    <section aria-labelledby="guides-title" className="py-20 lg:py-[7.375rem]">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 id="guides-title" data-reveal="lines" className="text-h2 leading-tight">
            <span className="font-bold">Grow smarter</span> with these guides.
          </h2>
          <ButtonLink href="/blog" data-reveal="fade" className="w-full sm:w-[18.875rem]">
            Explore All News and Updates
          </ButtonLink>
        </div>

        <ul data-reveal="stagger" className="mt-12 grid gap-[1.875rem] md:grid-cols-2 lg:mt-[4.1875rem] lg:grid-cols-3">
          {guides.map((g) => (
            <li key={g.slug} className="group/item last:md:col-span-2 last:lg:col-span-1">
              <PostCard post={g} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
