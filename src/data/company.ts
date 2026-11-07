/**
 * Single source of truth for every company fact on the site.
 * Components and the JSON-LD block all read from here, so a fact
 * (for example the employee count) can never disagree between sections.
 */

export const company = {
  brand: "NovaGrowth",
  legalName: "NovaGrowth GmbH",
  tagline: "Your sales team, minus the busywork.",
  summary:
    "NovaGrowth helps medium-sized and enterprise B2B sales teams capture leads, keep their CRM clean, and see which activities actually drive revenue.",
  headquarters: {
    street: "Beispielstrasse 12",
    postalCode: "8001",
    city: "Zurich",
    country: "Switzerland",
  },
  industry: "B2B software / sales technology",
  employeeCount: 140,
  employeesLabel: "Approximately 140",
  businessModel:
    "B2B software-as-a-service (SaaS): customers subscribe to NovaGrowth products on a recurring basis.",
  customers: "Medium-sized and enterprise B2B organizations",
  businessFocus: "Helping sales teams improve operational efficiency",
  email: "hello@novagrowth.example",
  phone: "+41 44 000 00 00",
  hours: "Monday to Friday, 08:30 to 17:30 CET",
} as const;

export type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Customer acquisition software",
    description:
      "Capture inbound interest from your website, campaigns and events, and route every prospect to the right salesperson within minutes.",
  },
  {
    name: "Lead management tools",
    description:
      "Score, qualify and prioritise leads with rules your team controls, so reps start the day with the accounts most likely to buy.",
  },
  {
    name: "CRM integrations",
    description:
      "Two-way connectors keep contacts, deals and activities in sync with the CRM you already use, without manual exports or duplicate records.",
  },
  {
    name: "Sales analytics",
    description:
      "Dashboards for pipeline health, conversion by stage and rep workload, built to answer the questions sales leaders ask every week.",
  },
];

/** Sample numbers for the hero illustration only. */
export const samplePipeline = [
  { stage: "New leads", share: 100 },
  { stage: "Qualified", share: 64 },
  { stage: "Meeting booked", share: 33 },
  { stage: "Deal won", share: 14 },
];
