import type { Metadata } from "next";
import Image from "next/image";
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

      <div className="relative mb-16">
        <div className="mb-6 max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            In your space
          </p>
          <h2 className="font-display mt-2 text-3xl text-[var(--ink)]">
            Art made for living with
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <figure className="group relative aspect-[3/2] overflow-hidden rounded-md md:col-span-2">
            <Image
              src="/images/commission-mockups/abstract-dining-room.webp"
              alt="Abstract commission displayed in a contemporary dining room"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </figure>
          <figure className="group relative aspect-[3/2] overflow-hidden rounded-md">
            <Image
              src="/images/commission-mockups/calligraphy-living-room.webp"
              alt="Blue calligraphy commission framed in a modern living room"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </figure>
          <figure className="group relative aspect-[3/2] overflow-hidden rounded-md">
            <Image
              src="/images/commission-mockups/leopard-lounge.webp"
              alt="Leopard commission displayed as a large canvas in a modern lounge"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </figure>
        </div>
      </div>

      <div className="relative mb-16">
        <div className="mb-6 max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            The complete collection
          </p>
          <h2 className="font-display mt-2 text-3xl text-[var(--ink)]">
            Every commission, imagined at home
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {commissions.map((piece, index) => {
            const ratio = piece.width / piece.height;
            const artworkWidth =
              ratio > 1.25 ? "w-[52%]" : ratio >= 0.9 ? "w-[38%]" : "w-[29%]";

            return (
              <figure
                key={`mockup-${piece.slug}`}
                className="relative aspect-[3/2] overflow-hidden rounded-md bg-[#e8e3dc]"
                aria-label={`Commission piece ${index + 1} displayed on an interior wall`}
              >
                <Image
                  src="/images/commission-mockups/gallery-wall-template.webp"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 31vw, 350px"
                  className="object-cover"
                />
                <div
                  className={`absolute left-1/2 top-[43%] ${artworkWidth} -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-black/15 bg-white shadow-[0_8px_18px_rgba(0,0,0,0.28)]`}
                  style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
                >
                  <Image
                    src={piece.image}
                    alt={`Commissioned artwork by Komal Hira, piece ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 25vw, 180px"
                    className="object-cover"
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </div>

      <CommissionGalleryClient pieces={commissions} />
    </section>
  );
}
