import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { employees, reviews, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team building infrastructure that makes AI reliable at scale. Meridian AI, founded 2022, San Francisco.",
  alternates: { canonical: "https://meridian.ai/about" },
};

const departmentOrder = ["Leadership", "Engineering", "Research", "Product", "Design", "GTM"];

function sorted() {
  return [...employees].sort((a, b) => {
    const ai = departmentOrder.indexOf(a.department);
    const bi = departmentOrder.indexOf(b.department);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

export default function AboutPage() {
  const sorted_ = sorted();

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Mission */}
        <section className="py-32 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-6">
                Our mission
              </p>
              <h1
                className="text-5xl sm:text-6xl font-bold text-[#FAFAFA] mb-10"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Making AI systems reliable at scale.
              </h1>
              <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-[55ch]">
                Meridian was founded in {company.founded} because the infrastructure for running AI
                in production didn't exist yet. Every team building serious ML products was
                reinventing evaluation pipelines, observability tooling, and deployment workflows
                from scratch. We built Meridian so they don't have to.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                Company
              </p>
              <h2 className="text-3xl font-semibold text-[#FAFAFA]">
                How we got here
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-5 text-[#A1A1AA] leading-relaxed">
                <p>
                  Soren Halverson spent four years at Stripe building ML infrastructure for fraud
                  detection. Every six months, the same question: how do we know this model is safe
                  to ship? The answer was always a bespoke, undocumented process that lived in
                  someone's head. When he left to start Meridian, that problem was the brief.
                </p>
                <p>
                  We built the evaluation layer first — a system that could run structured tests
                  against any model, track outcomes over time, and give engineers a clear signal
                  before a deployment went out. Teams at three companies were using it before we
                  wrote a line of go-to-market copy.
                </p>
                <p>
                  Observability and deployment tooling followed because they were the next thing
                  teams asked for. Meridian is now the full infrastructure layer between your
                  research environment and your users — built by engineers who've been on both sides
                  of that boundary.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 border-b border-[#3F3F46]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                  The team
                </p>
                <h2
                  className="text-4xl font-semibold text-[#FAFAFA]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Built by people who shipped AI at scale.
                </h2>
              </div>
            </FadeIn>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none" role="list">
              {sorted_.map((person, i) => (
                <FadeIn key={person.id} delay={Math.min(i * 0.05, 0.35)}>
                  <li>
                    <article className="rounded-xl border border-[#3F3F46]/60 bg-[#18181B] p-7 h-full flex flex-col gap-5">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 shrink-0 rounded-full bg-[#27272A] flex items-center justify-center text-[#71717A] text-sm font-semibold select-none"
                          aria-hidden="true"
                        >
                          {person.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <p className="text-[#FAFAFA] font-semibold text-sm">{person.name}</p>
                          <p className="text-[#14B8A6] text-xs">{person.title}</p>
                          <p className="text-[#71717A] text-xs">{person.location}</p>
                        </div>
                      </div>

                      <p className="text-[#A1A1AA] text-sm leading-relaxed flex-1">{person.bio}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#3F3F46]/50">
                        <p className="text-[#52525B] text-xs">
                          {person.department} · {person.tenure}
                        </p>
                        <Link
                          href={`https://linkedin.com/in/${person.name.toLowerCase().replace(" ", "-")}`}
                          className="text-xs text-[#71717A] hover:text-[#14B8A6] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} on LinkedIn`}
                        >
                          LinkedIn →
                        </Link>
                      </div>
                    </article>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <p className="text-xs font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
                  How we work
                </p>
                <h2
                  className="text-4xl font-semibold text-[#FAFAFA]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  What we actually care about.
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#3F3F46]/40 rounded-xl overflow-hidden border border-[#3F3F46]/40">
              {[
                {
                  heading: "Specificity over abstraction.",
                  body: "Vague wins don't count. Every initiative has a measurable outcome attached to it. If you can't articulate what success looks like, the project doesn't start.",
                },
                {
                  heading: "Slow decisions, fast reversals.",
                  body: "We take longer than average to make architectural and product bets, then move very fast once the decision is made. We don't let speed become an excuse for skipping thinking.",
                },
                {
                  heading: "Own the full stack.",
                  body: "Engineers own their features from design to monitoring. Researchers own their models from theory to production behaviour. Handoff culture kills context.",
                },
              ].map(({ heading, body }, i) => (
                <FadeIn key={heading} delay={i * 0.08}>
                  <div className="bg-[#09090B] p-8 h-full flex flex-col gap-4">
                    <h3 className="text-base font-semibold text-[#FAFAFA]">{heading}</h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">{body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
