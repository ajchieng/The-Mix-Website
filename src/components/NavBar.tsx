"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const eventsMenu = [
  { label: "Gallery", href: "/events/gallery" },
  { label: "Calendar", href: "/events/calendar" },
];

const studentsMenu = [
  { label: "Apply", href: "/students/apply" },
  { label: "Mailing List", href: "/students/mailing-list" },
  { label: "FAQs", href: "/students/faqs" },
];

const aboutMenu = [
  { label: "Our Team", href: "/about/team" },
  { label: "Our Founder", href: "/about/founder" },
  { label: "Our Mission", href: "/about/mission" },
];

export function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 901px)");

    const onMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileOpen(false);
      }
    };

    if (desktopMedia.matches) {
      setIsMobileOpen(false);
    }

    desktopMedia.addEventListener("change", onMediaChange);
    return () => desktopMedia.removeEventListener("change", onMediaChange);
  }, []);

  return (
    <header className="mix-nav sticky top-0 z-50">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-3 px-3 sm:px-6 lg:px-8">
        <Link href="/" className="mix-nav-brand">
          Home
        </Link>
        <div className="mix-nav-actions">
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

            <div className="mix-nav-dropdown">
              <button type="button" className="mix-nav-link mix-nav-link-trigger" aria-haspopup="menu">
                About Us
              </button>
              <div className="mix-nav-menu" role="menu" aria-label="About Us">
                {aboutMenu.map((item) => (
                  <Link key={item.href} href={item.href} className="mix-nav-menu-link" role="menuitem">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="mix-nav-link">
              Contact
            </Link>

            <a
              href="https://www.instagram.com/themixnetwork_/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="mix-nav-social"
              aria-label="Instagram"
            >
              <Image
                src="/homepageimages/instagram-logo.svg"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="mix-nav-social-icon"
              />
            </a>
          </nav>

          <button
            type="button"
            className={`mix-nav-mobile-toggle ${isMobileOpen ? "is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
            aria-controls="mix-mobile-nav"
            onClick={() => setIsMobileOpen((previous) => !previous)}
          >
            <span className="mix-nav-mobile-bar" />
            <span className="mix-nav-mobile-bar" />
            <span className="mix-nav-mobile-bar" />
          </button>
        </div>
      </div>

      <div id="mix-mobile-nav" className={`mix-nav-mobile-panel ${isMobileOpen ? "is-open" : ""}`}>
        <nav className="mix-nav-mobile-links" aria-label="Mobile Primary">
          <div className="mix-nav-mobile-group">
            <p className="mix-nav-mobile-heading">Events</p>
            {eventsMenu.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className="mix-nav-mobile-link"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mix-nav-mobile-group">
            <p className="mix-nav-mobile-heading">Students</p>
            {studentsMenu.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className="mix-nav-mobile-link"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mix-nav-mobile-group">
            <p className="mix-nav-mobile-heading">About Us</p>
            {aboutMenu.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className="mix-nav-mobile-link"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mix-nav-mobile-group">
            <Link
              href="/contact"
              className="mix-nav-mobile-link mix-nav-mobile-link-strong"
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://www.instagram.com/themixnetwork_/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="mix-nav-mobile-link mix-nav-mobile-link-strong"
              onClick={() => setIsMobileOpen(false)}
            >
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
