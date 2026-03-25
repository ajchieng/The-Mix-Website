import Link from "next/link";
import Image from "next/image";

import { HomeIntroTyping } from "@/components/HomeIntroTyping";
import { ScrollReveal } from "@/components/ScrollReveal";
import { pillars, upcomingMoments } from "@/lib/site";

const quickStats = [
  { label: "Members", value: "120+" },
  { label: "Events", value: "18 / year" },
  { label: "Guest speakers", value: "35+" },
];

const pillarRevealVariants = ["left", "up", "right"] as const;
const eventHighlightImages = [
  "/galleryimages/off%20the%20record/28-_DSC0103.jpg",
  "/galleryimages/off%20the%20record/5-_DSC0021.jpg",
  "/galleryimages/off%20the%20record/31-_DSC0113.jpg",
  "/galleryimages/off%20the%20record/9-_DSC0031.jpg",
  "/galleryimages/off%20the%20record/15-_DSC0057.jpg",
  "/galleryimages/off%20the%20record/6-_DSC0024.jpg",
];

export default function HomePage() {
  return (
    <>
      <HomeIntroTyping />

      <section className="mix-hero-stage">
        <div className="mix-hero-overlay px-4 sm:px-6 lg:px-8">
          <div className="mix-hero-shell mx-auto flex min-h-full w-full max-w-6xl flex-col justify-between py-5 sm:py-8 lg:py-10">
            <ScrollReveal className="mix-hero-main" variant="up">
              <p className="mix-kicker mix-kicker-light mb-4">Harvard + Berklee Music Industry Network</p>
              <h1 className="mix-hero-title">
                Build music projects with people who ship.
              </h1>
              <p className="mix-hero-copy mt-5 mb-0 text-base sm:text-lg">
                The Mix helps students create momentum through practical programming,
                strong peer collaboration, and direct industry access across Harvard and
                Berklee, with members from Babson, Northeastern, and Emerson.
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

      <section className="mix-focus-stage px-4 sm:px-6 lg:px-8">
        <div className="mix-focus-wrap mx-auto w-full max-w-6xl">
          <ScrollReveal variant="left">
            <p className="mix-kicker mb-2">Core Pillars</p>
            <h2 className="mix-section-title">What We Focus On</h2>
          </ScrollReveal>

          <div className="mix-focus-grid">
            {pillars.map((pillar, index) => (
              <ScrollReveal
                key={pillar.title}
                delay={index * 120}
                variant={pillarRevealVariants[index] ?? "up"}
              >
                <article className="mix-focus-pillar">
                  <p className="mix-focus-index">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mix-focus-title">{pillar.title}</h3>
                  {pillar.title === "Artist Networking" ? (
                    <div className="mix-focus-icon" aria-hidden="true">
                      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="64" cy="28" r="12" stroke="currentColor" strokeWidth="6" />
                        <circle cx="28" cy="84" r="12" stroke="currentColor" strokeWidth="6" />
                        <circle cx="100" cy="84" r="12" stroke="currentColor" strokeWidth="6" />
                        <path d="M56 36L36 72" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                        <path d="M72 36L92 72" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                        <path d="M40 84H88" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : pillar.title === "Industry Exposure" ? (
                    <div className="mix-focus-icon" aria-hidden="true">
                      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 64C28 42 45 32 64 32C83 32 100 42 112 64C100 86 83 96 64 96C45 96 28 86 16 64Z"
                          stroke="currentColor"
                          strokeWidth="6"
                          strokeLinejoin="round"
                        />
                        <circle cx="64" cy="64" r="14" stroke="currentColor" strokeWidth="6" />
                        <circle cx="64" cy="64" r="4" fill="currentColor" />
                        <path d="M64 18V6" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                        <path d="M24 28L16 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                        <path d="M104 28L112 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : pillar.title === "Career Development" ? (
                    <div className="mix-focus-icon" aria-hidden="true">
                      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 96L48 68L66 86L104 48"
                          stroke="currentColor"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M84 48H104V68"
                          stroke="currentColor"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M20 108H108" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : null}
                  <p className="mix-copy mt-3 mb-0 text-sm sm:text-base">{pillar.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mix-image-break px-4 sm:px-6 lg:px-8">
        <div className="mix-image-break-inner mx-auto w-full max-w-6xl">
          <ScrollReveal variant="left">
            <p className="mix-kicker mb-2">From Our Last Event</p>
            <h2 className="mix-section-title">OFF THE RECORD</h2>
          </ScrollReveal>

          <div className="mix-image-break-grid mt-6">
            {eventHighlightImages.map((src, index) => (
              <ScrollReveal key={src} delay={index * 70} variant="up">
                <figure className="mix-image-tile">
                  <Image
                    src={src}
                    alt={`OFF THE RECORD event photo ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="mix-image-media"
                  />
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mix-home-moments-stage px-4 pt-10 pb-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14 lg:pb-14">
        <div className="mix-home-moments-inner mx-auto w-full max-w-6xl">
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
