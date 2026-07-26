"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Portfolio inquiry from ${name || "a visitor"}`;
    const body = `${details}\n\n— ${name || "a visitor"}`;
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[var(--line)]/70 bg-[var(--card)] p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
            Your name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-soft)]/60 focus:border-[var(--accent)]"
          />
        </label>

        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
            Tell me about your commission
          </span>
          <textarea
            required
            rows={5}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Size, medium, subject, timeline, budget — whatever helps me understand the piece."
            className="mt-2 w-full resize-y rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-soft)]/60 focus:border-[var(--accent)]"
          />
        </label>

        <button
          type="submit"
          className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
        >
          Send via email
        </button>

        <p
          role="status"
          className="text-xs text-[var(--ink-soft)]"
          aria-live="polite"
        >
          {sent
            ? "Opening your email app with this message pre-filled — send it from there to reach me."
            : `This opens your email app addressed to ${email} with your name and message pre-filled.`}
        </p>
      </div>
    </form>
  );
}
