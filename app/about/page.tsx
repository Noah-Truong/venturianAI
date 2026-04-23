import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { employees, reviews, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Venturian AI — connecting students to weekly income from AI training pipelines. Founded 2023, San Francisco.",
  alternates: { canonical: "https://venturian.way-marketing.com/about" },
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
        <section className="py-32 border-b border-[#D4D4D8]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-[#0F766E] mb-6">
                Our mission
              </p>
              <h1
                className="text-5xl sm:text-6xl font-bold text-[#09090B] mb-10"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Built by students, for students.
              </h1>
              <p className="text-lg text-[#52525B] leading-relaxed max-w-[55ch]">
                Venturian was founded in {company.founded} because no legitimate way existed for
                students to earn consistent weekly income from AI. AI companies needed real,
                active student profiles at scale. We built the bridge between them.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 border-b border-[#D4D4D8]/50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-[#0F766E] mb-4">
                Company
              </p>
              <h2 className="text-3xl font-semibold text-[#09090B]">
                How we got here
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-5 text-[#52525B] leading-relaxed">
                <p>
                  Harry Chen was a student who wanted to earn money without sacrificing study time.
                  He noticed that AI companies were paying significant sums for access to real,
                  active student profiles — but there was no organized way for students to participate.
                  Venturian was built to change that.
                </p>
                <p>
                  The concept is straightforward: AI systems need real-world data and activity from
                  verified student accounts to improve. Your Handshake profile provides that access.
                  Venturian manages the relationship with AI companies end-to-end, handles all
                  technical setup, and passes a share of that value directly to you every week.
                </p>
                <p>
                  We started with a small group of students at two universities. The model worked —
                  weekly payouts, no ongoing work, full transparency. Word spread fast. Venturian
                  now works with students across hundreds of universities and partners with vetted
                  AI companies that need exactly what students have.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 border-b border-[#D4D4D8]/50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <p className="text-xs font-medium tracking-widest uppercase text-[#0F766E] mb-4">
                  The team
                </p>
                <h2
                  className="text-4xl font-semibold text-[#09090B]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  The people running this for you.
                </h2>
              </div>
            </FadeIn>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none" role="list">
              {sorted_.map((person, i) => (
                <FadeIn key={person.id} delay={Math.min(i * 0.05, 0.35)}>
                  <li>
                    <article className="rounded-xl border border-[#D4D4D8]/60 bg-[#F4F4F5] p-7 h-full flex flex-col gap-5">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 shrink-0 rounded-full bg-[#E4E4E7] flex items-center justify-center text-[#71717A] text-sm font-semibold select-none"
                          aria-hidden="true"
                        >
                          {person.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <p className="text-[#09090B] font-semibold text-sm">{person.name}</p>
                          <p className="text-[#0F766E] text-xs">{person.title}</p>
                          <p className="text-[#71717A] text-xs">{person.location}</p>
                        </div>
                      </div>

                      <p className="text-[#52525B] text-sm leading-relaxed flex-1">{person.bio}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#D4D4D8]/50">
                        <p className="text-[#A1A1AA] text-xs">
                          {person.department} · {person.tenure}
                        </p>
                        <Link
                          href={`https://linkedin.com/in/${person.name.toLowerCase().replace(" ", "-")}`}
                          className="text-xs text-[#71717A] hover:text-[#0F766E] transition-colors"
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
                <p className="text-xs font-medium tracking-widest uppercase text-[#0F766E] mb-4">
                  How we work
                </p>
                <h2
                  className="text-4xl font-semibold text-[#09090B]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  How we operate.
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D4D4D8]/40 rounded-xl overflow-hidden border border-[#D4D4D8]/40">
              {[
                {
                  heading: "Students first.",
                  body: "Every decision is made with students in mind. If a change benefits our AI partners at the expense of student earnings or experience, we don't make it. The product only works if students trust it.",
                },
                {
                  heading: "Transparency is non-negotiable.",
                  body: "You can see every AI company your account is connected to, every dollar earned from each one, and every week it happened. We don't hide the mechanism — we think understanding it builds trust.",
                },
                {
                  heading: "Simple is hard.",
                  body: "Our whole value is taking something technically complex and making it require nothing from you. That's harder to build than it sounds, and we invest heavily in making the experience genuinely effortless.",
                },
              ].map(({ heading, body }, i) => (
                <FadeIn key={heading} delay={i * 0.08}>
                  <div className="bg-[#09090B] p-8 h-full flex flex-col gap-4">
                    <h3 className="text-base font-semibold text-[#09090B]">{heading}</h3>
                    <p className="text-sm text-[#52525B] leading-relaxed">{body}</p>
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
