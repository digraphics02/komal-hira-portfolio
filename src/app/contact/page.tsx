import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

const title = "Contact Komal Hira — Commissions & Exhibitions";
const description =
  "Get in touch with Lahore-based visual artist Komal Hira for painting commissions, exhibitions, and collaborations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}contact/`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
          Contact
        </p>
        <h1 className="font-display mt-3 text-4xl text-[var(--ink)] sm:text-5xl">
          Let&rsquo;s talk about your commission
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[var(--ink-soft)]">
          Whether it&rsquo;s a portrait, a still life, an abstract landscape,
          or a large-scale piece for a gallery or hotel collection, reach out
          directly — every message goes straight to {siteConfig.name}.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group rounded-2xl border border-[var(--line)]/70 bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              Email
            </p>
            <p className="font-display mt-2 text-xl text-[var(--ink)] group-hover:text-[var(--accent)]">
              {siteConfig.email}
            </p>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="group rounded-2xl border border-[var(--line)]/70 bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              Phone
            </p>
            <p className="font-display mt-2 text-xl text-[var(--ink)] group-hover:text-[var(--accent)]">
              {siteConfig.phone}
            </p>
          </a>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-12 rounded-2xl border border-[var(--line)]/70 bg-[var(--bg-alt)] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
            Based in
          </p>
          <p className="font-display mt-2 text-xl text-[var(--ink)]">
            {siteConfig.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
