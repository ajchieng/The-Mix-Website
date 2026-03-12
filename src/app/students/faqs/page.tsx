const faqs = [
  {
    question: "Who can apply?",
    answer: "Any Harvard student interested in music, media, or music-business collaboration.",
  },
  {
    question: "Do I need prior experience?",
    answer: "No. We value curiosity, initiative, and willingness to build with others.",
  },
  {
    question: "How often does The Mix meet?",
    answer: "Programming runs throughout the semester with regular events, workshops, and sessions.",
  },
];

const revealByIndex = ["reveal", "reveal reveal-delay-1", "reveal reveal-delay-2"];

export default function StudentsFaqsPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mix-kicker mb-3">Students</p>
        <h1 className="mix-page-title">FAQs</h1>

        <div className="mt-7 grid gap-3">
          {faqs.map((faq, index) => (
            <article key={faq.question} className={`mix-surface p-5 sm:p-6 ${revealByIndex[index] ?? "reveal"}`}>
              <h2 className="mix-card-title">{faq.question}</h2>
              <p className="mix-copy mt-3 mb-0">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
