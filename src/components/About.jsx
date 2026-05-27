export default function About() {
  return (
    <section id="about" style={{
      padding: "100px 5%",
      boxSizing: "border-box",
      width: "100%",
      overflowX: "hidden",
    }}>
      <div className="container reveal">
        <div style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "4rem",
          alignItems: "start",
        }} className="about-inner">

          {/* Photo Column */}
          <div style={{ minWidth: 0 }}>
            <div style={{
              width: "min(200px, 100%)",
              height: "200px",
              background: "var(--dark)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}>
              <div style={{ fontSize: "4rem", opacity: 0.4 }}>👤</div>
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "rgba(0,0,0,0.7)", textAlign: "center",
                padding: "0.5rem", fontSize: "0.7rem", color: "var(--muted)", fontStyle: "italic",
              }}>
                Your photo here
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1.25rem" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "var(--dark)", border: "1px solid var(--border)",
                borderRadius: "8px", padding: "0.5rem 0.75rem",
                fontSize: "0.78rem", color: "var(--muted)", whiteSpace: "nowrap",
              }}>
                <span style={{ fontSize: "0.9rem" }}>📞</span> +961 03 171 726
              </div>
              <a
                href="https://wa.me/96103171726"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  background: "var(--dark)", border: "1px solid var(--border)",
                  borderRadius: "8px", padding: "0.5rem 0.75rem",
                  fontSize: "0.78rem", color: "var(--success)", whiteSpace: "nowrap",
                  textDecoration: "none", transition: "border-color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <span style={{ fontSize: "0.9rem" }}>💬</span> WhatsApp
              </a>
            </div>
          </div>

          {/* Copy */}
          <div style={{ minWidth: 0 }}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">I Only Win<br />When You Win</h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "1rem", fontWeight: 300 }}>
              I saw gyms losing impulse buyers every single day. Good gyms, well-run businesses — losing members simply because they had no fast way to sign people up on mobile.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "1rem", fontWeight: 300 }}>
              So I built a solution. A website with a one-tap join button, a QR code for the window, and zero upfront cost. The business model forces me to care about your results. If you don't get members, I don't get paid. That's it.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "1rem", fontWeight: 300 }}>
              <strong style={{ color: "var(--white)" }}>I'm local, I answer my phone, and I care about results.</strong> This isn't a corporate product — it's a partnership.
            </p>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1.3rem", fontWeight: 700, marginTop: "1.5rem" }}>David Ghanem</div>
            <div style={{ fontSize: "0.85rem", color: "var(--orange)", marginTop: "0.25rem" }}>Gym Website Builder · Your City</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}