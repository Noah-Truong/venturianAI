import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { reviews } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team at Meridian AI. We're hiring engineers, researchers, and designers to build the infrastructure layer for production AI.",
  alternates: { canonical: "https://meridian.ai/careers" },
};

const openRoles = [
  {
    title: "Staff Software Engineer — Evaluation Infrastructure",
    department: "Engineering",
    location: "San Francisco, CA or Remote (US)",
    type: "Full-time",
    description:
      "Own the evaluation pipeline from test authoring to result storage. You'll design the APIs that scale evaluation runs to thousands of parallel workers and build the tooling that makes regression detection fast and trustworthy.",
  },
  {
    title: "Research Engineer — Model Robustness",
    department: "Research",
    location: "San Francisco, CA or New York, NY",
    type: "Full-time",
    description:
      "Turn research on adversarial inputs and distribution shift into production-hardened evaluation tools. You'll work directly with James Okafor's team and ship findings into the core product within weeks of writing them up.",
  },
  {
    title: "Senior Product Engineer — Developer Experience",
    department: "Engineering",
    location: "Remote (US or EU)",
    type: "Full-time",
    description:
      "Build the CLI, SDKs, and dashboard features that engineers interact with every day. You care deeply about API design, error messages, and documentation — not just the code behind them.",
  },
  {
    title: "Enterprise Solutions Engineer",
    department: "GTM",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Support enterprise deals from technical scoping to post-sale integration. You'll run architecture reviews with ML infrastructure teams at financial services and healthcare companies.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill={i < rating ? "#14B8A6" : "#3F3F46"}
          aria-hidden="true"
        >
          <path d="M6 0.5L7.545 4.21L11.59 4.635L8.66 7.3L9.545 11.27L6 9.215L2.455 11.27L3.34 7.3L0.41 4.635L4.455 4.21L6 0.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section className="py-32 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 items-end">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-6">
                Careers
              </p>
              <h1
                className="text-5xl sm:text-6xl font-bold text-[#FAFAFA] mb-8"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Build the infrastructure layer for production AI.
              </h1>
              <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-[52ch]">
                Meridian is a small team solving a hard problem. We move fast, ship constantly,
                and hold the bar high. If you want to work on infrastructure that ML teams depend
                on in production, we'd like to talk.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-6 flex flex-col gap-5">
                {[
                  ["51–200", "employees"],
                  ["4", "open roles"],
                  ["2022", "founded"],
                  ["SF / NY / Remote", "locations"],
                ].map(([value, label]) => (
                  <div key={label} className="flex items-baseline gap-3">
                    <span className="text-2xl font-semibold text-[#FAFAFA] font-mono tabular-nums">
                      {value}
                    </span>
                    <span className="text-sm text-[#71717A]">{label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Culture — pulled from reviews */}
        <section className="py-24 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                  Culture
                </p>
                <h2
                  className="text-4xl font-semibold text-[#FAFAFA]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  What it's actually like to work here.
                </h2>
              </div>
            </FadeIn>

            <ul
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none"
              role="list"
            >
              {reviews.map((review, i) => (
                <FadeIn key={review.id} delay={Math.min(i * 0.07, 0.35)}>
                  <li>
                    <article className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-6 h-full flex flex-col gap-5">
                      <Stars rating={review.rating} />
                      <div className="flex flex-col gap-3 flex-1">
                        <h3 className="text-sm font-semibold text-[#FAFAFA] leading-snug">
                          {review.title}
                        </h3>
                        <p className="text-sm text-[#A1A1AA] leading-relaxed">{review.body}</p>
                      </div>
                      <div className="border-t border-[#3F3F46]/60 pt-4 flex flex-col gap-2">
                        <p className="text-xs text-[#71717A]">
                          <span className="text-[#52525B] font-medium">Pros: </span>
                          {review.pros}
                        </p>
                        <p className="text-xs text-[#71717A]">
                          <span className="text-[#52525B] font-medium">Cons: </span>
                          {review.cons}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#71717A]">
                        <span className="font-medium text-[#A1A1AA]">{review.role}</span>
                        <time dateTime={review.date}>{review.date}</time>
                      </div>
                    </article>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* Open roles */}
        <section id="open-roles" className="py-24 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                  Open roles
                </p>
                <h2
                  className="text-4xl font-semibold text-[#FAFAFA]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  {openRoles.length} positions open now.
                </h2>
              </div>
            </FadeIn>

            <ul className="flex flex-col gap-4 list-none" role="list">
              {openRoles.map((role, i) => (
                <FadeIn key={role.title} delay={i * 0.07}>
                  <li>
                    <article className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-7 flex flex-col gap-4 hover:border-[#3F3F46] transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-[#FAFAFA] font-semibold">{role.title}</h3>
                          <div className="flex flex-wrap gap-3 text-xs text-[#71717A]">
                            <span className="text-[#14B8A6]">{role.department}</span>
                            <span>{role.location}</span>
                            <span>{role.type}</span>
                          </div>
                        </div>
                        <Link
                          href={`mailto:careers@meridian.ai?subject=Application: ${encodeURIComponent(role.title)}`}
                          className="shrink-0 text-sm font-medium px-4 py-2 border border-[#3F3F46] text-[#FAFAFA] rounded-lg hover:border-[#14B8A6] hover:text-[#14B8A6] transition-colors min-h-[40px] flex items-center"
                        >
                          Apply
                        </Link>
                      </div>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed">{role.description}</p>
                    </article>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-12 flex flex-col gap-6 items-start">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6]">
                  Don't see your role?
                </p>
                <h2
                  className="text-3xl font-semibold text-[#FAFAFA] max-w-[40ch]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  We hire for exceptional people before we hire for open headcount.
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed max-w-[52ch]">
                  If you're exceptional at what you do and think Meridian is the right place to
                  do it, send us a note. Describe what you'd work on and why you're the right
                  person to do it.
                </p>
                <Link
                  href="mailto:careers@meridian.ai"
                  className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 bg-[#14B8A6] text-[#09090B] rounded-lg hover:bg-[#2DD4BF] transition-colors min-h-[44px]"
                >
                  Send a note to careers@meridian.ai
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
