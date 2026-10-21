const caseStudies = [
  {
    title: "Mobile release automation",
    label: "GitHub Actions, YAML, Ruby",
    detail:
      "Replaced a time-consuming iOS and Android release process involving manual package builds, approval emails, signing credentials, and publishing with an automated workflow. Reduced iOS deployment time from around four hours to 5-10 minutes.",
  },
  {
    title: "Looply component library",
    label: "TypeScript, React, Tailwind CSS",
    detail:
      "Noticing a gap for a reusable neumorphic component library, designed, built, and published Looply with a live documentation site and npm package, reaching 100+ downloads.",
    href: "https://looply-y.com",
  },
  {
    title: "Cloud observability",
    label: "Terraform, Azure, Google Cloud",
    detail:
      "As cloud spend increased, built reusable Terraform alerting modules across Azure and Google Cloud, then shipped them for other teams to monitor costs and act before overspending.",
  },
  {
    title: "Generative engine optimization",
    label: "TypeScript, Next.js, Schema.org",
    detail:
      "Generative AI tools were pulling Pet Portal product details from third-party sources, risking misinformation. Implemented Schema.org data so AI systems can access accurate first-party product information.",
  },
];

export function CaseStudies() {
  return (
    <section
      className="order-5 border-b border-[var(--line)] px-5 py-8 sm:px-9 sm:py-10"
      aria-labelledby="case-studies-heading"
    >
      <p className="mb-3 mt-0 font-mono text-[11px] text-[var(--muted)]">
        case-studies.md
      </p>
      <h2
        className="mb-6 mt-0 text-2xl font-semibold tracking-[-.05em]"
        id="case-studies-heading"
      >
        Work with measurable outcomes
      </h2>
      <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {caseStudies.map((caseStudy, index) => (
          <article className="grid gap-4 py-6 md:grid-cols-[50px_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-6" key={caseStudy.title}>
            <span className="font-mono text-[11px] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="mb-3 mt-0 font-mono text-[10px] text-[var(--muted)]">{caseStudy.label}</p>
              <h3 className="m-0 text-lg font-semibold tracking-[-.04em]">{caseStudy.title}</h3>
            </div>
            <div>
              <p className="m-0 text-[13px] leading-[1.7] text-[var(--muted)]">{caseStudy.detail}</p>
            {caseStudy.href && (
              <a
                className="mt-4 inline-block font-mono text-[10px] text-[var(--muted)] underline underline-offset-3 hover:text-[var(--text)]"
                href={caseStudy.href}
                rel="noreferrer"
                target="_blank"
              >
                explore Looply
              </a>
            )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
