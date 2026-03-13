import Image from "next/image";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutMissionPage() {
  return (
    <section className="mix-mission-stage">
      <div className="mix-mission-panel mix-mission-panel-primary px-4 sm:px-6 lg:px-8">
        <div className="mix-mission-layout mx-auto w-full max-w-6xl">
          <ScrollReveal variant="left">
            <article className="mix-mission-copy">
              <p className="mix-kicker mb-3">About Us</p>
              <h1 className="mix-page-title">Our Mission</h1>
              <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
                The Mix equips students to navigate music professionally by combining
                creative community with practical business education.
              </p>
              <p className="mix-copy mt-4 mb-0">
                We focus on building real momentum: stronger creative work, sharper
                execution, and durable networks that continue beyond campus.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <figure className="mix-mission-image-wrap">
              <Image
                src="/galleryimages/one%20fan%20to%20millions/DSC_5854.jpg"
                alt="1 FAN TO MILLIONS event photo"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="mix-mission-image"
              />
            </figure>
          </ScrollReveal>
        </div>
      </div>

      <div className="mix-mission-panel mix-mission-panel-secondary px-4 sm:px-6 lg:px-8">
        <div className="mix-mission-layout mix-mission-layout-reverse mx-auto w-full max-w-6xl">
          <ScrollReveal variant="left">
            <figure className="mix-mission-image-wrap">
              <Image
                src="/galleryimages/off%20the%20record/31-_DSC0113.jpg"
                alt="OFF THE RECORD event photo"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="mix-mission-image"
              />
            </figure>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <article className="mix-mission-copy">
              <p className="mix-kicker mb-3">How We Operate</p>
              <h2 className="mix-section-title">Practical, Collaborative, Real</h2>
              <br></br>
              <ul className="mix-mission-points mt-8 sm:mt-9">
                <li className="mix-mission-point">
                  <span className="mix-mission-point-index">01</span>
                  <p className="mix-copy m-0">
                    Cross-disciplinary collaboration between artists and operators.
                  </p>
                </li>
                <li className="mix-mission-point">
                  <span className="mix-mission-point-index">02</span>
                  <p className="mix-copy m-0">
                    Real-world learning through execution and mentorship.
                  </p>
                </li>
                <li className="mix-mission-point">
                  <span className="mix-mission-point-index">03</span>
                  <p className="mix-copy m-0">
                    Inclusive access to opportunities in music and media.
                  </p>
                </li>
              </ul>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
