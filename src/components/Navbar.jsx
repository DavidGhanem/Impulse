import { useState, useEffect } from "react";

export default function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 5%",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(10,10,10,0.98)" : "rgba(10,10,10,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s",
        }}
      >
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "1.25rem",
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ color: "var(--white)" }}>Im</span>
          <span style={{ color: "var(--orange)" }}>pulse</span>
        </div>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--muted)",
          }}
          className="nav-links-desktop"
        >
          {[
            ["problem", "The Problem"],
            ["pricing", "Pricing"],
            ["how-it-works", "How It Works"],
            ["about", "About"],
            ["contact", "Contact"]
          ].map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{ transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-cta"
          onClick={onContactClick}
          style={{
            background: "var(--orange)",
            color: "var(--white)",
            padding: "0.55rem 1.25rem",
            borderRadius: "6px",
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            fontSize: "0.875rem",
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.1s",
          }}
        >
          Let's Talk
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            cursor: "pointer",
            padding: "4px",
            background: "none",
            border: "none",
          }}
          className="hamburger-btn"
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--white)",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--white)",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "all 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--white)",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            background: "var(--near-black)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 5%",
            zIndex: 99,
          }}
        >
          {[
            ["problem", "The Problem"],
            ["pricing", "Pricing"],
            ["how-it-works", "How It Works"],
            ["included", "What's Included"],
            ["about", "About"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              style={{
                fontSize: "1rem",
                color: "var(--muted)",
                padding: "0.5rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              onContactClick();
              closeMenu();
            }}
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              padding: "0.5rem 0",
            }}
          >
            Let's Talk →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop, .nav-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
