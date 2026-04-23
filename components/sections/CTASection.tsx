"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { HandshakeIcon } from "@/components/ui/handshake-icon";

export function CTASection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !name) return;
    setStatus("loading");
    // Replace with real signup API call
    setTimeout(() => setStatus("success"), 1200);
  }

  return (
    <section
      id="signup"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="signup-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-center">

        {/* Left */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            Create your account
          </p>
          <h2 id="signup-heading" className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: "var(--ink)" }}>
            Get started
            <br />in 5 minutes.
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)", maxWidth: "44ch" }}>
            All you need is your student email. We&apos;ll take care of the rest.
            Sign up with your .edu address — most accounts are active and earning within 24 hours.
          </p>
          <ul className="space-y-2">
            {[
              ".edu email required",
              "Direct deposit or PayPal",
              "Cancel or pause any time",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--accent)" }} aria-hidden="true">✓</span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="mailto:hello@venturianai.com"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--accent)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-hi)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
            >
              Or email us a question first <span aria-hidden="true">→</span>
            </a>
            <p className="mt-1 font-mono text-[11px]" style={{ color: "var(--dim)" }}>
              Optional — we reply within one business day.
            </p>
          </div>
        </motion.div>

        {/* Right: signup form */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          {status === "success" ? (
            <div
              className="p-8 text-center"
              style={{ border: "1px solid var(--rule)" }}
              role="status"
              aria-live="polite"
            >
              <div className="text-2xl mb-3" aria-hidden="true" style={{ color: "var(--accent)" }}>✓</div>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>
                Account created. Check your email.
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                We&apos;ve sent identity verification instructions to {email}.
                Most verifications complete within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
              style={{ border: "1px solid var(--rule)", padding: "2rem" }}
            >
              {/* Handshake primary CTA */}
              <Link
                href="https://app.joinhandshake.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-medium transition-colors duration-150 min-h-[44px]"
                style={{
                  backgroundColor: "#B4E234",
                  color: "#1a1a1a",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#A3CF29")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#B4E234")}
              >
                <HandshakeIcon size={18} />
                Sign up on Handshake
              </Link>

              <div className="flex items-center gap-3" style={{ color: "var(--dim)" }}>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--rule)" }} />
                <span className="font-mono text-[11px] uppercase tracking-widest">or enter details</span>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--rule)" }} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-[11px] tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jordan Mitchell"
                  className="px-4 py-3 text-sm transition-colors duration-150 min-h-[44px]"
                  style={{ backgroundColor: "transparent", border: "1px solid var(--rule)", color: "var(--ink)" }}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--rule)")}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[11px] tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  className="px-4 py-3 text-sm transition-colors duration-150 min-h-[44px]"
                  style={{ backgroundColor: "transparent", border: "1px solid var(--rule)", color: "var(--ink)" }}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--rule)")}
                  aria-describedby={status === "error" ? "form-error" : undefined}
                />
              </div>

              {status === "error" && (
                <p id="form-error" className="text-xs" style={{ color: "#E63946" }} role="alert">
                  Something went wrong. Try emailing hello@venturianai.com directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3.5 text-sm font-medium transition-colors duration-150 min-h-[44px]"
                style={{
                  backgroundColor: status === "loading" ? "var(--muted)" : "var(--ink)",
                  color: "var(--paper)",
                  cursor: status === "loading" ? "wait" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--ink)";
                }}
                aria-disabled={status === "loading"}
              >
                {status === "loading" ? "Creating account..." : "Create my account"}
              </button>

              <p className="text-xs text-center" style={{ color: "var(--dim)" }}>
                By signing up you agree to our{" "}
                <a href="/privacy" className="underline underline-offset-2" style={{ color: "var(--muted)" }}>
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="underline underline-offset-2" style={{ color: "var(--muted)" }}>
                  terms of service
                </a>.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
