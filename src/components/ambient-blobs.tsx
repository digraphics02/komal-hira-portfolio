export default function AmbientBlobs({
  colors = ["var(--accent)", "var(--olive)"],
  className = "",
}: {
  colors?: [string, string];
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div
        className="animate-drift-a absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full opacity-25 blur-3xl"
        style={{ background: colors[0] }}
      />
      <div
        className="animate-drift-b absolute -bottom-32 -right-16 h-[24rem] w-[24rem] rounded-full opacity-20 blur-3xl"
        style={{ background: colors[1] }}
      />
    </div>
  );
}
