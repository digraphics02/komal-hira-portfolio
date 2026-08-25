"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Painting } from "@/lib/paintings";

export default function GalleryClient({
  paintings,
}: {
  paintings: Painting[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + paintings.length) % paintings.length,
      ),
    [paintings.length],
  );
  const showNext = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? null : (i + 1) % paintings.length)),
    [paintings.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex === null ? null : paintings[activeIndex];

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) showNext();
    else showPrev();
  };

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {paintings.map((painting, index) => (
          <button
            key={painting.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group block w-full break-inside-avoid text-left"
            aria-label={`Open ${painting.title} in full view`}
          >
            <div
              className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)]/70 p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-1 group-hover:shadow-xl"
              style={{
                background: `linear-gradient(160deg, ${painting.accent}22, var(--card))`,
              }}
            >
              <Image
                src={painting.image}
                alt={painting.alt}
                width={painting.width}
                height={painting.height}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="h-auto w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-3 px-1">
              <h3 className="font-display text-lg text-[var(--ink)]">
                {painting.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — full view`}
          className="animate-modal-in fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close full view"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous painting"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white sm:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next painting"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white sm:right-6"
          >
            ›
          </button>

          <div
            key={active.slug}
            className="animate-modal-content-in flex max-h-[90vh] w-full max-w-4xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex max-h-[70vh] w-full items-center justify-center">
              <Image
                src={active.image}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="text-center text-white">
              <h3 className="font-display text-2xl">{active.title}</h3>
              <p className="mt-1 text-sm text-white/70">
                {[active.medium, active.dimensions, active.year]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              {active.collection && (
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                  {active.collection}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
