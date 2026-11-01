import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { getPage, type PagePath } from "@/lib/pages";
import { webPageSchema } from "@/lib/schema";
import { PageShell } from "./PageShell";

export type LegalSection = { id: string; title: string; body: ReactNode };

type Props = {
  path: PagePath;
  title: string;
  description: string;
  updated?: string; // ISO yyyy-mm-dd
  intro?: ReactNode;
  sections: LegalSection[];
  /** Number the section headings (1., 2. …) to match the source document. */
  numbered?: boolean;
};

// Plain reading layout for legal pages: one column at a comfortable
// measure, nothing else competing for attention. The text is the company's
// own; this only lays it out.
export function LegalPage({ path, title, description, updated, intro, sections, numbered = false }: Props) {
  const date =
    updated &&
    new Date(`${updated}T00:00:00`).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  const List = numbered ? "ol" : "div";
  const Item = numbered ? "li" : "section";

  return (
    <PageShell schema={[webPageSchema("WebPage", path, title, description)]}>
      <PageHero
        title={<span className="font-bold">{getPage(path)!.title}</span>}
        body={
          updated && (
            <>
              Last updated <time dateTime={updated}>{date}</time>
            </>
          )
        }
      />

      <article className="container-page py-20 lg:py-28">
        <div className="max-w-[46rem] text-body text-ink [&_a]:font-medium [&_a]:break-words [&_a]:text-brand-strong [&_a]:underline [&_a]:underline-offset-4 [&_ol_ol]:mt-4 [&_ol_ol]:list-[upper-alpha] [&_ol_ol]:pl-6 [&_ol_ol>li]:mt-2 [&_p+p]:mt-4 [&_p+ul]:mt-4 [&_ul+p]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:mt-2">
          {intro}

          <List className={`space-y-12 ${intro ? "mt-12" : ""}`}>
            {sections.map((s, i) => (
              <Item
                key={s.id}
                id={s.id}
                aria-labelledby={numbered ? undefined : `${s.id}-title`}
                className={`scroll-mt-28 border-t border-line pt-8 ${intro ? "" : "first:border-t-0 first:pt-0"}`}
              >
                <h2 id={`${s.id}-title`} className="font-display text-title-lg font-bold">
                  {numbered && <span className="mr-3 text-brand-strong">{i + 1}.</span>}
                  {s.title}
                </h2>
                <div className="mt-4">{s.body}</div>
              </Item>
            ))}
          </List>
        </div>
      </article>
    </PageShell>
  );
}
