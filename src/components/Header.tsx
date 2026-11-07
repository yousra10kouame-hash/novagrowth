import { company } from "@/data/company";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <rect x="1" y="12" width="5" height="9" rx="1" fill="#0f766e" />
            <rect x="8.5" y="7" width="5" height="14" rx="1" fill="#0f766e" />
            <rect x="16" y="1" width="5" height="20" rx="1" fill="#f0b544" />
          </svg>
          {company.brand}
        </a>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden hover:text-lake sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-ink px-4 py-2 font-medium text-paper hover:bg-lake"
          >
            Contact sales
          </a>
        </nav>
      </div>
    </header>
  );
}
