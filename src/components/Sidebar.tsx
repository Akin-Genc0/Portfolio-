import Image from "next/image";
import type { GithubProfile } from "@/lib/github";

export function Sidebar({ profile }: { profile: GithubProfile | null }) {
  const name = profile?.name ?? "Akin Genc";
  return (
    <aside className="sidebar">
      <div className="profile-summary">
        {profile?.avatar_url ? (
          <Image
            alt={`${name} on GitHub`}
            className="profile-avatar"
            height={56}
            src={profile.avatar_url}
            width={56}
          />
        ) : (
          <div className="avatar-fallback">AG</div>
        )}
        <div>
          <p className="profile-name">{name}</p>
          <p className="profile-role">Software Engineer</p>
        </div>
      </div>
      <p className="availability">
        <span />
        Available for opportunities
      </p>
      <nav className="navigation">
        {["Overview", "Projects", "CV"].map((item) => (
          <a href={item === "CV" ? "/cv" : `#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <p className="eyebrow">Find me</p>
        <a
          href={profile?.html_url ?? "https://github.com/Akin-Genc0"}
          rel="noreferrer"
          target="_blank"
        >
          GitHub -&gt;
        </a>
        <a href="mailto:akingenc212@gmail.com">Email -&gt;</a>
        <a
          href="https://www.linkedin.com/in/akin-genc-1a5a02278/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn -&gt;
        </a>
        <p className="copyright">{new Date().getFullYear()} Akin Genc</p>
      </div>
    </aside>
  );
}
