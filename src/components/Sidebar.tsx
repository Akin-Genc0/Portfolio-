import type { GithubProfile } from "@/lib/github";

export function Sidebar({ profile }: { profile: GithubProfile | null }) {
  const name = profile?.name ?? "Akin Genc";
  return (
    <aside className="flex min-h-20 items-center justify-between gap-2 border-b border-[var(--line)] py-4 xl:sticky xl:top-0 xl:h-screen xl:flex-col xl:items-stretch xl:border-b-0 xl:py-8 xl:pr-8 xl:relative">
      <a className="leading-none" href="#overview">
        <p className="m-0 text-xl font-semibold tracking-[-.06em]">
          {name}
        </p>
        <p className="mt-1.5 mb-0 font-mono text-[10px] text-[var(--muted)] max-[420px]:hidden">
          portfolio vault
        </p>
      </a>
      <nav className="font-mono text-[11px] text-[var(--muted)] xl:absolute xl:left-0 xl:top-1/2 xl:-translate-y-1/2">
        <a className="inline-block px-2 py-2 hover:bg-[var(--highlight)] hover:text-[var(--text)] xl:block" href="/cv">
          CV
        </a>
      </nav>
      <nav className="flex items-center gap-2 font-mono text-[11px] text-[var(--muted)] xl:absolute xl:bottom-8 xl:left-0 xl:grid xl:gap-1">
        <a className="inline-block px-2 py-2 hover:bg-[var(--highlight)] hover:text-[var(--text)] xl:block" href="https://github.com/Akin-Genc0" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <a className="inline-block px-2 py-2 hover:bg-[var(--highlight)] hover:text-[var(--text)] xl:block" href="https://www.linkedin.com/in/akin-genc-1a5a02278/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
      </nav>
    </aside>
  );
}
