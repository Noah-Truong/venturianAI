"use client";

import Link from "next/link";

const nav = {
  Product: [
    { label: "Evaluation", href: "#features" },
    { label: "Observability", href: "#features" },
    { label: "Deployment", href: "#features" },
    { label: "SDK docs", href: "#features" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy policy", href: "#" },
    { label: "Terms of service", href: "#" },
    { label: "Security policy", href: "#security" },
    { label: "Cookie settings", href: "#" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com/meridianai" },
    { label: "Twitter", href: "https://twitter.com/meridianai" },
    { label: "LinkedIn", href: "https://linkedin.com/company/meridianai" },
    { label: "hello@meridianai.com", href: "mailto:hello@meridianai.com" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--rule)" }} aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20">

        {/* Top: logo + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div>
            <p className="font-mono text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--ink)" }}>
              Meridian
            </p>
            <p className="text-xs" style={{ color: "var(--muted)", maxWidth: "36ch" }}>
              Infrastructure for engineering teams building AI systems that need
              to hold up under real-world load.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium self-start sm:self-auto transition-colors duration-150 min-h-[44px]"
            style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--ink)";
            }}
          >
            Request infrastructure access <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(nav).map(([group, links]) => (
            <div key={group}>
              <p className="font-mono text-[10px] tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
                {group}
              </p>
              <ul className="space-y-3" role="list">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors duration-150"
                      style={{ color: "var(--muted)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: legal */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          <p className="font-mono text-[11px]" style={{ color: "var(--muted)" }}>
            © {year} Meridian AI, Inc. San Francisco, CA
          </p>
          <p className="font-mono text-[11px]" style={{ color: "var(--muted)" }}>
            AI infrastructure · SOC 2 Type II · GDPR ready
          </p>
        </div>

      </div>
    </footer>
  );
}
