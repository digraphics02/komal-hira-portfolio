export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-[var(--line)]/70 py-5"
      style={{
        background:
          "linear-gradient(90deg, var(--bg-alt), var(--card), var(--bg-alt))",
      }}
    >
      <div className="flex w-max whitespace-nowrap">
        <div className="animate-marquee flex w-max items-center gap-8 pr-8">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display flex items-center gap-8 text-lg text-[var(--ink-soft)] sm:text-xl"
            >
              {item}
              <span aria-hidden="true" className="text-[var(--accent)]">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
