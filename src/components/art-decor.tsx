function Paintbrush({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M46 6c3 0 6 3 6 6 0 2-1 3.5-2.5 5L31 35.5l-6-6L43.5 8c1.3-1.3 2-2 2.5-2Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M25 29.5 34.5 39c-3 4-5 9.5-9 12-3.5 2.2-9 2.5-12 1 1-3 1.6-8.3 4-12 2.4-3.7 8.4-6.4 11.5-10.5Z"
        fill="currentColor"
      />
      <path
        d="M9 55c2-1 4.5-3 5.5-5.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Palette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 6C17 6 6 16.5 6 29c0 8 5 12 11 12 3 0 4-2 4-4s-1.5-3-1.5-5c0-3 3-5 6-5h8c7 0 12-5 12-11C45.5 9.5 39.5 6 32 6Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="18" cy="22" r="3.2" fill="var(--bg)" />
      <circle cx="28" cy="15" r="3.2" fill="var(--bg)" />
      <circle cx="40" cy="16" r="3.2" fill="var(--bg)" />
    </svg>
  );
}

function Pencil({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 52 8 44l30-30 8 8-30 30Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M38 14 46 22" stroke="var(--bg)" strokeWidth="2.5" />
      <path
        d="M8 44 6 56l12-2-4.5-4.5L8 44Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

function Splatter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="9" fill="currentColor" />
      <circle cx="33" cy="12" r="3" fill="currentColor" />
      <circle cx="6" cy="28" r="2.5" fill="currentColor" />
      <circle cx="30" cy="30" r="2" fill="currentColor" />
    </svg>
  );
}

const items: {
  Icon: (props: { className?: string }) => ReturnType<typeof Paintbrush>;
  className: string;
  color: string;
  animate: string;
}[] = [
  {
    Icon: Paintbrush,
    className: "left-[4%] top-[12%] h-16 w-16 sm:h-20 sm:w-20",
    color: "var(--accent)",
    animate: "animate-sway",
  },
  {
    Icon: Palette,
    className: "right-[6%] top-[8%] h-20 w-20 sm:h-24 sm:w-24",
    color: "var(--olive)",
    animate: "animate-bob",
  },
  {
    Icon: Pencil,
    className: "right-[14%] bottom-[10%] h-14 w-14 sm:h-16 sm:w-16",
    color: "var(--ink-soft)",
    animate: "animate-sway",
  },
  {
    Icon: Splatter,
    className: "left-[12%] bottom-[14%] h-10 w-10",
    color: "var(--accent-soft)",
    animate: "animate-spin-slow",
  },
];

export default function ArtDecor({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.12] ${className}`}
    >
      {items.map(({ Icon, className: pos, color, animate }, i) => (
        <div key={i} className={`absolute ${pos} ${animate}`} style={{ color }}>
          <Icon className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
