import Image from "next/image";
import type { GithubProfile } from "@/lib/github";

export function Sidebar({ profile }: { profile: GithubProfile | null }) {
  const name = profile?.name ?? "Akin Genc";
  return (
    <aside className="flex h-auto flex-col rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)] lg:sticky lg:top-4 lg:h-[calc(100vh-32px)] lg:p-[22px]">
      <div className="mb-6">
        <p className="m-0 text-[17px] font-extrabold">{name}</p>
        <p className="mt-[5px] mb-0 text-xs text-[var(--muted)]">
          Software Engineer
        </p>
      </div>
      <nav className="grid grid-cols-2 gap-[5px] lg:grid-cols-1">
        {["Overview", "Projects", "CV"].map((item) => (
          <a
            className="rounded-lg px-2 py-[13px] text-sm text-[#d4d4d0] first:bg-[#373737] first:text-[#f0f0eb] hover:bg-[#373737] hover:text-[#f0f0eb]"
            href={item === "CV" ? "/cv" : `#${item.toLowerCase()}`}
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>
      
      <div className="mt-auto hidden gap-3 border-t border-[var(--line)] pt-[22px] lg:grid">
        <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
          Find me
        </p>
        <a
          href={profile?.html_url ?? "https://github.com/Akin-Genc0"}
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-xs text-[var(--muted)] hover:text-[var(--text)]">
            GitHub -&gt;
          </span>
        </a>
        <a href="mailto:akingenc212@gmail.com">
          <span className="text-xs text-[var(--muted)] hover:text-[var(--text)]">
            Email -&gt;
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/akin-genc-1a5a02278/"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-xs text-[var(--muted)] hover:text-[var(--text)]">
            LinkedIn -&gt;
          </span>
        </a>
        <p className="mb-0 mt-[18px] text-xs text-[var(--muted)]">
          {new Date().getFullYear()} Akin Genc
        </p>
      </div>
    </aside>
  );
}
