export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-navy-foreground" : "text-navy";
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="J.C Construções — início">
      <span className="relative grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary shadow-glow">
        <svg viewBox="0 0 32 32" className="absolute top-1 h-5 w-7 text-primary-foreground" aria-hidden="true">
          <path d="M3 16 16 5l13 11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="mt-3 font-display text-lg font-extrabold leading-none text-primary-foreground">JC</span>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl font-extrabold uppercase tracking-wide ${text}`}>
          J.C Construções
        </span>
        <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">
          Reforma em geral
        </span>
      </span>
    </a>
  );
}
