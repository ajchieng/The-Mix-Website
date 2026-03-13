export default function ContactPage() {
  return (
    <section className="mix-contact-stage px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mix-contact-content mx-auto w-full max-w-6xl">
        <div className="mix-contact-intro reveal p-6 sm:p-8 lg:p-10">
          <p className="mix-kicker mb-3">Contact</p>
          <h1 className="mix-page-title">Build with The Mix.</h1>
          <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
            Reach out for membership, collaboration, sponsorship, or event partnerships.
          </p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <article className="mix-contact-item reveal p-5">
            <p className="mix-kicker mb-2">Email</p>
            <a
              className="mix-contact-link"
              href="mailto:themix@harvard.edu"
            >
              themix@harvard.edu
            </a>
          </article>

          <article className="mix-contact-item reveal reveal-delay-1 p-5">
            <p className="mix-kicker mb-2">Instagram</p>
            <a
              className="mix-contact-link"
              href="https://www.instagram.com/themixnetwork_/reels/"
              target="_blank"
              rel="noreferrer"
            >
              @themixnetwork_
            </a>
          </article>

          <article className="mix-contact-item reveal reveal-delay-2 p-5">
            <p className="mix-kicker mb-2">Location</p>
            <p className="mix-contact-link m-0">
              Cambridge + Boston, Massachusetts
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
