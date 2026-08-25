import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AmbientBlobs from "@/components/ambient-blobs";
import ArtDecor from "@/components/art-decor";
import Marquee from "@/components/marquee";
import Reveal from "@/components/reveal";
import { paintings } from "@/lib/paintings";
import { bio, education, exhibitions, skillset } from "@/lib/profile";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Komal Hira — Visual Artist in Oil on Canvas",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Komal Hira — Visual Artist in Oil on Canvas",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Komal Hira — Visual Artist in Oil on Canvas",
    description: siteConfig.description,
  },
};

const hero = paintings.find((p) => p.title === "Redolence") ?? paintings[0];

export default function HomePage() {
  return (
    <>
      <section className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-28">
        <AmbientBlobs colors={["var(--accent)", "var(--olive)"]} />
        <ArtDecor />

        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            {siteConfig.role} · {siteConfig.location}
          </p>
          <h1 className="font-display mt-4 text-4xl leading-[1.1] text-balance text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Painting the feelings memory leaves behind.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            {bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/gallery/"
              className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--bg)] transition-transform hover:-translate-y-0.5"
            >
              View the gallery
            </Link>
            <Link
              href="/about/"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              About Artist
            </Link>
          </div>
        </Reveal>

        {hero && (
          <div
            className="relative flex items-center justify-center rounded-[2rem] border border-[var(--line)]/70 p-8 sm:p-12"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${hero.accent}33, var(--bg-alt))`,
            }}
          >
            <div className="animate-float w-full max-w-md">
              <Image
                src={hero.image}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                sizes="(max-width: 1024px) 80vw, 40vw"
                preload
                quality={85}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>
        )}
      </section>

      <Marquee items={skillset} />

      <section className="border-y border-[var(--line)]/70 bg-[var(--bg-alt)]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-display text-xl italic leading-relaxed text-[var(--ink)] sm:text-2xl">
              &ldquo;This feeling has been painted in my work as abstract
              (biomorphic) assemblages composed of undefined or some
              unrecognizable shapes and symbols.&rdquo;
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              From the artist&rsquo;s statement
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-[var(--ink)] sm:text-4xl">
              The collection
            </h2>
            <Link
              href="/gallery/"
              className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] hover:underline"
            >
              Open full-view gallery →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {paintings.map((painting, i) => (
            <Reveal key={painting.slug} delay={(i % 6) * 80}>
              <Link
                href="/gallery/"
                className="group block"
                aria-label={`${painting.title} — view in gallery`}
              >
                <div
                  className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)]/70 p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-1 group-hover:shadow-xl"
                  style={{
                    background: `linear-gradient(160deg, ${painting.accent}22, var(--card))`,
                  }}
                >
                  <Image
                    src={painting.image}
                    alt={painting.alt}
                    width={painting.width}
                    height={painting.height}
                    sizes="(max-width: 640px) 45vw, 30vw"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-3 font-display text-base text-[var(--ink)]">
                  {painting.title}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)]/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-3">
          <Reveal>
            <div>
              <p className="font-display text-4xl text-[var(--accent)]">
                {paintings.length}+
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                Original paintings
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="font-display text-4xl text-[var(--accent)]">
                {exhibitions.length}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                Exhibitions since 2015
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p className="font-display text-4xl text-[var(--accent)]">
                {education[0].credential}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                {education[0].school}, {education[0].period}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-16 text-center sm:px-8 sm:py-24">
        <AmbientBlobs colors={["var(--olive)", "var(--accent)"]} />
        <Reveal>
          <h2 className="font-display text-3xl text-[var(--ink)] sm:text-4xl">
            Available for commissions and exhibitions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--ink-soft)]">
            Portraits, still life, abstract landscapes and large-scale
            commissioned oil paintings.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
            >
              Email {siteConfig.name.split(" ")[0]}
            </Link>
            <a
              href={`https://wa.me/${siteConfig.phone.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              WhatsApp
            </a>
            <Link
              href="/contact/"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact details
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
