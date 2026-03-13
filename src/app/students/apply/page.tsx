export default function StudentsApplyPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mix-apply-intro reveal p-6 sm:p-8 lg:p-10">
          <p className="mix-kicker mb-3">Students</p>
          <h1 className="mix-page-title">Apply to Join The Mix</h1>
          <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
            Applications open each semester for students across Harvard and Berklee,
            with members from Babson, Northeastern, and Emerson interested in music,
            production, strategy, and creative collaboration.
          </p>
        </div>

        <article className="mix-apply-process reveal mt-8 p-6 sm:p-8">
          <h2 className="mix-section-title">Application Process</h2>
          <br></br>
          <ol className="mix-apply-steps mt-6">
            <li className="mix-apply-step">
              <span className="mix-apply-step-index">01</span>
              <div>
                <h3 className="mix-card-title mix-apply-step-title">Written Application</h3>
                <p className="mix-copy mt-2 mb-0">
                  First, complete a written application sharing your interests, current work, and why you want to join The Mix.
                </p>
              </div>
            </li>
            <li className="mix-apply-step">
              <span className="mix-apply-step-index">02</span>
              <div>
                <h3 className="mix-card-title mix-apply-step-title">Second-Round Interview</h3>
                <p className="mix-copy mt-2 mb-0">
                  Selected applicants are invited to a short second-round interview to discuss fit, goals, and how they want to contribute.
                </p>
              </div>
            </li>
          </ol>
        </article>

        <div className="mix-apply-contact reveal reveal-delay-1 mt-6 p-5 sm:p-6">
          <p className="mix-copy m-0">
            To apply, email <a className="mix-contact-link" href="mailto:themix@harvard.edu">themix@harvard.edu</a> with
            your concentration, current projects, and why you want to join.
          </p>
        </div>
      </div>
    </section>
  );
}
