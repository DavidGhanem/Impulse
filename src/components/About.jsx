export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 5%",
        boxSizing: "border-box",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div className="container reveal">
        <p className="section-label">About Me</p>

        <div
          className="about-inner"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Copy Column */}
          <div>
            <h2 className="section-title">
              I Only Win
              <br />
              When You Win
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: "1rem",
                fontWeight: 300,
              }}
            >
              I saw gyms losing impulse buyers every single day. Good gyms,
              well-run businesses — losing members simply because they had no
              fast way to sign people up on mobile.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: "1rem",
                fontWeight: 300,
              }}
            >
              So I built a solution. A website with a one-tap join button, a QR
              code for the window, and zero upfront cost. If you don't get
              members, I don't get paid. That's it.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              <strong style={{ color: "var(--white)" }}>
                I'm local, I answer my phone, and I care about results.
              </strong>{" "}
              This isn't a corporate product — it's a partnership.
            </p>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                }}
              >
                David Ghanem
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--orange)",
                  marginTop: "0.25rem",
                }}
              >
                Gym Website Builder · Lebanon
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginTop: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="tel:+96103171726"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "var(--dark)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    textDecoration: "none",
                  }}
                >
                  📞 +961 03 171 726
                </a>
                <a
                  href="https://wa.me/96103171726"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "var(--dark)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.78rem",
                    color: "var(--success)",
                    textDecoration: "none",
                  }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              style={{
                background: "var(--near-black)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  marginBottom: "0.5rem",
                }}
              >
                The Model
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                }}
              >
                Zero upfront. 20% per member.
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                }}
              >
                You only pay when someone joins through your site. My incentive
                is your growth.
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  background: "var(--near-black)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--orange)",
                  }}
                >
                  0%
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: "0.25rem",
                  }}
                >
                  Risk to you
                </div>
              </div>
              <div
                style={{
                  background: "var(--near-black)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--orange)",
                  }}
                >
                  60s
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: "0.25rem",
                  }}
                >
                  To join online
                </div>
              </div>
            </div>

            <div
              style={{
                background: "var(--near-black)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--orange-glow)",
                  border: "1px solid rgba(255,90,31,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  flexShrink: 0,
                }}
              >
                🇱🇧
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  Based in Lebanon
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    marginTop: "0.15rem",
                  }}
                >
                  Local builder, real relationship
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
