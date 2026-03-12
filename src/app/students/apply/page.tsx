export default function StudentsApplyPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mix-surface reveal p-6 sm:p-8 lg:p-10">
          <p className="mix-kicker mb-3">Students</p>
          <h1 className="mix-page-title">Apply to Join The Mix</h1>
          <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
            Applications open each semester for students interested in music,
            production, strategy, and creative collaboration.
          </p>
        </div>

        <div className="mt-6 mix-surface reveal reveal-delay-1 p-5 sm:p-6">
          <p className="mix-copy m-0">
            To apply, email <a className="mix-contact-link" href="mailto:themix@harvard.edu">themix@harvard.edu</a> with
            your concentration, current projects, and why you want to join.
          </p>
        </div>
      </div>
    </section>
  );
}
