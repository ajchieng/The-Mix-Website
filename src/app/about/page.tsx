const values = [
  "Cross-disciplinary collaboration between artists and operators.",
  "Real-world learning through execution and mentorship.",
  "Inclusive access to opportunities in music and media.",
];

const revealByIndex = ["reveal", "reveal reveal-delay-1", "reveal reveal-delay-2"];

export default function AboutPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mix-surface reveal p-6 sm:p-8 lg:p-10">
          <p className="mix-kicker mb-3">About The Mix</p>
          <h1 className="mix-page-title">
            A student platform for music networking and business at Harvard.
          </h1>
          <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
            The Mix equips students to navigate music professionally by combining
            creative community with practical business education.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="mix-section-title">How We Operate</h2>
          <div className="mt-6 grid gap-3">
            {values.map((value, index) => (
              <article
                key={value}
                className={`mix-surface flex items-start gap-4 p-4 sm:p-5 ${revealByIndex[index] ?? "reveal"}`}
              >
                <span className="mix-list-number mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mix-copy m-0">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
