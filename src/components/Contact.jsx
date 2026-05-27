export default function Contact({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneInput = e.target.querySelector('input[type="tel"]');
    const digits = phoneInput.value.replace(/\D/g, "");
    phoneInput.value = "+961" + digits;
    onSubmit();
    e.target.reset();
  };

  const handlePhone = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
    let formatted = digits;
    if (digits.length > 5) {
      formatted =
        digits.slice(0, 2) + " " + digits.slice(2, 5) + " " + digits.slice(5);
    } else if (digits.length > 2) {
      formatted = digits.slice(0, 2) + " " + digits.slice(2);
    }
    e.target.value = formatted;
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--near-black)",
        borderTop: "1px solid var(--border)",
        padding: "100px 5%",
      }}
    >
      <div className="container reveal">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* Copy */}
          <div>
            <p className="section-label">Get Started</p>
            <h2 className="section-title">
              Let's Build Your
              <br />
              Gym's Website
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontWeight: 300,
              }}
            >
              Fill in the form. I'll reach out within a few hours to schedule a
              15-minute call. No pressure. No pitch. Just a conversation.
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                "No contract or upfront cost",
                "Website live within days",
                "30-day money-back guarantee",
                "I handle all the tech",
                "WhatsApp support, always",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      minWidth: "20px",
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.3)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.65rem",
                      color: "var(--success)",
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div
            style={{
              background: "var(--dark)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "2.5rem",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
                className="form-row"
              >
                {[
                  ["Your Name", "text", "John Sfeir"],
                  ["Gym Name", "text", "Iron Peak Gym"],
                ].map(([label, type, placeholder]) => (
                  <div key={label} style={{ marginBottom: "1.25rem" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--muted)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
                className="form-row"
              >
                {/* Phone Number with auto-formatting */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="XX XXX XXX"
                    required
                    maxLength={9}
                    style={inputStyle}
                    onChange={handlePhone}
                  />
                </div>
                {/* Email */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@mygym.com"
                    required
                    style={inputStyle}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Current Members
                </label>
                <select
                  required
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    WebkitAppearance: "none",
                  }}
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  {["Under 50", "50–100", "100–250", "250–500", "500+"].map(
                    (o) => (
                      <option key={o}>{o}</option>
                    ),
                  )}
                </select>
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "1rem",
                  fontSize: "1.05rem",
                  borderRadius: "10px",
                  marginTop: "0.5rem",
                }}
              >
                Start My Free Website →
              </button>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1.25rem",
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                }}
              >
                Or text me directly on WhatsApp:{" "}
                <a
                  href="https://wa.me/+96181239350"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--success)", fontWeight: 600 }}
                >
                  +96181239350
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #contact .form-box { padding: 1.75rem; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  background: "var(--near-black)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "0.8rem 1rem",
  color: "var(--white)",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.95rem",
  outline: "none",
};
