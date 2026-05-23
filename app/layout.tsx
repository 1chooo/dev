import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - lin hugo",
    default: "lin hugo",
  },
  description:
    "Software builder and writer studying Computer Science at USC Viterbi.",
  openGraph: {
    title: "lin hugo",
    description:
      "Software builder and writer studying Computer Science at USC Viterbi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} min-h-screen`}>
      <body className={`${jetbrainsMono.className} min-h-screen bg-[var(--background)] font-mono text-[var(--foreground)] antialiased`}>
        <div className="mx-auto max-w-2xl px-6 py-8 md:py-12">
          <SiteHeader />
          <main className="mt-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
