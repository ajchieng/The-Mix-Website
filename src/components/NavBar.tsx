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
  { label: "Our Founders", href: "/about/founder" },
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
      <div className="mix-nav-inner mx-auto w-full max-w-[90rem] px-4 sm:px-7 lg:px-10">
        <div className="mix-nav-balance" aria-hidden="true" />

        <nav className="mix-nav-links mix-nav-links-left" aria-label="Primary left">
          <Link href="/" className="mix-nav-link">
            Home
          </Link>

          <div className="mix-nav-dropdown">
            <button type="button" className="mix-nav-link mix-nav-link-trigger" aria-haspopup="menu">
              The Hub
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
              Join The Mix
            </button>
            <div className="mix-nav-menu" role="menu" aria-label="Students">
              {studentsMenu.map((item) => (
                <Link key={item.href} href={item.href} className="mix-nav-menu-link" role="menuitem">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <Link href="/" className="mix-nav-logo-link" aria-label="Go to the homepage">
          <Image
            src="/homepageimages/mix_logo_white.svg"
            alt="The Mix"
            width={56}
            height={56}
            className="mix-nav-logo-image"
          />
        </Link>

        <nav className="mix-nav-links mix-nav-links-right" aria-label="Primary right">
          <div className="mix-nav-dropdown">
            <button type="button" className="mix-nav-link mix-nav-link-trigger" aria-haspopup="menu">
              The Team
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
            Connect
          </Link>

          <Link href="/press" className="mix-nav-link">
            Press
          </Link>
        </nav>

        <div className="mix-nav-utilities">
          <a
            href="https://www.instagram.com/themixnetwork_/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="mix-nav-social mix-nav-social-desktop"
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
            <Link
              href="/"
              className="mix-nav-mobile-link mix-nav-mobile-link-strong"
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </Link>
          </div>

          <div className="mix-nav-mobile-group">
            <p className="mix-nav-mobile-heading">The Hub</p>
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
            <p className="mix-nav-mobile-heading">Join The Mix</p>
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
            <p className="mix-nav-mobile-heading">The Team</p>
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
              Connect
            </Link>
            <Link
              href="/press"
              className="mix-nav-mobile-link mix-nav-mobile-link-strong"
              onClick={() => setIsMobileOpen(false)}
            >
              Press
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
