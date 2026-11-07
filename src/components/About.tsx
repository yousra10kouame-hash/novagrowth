import { company } from "@/data/company";

const { headquarters: hq } = company;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            About {company.legalName}
          </h2>
          <p className="mt-5 max-w-prose leading-relaxed text-ink/80">
            {company.legalName} is a {company.industry} company headquartered
            in {hq.city}, {hq.country}. With {company.employeesLabel.toLowerCase()}{" "}
            employees, we build software for {company.customers.toLowerCase()}.
            Our business focus: {company.businessFocus.toLowerCase()}.
          </p>
          <p className="mt-4 max-w-prose leading-relaxed text-ink/80">
            We operate a subscription model. Customers license our products as
            software-as-a-service and pay on a recurring basis.
          </p>
        </div>

        {/* A description list (dl) is the semantic element for label/value pairs. */}
        <dl
          id="company-facts"
          className="divide-y divide-line self-start rounded-xl border border-line bg-white"
        >
          <Fact label="Company" value={company.legalName} />
          <Fact label="Headquarters" value={`${hq.city}, ${hq.country}`} />
          <Fact label="Industry" value={company.industry} />
          <Fact label="Employees" value={company.employeesLabel} />
          <Fact label="Business model" value={company.businessModel} />
          <Fact label="Customers" value={company.customers} />
        </dl>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="text-sm text-ink/60">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
