import Image from "next/image";

const founders = [
  {
    name: "YAEL",
    role: "Co-Founder & Co-CEO",
    imageSrc: "/headshots/yael%20headshot.png",
    imageAlt: "Yael headshot",
    imagePosition: "center 16%",
    bio: [
      "Yael Danon is a Panamanian-Israeli singer-songwriter, producer, and creative strategist known for her soulful voice and cross-cultural vision. She rose to prominence after winning Israel's Got Talent in 2019 and has since performed at the Sanremo Festival in Italy and opened for Sebastian Yatra.",
      "Now based in Boston, Yael is pursuing a dual degree in psychology, economics, music business, and songwriting at Harvard University and Berklee College of Music. Her debut album Diary Girl was released in 2023, with collaborators including Rodney Alejandro, Sacha Skarbek, and Tommy Torres. She is currently working on her second album.",
      "Yael is the co-founder and co-CEO of The Mix, a Harvard-Berklee initiative building bridges between young creatives and the music industry through events, mentorship, and community. She also serves as Branding Director of The Camel, a leading student-run entrepreneurship and tech club. With a passion for music, media, and innovation, Yael is committed to empowering the next generation of artists and changemakers.",
    ],
  },
  {
    name: "CYBÈLE",
    role: "Co-Founder & CVO",
    imageSrc: "/headshots/cybele%20headshot.png",
    imageAlt: "Cybèle headshot",
    imagePosition: "center 22%",
    bio: [
      "Cybèle is a French-American composer, producer, and recording artist. She creates bold, emotionally charged pop with cinematic sweep and vintage soul. Often described as \"ABBA meets MJ with a touch of Tchaikovsky,\" her sound blends disco grooves, gospel warmth, and orchestral flair into something timeless and uniquely her own.",
      "A graduate of Harvard and Berklee, she bridges academia and artistry and is currently pursuing a master's in music in NYC. Cybèle has performed at venues including the Apollo Theater, Staples Center, LA LIVE, Saban Theater, American Repertory Theater, and CCTV's New Year's Special in Beijing. She was awarded the \"Shining Star\" by Larry Dunn (Earth, Wind & Fire) after performing for Berry Gordy. Her work has been commissioned by the American Cancer Society, featured on international TV, and recognized by the RFK Foundation and Grammy Museum.",
      "Cybèle is the co-founder and CVO of The Mix, leading ideation through execution. Raised in Paris, Beijing, and LA, she uses her 175K+ following to amplify cross-cultural stories through music and media.",
    ],
  },
];

export default function AboutFounderPage() {
  return (
    <section className="mix-founder-stage px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mix-founder-inner mx-auto w-full max-w-6xl">
        <div className="mix-founder-intro reveal">
          <p className="mix-kicker mb-3">The Team</p>
          <h1 className="mix-page-title">Our Founders</h1>
          <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
            Meet the co-founders building The Mix across music, media, and community.
          </p>
        </div>

        <div className="mix-founder-stack">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`mix-founder-layout reveal ${index > 0 ? "reveal-delay-1" : ""}`}
            >
              <figure className="mix-founder-photo-wrap">
                <Image
                  src={founder.imageSrc}
                  alt={founder.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="mix-founder-photo"
                  style={{ objectPosition: founder.imagePosition }}
                />
              </figure>

              <article className="mix-founder-copy">
                <h2 className="mix-founder-title">{founder.name}</h2>
                <p className="mix-founder-role">{founder.role}</p>

                <div className="mix-founder-bio">
                  {founder.bio.map((paragraph) => (
                    <p key={paragraph} className="mix-copy mt-0 mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
