import Image from "next/image";

const signals = [
  {
    label: "Learning",
    title: "Terraform infrastructure",
    detail:
      "Reusable infrastructure modules and safer multi-environment delivery.",
    href: "https://developer.hashicorp.com/terraform/docs",
    image: "https://cdn.simpleicons.org/terraform/D5D5D0",
  },
  {
    label: "Learning",
    title: "Google Cloud Platform",
    detail:
      "Cloud architecture, observability, and scalable application delivery.",
    href: "https://cloud.google.com/docs",
    image: "https://cdn.simpleicons.org/googlecloud/D5D5D0",
  },
  {
    label: "Building",
    title: "CI/CD that removes friction",
    detail: "Delivery pipelines that make releases predictable and fast.",
    href: "https://docs.github.com/en/actions",
    image: "https://cdn.simpleicons.org/githubactions/D5D5D0",
  },
];

const impacts = [
  {
    title: "Release automation",
    detail:
      "Reduced iOS release time from around four hours to 5-10 minutes with GitHub Actions and Ruby.",
  },
  {
    title: "Open-source component library",
    detail:
      "Built and published Looply, a reusable React component library with TypeScript and Tailwind CSS, reaching 100+ npm installs.",
  },
];

export function CurrentSignals() {
  return (
    <section
      className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)] lg:[grid-area:signals] lg:p-[26px]"
      aria-labelledby="signals-heading"
    >
      <div className="mb-5 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Current signals
          </p>
          <h2 className="m-0 text-xl tracking-[-.04em]" id="signals-heading">
            What I&apos;m learning
          </h2>
        </div>
        <span className="text-[11px] text-[var(--muted)]">
          Updated regularly
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {signals.map((signal, index) => (
          <a
            href={signal.href}
            key={signal.title}
            rel="noreferrer"
            target="_blank"
            className="min-h-[220px] overflow-hidden rounded-[9px] border border-[#454545] bg-[var(--panel)] pb-[18px] hover:border-[#555]"
          >
            <Image
              alt=""
              className="mb-[18px] block !h-[110px] !w-full bg-[var(--panel)] p-6 object-contain"
              height={160}
              src={signal.image}
              unoptimized
              width={300}
            />
            <span className="mx-[18px] block text-xs text-[#858585]">
              0{index + 1}
            </span>
            <p className="mx-[18px] mt-7 mb-2 block text-[10px] uppercase tracking-[.08em] text-[var(--muted)]">
              {signal.label}
            </p>
            <h3 className="mx-[18px] my-0 block text-base leading-[1.3]">
              {signal.title}
            </h3>
            <p className="mx-[18px] block text-[11px] leading-[1.6] text-[var(--muted)]">
              {signal.detail}
            </p>
            <span className="mx-[18px] block text-[11px] text-[var(--muted)] underline underline-offset-3">
              Open resource -&gt;
            </span>
          </a>
        ))}
      </div>
      <section
        className="mt-8 border-t border-[var(--line)] pt-7"
        aria-labelledby="impact-heading"
      >
        <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
          Recent impact
        </p>
        <h2 className="mb-5 mt-0 text-xl tracking-[-.04em]" id="impact-heading">
          What I&apos;ve delivered
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {impacts.map((impact) => (
            <article
              className="rounded-[9px] border border-[#454545] bg-[var(--panel)] p-[18px]"
              key={impact.title}
            >
              <h3 className="m-0 text-base">{impact.title}</h3>
              <p className="mb-0 mt-3 text-[12px] leading-[1.7] text-[var(--muted)]">
                {impact.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
