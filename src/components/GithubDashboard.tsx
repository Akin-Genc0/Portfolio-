import type {
  GithubEvent,
  GithubProfile,
  GithubRepository,
} from "@/lib/github";
import { relativeDate } from "@/lib/github";
import { RightPanel } from "@/components/RightPanel";
import { CurrentSignals } from "@/components/CurrentSignals";

type Props = {
  events: GithubEvent[];
  profile: GithubProfile | null;
  repositories: GithubRepository[];
};
const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "GitHub Actions",
];
const techStack = [
  { label: "Languages", skills: ["TypeScript", "JavaScript", "Java"] },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Kontent.ai"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Prisma ORM", "NextAuth.js", "PostgreSQL"],
  },
  {
    label: "Cloud & infrastructure",
    skills: [
      "Terraform",
      "Docker",
      "Ansible",
      "Microsoft Azure",
      "Google Cloud",
    ],
  },
  {
    label: "Delivery & tools",
    skills: ["Git", "GitHub Actions", "CI/CD", "Jira", "Linear", "Figma"],
  },
];

export function GithubDashboard({ events, profile, repositories }: Props) {
  const featured = repositories.filter((repository) =>
    ["Component-Library", "Console-robot_simulator"].includes(repository.name),
  );
  return (
    <main className="dashboard">
      <header className="command-bar">
        <p>
          <span>&gt;</span> Akin Genc / Portfolio
        </p>
        <a href="#projects">Browse projects -&gt;</a>
      </header>
      <section className="hero panel" id="overview">
        <div className="hero-copy">
          <p className="eyebrow">Professional summary</p>
          <h1>Hi, I&apos;m Akin.</h1>
          <p className="intro">
            I&apos;m a Software Engineer at Elanco, working across cloud
            infrastructure, DevOps, and full-stack development with Terraform,
            Azure, GCP, TypeScript, and Next.js. I&apos;m in my final year
            studying Computer Science at the University of Reading, graduating
            in 2027, and enjoy building scalable software, automating workflows,
            and learning new technologies.
          </p>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="cv-summary-card" id="cv">
          <p className="eyebrow">At a glance</p>
          <dl>
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
          <p className="availability-note">
            Open to opportunities and collaboration.
          </p>
        </div>
      </section>
      <section className="projects-section panel" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Recent GitHub projects</h2>
          </div>
          <a
            href={profile?.html_url ?? "https://github.com/Akin-Genc0"}
            rel="noreferrer"
            target="_blank"
          >
            View GitHub -&gt;
          </a>
        </div>
        {featured.length ? (
          <div className="project-grid">
            {featured.map((repository) => (
              <article className="project-card" key={repository.name}>
                <div className="project-topline">
                  <span className="repo-mark">
                    {repository.language?.slice(0, 1) ?? "#"}
                  </span>
                  <span>{relativeDate(repository.updated_at)}</span>
                </div>
                <h3>
                  <a
                    href={repository.html_url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {repository.name.replaceAll("-", " ")}
                  </a>
                </h3>
                <p>
                  {repository.description ??
                    "Explore the source code and project details on GitHub."}
                </p>
                <div className="project-meta">
                  <span>{repository.language ?? "Code"}</span>
                  <span>{repository.stargazers_count} stars</span>
                </div>
                {repository.name === "Component-Library" && (
                  <div className="project-links">
                    <a
                      href="https://looply-y.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Live site -&gt;
                    </a>
                    <a
                      href="https://www.npmjs.com/package/looply-comp-lib"
                      rel="noreferrer"
                      target="_blank"
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
      <section className="tech-section panel">
        <p className="eyebrow">Tech stack</p>
        <div className="tech-groups">
          {techStack.map((group) => (
            <div className="tech-group" key={group.label}>
              <p>{group.label}</p>
              <div className="tech-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CurrentSignals />
      <RightPanel events={events} profile={profile} />
    </main>
  );
}
