import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — Komal Hira",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl text-[var(--ink)] sm:text-5xl">
        This page went missing
      </h1>
      <p className="mt-4 text-[var(--ink-soft)]">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have
        moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--bg)]"
        >
          Back home
        </Link>
        <Link
          href="/gallery/"
          className="rounded-full border border-[var(--line)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          View gallery
        </Link>
      </div>
    </section>
  );
}
