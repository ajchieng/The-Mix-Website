const galleryMoments = [
  "A&R Showcase Night",
  "Producer Feedback Session",
  "Founder x Artist Mixer",
];

const revealByIndex = ["reveal", "reveal reveal-delay-1", "reveal reveal-delay-2"];

export default function EventsGalleryPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mix-kicker mb-3">Events</p>
        <h1 className="mix-page-title">Gallery</h1>
        <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
          A quick look at community moments from showcases, workshops, and collaborative
          sessions.
        </p>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {galleryMoments.map((moment, index) => (
            <article key={moment} className={`mix-surface p-5 ${revealByIndex[index] ?? "reveal"}`}>
              <h2 className="mix-card-title">{moment}</h2>
              <p className="mix-copy mt-2 mb-0">
                Photo gallery coming soon.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
