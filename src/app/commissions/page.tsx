import type { Metadata } from "next";
import AmbientBlobs from "@/components/ambient-blobs";
import ArtDecor from "@/components/art-decor";
import CommissionGalleryClient from "@/components/commission-gallery-client";
import { commissions } from "@/lib/commissions";
import { siteConfig } from "@/lib/site-config";

const title = "Commission Work — Komal Hira";
const description =
  "A look at private and client commission work by Komal Hira: portraits, calligraphy, still life, and custom oil and watercolour pieces made for individual clients.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/commissions/" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}commissions/`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function CommissionsPage() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <AmbientBlobs colors={["var(--accent)", "var(--olive)"]} />
      <ArtDecor />
      <header className="relative mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
          Commission Work
        </p>
        <h1 className="font-display mt-3 text-4xl text-[var(--ink)] sm:text-5xl">
          Made for clients
        </h1>
        <p className="mt-4 text-[var(--ink-soft)]">
          A selection of private and client commissions — portraits,
          calligraphy, still life, and custom pieces in oil and watercolour.
          Unlike the main collection, these works have gone home with their
          owners. Select any piece for a full view.
        </p>
      </header>

      <CommissionGalleryClient pieces={commissions} />
    </section>
  );
}
