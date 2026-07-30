"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ZoomableMockupProps = {
  alt: string;
  background: string;
  artwork?: {
    src: string;
    width: number;
    height: number;
  };
  className?: string;
  frameClassName?: string;
};

export default function ZoomableMockup({
  alt,
  background,
  artwork,
  className = "",
  frameClassName = "border border-black/20",
}: ZoomableMockupProps) {
  const [open, setOpen] = useState(false);
  const ratio = artwork ? artwork.width / artwork.height : 0;
  const artworkWidth =
    ratio > 2
      ? "w-[58%]"
      : ratio > 1.25
        ? "w-[42%]"
        : ratio >= 0.9
          ? "w-[30%]"
          : ratio >= 0.68
            ? "w-[23%]"
            : "w-[20%]";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const scene = (zoomed = false) => (
    <div
      className={`relative aspect-[3/2] w-full overflow-hidden bg-[#ddd8d0] ${
        zoomed ? "rounded-md" : ""
      }`}
    >
      <Image
        src={background}
        alt={artwork ? "" : alt}
        fill
        sizes={zoomed ? "95vw" : "(max-width: 640px) 48vw, 550px"}
        className="object-cover"
        priority={!artwork}
      />
      {artwork && (
        <div
          className={`absolute left-1/2 top-[37%] ${artworkWidth} ${frameClassName} -translate-x-1/2 -translate-y-1/2 bg-[#f4f1ea] p-[1.2%] shadow-[0_12px_24px_rgba(0,0,0,0.38)]`}
          style={{ aspectRatio: `${artwork.width} / ${artwork.height}` }}
        >
          <div className="relative h-full w-full overflow-hidden border border-black/15 bg-white">
            <Image
              src={artwork.src}
              alt={alt}
              fill
              sizes={zoomed ? "45vw" : "(max-width: 640px) 22vw, 160px"}
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group block w-full overflow-hidden rounded-md text-left ${className}`}
        aria-label={`Open ${alt}`}
      >
        <div className="transition-transform duration-700 group-hover:scale-[1.02]">
          {scene()}
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close full view"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-2xl text-white/80 hover:text-white"
          >
            &times;
          </button>
          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            {scene(true)}
          </div>
        </div>
      )}
    </>
  );
}
