import localFont from "next/font/local";

// Self-hosted, Latin-subset woff2 files in ./fonts.

// Display face: headings, buttons, labels
export const lineSeed = localFont({
  variable: "--font-line-seed",
  src: [
    { path: "./fonts/line-seed-jp-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/line-seed-jp-700-latin.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

// Body face: paragraphs, navigation (variable font covers 400–700)
export const manrope = localFont({
  variable: "--font-manrope",
  src: "./fonts/manrope-variable-latin.woff2",
  weight: "200 800",
  display: "swap",
  preload: false,
});
