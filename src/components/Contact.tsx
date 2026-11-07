import { company } from "@/data/company";

const { headquarters: hq } = company;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-glacier"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Contact our sales team
          </h2>
          <p className="mt-5 max-w-prose leading-relaxed text-ink/80">
            Tell us about your sales process and we will show you where
            NovaGrowth can save your team time. We reply within one business
            day.
          </p>
        </div>

        <dl className="space-y-5">
          <div>
            <dt className="text-sm text-ink/60">Email</dt>
            <dd className="font-medium">
              <a
                href={`mailto:${company.email}`}
                className="underline underline-offset-4 hover:text-lake"
              >
                {company.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink/60">Phone</dt>
            <dd className="font-medium">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="hover:text-lake"
              >
                {company.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink/60">Office</dt>
            <dd className="font-medium">
              <address className="not-italic">
                {company.legalName}
                <br />
                {hq.street}
                <br />
                {hq.postalCode} {hq.city}, {hq.country}
              </address>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink/60">Hours</dt>
            <dd className="font-medium">{company.hours}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
