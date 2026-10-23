# Atlantis

Next.js (App Router) + TypeScript + Tailwind CSS + GSAP.

## Scripts

```bash
npm run dev    # start the dev server at http://localhost:3000
npm run build  # production build
npm run start  # serve the production build
npm run lint   # lint
```

## GSAP

Import from `@/lib/gsap` so plugins are registered once:

```tsx
"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function Example() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(".box", { y: 40, opacity: 0 });
  }, { scope: ref });
  return <div ref={ref}><div className="box" /></div>;
}
```
