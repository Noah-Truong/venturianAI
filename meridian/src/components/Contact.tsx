"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useState } from "react";

export function Contact() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate async submission
    setTimeout(() => setStatus("success"), 1200);
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-center">

        {/* Left */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            Get access
          </p>
          <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: "var(--ink)" }}>
            Talk to an engineer,
            not a sales deck.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", maxWidth: "44ch" }}>
            We review every access request personally. Expect a reply from
            a technical team member within one business day.
          </p>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {status === "success" ? (
            <div
              className="p-8 text-center"
              style={{ border: "1px solid var(--rule)" }}
              role="status"
              aria-live="polite"
            >
              <div className="text-2xl mb-3" aria-hidden="true">✓</div>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>
                Request received.
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                A technical team member will reply within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
              style={{ border: "1px solid var(--rule)", padding: "2rem" }}
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[11px] tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="px-4 py-3 text-sm transition-colors duration-150 min-h-[44px]"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid var(--rule)",
                    color: "var(--ink)",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--rule)";
                  }}
                  aria-describedby={status === "error" ? "email-error" : undefined}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[11px] tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                  What are you building? <span className="normal-case">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Describe your AI infra challenge..."
                  className="px-4 py-3 text-sm resize-none transition-colors duration-150"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid var(--rule)",
                    color: "var(--ink)",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--rule)";
                  }}
                />
              </div>

              {status === "error" && (
                <p id="email-error" className="text-xs" style={{ color: "#E63946" }} role="alert">
                  Something went wrong. Try emailing hello@meridianai.com directly.
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
                {status === "loading" ? "Sending request..." : "Send access request"}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
