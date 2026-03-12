import { upcomingMoments } from "@/lib/site";

const revealByIndex = ["reveal", "reveal reveal-delay-1", "reveal reveal-delay-2"];

export default function EventsCalendarPage() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mix-kicker mb-3">Events</p>
        <h1 className="mix-page-title">Calendar</h1>

        <div className="mt-7 grid gap-3">
          {upcomingMoments.map((item, index) => (
            <article key={item.title} className={`mix-surface p-5 sm:p-6 ${revealByIndex[index] ?? "reveal"}`}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="mix-card-title">{item.title}</h2>
                  <p className="mix-copy mt-2 mb-0">{item.detail}</p>
                </div>
                <p className="mix-kicker mix-date-chip mt-0.5 whitespace-nowrap">{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
