"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: "rev_001",
    rating: 5,
    title: "One of the best engineering cultures I've been part of",
    body: "The bar for quality is genuinely high — code reviews are thorough, documentation is expected, and nobody ships something they'd be embarrassed to explain. It's demanding but the output reflects it.",
    role: "Senior Software Engineer",
    date: "March 2026",
    pros: "Smart colleagues, real technical depth, strong async culture",
    cons: "Fast pace can make it hard to go deep on any one problem",
  },
  {
    id: "rev_002",
    rating: 4,
    title: "Genuinely mission-driven, not just in the deck",
    body: "Leadership talks about responsible AI constantly and backs it up with actual prioritisation decisions, including ones that cost short-term revenue. Refreshing to see that at a startup.",
    role: "Research Scientist",
    date: "February 2026",
    pros: "Clear mission, thoughtful leadership, good research autonomy",
    cons: "Tooling for researchers is still catching up to the pace of hiring",
  },
  {
    id: "rev_003",
    rating: 5,
    title: "Product team has real influence here",
    body: "PMs aren't order-takers. I've pushed back on roadmap items, killed features, and redirected engineering time — and leadership supported it when the reasoning was solid. Rare.",
    role: "Product Manager",
    date: "January 2026",
    pros: "High ownership, collaborative eng team, fast iteration cycles",
    cons: "Design resources stretched thin across too many surfaces",
  },
  {
    id: "rev_004",
    rating: 4,
    title: "Steep learning curve, then very rewarding",
    body: "The first two months are overwhelming — the domain is hard, the codebase is large, and expectations are high. Once you're ramped, the work is genuinely interesting and your contributions matter.",
    role: "Software Engineer",
    date: "December 2025",
    pros: "Interesting problems, good comp, remote-friendly",
    cons: "Onboarding process needs more structure for new grads",
  },
  {
    id: "rev_005",
    rating: 3,
    title: "Great product, growing pains in operations",
    body: "The technical work is excellent and the vision is clear. But as the company scales, some of the operational fundamentals — performance reviews, career ladders, cross-team coordination — haven't kept up.",
    role: "Account Executive",
    date: "November 2025",
    pros: "Strong product to sell, good market timing",
    cons: "Sales process and internal tooling feel underinvested",
  },
  {
    id: "rev_006",
    rating: 5,
    title: "The design culture punches above its size",
    body: "For a 90-person company, the design system maturity and the level of craft expected is more like a 500-person org. Everyone from eng to leadership has a strong visual intuition, which makes collaboration unusually smooth.",
    role: "Senior Designer",
    date: "October 2025",
    pros: "Design is a first-class function, not an afterthought",
    cons: "User research capacity is limited given the product surface area",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden="true"
          fill={i < count ? "var(--accent)" : "none"}
          style={{ color: i < count ? "var(--accent)" : "var(--rule)" }}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="careers"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16"
      style={{ borderBottom: "1px solid var(--rule)" }}
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            Life at Meridian
          </p>
          <h2 id="reviews-heading" className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
            Honest accounts from
            <br />people who work here.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--rule)" }}>
          {reviews.map((r, i) => (
            <motion.article
              key={r.id}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.07 * i, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 flex flex-col gap-5 transition-colors duration-150"
              style={{ backgroundColor: "var(--paper)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "color-mix(in srgb, var(--ink) 3%, var(--paper))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--paper)";
              }}
            >
              {/* Stars + date */}
              <div className="flex items-center justify-between">
                <Stars count={r.rating} />
                <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                  {r.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold leading-snug" style={{ color: "var(--ink)" }}>
                &ldquo;{r.title}&rdquo;
              </h3>

              {/* Body */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {r.body}
              </p>

              {/* Pros / Cons */}
              <div className="space-y-2 pt-2" style={{ borderTop: "1px solid var(--rule)" }}>
                <div className="flex gap-2 text-xs">
                  <span className="font-medium" style={{ color: "#52B788" }}>+</span>
                  <span style={{ color: "var(--muted)" }}>{r.pros}</span>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="font-medium" style={{ color: "#E63946" }}>−</span>
                  <span style={{ color: "var(--muted)" }}>{r.cons}</span>
                </div>
              </div>

              {/* Role */}
              <p className="font-mono text-[11px] tracking-wide uppercase" style={{ color: "var(--muted)" }}>
                {r.role}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
