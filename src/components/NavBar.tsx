import Link from "next/link";

const eventsMenu = [
  { label: "Gallery", href: "/events/gallery" },
  { label: "Calendar", href: "/events/calendar" },
];

const studentsMenu = [
  { label: "Apply", href: "/students/apply" },
  { label: "FAQs", href: "/students/faqs" },
  { label: "Community", href: "/students/community" },
];

export function NavBar() {
  return (
    <header className="mix-nav sticky top-0 z-50">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-3 px-3 sm:px-6 lg:px-8">
        <Link href="/" className="mix-nav-brand">
          The Mix
        </Link>
        <nav className="mix-nav-links" aria-label="Primary">
          <div className="mix-nav-dropdown">
            <button type="button" className="mix-nav-link mix-nav-link-trigger" aria-haspopup="menu">
              Events
            </button>
            <div className="mix-nav-menu" role="menu" aria-label="Events">
              {eventsMenu.map((item) => (
                <Link key={item.href} href={item.href} className="mix-nav-menu-link" role="menuitem">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mix-nav-dropdown">
            <button type="button" className="mix-nav-link mix-nav-link-trigger" aria-haspopup="menu">
              Students
            </button>
            <div className="mix-nav-menu" role="menu" aria-label="Students">
              {studentsMenu.map((item) => (
                <Link key={item.href} href={item.href} className="mix-nav-menu-link" role="menuitem">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="mix-nav-link">
            About Us
          </Link>

          <Link href="/contact" className="mix-nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
