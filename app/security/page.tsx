import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Meridian AI's security posture: SOC 2 Type II certified, end-to-end encryption, responsible disclosure program, and data handling practices.",
  alternates: { canonical: "https://meridian.ai/security" },
};

export default function SecurityPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section className="py-32 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-6">
                Security
              </p>
              <h1
                className="text-5xl sm:text-6xl font-bold text-[#FAFAFA] mb-8"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Security is infrastructure, not a feature.
              </h1>
              <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-[55ch]">
                Meridian handles production AI workloads for teams that cannot afford a breach.
                Here is exactly what we do to earn that trust.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="mb-12">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                  Certifications
                </p>
                <h2 className="text-3xl font-semibold text-[#FAFAFA]">
                  Third-party verified.
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay={0.05}>
                <article className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center">
                      <ShieldCheck />
                    </div>
                    <h3 className="text-[#FAFAFA] font-semibold">SOC 2 Type II</h3>
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    Audited annually by an independent third party across the Security, Availability,
                    and Confidentiality trust service criteria. Reports available to prospective
                    enterprise customers under NDA.
                  </p>
                  <Link
                    href="mailto:security@meridian.ai"
                    className="text-sm text-[#14B8A6] hover:text-[#2DD4BF] transition-colors self-start"
                  >
                    Request our SOC 2 report →
                  </Link>
                </article>
              </FadeIn>

              <FadeIn delay={0.1}>
                <article className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center">
                      <LockIcon />
                    </div>
                    <h3 className="text-[#FAFAFA] font-semibold">GDPR & CCPA compliant</h3>
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    Data processing agreements available for all customers. Sub-processor list
                    maintained and updated quarterly. Data residency in US or EU selectable at
                    account level.
                  </p>
                  <Link
                    href="/privacy"
                    className="text-sm text-[#14B8A6] hover:text-[#2DD4BF] transition-colors self-start"
                  >
                    Read the privacy policy →
                  </Link>
                </article>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Encryption */}
        <section className="py-24 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="mb-12">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                  Data protection
                </p>
                <h2 className="text-3xl font-semibold text-[#FAFAFA]">
                  Encryption standards.
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#3F3F46]/40 rounded-xl overflow-hidden border border-[#3F3F46]/40">
              {[
                {
                  label: "In transit",
                  value: "TLS 1.2+",
                  detail:
                    "All data in transit is encrypted using TLS 1.2 or higher. TLS 1.0 and 1.1 are disabled. Certificates are renewed automatically.",
                },
                {
                  label: "At rest",
                  value: "AES-256",
                  detail:
                    "All data at rest is encrypted using AES-256. Encryption keys are managed by AWS KMS with automatic annual rotation.",
                },
                {
                  label: "Secrets",
                  value: "Vault-managed",
                  detail:
                    "API keys and credentials are stored in HashiCorp Vault with short-lived, dynamically generated tokens and full audit trails.",
                },
              ].map(({ label, value, detail }, i) => (
                <FadeIn key={label} delay={i * 0.07}>
                  <div className="bg-[#09090B] p-8 h-full flex flex-col gap-4">
                    <p className="text-xs font-medium tracking-widest uppercase text-[#52525B]">
                      {label}
                    </p>
                    <p className="text-2xl font-semibold text-[#14B8A6] font-mono">{value}</p>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">{detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Access controls */}
        <section className="py-24 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="mb-12">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                  Access control
                </p>
                <h2 className="text-3xl font-semibold text-[#FAFAFA]">
                  Least-privilege by default.
                </h2>
              </div>
            </FadeIn>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none" role="list">
              {[
                {
                  heading: "Role-based access control",
                  body: "Fine-grained RBAC across every resource. Admin, operator, and viewer roles are scoped to teams, environments, or individual models.",
                },
                {
                  heading: "SSO & SCIM provisioning",
                  body: "SAML 2.0 SSO supported with Okta, Azure AD, and Google Workspace. SCIM provisioning for automated user lifecycle management.",
                },
                {
                  heading: "Audit logs",
                  body: "Immutable audit trail of every API call, configuration change, and user action. Exportable to SIEM via webhook or S3.",
                },
                {
                  heading: "Phishing-resistant MFA",
                  body: "FIDO2/WebAuthn enforced on all internal admin accounts. TOTP available for all users. SMS authentication is not supported.",
                },
              ].map(({ heading, body }, i) => (
                <FadeIn key={heading} delay={i * 0.07}>
                  <li className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-6 flex flex-col gap-3">
                    <h3 className="text-[#FAFAFA] font-semibold text-sm">{heading}</h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">{body}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* Responsible disclosure */}
        <section id="disclosure" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="max-w-2xl">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                  Responsible disclosure
                </p>
                <h2
                  className="text-3xl font-semibold text-[#FAFAFA] mb-6"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Found something? Tell us first.
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed mb-8">
                  If you discover a security vulnerability in Meridian's systems, please give us a
                  reasonable opportunity to respond before disclosing publicly. We commit to
                  acknowledging valid reports within 2 business days, providing a resolution
                  timeline within 10 business days, and not pursuing legal action against
                  researchers acting in good faith.
                </p>

                <div className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-6 flex flex-col gap-4 mb-8">
                  <p className="text-xs font-medium tracking-widest uppercase text-[#52525B]">
                    In scope
                  </p>
                  <ul className="flex flex-col gap-2 list-none" role="list">
                    {[
                      "api.meridian.ai and all subdomains",
                      "Meridian dashboard (app.meridian.ai)",
                      "Meridian CLI and SDKs",
                      "Authentication and authorisation systems",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                        <span className="text-[#14B8A6] mt-0.5 shrink-0" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="mailto:security@meridian.ai"
                  className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 bg-[#14B8A6] text-[#09090B] rounded-lg hover:bg-[#2DD4BF] transition-colors min-h-[44px]"
                >
                  Email security@meridian.ai
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ShieldCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
        stroke="#14B8A6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="#14B8A6" strokeWidth="1.5" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill="#14B8A6" />
    </svg>
  );
}
