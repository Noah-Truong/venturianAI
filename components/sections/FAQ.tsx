"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need to do anything after signing up?",
    a: "No. Once your account is set up, our team manages everything. There is no ongoing work required on your end. You sign up, we handle the integration, and you receive weekly payments automatically.",
  },
  {
    q: "What exactly does my account do to earn money?",
    a: "AI companies need large volumes of real, active student profiles to train and improve their systems at scale. Instead of creating accounts themselves, these companies work with Venturian. We connect them with verified students — your account provides that access, and you are compensated for allowing it to be used.",
  },
  {
    q: "Why do I need a .edu email and Handshake?",
    a: "Our AI company partners specifically need verified student profiles from Handshake to run their training pipelines effectively. The .edu email confirms your active student status. This is what makes student accounts valuable to our partners — and why the payouts are higher than general consumer programs.",
  },
  {
    q: "How much can I expect to earn?",
    a: "Students average $200–$500 per week. Earnings depend on your profile, university, and which AI companies are active in a given week — so amounts vary. Your dashboard shows a real-time breakdown of what you've earned and from which partner. There is no guaranteed minimum.",
  },
  {
    q: "How do I get paid?",
    a: "Earnings accumulate through the week and are deposited directly to your account every week via ACH direct deposit or PayPal — you choose at signup. US bank accounts settle within 1–2 business days. PayPal is instant. There are no fees deducted from your payout.",
  },
  {
    q: "Is this safe? What do you do with my data?",
    a: "Venturian shares anonymised, aggregated account signals — not personal identifying information — with vetted AI companies under data processing agreements. We are SOC 2 Type II certified and GDPR/CCPA compliant. You can disconnect at any time and request deletion of all data within 72 hours.",
  },
  {
    q: "Can I cancel or pause my account?",
    a: "Yes. You can pause pipeline participation at any time from your dashboard — you stop earning but your account stays open. To close your account entirely, contact support and we'll process it within 2 business days and issue any pending earnings in the final payout.",
  },
];

function FAQItem({ q, a, delay, inView, reduce }: {
  q: string;
  a: string;
  delay: number;
  inView: boolean;
  reduce: boolean | null;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      style={{ borderBottom: "1px solid var(--rule)" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>{q}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          style={{
            color: "var(--muted)",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "var(--muted)", maxWidth: "64ch" }}>
          {a}
        </p>
      )}
    </motion.div>
  );
}

export function FAQ() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            FAQ
          </p>
          <h2 id="faq-heading" className="text-4xl font-bold tracking-tight leading-tight mb-6" style={{ color: "var(--ink)" }}>
            Questions worth
            answering honestly.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", maxWidth: "36ch" }}>
            Anything not covered here — email{" "}
            <a
              href="mailto:hello@venturianai.com"
              className="underline underline-offset-2 transition-colors duration-150"
              style={{ color: "var(--accent)" }}
            >
              hello@venturianai.com
            </a>
            {" "}and we reply within one business day.
          </p>
        </motion.div>

        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              delay={0.06 * i}
              inView={inView}
              reduce={reduce}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
