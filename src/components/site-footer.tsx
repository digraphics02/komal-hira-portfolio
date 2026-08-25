import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)]/70 bg-[var(--bg-alt)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg text-[var(--ink)]">
            {siteConfig.name}
          </p>
          <p className="text-sm text-[var(--ink-soft)]">
            {siteConfig.role} · {siteConfig.location}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-[var(--ink-soft)] sm:items-end">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-[var(--accent)]"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="hover:text-[var(--accent)]"
          >
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            @komal.hiraa
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col-reverse gap-2 border-t border-[var(--line)]/60 px-5 py-4 text-xs text-[var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {year} {siteConfig.name}. All artwork rights reserved.</p>
        <nav className="flex gap-4">
          <Link href="/gallery/" className="hover:text-[var(--accent)]">
            Gallery
          </Link>
          <Link href="/about/" className="hover:text-[var(--accent)]">
            About
          </Link>
          <Link href="/contact/" className="hover:text-[var(--accent)]">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
