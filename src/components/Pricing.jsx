import { useState } from "react";

// Each tier only lists what it adds on top of the one before it — the card
// itself says "Everything in X, plus:" so the inheritance reads naturally
// instead of repeating every feature at every level.
const packages = [
  {
    id: "gmp_essential",
    name: "Essential",
    monthlyPrice: 49,
    annualPrice: 490,
    setupFee: 99,
    memberCap: "Up to 100 active members",
    recommended: false,
    features: [
      "Gym management dashboard",
      "Membership management",
      "Payment and renewal tracking",
      "Attendance tracking",
      "Basic financial reports",
      "Impulse app listing",
      "Standard technical support",
    ],
  },
  {
    id: "gmp_growth",
    name: "Growth",
    monthlyPrice: 89,
    annualPrice: 890,
    setupFee: 199,
    memberCap: "Up to 350 active members",
    recommended: true,
    inheritsFrom: "Essential",
    features: [
      "Branded gym website",
      "Online membership registration",
      "Automated renewal reminders",
      "Advanced financial analytics",
      "Trainer and staff management",
      "Class bookings",
      "Customer reward system",
      "Priority technical support",
    ],
  },
  {
    id: "gmp_elite",
    name: "Elite",
    monthlyPrice: 149,
    annualPrice: 1490,
    setupFee: 349,
    memberCap: "Unlimited active members",
    recommended: false,
    inheritsFrom: "Growth",
    features: [
      "Customized website design",
      "Featured placement on Impulse",
      "Advanced loyalty and referral system",
      "Customer retention analytics",
      "Marketing automation",
      "Access control integration",
      "Dedicated account manager",
      "Monthly performance report",
    ],
  },
  {
    id: "gmp_enterprise",
    name: "Enterprise",
    monthlyPriceFrom: 249,
    annualPriceFrom: 2490,
    setupFeeFrom: 599,
    memberCap: "Unlimited active members, multi-branch",
    recommended: false,
    inheritsFrom: "Elite",
    customPricing: true,
    features: [
      "Multi-branch management",
      "Centralized financial dashboard",
      "Custom integrations",
      "Branch performance comparisons",
      "Custom development quotation",
    ],
  },
];

const foundingOffer = {
  package: "Growth",
  price: 59,
  originalPrice: 89,
  setupFee: 0,
  trialDays: 14,
  priceLockMonths: 12,
  maxPartners: 10,
  firstYearSavings: 559,
};

export default function Pricing({ onContactClick }) {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      style={{
        background: "var(--near-black)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "100px 5%",
      }}
    >
      <div className="container reveal">
        <p className="section-label">Pricing</p>
        <h2 className="section-title">
          One Flat Price.
          <br />
          Keep Every Member You Earn.
        </h2>
        <p className="section-body">
          No commission, no revenue share — just a simple monthly platform fee.
          Pick the plan that fits your gym today, and grow into the next one
          whenever you're ready.
        </p>

        {/* Founding Partner banner */}
        <div
          style={{
            marginTop: "3rem",
            background:
              "linear-gradient(135deg, rgba(255,90,31,0.1), rgba(255,90,31,0.02))",
            border: "1px solid rgba(255,90,31,0.3)",
            borderRadius: "20px",
            padding: "2rem 2.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
          className="founding-banner"
        >
          <div style={{ flex: "1 1 320px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--orange)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.6rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  background: "var(--orange)",
                  borderRadius: "50%",
                }}
              />
              Only {foundingOffer.maxPartners} Founding Partner Spots
            </div>
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.3rem",
                fontWeight: 800,
                marginBottom: "0.5rem",
              }}
            >
              The full {foundingOffer.package} plan, locked at $
              {foundingOffer.price}/mo for {foundingOffer.priceLockMonths}{" "}
              months
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              Regularly ${foundingOffer.originalPrice}/mo — founding partners
              get free setup, a {foundingOffer.trialDays}-day trial, and that
              price guaranteed for a full year. That's{" "}
              <strong style={{ color: "var(--white)" }}>
                ${foundingOffer.firstYearSavings} saved
              </strong>{" "}
              in year one alone.
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={onContactClick}
            style={{ flexShrink: 0, whiteSpace: "nowrap" }}
          >
            Claim Your Spot →
          </button>
        </div>

        {/* Billing toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            marginTop: "3rem",
          }}
        >
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: annual ? "var(--muted)" : "var(--white)",
            }}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual((a) => !a)}
            aria-label="Toggle annual billing"
            style={{
              width: "46px",
              height: "26px",
              borderRadius: "999px",
              border: "1px solid var(--border)",
              background: annual ? "var(--orange)" : "var(--mid)",
              position: "relative",
              cursor: "pointer",
              transition: "background 0.2s",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "2px",
                left: annual ? "22px" : "2px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "var(--white)",
                transition: "left 0.2s",
              }}
            />
          </button>
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: annual ? "var(--white)" : "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            Annual
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "var(--success)",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: "999px",
                padding: "0.15rem 0.5rem",
              }}
            >
              2 months free
            </span>
          </span>
        </div>

        {/* Package grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
            marginTop: "2.5rem",
            alignItems: "stretch",
          }}
          className="packages-grid"
        >
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              annual={annual}
              onContactClick={onContactClick}
            />
          ))}
        </div>

        <p
          style={{
            marginTop: "2.5rem",
            fontSize: "0.85rem",
            color: "var(--muted)",
            textAlign: "center",
          }}
        >
          Every plan can add a featured Impulse listing, a custom domain, extra
          branches, and more as you grow.{" "}
          <button
            onClick={onContactClick}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "var(--orange)",
              fontWeight: 600,
              cursor: "pointer",
              font: "inherit",
            }}
          >
            Ask us about add-ons →
          </button>
        </p>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .packages-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .packages-grid { grid-template-columns: 1fr !important; }
          .founding-banner { padding: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function PackageCard({ pkg, annual, onContactClick }) {
  const {
    name,
    monthlyPrice,
    annualPrice,
    setupFee,
    monthlyPriceFrom,
    annualPriceFrom,
    setupFeeFrom,
    memberCap,
    recommended,
    inheritsFrom,
    features,
    customPricing,
  } = pkg;

  const displayMonthly = customPricing
    ? Math.round((annual ? annualPriceFrom : monthlyPriceFrom * 12) / 12)
    : Math.round((annual ? annualPrice : monthlyPrice * 12) / 12);
  const setup = customPricing ? setupFeeFrom : setupFee;
  const prefix = customPricing ? "From " : "";

  return (
    <div
      style={{
        background: "var(--dark)",
        border: recommended
          ? "1px solid var(--orange)"
          : "1px solid var(--border)",
        borderRadius: "18px",
        padding: "2rem 1.75rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: recommended
          ? "0 0 0 1px rgba(255,90,31,0.15), 0 20px 40px rgba(255,90,31,0.08)"
          : "none",
      }}
    >
      {recommended && (
        <div
          style={{
            position: "absolute",
            top: "-13px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--orange)",
            color: "var(--white)",
            fontSize: "0.68rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            padding: "0.3rem 0.8rem",
            borderRadius: "999px",
            whiteSpace: "nowrap",
          }}
        >
          Most Popular
        </div>
      )}

      <h3
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "1.2rem",
          fontWeight: 800,
          marginBottom: "0.75rem",
        }}
      >
        {name}
      </h3>

      {customPricing && (
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--muted)",
          }}
        >
          Starting from
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "0.3rem",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "2.1rem",
            fontWeight: 800,
          }}
        >
          ${displayMonthly}
        </span>
        <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>/mo</span>
      </div>
      <div
        style={{
          fontSize: "0.78rem",
          color: "var(--muted)",
          marginTop: "0.25rem",
          minHeight: "1.2em",
        }}
      >
        {annual
          ? `billed annually ($${customPricing ? annualPriceFrom : annualPrice}/yr)`
          : "billed monthly"}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: "var(--muted)",
          marginTop: "0.5rem",
        }}
      >
        + {prefix}${setup} one-time setup
      </div>

      <div
        style={{
          marginTop: "1.25rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid var(--border)",
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.75)",
          fontWeight: 600,
        }}
      >
        {memberCap}
      </div>

      <ul
        style={{
          listStyle: "none",
          marginTop: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.65rem",
          flex: 1,
        }}
      >
        {inheritsFrom && (
          <li
            style={{
              fontSize: "0.82rem",
              color: "var(--orange)",
              fontWeight: 600,
              marginBottom: "0.1rem",
            }}
          >
            Everything in {inheritsFrom}, plus:
          </li>
        )}
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.6rem",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.4,
            }}
          >
            <span
              style={{
                width: "16px",
                height: "16px",
                minWidth: "16px",
                marginTop: "1px",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.55rem",
                color: "var(--success)",
              }}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button
        className={recommended ? "btn-primary" : "btn-secondary"}
        onClick={onContactClick}
        style={{ marginTop: "1.75rem", width: "100%" }}
      >
        {customPricing ? "Request a Quote" : "Get Started"}
      </button>
    </div>
  );
}
