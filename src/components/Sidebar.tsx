import type { GithubProfile } from "@/lib/github";

export function Sidebar({ profile }: { profile: GithubProfile | null }) {
  const name = profile?.name ?? "Akin Genc";
  return (
    <aside className="flex min-h-20 items-center justify-between border-b border-[var(--line)] py-4 lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:items-stretch lg:border-b-0 lg:py-8 lg:pr-8 lg:relative">
      <a className="leading-none" href="#overview">
        <p className="m-0 text-xl font-semibold tracking-[-.06em]">
          {name}
        </p>
        <p className="mt-1.5 mb-0 font-mono text-[10px] text-[var(--muted)]">
          portfolio vault
        </p>
      </a>
      <nav className="font-mono text-[11px] text-[var(--muted)] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
        <a className="inline-block px-2 py-2 hover:bg-[var(--highlight)] hover:text-[var(--text)] lg:block" href="/cv">
          CV
        </a>
      </nav>
      <nav className="flex items-center gap-2 font-mono text-[11px] text-[var(--muted)] lg:absolute lg:bottom-8 lg:left-0 lg:grid lg:gap-1">
        <a className="inline-block px-2 py-2 hover:bg-[var(--highlight)] hover:text-[var(--text)] lg:block" href="https://github.com/Akin-Genc0" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <a className="inline-block px-2 py-2 hover:bg-[var(--highlight)] hover:text-[var(--text)] lg:block" href="https://www.linkedin.com/in/akin-genc-1a5a02278/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
      </nav>
    </aside>
  );
}
