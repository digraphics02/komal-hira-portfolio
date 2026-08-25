import type { Metadata } from "next";
import AmbientBlobs from "@/components/ambient-blobs";
import ArtDecor from "@/components/art-decor";
import GalleryClient from "@/components/gallery-client";
import { paintings } from "@/lib/paintings";
import { siteConfig } from "@/lib/site-config";

const title = "Gallery — Original Oil Paintings by Komal Hira";
const description =
  "Browse the full collection of Komal Hira's oil-on-canvas paintings: abstract biomorphic assemblages, diptychs, and pieces held in permanent hotel collections.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gallery/" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}gallery/`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function GalleryPage() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <AmbientBlobs colors={["var(--olive)", "var(--accent)"]} />
      <ArtDecor />
      <header className="relative mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
          Gallery
        </p>
        <h1 className="font-display mt-3 text-4xl text-[var(--ink)] sm:text-5xl">
          The full collection
        </h1>
        <p className="mt-4 text-[var(--ink-soft)]">
          {paintings.length} paintings in oil on canvas. Select any piece for
          a full view, medium, and dimensions.
        </p>
      </header>

      <GalleryClient paintings={paintings} />
    </section>
  );
}
