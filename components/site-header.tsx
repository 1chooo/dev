"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        "text-lg transition-colors",
        isActive
          ? "font-extrabold text-[var(--foreground)]"
          : "font-normal text-[var(--muted)] hover:text-[var(--foreground)]",
      )}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <nav>
      <div className="flex items-center justify-between font-extrabold">
        <Link
          href="/"
          className="inline-flex items-center text-2xl transition-opacity hover:opacity-70"
        >
          lin hugo
          <span aria-hidden="true" className="terminal-cursor ml-1 inline-block text-red-500">
            _
          </span>
        </Link>
      </div>
      <div className="mt-1.5 flex gap-4">
        <NavLink href="/">about</NavLink>
        <NavLink href="/blog">blog</NavLink>
        <NavLink href="/projects">projects</NavLink>
      </div>
    </nav>
  );
}
