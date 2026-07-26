import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AmbientBlobs from "@/components/ambient-blobs";
import Reveal from "@/components/reveal";
import {
  artistStatement,
  bio,
  certifications,
  commissions,
  education,
  exhibitions,
  professionalExperience,
  skillset,
} from "@/lib/profile";
import { siteConfig } from "@/lib/site-config";

const title = "About Komal Hira — Visual Artist CV, Education & Exhibitions";
const description =
  "Komal Hira's artist biography, MFA and painting education, exhibition history since 2015, certifications, and commission work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about/" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}about/`,
    siteName: siteConfig.name,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function AboutPage() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <AmbientBlobs colors={["var(--accent)", "var(--olive)"]} />
      <Reveal>
        <div className="relative grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
          <div className="mx-auto w-48 sm:w-56 lg:mx-0 lg:w-full">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Komal Hira, visual artist"
              width={750}
              height={1000}
              sizes="(max-width: 1024px) 45vw, 280px"
              className="w-full rounded-2xl border border-[var(--line)]/70 object-cover shadow-lg"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              About
            </p>
            <h1 className="font-display mt-3 text-4xl text-[var(--ink)] sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {bio}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 rounded-2xl border border-[var(--line)]/70 bg-[var(--bg-alt)] p-8 sm:p-10">
          <h2 className="font-display text-2xl text-[var(--ink)]">
            Artist statement
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">
            {artistStatement}
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="font-display text-2xl text-[var(--ink)]">
              Education
            </h2>
            <ul className="mt-6 ml-1 space-y-1 border-l-2 border-[var(--line)]">
              {education.map((item) => (
                <li
                  key={`${item.school}-${item.period}`}
                  className="relative -ml-px rounded-r-lg py-3 pl-6 transition-colors before:absolute before:-left-[7px] before:top-[1.35rem] before:h-3 before:w-3 before:rounded-full before:bg-[var(--accent)] before:ring-4 before:ring-[var(--bg)] hover:bg-[var(--bg-alt)]"
                >
                  <p className="font-medium text-[var(--ink)]">
                    {item.credential}
                  </p>
                  <p className="text-sm text-[var(--ink-soft)]">
                    {item.school}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-[var(--accent)]">
                    {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <h2 className="font-display text-2xl text-[var(--ink)]">
              Skillset
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skillset.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default rounded-full border border-[var(--line)] px-4 py-1.5 text-sm text-[var(--ink-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-10 text-2xl text-[var(--ink)]">
              Professional experience
            </h2>
            <ul className="mt-5 space-y-1">
              {professionalExperience.map((item) => (
                <li
                  key={item}
                  className="-ml-3 flex gap-3 rounded-lg px-3 py-2 text-sm leading-relaxed text-[var(--ink-soft)] transition-colors hover:bg-[var(--bg-alt)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl text-[var(--ink)]">
                Commissions
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Lahore, 2015–2023
              </p>
            </div>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commissions.map((item, i) => (
              <li
                key={item}
                className="group relative overflow-hidden rounded-xl border border-[var(--line)]/70 bg-[var(--card)] p-5 text-sm leading-relaxed text-[var(--ink-soft)] transition-all hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-lg"
              >
                <span className="font-display block text-2xl text-[var(--accent)]/40 transition-colors group-hover:text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-[var(--ink)]">{item}</p>
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                className="flex h-full flex-col justify-between rounded-xl border border-dashed border-[var(--accent)]/50 bg-[var(--bg-alt)] p-5 text-sm leading-relaxed transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
              >
                <span className="font-display text-2xl text-[var(--accent)]">
                  +
                </span>
                <p className="mt-2 font-medium text-[var(--ink)]">
                  Have something else in mind?
                  <span className="mt-1 block text-[var(--accent)]">
                    Get in touch →
                  </span>
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="font-display text-2xl text-[var(--ink)]">
              Exhibitions
            </h2>
            <ol className="mt-6 ml-1 space-y-1 border-l-2 border-[var(--line)]">
              {exhibitions.map((item, i) => (
                <li
                  key={`${item.year}-${i}`}
                  className="relative -ml-px flex gap-4 rounded-r-lg py-2.5 pl-6 text-sm leading-relaxed transition-colors before:absolute before:-left-[7px] before:top-[1.05rem] before:h-3 before:w-3 before:rounded-full before:bg-[var(--accent)] before:ring-4 before:ring-[var(--bg)] hover:bg-[var(--bg-alt)]"
                >
                  <span className="w-12 flex-none font-medium text-[var(--accent)]">
                    {item.year}
                  </span>
                  <span className="text-[var(--ink-soft)]">{item.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <h2 className="font-display text-2xl text-[var(--ink)]">
              Workshops &amp; certifications
            </h2>
            <ol className="mt-6 ml-1 space-y-1 border-l-2 border-[var(--line)]">
              {certifications.map((item, i) => (
                <li
                  key={`${item.year}-${i}`}
                  className="relative -ml-px flex gap-4 rounded-r-lg py-2.5 pl-6 text-sm leading-relaxed transition-colors before:absolute before:-left-[7px] before:top-[1.05rem] before:h-3 before:w-3 before:rounded-full before:bg-[var(--accent)] before:ring-4 before:ring-[var(--bg)] hover:bg-[var(--bg-alt)]"
                >
                  <span className="w-12 flex-none font-medium text-[var(--accent)]">
                    {item.year}
                  </span>
                  <span className="text-[var(--ink-soft)]">{item.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
