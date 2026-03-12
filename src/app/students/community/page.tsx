const communityHighlights = [
  "Artist, producer, and operator matching for new projects.",
  "Peer feedback sessions for songs, releases, and strategy.",
  "Small group circles focused on long-term career development.",
];

const revealByIndex = ["reveal", "reveal reveal-delay-1", "reveal reveal-delay-2"];

export default function StudentsCommunityPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mix-surface reveal p-6 sm:p-8 lg:p-10">
          <p className="mix-kicker mb-3">Students</p>
          <h1 className="mix-page-title">Community</h1>
          <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
            The Mix community is built around execution, consistency, and helping each
            other turn ideas into finished work.
          </p>
        </div>

        <div className="mt-7 grid gap-3">
          {communityHighlights.map((item, index) => (
            <article key={item} className={`mix-surface p-4 sm:p-5 ${revealByIndex[index] ?? "reveal"}`}>
              <p className="mix-copy m-0">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
