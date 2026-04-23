"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Product" },
  { href: "#team", label: "Team" },
  { href: "#security", label: "Security" },
  { href: "#careers", label: "Careers" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-200"
      style={{
        backgroundColor: scrolled ? "var(--paper)" : "var(--paper)",
        borderBottom: `1px solid var(--rule)`,
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-widest uppercase"
          style={{ color: "var(--ink)" }}
          aria-label="Meridian AI home"
        >
          Meridian
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm transition-colors duration-150"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--ink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="text-sm font-medium px-4 py-2 transition-colors duration-150"
            style={{
              border: "1px solid var(--rule)",
              color: "var(--ink)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--ink)";
              (e.currentTarget as HTMLElement).style.color = "var(--paper)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "";
              (e.currentTarget as HTMLElement).style.color = "var(--ink)";
            }}
          >
            Request access
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{ color: "var(--ink)" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-6"
          style={{ borderColor: "var(--rule)", backgroundColor: "var(--paper)" }}
        >
          <ul className="flex flex-col gap-4" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-base"
                  style={{ color: "var(--ink)" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="text-sm font-medium px-4 py-3 text-center min-h-[44px] flex items-center justify-center"
            style={{
              backgroundColor: "var(--ink)",
              color: "var(--paper)",
            }}
            onClick={() => setOpen(false)}
          >
            Request access
          </Link>
        </div>
      )}
    </header>
  );
}
