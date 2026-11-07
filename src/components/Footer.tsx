import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-ink/60 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {company.legalName}, Zurich,
          Switzerland
        </p>
        <p>Fictional company for demonstration purposes only.</p>
      </div>
    </footer>
  );
}
