import Image from "next/image";

export default function AboutFounderPage() {
  return (
    <section className="mix-founder-stage px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mix-founder-inner mx-auto w-full max-w-6xl">
        <article className="mix-founder-copy reveal">
          <p className="mix-kicker mb-3">About Us</p>
          <h1 className="mix-page-title">Our Founder: Yael Danon</h1>
          <p className="mix-copy mt-4 mb-0">
            Yael Danon (born January 16, 2006, in Panama City) is a Panamanian singer known
            for appearing on Israel&apos;s Got Talent and for her song &quot;To Change,&quot; along with
            her covers of &quot;Hello,&quot; &quot;Fix You,&quot; and &quot;Wonderwall.&quot;
          </p>
          <p className="mix-copy mt-4 mb-0">
            She first gained attention in November 2015 by posting singing videos on Instagram
            and YouTube and by performing in musicals. In December 2018, she appeared on
            Israel&apos;s Got Talent and won the Youth Category after a standout performance of
            &quot;Wonderwall.&quot;
          </p>
          <p className="mix-copy mt-4 mb-0">
            She currently attends Harvard University as an undergraduate student and continues
            to connect performance with student leadership through The Mix.
          </p>
          <br></br>
          <figure className="mix-founder-photo-wrap mt-7">
            <Image
              src="/headshots/Yael-Danon.jpeg"
              alt="Yael Danon portrait"
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="mix-founder-photo"
            />
          </figure>
        </article>
      </div>
    </section>
  );
}
