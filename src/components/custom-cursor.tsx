"use client";

import { useEffect, useRef } from "react";

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.trim().replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const num = parseInt(full, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    document.documentElement.classList.add("custom-cursor");

    let rgb = hexToRgb(
      getComputedStyle(document.documentElement).getPropertyValue("--accent"),
    );
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncColor = () => {
      rgb = hexToRgb(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--accent",
        ),
      );
    };
    darkQuery.addEventListener("change", syncColor);

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let brushX = targetX;
    let brushY = targetY;
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hovering = Boolean(
        target.closest('a, button, [role="button"], input, textarea'),
      );
    };

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const loop = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";

      const prevX = brushX;
      const prevY = brushY;
      brushX += (targetX - brushX) * 0.32;
      brushY += (targetY - brushY) * 0.32;

      const speed = Math.hypot(brushX - prevX, brushY - prevY);
      const width = clamp(20 - speed * 0.9, 5, 20) * (hovering ? 1.5 : 1);
      const [r, g, b] = rgb;

      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(brushX, brushY);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = width;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${hovering ? 0.42 : 0.28})`;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(targetX, targetY, hovering ? 5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
      ctx.fill();

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      darkQuery.removeEventListener("change", syncColor);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-canvas" aria-hidden="true" />;
}
