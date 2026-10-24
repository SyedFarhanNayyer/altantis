import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main" className="container-page flex min-h-dvh flex-col items-start justify-center gap-6 py-24">
      <h1 className="text-h1">This page doesn’t exist yet.</h1>
      <p className="max-w-[35rem] text-body">
        The link may be out of date, or the page is still being built. Head back
        to the homepage to find what you need.
      </p>
      <ButtonLink href="/">Back to the homepage</ButtonLink>
    </main>
  );
}
