import { MailingListForm } from "@/components/MailingListForm";

export default function StudentsMailingListPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-3xl">
        <div className="reveal p-2 sm:p-4 lg:p-6">
          <p className="mix-kicker mb-3">Students</p>
          <h1 className="mix-page-title">Mailing List</h1>
          <p className="mix-copy mt-5 mb-0 text-base sm:text-lg">
            Join our student mailing list to hear about upcoming events,
            workshops, and opportunities with The Mix.
          </p>

          <MailingListForm />
        </div>
      </div>
    </section>
  );
}
