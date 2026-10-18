import Image from "next/image";
import { CaseStudies } from "@/components/CaseStudies";
import { CurrentSignals } from "@/components/CurrentSignals";
import { RightPanel } from "@/components/RightPanel";
import type {
  GithubEvent,
  GithubProfile,
  GithubRepository,
} from "@/lib/github";
import { relativeDate } from "@/lib/github";

type Props = {
  events: GithubEvent[];
  profile: GithubProfile | null;
  repositories: GithubRepository[];
};

const skills = [
  "TypeScript",
  "JavaScript",
  "Java",
  "React",
  "Tailwind CSS",
  "Terraform",
  "Docker",
  "Node.js",
  "Microsoft Azure",
  "Google Cloud",
];

const projectImages: Record<string, string> = {
  "Component-Library": "/looply.png",
  tfpretty: "/tfpretty.png",
};

export function GithubDashboard({ events, profile, repositories }: Props) {
  const featured = repositories.filter((repository) =>
    ["Component-Library", "tfpretty"].includes(repository.name),
  );

  return (
    <main className="paper-note mx-auto flex w-full max-w-[1080px] flex-col overflow-hidden border-x border-[var(--line)]">
      <header className="order-1 flex items-center justify-between border-b border-[var(--line)] px-6 py-3 sm:px-9">
        <p className="m-0 font-mono text-[10px] text-[var(--muted)]">akin-genc / README.md</p>
        <a className="hidden font-mono text-[10px] text-[var(--muted)] hover:text-[var(--text)] sm:block" href="#projects">
          jump to projects
        </a>
      </header>

      <section className="order-2 border-b border-[var(--line)] px-5 py-8 sm:px-9 sm:py-10" id="overview">
        <p className="mb-3 mt-0 font-mono text-[11px] text-[var(--muted)]">## About</p>
        <h1 className="m-0 max-w-[680px] text-[clamp(2rem,3vw,2.8rem)] font-semibold tracking-[-.06em]">Akin Genc</h1>
        <p className="my-6 max-w-[610px] text-[15px] leading-[1.75] text-[var(--muted)]">
          I&apos;m a Software Engineer at Elanco, working across cloud infrastructure, DevOps, and full-stack development with Terraform, Azure, GCP, TypeScript, and Next.js. I&apos;m in my final year studying Computer Science at the University of Reading, graduating in 2027, and enjoy building scalable software, automating workflows, and learning new technologies.
        </p>
        <div className="border-t border-[var(--line)] pt-4">
          <p className="mb-2 mt-0 font-mono text-[10px] text-[var(--muted)]">toolkit</p>
          <div className="flex flex-wrap gap-x-2 font-mono text-[11px] leading-6 text-[var(--muted)]">
            {skills.map((skill) => <span key={skill}>{skill}{skill !== skills.at(-1) ? " /" : ""}</span>)}
          </div>
        </div>
      </section>

      <section className="order-3 border-b border-[var(--line)] px-5 py-8 sm:px-9 sm:py-10" id="projects">
        <div className="mb-5 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 mt-0 font-mono text-[11px] text-[var(--muted)]">## Projects</p>
            <h2 className="m-0 text-2xl font-semibold tracking-[-.05em]">Things I&apos;ve built</h2>
          </div>
          <a className="font-mono text-[10px] text-[var(--muted)] hover:text-[var(--text)]" href={profile?.html_url ?? "https://github.com/Akin-Genc0"} rel="noreferrer" target="_blank">
            view GitHub
          </a>
        </div>
        {featured.length ? (
          <div className="grid gap-5">
            {featured.map((repository) => (
              <article className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffefa] transition-shadow hover:shadow-[0_8px_18px_rgb(0_0_0_/_8%)]" key={repository.name}>
                <a className="group grid h-full sm:grid-cols-[minmax(280px,.95fr)_1fr]" href={repository.html_url} rel="noreferrer" target="_blank">
                  <div className="relative h-52 overflow-hidden border-b border-[var(--line)] bg-[var(--panel-deep)] sm:h-full sm:min-h-[245px] sm:border-b-0 sm:border-r">
                    <Image
                      alt={`${repository.name.replaceAll("-", " ")} preview`}
                      className="object-cover"
                      fill
                      sizes="(min-width: 640px) 45vw, 100vw"
                      src={projectImages[repository.name]}
                    />
                  </div>
                  <div className="flex min-h-[245px] flex-col p-6">
                    <p className="m-0 font-mono text-[10px] text-[var(--muted)]">{repository.language ?? "Code"}</p>
                    <h3 className="mb-3 mt-3 text-2xl font-semibold tracking-[-.06em]">{repository.name.replaceAll("-", " ")}</h3>
                    <p className="m-0 text-[13px] leading-[1.7] text-[var(--muted)]">
                      {repository.description ?? "Explore the source code and project details on GitHub."}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-[var(--line)] pt-4 font-mono text-[10px] text-[var(--muted)]">
                      <span>{relativeDate(repository.updated_at)}</span>
                      <span>view repository -&gt;</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">GitHub projects are temporarily unavailable. Please check back shortly.</p>
        )}
      </section>

      <CurrentSignals />
      <CaseStudies />
      <RightPanel events={events} />
    </main>
  );
}
