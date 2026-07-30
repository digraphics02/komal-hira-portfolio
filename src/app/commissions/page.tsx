import type { Metadata } from "next";
import AmbientBlobs from "@/components/ambient-blobs";
import ArtDecor from "@/components/art-decor";
import CommissionGalleryClient from "@/components/commission-gallery-client";
import ZoomableMockup from "@/components/zoomable-mockup";
import { commissions } from "@/lib/commissions";
import { siteConfig } from "@/lib/site-config";

const title = "Commission Work — Komal Hira";
const description =
  "A look at private and client commission work by Komal Hira: portraits, calligraphy, still life, and custom oil and watercolour pieces made for individual clients.";

const featuredMockupSlugs = new Set([
  "commission-05",
  "commission-27",
  "commission-39",
]);

const roomBackgrounds = [
  "/images/commission-mockups/warm-grey-living.webp",
  "/images/commission-mockups/olive-dining.webp",
  "/images/commission-mockups/bright-gallery.webp",
  "/images/commission-mockups/dark-lounge.webp",
];

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
  const remainingMockups = commissions.filter(
    (piece) => !featuredMockupSlugs.has(piece.slug),
  );

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
          <ZoomableMockup
            background="/images/commission-mockups/abstract-dining-room.webp"
            alt="Abstract commission displayed in a contemporary dining room"
            className="md:col-span-2"
          />
          <ZoomableMockup
            background="/images/commission-mockups/calligraphy-living-room.webp"
            alt="Blue calligraphy commission framed in a modern living room"
          />
          <ZoomableMockup
            background="/images/commission-mockups/leopard-lounge.webp"
            alt="Leopard commission displayed as a large canvas in a modern lounge"
          />
        </div>
      </div>

      <div className="relative mb-16">
        <div className="mb-6 max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            More interiors
          </p>
          <h2 className="font-display mt-2 text-3xl text-[var(--ink)]">
            The collection, placed at home
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {remainingMockups.map((piece, index) => {
            const backgroundIndex = index % roomBackgrounds.length;
            const frame =
              index % 3 === 0
                ? "border-[6px] border-[#242321]"
                : index % 3 === 1
                  ? "border-[7px] border-[#e2ddd3]"
                  : "border-[6px] border-[#73583e]";

            return (
              <ZoomableMockup
                key={`interior-${piece.slug}`}
                background={roomBackgrounds[backgroundIndex]}
                alt={`Commissioned artwork by Komal Hira, piece ${index + 1}`}
                artwork={{
                  src: piece.image,
                  width: piece.width,
                  height: piece.height,
                }}
                frameClassName={frame}
              />
            );
          })}
        </div>
      </div>

      <CommissionGalleryClient pieces={commissions} />
    </section>
  );
}
