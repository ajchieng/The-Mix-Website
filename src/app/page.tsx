import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionCard } from "@/components/SectionCard";
import { pillars, upcomingMoments } from "@/lib/site";

const quickStats = [
  { label: "Members", value: "120+" },
  { label: "Events", value: "18 / year" },
  { label: "Guest speakers", value: "35+" },
];

const pillarRevealVariants = ["left", "up", "right"] as const;

export default function HomePage() {
  return (
    <>
      <section className="mix-hero-stage">
        <div className="mix-hero-overlay px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-between py-5 sm:py-8 lg:py-10">
            <ScrollReveal className="mix-hero-main" variant="up">
              <p className="mix-kicker mix-kicker-light mb-4">Harvard Music Industry Club</p>
              <h1 className="mix-hero-title">
                Build music projects with people who ship.
              </h1>
              <p className="mix-hero-copy mt-5 mb-0 text-base sm:text-lg">
                The Mix helps students create momentum through practical programming,
                strong peer collaboration, and direct industry access.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/programs" className="mix-button-primary">
                  Explore Programs
                </Link>
                <Link href="/contact" className="mix-button-secondary">
                  Get In Touch
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mix-hero-aside" delay={140} variant="up">
              <ul className="mix-hero-stat-grid">
                {quickStats.map((item) => (
                  <li key={item.label} className="mix-hero-stat">
                    <span className="mix-stat-label">{item.label}</span>
                    <span className="mix-stat-value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <ScrollReveal variant="left">
            <p className="mix-kicker mb-2">Core Pillars</p>
            <h2 className="mix-section-title">What We Focus On</h2>
          </ScrollReveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <ScrollReveal
                key={pillar.title}
                delay={index * 120}
                variant={pillarRevealVariants[index] ?? "up"}
              >
                <SectionCard title={pillar.title}>{pillar.description}</SectionCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <ScrollReveal variant="left">
            <p className="mix-kicker mb-2">Calendar</p>
            <h2 className="mix-section-title">Upcoming Moments</h2>
          </ScrollReveal>

          <div className="mt-6 grid gap-3.5">
            {upcomingMoments.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 120} variant="up">
                <article className="mix-surface mix-event-card p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="mix-card-title">{item.title}</h3>
                      <p className="mix-copy mt-2 mb-0">{item.detail}</p>
                    </div>
                    <p className="mix-kicker mix-date-chip mt-1 whitespace-nowrap">{item.date}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
