import { services } from "@/data/company";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2
          id="services-heading"
          className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Products for every step between first contact and signed deal
        </h2>
        <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.name} className="border-t-2 border-lake pt-5">
              <article>
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink/75">
                  {service.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
