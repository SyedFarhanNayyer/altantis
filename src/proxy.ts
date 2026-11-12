import { type NextRequest, NextResponse } from "next/server";
import { getProduct } from "@/content/products";

// Product pages stream, so a missing phone can't set a 404 status from the
// page itself. Unknown slugs are sent to a path with no route, which Next
// answers with the not-found page and a real 404.
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && getProduct(slug)) return NextResponse.next();
  return NextResponse.rewrite(new URL("/products/missing/not-found", request.url));
}

export const config = { matcher: "/products/:slug" };
