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
    <section className="signals panel" aria-labelledby="signals-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Current signals</p>
          <h2 id="signals-heading">What I&apos;m learning</h2>
        </div>
        <span className="signals-status">Updated regularly</span>
      </div>
      <div className="signals-grid">
        {signals.map((signal, index) => (
          <a
            href={signal.href}
            key={signal.title}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt=""
              className="signal-image"
              height={160}
              src={signal.image}
              unoptimized
              width={300}
            />
            <span className="signal-number">0{index + 1}</span>
            <p className="signal-label">{signal.label}</p>
            <h3>{signal.title}</h3>
            <p>{signal.detail}</p>
            <span className="signal-link">Open resource -&gt;</span>
          </a>
        ))}
      </div>
    </section>
  );
}
