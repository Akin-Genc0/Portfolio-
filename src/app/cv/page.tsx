const skills = [
  "TypeScript", "JavaScript", "Java", "React", "Next.js", "Tailwind CSS",
  "Kontent.ai", "Prisma ORM", "NextAuth.js", "PostgreSQL (Neon)", "Node.js",
  "Terraform", "Docker", "Ansible", "Microsoft Azure", "Google Cloud Platform",
  "Git", "GitHub Actions", "CI/CD", "Jira", "Linear", "Figma",
];

export default function CvPage() {
  return (
    <main className="mx-auto max-w-[850px] p-[72px_24px] [&_h2]:mb-[14px] [&_h2]:mt-9 [&_h2]:text-base [&_h3]:mb-2 [&_h3]:mt-0 [&_h3]:text-sm [&_h3_span]:text-[11px] [&_h3_span]:font-normal [&_h3_span]:text-[var(--muted)] [&_li]:text-[13px] [&_li]:leading-[1.7] [&_li]:text-[var(--muted)] [&_p]:text-[13px] [&_p]:leading-[1.7] [&_p]:text-[var(--muted)] [&_ul]:pl-5">
      <Link className="mb-9 inline-block text-xs text-[var(--muted)]" href="/">&lt;- Back to portfolio</Link>
      <header className="border-b border-[var(--line)] pb-[30px]"><p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">CV</p><h1 className="m-0 text-[clamp(38px,7vw,64px)] tracking-[-.06em]">Akin Genc</h1><p>Software Engineer | Elanco | London, United Kingdom</p><p><a href="mailto:akingenc19@gmail.com">akingenc19@gmail.com</a> | <a href="https://www.linkedin.com/in/akin-genc-1a5a02278/" rel="noreferrer" target="_blank">LinkedIn</a> | <a href="https://github.com/Akin-Genc0" rel="noreferrer" target="_blank">GitHub</a></p></header>
      <section><h2>Profile</h2><p>Results-driven Software Engineer with commercial experience designing deployment automation, cloud infrastructure, and modern web applications. I build scalable, maintainable solutions that improve delivery speed and developer productivity.</p></section>
      <section><h2>Experience</h2><h3>Software Engineer, Elanco <span>June 2025 - Present</span></h3><p>Working across cloud infrastructure, deployment automation, and modern web applications in a cross-functional Agile team across multiple time zones.</p><ul><li>Reduced iOS deployment time from around four hours to 5-10 minutes with GitHub Actions, YAML, and Ruby automation for App Store Connect releases.</li><li>Implemented Schema.org structured data using TypeScript and Next.js to improve AI search discoverability and local SEO.</li><li>Redesigned the Elanco Student website with TypeScript, Next.js, and Tailwind CSS, improving navigation, accessibility, and maintainability.</li><li>Built reusable Terraform modules across Azure and GCP for proactive monitoring, engineering alerts, and cloud cost visibility.</li></ul><h3>IT Support, Waltham Cross Library <span>October 2022 - June 2023</span></h3><ul><li>Supported users with library computers, printing services, and online resources.</li><li>Diagnosed hardware, software, and network issues for staff and library users.</li><li>Installed, configured, and maintained Windows PCs, printers, and peripherals.</li></ul></section>
      <section><h2>Projects</h2><h3>Looply, Component Library</h3><p>Reusable full-stack neumorphic React component library built with TypeScript, React, Next.js, Tailwind CSS 4, Prisma ORM, NextAuth.js, PostgreSQL (Neon), Rollup, and npm publishing support.</p><ul><li>Provisioned GCP infrastructure with reusable Terraform modules for development, QA, and production.</li><li>Implemented GitHub Actions CI/CD with Docker, Artifact Registry, pull request validation, branch deployments, and GCP Secret Manager.</li></ul></section>
      <section><h2>Education</h2><h3>University of Reading <span>September 2023 - 2027</span></h3><p>BSc (Hons) Computer Science, final year, graduating in 2027 and on track for a first.</p><h3>Hartford Regional College</h3><p>Level 3 Extended Diploma in Information Technology, Triple Distinction* (D*D*D*).</p></section>
      <section><h2>Skills</h2><div className="flex flex-wrap gap-2 [&_span]:rounded-[5px] [&_span]:border [&_span]:border-[#454545] [&_span]:bg-[#303030] [&_span]:px-[9px] [&_span]:py-[7px] [&_span]:text-[11px] [&_span]:text-[#d5d5d0]">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>
    </main>
  );
}
import Link from "next/link";
