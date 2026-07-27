"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CommissionPiece } from "@/lib/commissions";

export default function CommissionGalleryClient({
  pieces,
}: {
  pieces: CommissionPiece[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + pieces.length) % pieces.length,
      ),
    [pieces.length],
  );
  const showNext = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? null : (i + 1) % pieces.length)),
    [pieces.length],
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

  const active = activeIndex === null ? null : pieces[activeIndex];

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {pieces.map((piece, index) => (
          <button
            key={piece.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-xl border border-[var(--line)]/70 bg-[var(--card)] text-left transition-all hover:-translate-y-0.5 hover:shadow-lg"
            aria-label={`Open commission piece ${index + 1} of ${pieces.length}`}
          >
            <Image
              src={piece.image}
              alt={`Commissioned artwork by Komal Hira, piece ${index + 1}`}
              width={piece.width}
              height={piece.height}
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Commission piece — full view"
          className="animate-modal-in fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
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
            aria-label="Previous piece"
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
            aria-label="Next piece"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white sm:right-6"
          >
            ›
          </button>

          <div
            key={active.slug}
            className="animate-modal-content-in flex max-h-[90vh] w-full max-w-3xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex max-h-[85vh] w-full items-center justify-center">
              <Image
                src={active.image}
                alt={`Commissioned artwork by Komal Hira, piece ${activeIndex! + 1}`}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="max-h-[85vh] w-auto object-contain"
              />
            </div>
            <p className="text-xs uppercase tracking-wide text-white/50">
              {activeIndex! + 1} / {pieces.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
