import Image from "next/image";

const signals = [
  { label: "Learning", title: "Terraform infrastructure", detail: "Reusable infrastructure modules and safer multi-environment delivery.", href: "https://developer.hashicorp.com/terraform/docs", image: "https://cdn.simpleicons.org/terraform/22211E" },
  { label: "Learning", title: "Google Cloud Platform", detail: "Cloud architecture, observability, and scalable application delivery.", href: "https://cloud.google.com/docs", image: "https://cdn.simpleicons.org/googlecloud/22211E" },
  { label: "Building", title: "CI/CD that removes friction", detail: "Delivery pipelines that make releases predictable and fast.", href: "https://docs.github.com/en/actions", image: "https://cdn.simpleicons.org/githubactions/22211E" },
];

const impacts = [
  { title: "Release automation", detail: "Reduced iOS release time from around four hours to 5-10 minutes with GitHub Actions and Ruby." },
  { title: "Open-source component library", detail: "Built and published Looply, a reusable React component library with TypeScript and Tailwind CSS, reaching 100+ npm installs." },
];

export function CurrentSignals() {
  return (
    <section className="order-4 border-b border-[var(--line)] px-5 py-8 sm:px-9 sm:py-10" aria-labelledby="impact-heading">
      <p className="mb-3 mt-0 font-mono text-[11px] text-[var(--muted)]">## Highlights</p>
      <h2 className="mb-6 mt-0 text-2xl font-semibold tracking-[-.05em]" id="impact-heading">Things I&apos;ve improved</h2>
      <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {impacts.map((impact, index) => (
          <article className="grid gap-3 py-6 sm:grid-cols-[45px_minmax(0,1fr)_minmax(0,1.15fr)] sm:gap-6" key={impact.title}>
            <span className="font-mono text-[10px] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="m-0 text-lg font-semibold tracking-[-.04em]">{impact.title}</h3>
            <p className="m-0 text-[13px] leading-[1.7] text-[var(--muted)]">{impact.detail}</p>
          </article>
        ))}
      </div>

      <section className="mt-10" aria-labelledby="signals-heading">
        <p className="mb-3 mt-0 font-mono text-[11px] text-[var(--muted)]">current.md</p>
        <h2 className="mb-5 mt-0 text-xl font-semibold tracking-[-.05em]" id="signals-heading">What I&apos;m learning</h2>
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {signals.map((signal, index) => (
            <a className="grid gap-3 py-5 transition-colors hover:bg-[var(--highlight)] sm:grid-cols-[40px_34px_minmax(0,1fr)_minmax(0,1.1fr)] sm:items-center sm:gap-5" href={signal.href} key={signal.title} rel="noreferrer" target="_blank">
              <span className="font-mono text-[10px] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
              <Image alt="" className="h-7 w-7 object-contain" height={28} src={signal.image} unoptimized width={28} />
              <div><p className="mb-1 mt-0 font-mono text-[10px] text-[var(--muted)]">{signal.label}</p><h3 className="m-0 text-base font-semibold tracking-[-.04em]">{signal.title}</h3></div>
              <p className="m-0 text-xs leading-[1.6] text-[var(--muted)]">{signal.detail}</p>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
