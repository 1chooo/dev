import Link from "next/link";

const social = [
  { label: "twitter", href: "https://twitter.com/1chooo" },
  { label: "github", href: "https://github.com/1chooo" },
  { label: "linkedin", href: "https://www.linkedin.com/in/1chooo" },
];

export function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-[var(--border)] pt-4">
      <div className="flex items-center justify-between gap-4 text-xs text-[var(--muted)] md:text-sm">
        <div className="flex items-center gap-4 whitespace-nowrap">
          {social.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="shrink-0 whitespace-nowrap">taipei · la · sf</p>
      </div>
    </footer>
  );
}
