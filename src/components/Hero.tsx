import { company, samplePipeline } from "@/data/company";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24"
    >
      <div>
        <h1
          id="hero-heading"
          className="text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {company.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          {company.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-md bg-lake px-5 py-3 font-medium text-white hover:bg-ink"
          >
            Talk to our sales team
          </a>
          <a
            href="#services"
            className="rounded-md border border-ink/25 px-5 py-3 font-medium hover:border-ink"
          >
            See what we offer
          </a>
        </div>
      </div>

      <figure className="rounded-xl bg-ink p-6 text-paper sm:p-8">
        <figcaption className="text-sm text-paper/70">
          How a lead moves through a NovaGrowth pipeline
        </figcaption>
        <ol className="mt-6 space-y-5">
          {samplePipeline.map((step) => (
            <li key={step.stage}>
              <div className="flex justify-between text-sm">
                <span>{step.stage}</span>
                <span className="text-paper/70">{step.share}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-paper/15">
                <div
                  className="h-2 rounded-full bg-sun"
                  style={{ width: `${step.share}%` }}
                />
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-paper/60">Sample data, for illustration.</p>
      </figure>
    </section>
  );
}
