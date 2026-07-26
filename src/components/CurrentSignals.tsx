import Image from "next/image";

const signals = [
  {
    label: "Learning",
    title: "Terraform infrastructure",
    detail:
      "Reusable infrastructure modules and safer multi-environment delivery.",
    href: "https://developer.hashicorp.com/terraform/docs",
    image: "https://cdn.simpleicons.org/terraform/7B42BC",
  },
  {
    label: "Learning",
    title: "Google Cloud Platform",
    detail:
      "Cloud architecture, observability, and scalable application delivery.",
    href: "https://cloud.google.com/docs",
    image: "https://cdn.simpleicons.org/googlecloud/4285F4",
  },
  {
    label: "Building",
    title: "CI/CD that removes friction",
    detail: "Delivery pipelines that make releases predictable and fast.",
    href: "https://docs.github.com/en/actions",
    image: "https://cdn.simpleicons.org/githubactions/2088FF",
  },
];

export function CurrentSignals() {
  return (
    <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)] lg:[grid-area:signals] lg:p-[26px]" aria-labelledby="signals-heading">
      <div className="mb-5 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">Current signals</p>
          <h2 className="m-0 text-xl tracking-[-.04em]" id="signals-heading">What I&apos;m learning</h2>
        </div>
        <span className="text-[11px] text-[var(--muted)]">Updated regularly</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {signals.map((signal, index) => (
          <a
            href={signal.href}
            key={signal.title}
            rel="noreferrer"
            target="_blank" className="min-h-[220px] overflow-hidden rounded-[9px] border border-[#454545] bg-[var(--panel-deep)] pb-[18px] hover:border-[#555]"
          >
            <Image
              alt=""
              className="mb-[18px] block !h-[110px] !w-full bg-[#202020] p-6 object-contain"
              height={160}
              src={signal.image}
              unoptimized
              width={300}
            />
            <span className="mx-[18px] block text-xs text-[#858585]">0{index + 1}</span>
            <p className="mx-[18px] mt-7 mb-2 block text-[10px] uppercase tracking-[.08em] text-[var(--muted)]">{signal.label}</p>
            <h3 className="mx-[18px] my-0 block text-base leading-[1.3]">{signal.title}</h3>
            <p className="mx-[18px] block text-[11px] leading-[1.6] text-[var(--muted)]">{signal.detail}</p>
            <span className="mx-[18px] block text-[11px] text-[var(--muted)] underline underline-offset-3">Open resource -&gt;</span>
          </a>
        ))}
      </div>
    </section>
  );
}
