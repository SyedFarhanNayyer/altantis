import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlantis",
  description: "Business phone systems, installed and supported locally since 1984.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
