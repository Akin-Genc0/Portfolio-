import type {
  GithubEvent,
  GithubProfile,
  GithubRepository,
} from "@/lib/github";
import { relativeDate } from "@/lib/github";
import { RightPanel } from "@/components/RightPanel";
import { CurrentSignals } from "@/components/CurrentSignals";
import { CaseStudies } from "@/components/CaseStudies";

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

export function GithubDashboard({ events, profile, repositories }: Props) {
  const featured = repositories.filter((repository) =>
    ["Component-Library", "Console-robot_simulator"].includes(repository.name),
  );
  return (
    <main className="grid grid-cols-1 content-start gap-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-4 lg:[grid-template-areas:'bar_bar'_'hero_activity'_'projects_activity'_'signals_activity'_'highlights_activity']">
      <header className="flex min-h-20 items-center justify-between rounded-[14px] border border-[var(--line)] bg-[var(--panel)] px-[22px] py-[18px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)] lg:[grid-area:bar] lg:px-7">
        <p className="m-0 text-[15px]">
          <span className="font-black text-[var(--highlight)]">&gt;</span> Akin
          Genc / Portfolio
        </p>
        <a
          className="hidden text-xs text-[var(--muted)] hover:text-[var(--text)] sm:block"
          href="#projects"
        >
          Browse projects -&gt;
        </a>
      </header>
      <section
        className="grid gap-[25px] rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)] lg:[grid-area:hero] lg:grid-cols-[1.1fr_.9fr] lg:gap-[38px] lg:p-[38px]"
        id="overview"
      >
        <div>
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Professional summary
          </p>
          <h1 className="m-0 max-w-[620px] text-[34px] leading-[1.15] tracking-[-.06em] lg:text-[clamp(30px,4vw,54px)]">
            Hi, I&apos;m Akin.
          </h1>
          <p className="my-[23px] max-w-[600px] text-sm leading-[1.75] text-[var(--muted)]">
            I&apos;m a Software Engineer at Elanco, working across cloud
            infrastructure, DevOps, and full-stack development with Terraform,
            Azure, GCP, TypeScript, and Next.js. I&apos;m in my final year
            studying Computer Science at the University of Reading, graduating
            in 2027, and enjoy building scalable software, automating workflows,
            and learning new technologies.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div
          className="self-center rounded-[10px] border border-[#454545] bg-[var(--panel)] p-6"
          id="cv"
        >
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            At a glance
          </p>
          <dl className="m-0 [&_div:last-child]:border-0 [&_div]:border-b [&_div]:border-[#3a3a3a] [&_div]:py-[11px] [&_dt]:mb-[5px] [&_dt]:text-[10px] [&_dt]:uppercase [&_dt]:text-[var(--muted)] [&_dd]:m-0 [&_dd]:text-xs [&_dd]:leading-[1.5]">
            <div>
              <dt>Current role</dt>
              <dd>Software Engineer, Elanco</dd>
            </div>
            <div>
              <dt>Key impact</dt>
              <dd>iOS releases reduced from 4 hours to 5-10 minutes</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Cloud infrastructure, CI/CD, and web applications</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>BSc Computer Science, University of Reading</dd>
            </div>
          </dl>
          <p className="mb-0 mt-[18px] text-[11px] italic text-[var(--muted)]">
            Open to opportunities and collaboration.
          </p>
        </div>
      </section>
      <section
        className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)] lg:[grid-area:projects] lg:p-[26px]"
        id="projects"
      >
        <div className="mb-5 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
              Selected work
            </p>
            <h2 className="m-0 text-xl tracking-[-.04em]">
              Recent GitHub projects
            </h2>
          </div>
          <a
            href={profile?.html_url ?? "https://github.com/Akin-Genc0"}
            rel="noreferrer"
            target="_blank"
            className="text-xs text-[var(--muted)] hover:text-[var(--text)]"
          >
            View GitHub -&gt;
          </a>
        </div>
        {featured.length ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {featured.map((repository) => (
              <article
                className="min-h-0 rounded-[9px] border border-[#454545] bg-[var(--panel)] p-[18px] hover:border-[#555] sm:min-h-[190px]"
                key={repository.name}
              >
                <div className="flex flex-wrap justify-between gap-2 text-[11px] text-[var(--muted)]">
                  <span>{relativeDate(repository.updated_at)}</span>
                </div>
                <h3 className="my-[18px] mb-[9px] text-sm capitalize">
                  <a
                    href={repository.html_url}
                    rel="noreferrer"
                    target="_blank"
                    className="hover:text-white"
                  >
                    {repository.name.replaceAll("-", " ")}
                  </a>
                </h3>
                <p className="mb-4 min-h-[39px] text-[11px] leading-[1.55] text-[var(--muted)]">
                  {repository.description ??
                    "Explore the source code and project details on GitHub."}
                </p>
                <div className="flex flex-wrap justify-between gap-2 text-[11px] text-[var(--muted)]">
                  <span>{repository.language ?? "Code"}</span>
                  <span>{repository.stargazers_count} stars</span>
                </div>
                {repository.name === "Component-Library" && (
                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://loopl-y.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-[11px] text-[var(--muted)] underline underline-offset-3 hover:text-white"
                    >
                      Live site -&gt;
                    </a>
                    <a
                      href="https://www.npmjs.com/package/looply-comp-lib"
                      rel="noreferrer"
                      target="_blank"
                      className="text-[11px] text-[var(--muted)] underline underline-offset-3 hover:text-white"
                    >
                      npm package -&gt;
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            GitHub projects are temporarily unavailable. Please check back
            shortly.
          </p>
        )}
      </section>
      <CurrentSignals />
      <CaseStudies />
      <RightPanel events={events} />
    </main>
  );
}
