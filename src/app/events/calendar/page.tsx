import { upcomingMoments } from "@/lib/site";

const revealByIndex = ["reveal", "reveal reveal-delay-1", "reveal reveal-delay-2"];

export default function EventsCalendarPage() {
  const hasUpcomingMoments = upcomingMoments.length > 0;

  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mix-kicker mb-3">Events</p>
        <h1 className="mix-page-title">Calendar</h1>

        <div className="mt-7 grid gap-3">
          {hasUpcomingMoments ? (
            upcomingMoments.map((item, index) => (
              <article key={item.title} className={`mix-surface p-5 sm:p-6 ${revealByIndex[index] ?? "reveal"}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="mix-card-title">{item.title}</h2>
                    <p className="mix-copy mt-2 mb-0">{item.detail}</p>
                  </div>
                  <p className="mix-kicker mix-date-chip mt-0.5 whitespace-nowrap">{item.date}</p>
                </div>
              </article>
            ))
          ) : (
            <article className="mix-surface reveal p-6 sm:p-8">
              <p className="mix-kicker mb-3">No events posted yet</p>
              <h2 className="mix-card-title">Stay tuned for upcoming events.</h2>
              <p className="mix-copy mt-3 mb-0">
                We are planning the next Mix calendar now. Check back soon for panels, mixers, and student music events.
              </p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
