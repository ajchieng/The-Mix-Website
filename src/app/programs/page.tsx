import { partnerBenefits } from "@/lib/site";

const programs = [
  {
    title: "Speaker Series",
    description:
      "Conversations with leaders in A&R, management, media, and entertainment law.",
  },
  {
    title: "Creator Labs",
    description:
      "Hands-on sessions for production, release planning, and audience growth strategy.",
  },
  {
    title: "Collaboration Circles",
    description:
      "Curated sessions that match artists, producers, and marketers for new projects.",
  },
];

const revealByIndex = ["reveal", "reveal reveal-delay-1", "reveal reveal-delay-2"];

export default function ProgramsPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mix-kicker mb-3">Programs</p>
        <h1 className="mix-page-title">
          Practical pathways from campus talent to industry impact.
        </h1>

        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className={`mix-surface h-full p-5 sm:p-6 ${revealByIndex[index] ?? "reveal"}`}
            >
              <h2 className="mix-card-title">{program.title}</h2>
              <p className="mix-copy mt-3 mb-0">{program.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-11">
          <h2 className="mix-section-title">Partner Benefits</h2>
          <div className="mt-6 grid gap-3">
            {partnerBenefits.map((benefit, index) => (
              <article
                key={benefit}
                className={`mix-surface p-4 sm:p-5 ${revealByIndex[index] ?? "reveal"}`}
              >
                <p className="mix-copy m-0">{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
