import Image from "next/image";

import { HomeIntroTyping } from "@/components/HomeIntroTyping";

const teamMembers = [
  {
    name: "Alexander Chieng",
    role: "Data Analytics and CRM",
    imageSrc: "/headshots/ACheadshot.jpg",
    bio:
      "Manages event data and attendance lists, maintaining accurate participant records and coordinating student outreach. Oversees ticketing operations for events and coordinated attendee check-in and registration logistics.",
  },
];

export default function AboutTeamPage() {
  return (
    <>
      <HomeIntroTyping copy="meet the team" ariaLabel="Team page introduction" />

      <section className="mix-team-stage px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mix-team-intro reveal">
            <p className="mix-kicker mb-3">About Us</p>
            <h1 className="mix-page-title">Our Team</h1>
            <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
              Meet the musicians shaping The Mix.
            </p>
          </div>

          <div className="mix-team-grid reveal reveal-delay-1 mt-8" aria-label="Team profiles">
            {teamMembers.map((member) => (
              <article key={member.name} className="mix-team-member">
                <div className="mix-team-headshot-wrap">
                  <Image
                    src={member.imageSrc}
                    alt={`${member.name} headshot`}
                    fill
                    sizes="(min-width: 1200px) 28rem, (min-width: 768px) 46vw, 84vw"
                    className="mix-team-headshot"
                    style={{ objectPosition: "center 8%" }}
                  />
                </div>

                <div className="mix-team-copy">
                  <p className="mix-team-role">{member.role}</p>
                  <h2 className="mix-card-title">{member.name}</h2>
                  <p className="mix-copy mt-3 mb-0">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
