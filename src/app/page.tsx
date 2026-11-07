import { company } from "@/data/company";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

// Structured data (schema.org JSON-LD). It is plain text inside the HTML,
// which makes it the easiest thing for an n8n workflow to parse.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  description: company.summary,
  industry: company.industry,
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: company.employeeCount,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.headquarters.street,
    postalCode: company.headquarters.postalCode,
    addressLocality: company.headquarters.city,
    addressCountry: "CH",
  },
  email: company.email,
  telephone: company.phone,
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
