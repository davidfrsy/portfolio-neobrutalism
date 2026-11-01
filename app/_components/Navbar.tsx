"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <a href="#home" className="nav__logo" aria-label="Back to top">
          [DEV]
        </a>
        <ul className="nav__links" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav__toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Mobile menu — closes with Escape (R-32) */}
      <div
        id="mobile-menu"
        className={`nav__mobile-menu${isMenuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsMenuOpen(false);
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav__mobile-link"
            onClick={handleLinkClick}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
