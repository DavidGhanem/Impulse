import { Link } from "react-router-dom";

const contactLinks = [
  { href: "tel:+96103171726", label: "+961 03 171 726", icon: "📞" },
  { href: "tel:+96181239350", label: "+961 81 239 350", icon: "📞" },
  {
    href: "mailto:impulsegrowthagency@gmail.com",
    label: "impulsegrowthagency@gmail.com",
    icon: "✉️",
  },
  {
    href: "https://wa.me/96181239350",
    label: "WhatsApp",
    icon: "💬",
    target: "_blank",
  },
];

const activateSocials = false;

const socialLinks = [
  {
    href: "https://www.facebook.com/share/1CUbt9Ebdk",
    label: "Facebook",
    icon: "f",
  },
  {
    href: "https://instagram.com/impulse_leb",
    label: "Instagram",
    icon: "ig",
  },
  { href: "https://tiktok.com/@impulselb", label: "TikTok", icon: "tt" },
];

const SocialIcon = ({ type }) => {
  const s = {
    width: "16px",
    height: "16px",
    display: "inline-block",
    verticalAlign: "middle",
  };
  if (type === "f")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" style={s}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  if (type === "ig")
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  if (type === "tt")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" style={s}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z" />
      </svg>
    );
  return null;
};

export default function Footer() {
  const linkStyle = {
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.5)",
    transition: "color 0.2s",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    lineHeight: 1,
  };

  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
        padding: "3rem 5%",
        boxSizing: "border-box",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto auto auto",
          gap: "3rem",
          alignItems: "start",
          width: "100%",
        }}
        className="footer-inner"
      >
        {/* Brand */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ color: "var(--white)" }}>Im</span>
            <span style={{ color: "var(--orange)" }}>pulse</span>
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--muted)",
              maxWidth: "240px",
              lineHeight: 1.6,
            }}
          >
            Professional gym websites with zero upfront cost. Pay only when you
            get new members.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--muted)",
              marginBottom: "1rem",
            }}
          >
            Navigation
          </h4>
          <ul style={{ listStyle: "none" }}>
            {[
              ["#problem", "The Problem"],
              ["#solution", "The Solution"],
              ["#pricing", "Pricing"],
              ["#how-it-works", "How It Works"],
              ["#guarantee", "Guarantee"],
            ].map(([href, label]) => (
              <li key={href} style={{ marginBottom: "0.5rem" }}>
                <a
                  href={href}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--orange)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--muted)",
              marginBottom: "1rem",
            }}
          >
            Contact
          </h4>
          <ul style={{ listStyle: "none" }}>
            {contactLinks.map(({ href, label, icon, target }) => (
              <li key={href} style={{ marginBottom: "0.6rem" }}>
                <a
                  href={href}
                  target={target || "_self"}
                  rel={target === "_blank" ? "noreferrer" : undefined}
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--orange)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  <span
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {icon}
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        {activateSocials ? (
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--muted)",
                marginBottom: "1rem",
              }}
            >
              Follow
            </h4>
            <ul style={{ listStyle: "none" }}>
              {socialLinks.map(({ href, label, icon }) => (
                <li key={href} style={{ marginBottom: "0.6rem" }}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--orange)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    <SocialIcon type={icon} />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1080px",
          margin: "2rem auto 0",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.78rem",
          color: "rgba(255,255,255,0.3)",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <div>© 2025 Impulse · All rights reserved</div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            to="/terms"
            style={{
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--orange)")}
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(255,255,255,0.3)")
            }
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            style={{
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--orange)")}
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(255,255,255,0.3)")
            }
          >
            Privacy Policy
          </Link>
          <span>Lebanon · Built for gym owners</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 500px) {
          .footer-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
