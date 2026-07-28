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
      className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)] lg:[grid-area:highlights] lg:p-[26px]"
      aria-labelledby="case-studies-heading"
    >
      <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
        Selected case studies
      </p>
      <h2
        className="mb-6 mt-0 text-xl tracking-[-.04em]"
        id="case-studies-heading"
      >
        Work with measurable outcomes
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <article
            className="rounded-[9px] border border-[#454545] bg-[var(--panel)] p-[18px]"
            key={caseStudy.title}
          >
            <p className="mb-3 mt-0 text-[10px] uppercase tracking-[.08em] text-[var(--muted)]">
              {caseStudy.label}
            </p>
            <h3 className="m-0 text-base">{caseStudy.title}</h3>
            <p className="mb-0 mt-3 text-[12px] leading-[1.7] text-[var(--muted)]">
              {caseStudy.detail}
            </p>
            {caseStudy.href && (
              <a
                className="mt-4 inline-block text-[11px] text-[var(--muted)] underline underline-offset-3 hover:text-[var(--text)]"
                href="https://loopl-y.com"
                rel="noreferrer"
                target="_blank"
              >
                Explore Looply -&gt;
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
