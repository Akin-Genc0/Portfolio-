import Link from "next/link";

const elancoAchievements = [
  "Reduced iOS release time from 4 hours to 5-10 minutes by automating build, signing and deployment workflows using GitHub Actions and Fastlane.",
  "Built and shipped production web applications using TypeScript and Next.js, developing reusable components integrated with Kontent.ai CMS.",
  "Worked in cross-functional Agile teams, collaborating with software engineers, product and business stakeholders through sprint planning, stand-ups, development, code review, testing and production release.",
  "Developed reusable CI/CD workflows and shared GitHub Actions to standardise automated delivery across multiple repositories.",
  "Implemented and validated Schema.org structured data across production pet-health websites, taking changes through testing and release.",
  "Developed monitoring and alerting solutions across Azure and GCP to detect infrastructure failures and notify engineering teams proactively.",
];

export default function CvPage() {
  return (
    <main className="mx-auto max-w-[850px] p-[72px_24px] [&_h2]:mb-[14px] [&_h2]:mt-9 [&_h2]:text-base [&_h3]:mb-2 [&_h3]:mt-0 [&_h3]:text-sm [&_h3_span]:text-[11px] [&_h3_span]:font-normal [&_h3_span]:text-[var(--muted)] [&_li]:text-[13px] [&_li]:leading-[1.7] [&_li]:text-[var(--muted)] [&_p]:text-[13px] [&_p]:leading-[1.7] [&_p]:text-[var(--muted)] [&_ul]:pl-5">
      <Link className="mb-9 inline-block text-xs text-[var(--muted)]" href="/">&lt;- Back to portfolio</Link>
      <header className="border-b border-[var(--line)] pb-[30px]">
        <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[var(--muted)]">CV</p>
        <h1 className="m-0 text-[clamp(38px,7vw,64px)] tracking-[-.06em]">Akin Genc</h1>
        <p>Final-year Computer Science student and Software Engineer.</p>
        <p>
          <a href="mailto:akingenc19@gmail.com">akingenc19@gmail.com</a> | <a href="https://www.linkedin.com/in/akin-genc-1a5a02278/" rel="noreferrer" target="_blank">LinkedIn</a> | <a href="https://github.com/Akin-Genc0" rel="noreferrer" target="_blank">GitHub</a> | +44 7305 276645
        </p>
      </header>

      <section>
        <h2>Profile</h2>
        <p>Final-year Computer Science student with 14 months of commercial software engineering experience at Elanco, working across web development, cloud infrastructure and DevOps. Experienced in delivering production software and automating workflows.</p>
      </section>

      <section>
        <h2>Education</h2>
        <h3>University of Reading <span>Sep 2023 - Jun 2027</span></h3>
        <p>BSc (Hons) Computer Science with Industrial Year. Final Year, predicted First Class.</p>
        <p>Relevant Modules: Object-Oriented Programming (87%), Data Structures and Algorithms (71%), Programming in Python (77%).</p>
      </section>

      <section>
        <h2>Experience</h2>
        <h3>Software Engineer, Elanco Animal Health <span>Jun 2025 - Aug 2026</span></h3>
        <p>Industrial Year | Software Engineering, Web and Delivery Engineering</p>
        <ul>{elancoAchievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
        <h3>IT Support, Waltham Cross Library <span>Oct 2022 - Jun 2023</span></h3>
        <ul><li>Provided first-line technical support, troubleshooting PCs, software, printers and network issues while communicating clearly with technical and non-technical users.</li></ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p><strong>Languages:</strong> TypeScript, JavaScript, Java, Go</p>
        <p><strong>Application Development:</strong> React, Next.js, Node.js, PostgreSQL</p>
        <p><strong>Cloud &amp; Delivery:</strong> Git, GitHub Actions, CI/CD, Docker, Terraform, Microsoft Azure, Google Cloud Platform</p>
        <p><strong>Engineering Practices:</strong> Agile delivery, secure secrets handling, cross-functional collaboration</p>
      </section>

      <section>
        <h2>Projects</h2>
        <h3>Looply, Open-Source React Component Library</h3>
        <p>TypeScript / React / Next.js</p>
        <ul>
          <li>Built and published an open-source component library and documentation platform with 15+ reusable components, focusing on reusable APIs, responsive design and consistent UI patterns.</li>
          <li>Designed components for npm distribution and automated validation and deployment through GitHub Actions.</li>
        </ul>
        <h3>tfpretty, Terraform Plan Viewer</h3>
        <p>Go / Cobra / Bubble Tea</p>
        <ul><li>Built an open-source Go CLI that runs Terraform plans, parses JSON output and presents infrastructure changes in a cleaner terminal interface.</li></ul>
      </section>
    </main>
  );
}
