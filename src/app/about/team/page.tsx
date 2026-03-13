import Image from "next/image";

const placeholderHeadshots = ["/headshots/person.jpeg", "/headshots/person3.jpg"];

const teamMembers = [
  {
    name: "Maya Chen",
    role: "Co-President",
    bio:
      "Leads the club strategy and helps members turn rough ideas into finished releases, launch plans, and events.",
  },
  {
    name: "Elijah Brooks",
    role: "Programming Lead",
    bio:
      "Builds workshop tracks focused on artist growth, release operations, and the business fundamentals behind modern music careers.",
  },
  {
    name: "Sofia Alvarez",
    role: "Partnerships Lead",
    bio:
      "Coordinates alumni and industry relationships so students can access practical mentorship and high-signal opportunities.",
  },
  {
    name: "Noah Patel",
    role: "Community Lead",
    bio:
      "Designs spaces where producers, writers, vocalists, and managers can meet collaborators and keep each other accountable.",
  },
  {
    name: "Ava Thompson",
    role: "Events Lead",
    bio:
      "Produces flagship sessions like OFF THE RECORD and keeps each event tight, useful, and genuinely fun for attendees.",
  },
  {
    name: "Lucas Kim",
    role: "Creative Director",
    bio:
      "Shapes The Mix visual identity across campaigns, social content, and live experiences so the brand feels consistent and sharp.",
  },
];

export default function AboutTeamPage() {
  return (
    <section className="mix-team-stage px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mix-team-intro reveal">
          <p className="mix-kicker mb-3">About Us</p>
          <h1 className="mix-page-title">Our Team</h1>
          <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
            Meet the students shaping The Mix this year.
          </p>
        </div>

        <div className="mix-team-grid reveal reveal-delay-1 mt-8" aria-label="Team profiles">
          {teamMembers.map((member, index) => (
            <article key={member.name} className="mix-team-member">
              <div className="mix-team-headshot-wrap">
                <Image
                  src={placeholderHeadshots[index % placeholderHeadshots.length]}
                  alt={`${member.name} headshot`}
                  fill
                  sizes="(min-width: 1200px) 28rem, (min-width: 768px) 46vw, 84vw"
                  className="mix-team-headshot"
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
  );
}
