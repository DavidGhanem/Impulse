export default function PrivacyPolicy() {
  const sections = [
    {
      number: "01",
      title: "Introduction",
      content: (
        <>
          <p>
            Welcome to Impulse ("Provider," "we," "us," "our"). We respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains:
          </p>
          <ul>
            <li>What information we collect</li>
            <li>How we use your information</li>
            <li>Who we share it with</li>
            <li>Your rights regarding your information</li>
          </ul>
          <p>
            This Privacy Policy applies to our website at
            www.impulsegrowth.online (the "Site") and any services offered
            through the Site.
          </p>
          <p>
            By using our Site, you agree to the collection and use of your
            information as described in this Privacy Policy.
          </p>
        </>
      ),
    },
    {
      number: "02",
      title: "Information We Collect",
      subsections: [
        {
          title: "2.1 Information You Provide to Us",
          intro: "We collect information you voluntarily provide when you:",
          list: [
            "Contact us via our contact form",
            "Sign up for our services",
            "Communicate with us via email, WhatsApp, or phone",
            "Request a demo or free trial",
          ],
        },
        {
          title: "2.2 Information We Collect Automatically",
          intro: "When you visit our Site, we may automatically collect:",
          table: {
            headers: ["Category", "Examples", "Purpose"],
            rows: [
              [
                "Technical data",
                "IP address, browser type, device type",
                "To improve our Site performance",
              ],
              [
                "Usage data",
                "Pages visited, time spent, links clicked",
                "To understand how visitors use our Site",
              ],
              [
                "Location data",
                "General location (city/country level)",
                "To tailor content to your region",
              ],
            ],
          },
        },
        {
          title: "2.3 Information We Do NOT Collect",
          notIntro: "We do NOT collect:",
          notList: [
            "Credit card or bank account numbers",
            "Member payment information (this is handled directly by Whish)",
            "Sensitive personal data (health, religion, political views)",
            "Biometric data or government IDs",
          ],
        },
      ],
    },
    {
      number: "03",
      title: "How We Use Your Information",
      content: (
        <>
          <p>We use your information for the following purposes:</p>
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Legal Basis</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>To respond to your inquiries</td>
                  <td>Legitimate interest</td>
                  <td>Replying to your contact form message</td>
                </tr>
                <tr>
                  <td>To provide our services</td>
                  <td>Contract performance</td>
                  <td>Building your gym website</td>
                </tr>
                <tr>
                  <td>To process payments (revenue share)</td>
                  <td>Contract performance</td>
                  <td>Tracking member signups for 10%/20% calculation</td>
                </tr>
                <tr>
                  <td>To send service updates</td>
                  <td>Legitimate interest</td>
                  <td>Notifying you of website maintenance</td>
                </tr>
                <tr>
                  <td>To improve our Site</td>
                  <td>Legitimate interest</td>
                  <td>Analyzing which pages visitors use most</td>
                </tr>
                <tr>
                  <td>To comply with legal obligations</td>
                  <td>Legal obligation</td>
                  <td>Responding to court orders or lawful requests</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      number: "04",
      title: "Cookies and Tracking Technologies",
      subsections: [
        {
          title: "4.1 What Are Cookies?",
          content:
            "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use the Site.",
        },
        {
          title: "4.2 Types of Cookies We Use",
          tableData: {
            headers: ["Type", "Purpose", "Duration"],
            rows: [
              [
                "Essential cookies",
                "Required for the Site to function properly",
                "Session",
              ],
              [
                "Preference cookies",
                "Remember your preferences (e.g., language)",
                "Up to 12 months",
              ],
              [
                "Analytics cookies",
                "Help us understand how visitors use our Site",
                "Up to 24 months",
              ],
            ],
          },
        },
        {
          title: "4.3 Managing Cookies",
          intro:
            "You can control cookies through your browser settings. You may choose to:",
          list: [
            "Accept all cookies",
            "Reject all cookies",
            "Delete existing cookies",
            "Be notified when a cookie is set",
          ],
          extra:
            "Note: Rejecting essential cookies may prevent our Site from functioning properly.",
        },
        {
          title: "4.4 Third-Party Cookies",
          intro: "We may use third-party services that set their own cookies:",
          tableData: {
            headers: ["Service", "Purpose", "Privacy Link"],
            rows: [
              [
                "Google Analytics",
                "Website analytics",
                "policies.google.com/privacy",
              ],
              [
                "Whish",
                "Payment processing (on gym websites, not our main Site)",
                "Whish Privacy Policy",
              ],
            ],
          },
        },
      ],
    },
    {
      number: "05",
      title: "How We Share Your Information",
      content: (
        <>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal
            information to third parties.
          </p>
          <p>
            We may share your information in the following limited
            circumstances:
          </p>
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>When we share</th>
                  <th>What we share</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Service providers</td>
                  <td>
                    To help us operate our business (e.g., hosting, analytics)
                  </td>
                  <td>Limited to what is necessary</td>
                </tr>
                <tr>
                  <td>Legal authorities</td>
                  <td>When required by law or to protect our rights</td>
                  <td>As required by law</td>
                </tr>
                <tr>
                  <td>Whish (if you become a client)</td>
                  <td>To integrate payment processing for your gym</td>
                  <td>Your gym name and business information</td>
                </tr>
                <tr>
                  <td>Successors</td>
                  <td>If our business is sold or merged</td>
                  <td>All data (you will be notified)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Our Site may contain links to third-party websites (e.g., Whish). We
            are not responsible for the privacy practices of these third
            parties. We encourage you to read their privacy policies.
          </p>
        </>
      ),
    },
    {
      number: "06",
      title: "Data Retention",
      content: (
        <>
          <p>
            We keep your personal information only as long as necessary for the
            purposes described in this Privacy Policy.
          </p>
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Type of Data</th>
                  <th>Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Contact form inquiries</td>
                  <td>12 months after last contact</td>
                </tr>
                <tr>
                  <td>Client data (gym owners who sign up)</td>
                  <td>Duration of our agreement + 24 months</td>
                </tr>
                <tr>
                  <td>Website analytics data</td>
                  <td>24 months</td>
                </tr>
                <tr>
                  <td>WhatsApp/email conversations</td>
                  <td>12 months after last message</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            After the retention period ends, we will delete or anonymize your
            information.
          </p>
        </>
      ),
    },
    {
      number: "07",
      title: "Data Security",
      content: (
        <>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p>
            <strong>Our security measures include:</strong>
          </p>
          <ul>
            <li>SSL encryption on our website</li>
            <li>Secure hosting environment</li>
            <li>Limited access to personal data (only the business owner)</li>
            <li>Regular software updates</li>
          </ul>
          <p>
            However, no method of transmission over the internet is 100% secure.
            We cannot guarantee absolute security. You use our Site at your own
            risk.
          </p>
        </>
      ),
    },
    {
      number: "08",
      title: "Your Rights",
      content: (
        <>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Right</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Right to access</strong>
                  </td>
                  <td>
                    You can request a copy of the information we hold about you
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to correction</strong>
                  </td>
                  <td>
                    You can ask us to correct inaccurate or incomplete
                    information
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to deletion</strong>
                  </td>
                  <td>
                    You can ask us to delete your information (subject to legal
                    obligations)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to restrict processing</strong>
                  </td>
                  <td>You can ask us to limit how we use your information</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to data portability</strong>
                  </td>
                  <td>
                    You can request a copy of your information in a
                    machine-readable format
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to object</strong>
                  </td>
                  <td>
                    You can object to certain types of processing (e.g.,
                    marketing)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to withdraw consent</strong>
                  </td>
                  <td>
                    You can withdraw consent where we rely on consent as the
                    legal basis
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>To exercise any of these rights, contact us at:</p>
          <div className="contact-block">
            <div>
              <span>Email</span>
              <strong>
                <a href="mailto:impulsegrowthagency@gmail.com">
                  impulsegrowthagency@gmail.com
                </a>
              </strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>
                <a href="tel:+96103171726">03 171 726</a>
              </strong>
            </div>
            <div>
              <span>WhatsApp</span>
              <strong>
                <a href="tel:+96181239350">81 239 350</a>
              </strong>
            </div>
          </div>
          <p style={{ marginTop: "1rem" }}>
            We will respond to your request within 30 days.
          </p>
        </>
      ),
    },
    {
      number: "09",
      title: "Children's Privacy",
      content: (
        <>
          <p>
            Our Site and services are{" "}
            <strong>not intended for individuals under 18 years old</strong>. We
            do not knowingly collect information from children. If you believe a
            child has provided us with personal information, please contact us,
            and we will delete it.
          </p>
        </>
      ),
    },
    {
      number: "10",
      title: "International Data Transfers",
      content: (
        <>
          <p>
            Our business is based in Lebanon. If you access our Site from
            outside Lebanon, your information may be transferred to, stored, and
            processed in Lebanon.
          </p>
          <p>
            By using our Site, you consent to this transfer. We will take
            reasonable steps to ensure your information is treated securely.
          </p>
        </>
      ),
    },
    {
      number: "11",
      title: "Your Rights Under Specific Laws",
      subsections: [
        {
          title: "11.1 If You Are in the European Union (GDPR)",
          intro:
            "If you are in the EU, you have additional rights under the General Data Protection Regulation (GDPR):",
          list: [
            "You have the right to lodge a complaint with your local data protection authority",
            "We rely on legitimate interest as the legal basis for most processing",
            "You can withdraw consent at any time (where consent is the basis)",
          ],
        },
        {
          title: "11.2 If You Are in California (CCPA)",
          intro:
            "If you are a California resident, the California Consumer Privacy Act (CCPA) gives you additional rights:",
          list: [
            "Right to know what personal information we collect",
            "Right to request deletion of your personal information",
            "Right to opt out of the sale of your personal information (we do not sell your information)",
            "Right to non-discrimination for exercising your rights",
          ],
        },
      ],
    },
    {
      number: "12",
      title: "Changes to This Privacy Policy",
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will:
          </p>
          <ul>
            <li>Post the updated policy on this page</li>
            <li>Update the "Last Updated" date at the top</li>
            <li>
              Notify you via email or WhatsApp (if we have your contact
              information)
            </li>
          </ul>
          <p>
            Your continued use of our Site after changes constitutes acceptance
            of the new Privacy Policy.
          </p>
        </>
      ),
    },
    {
      number: "13",
      title: "Contact Information",
      content: (
        <>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your information, please contact us:
          </p>
          <div className="contact-block">
            <div>
              <span>Provider</span>
              <strong>David Ghanem</strong>
            </div>
            <div>
              <span>Business</span>
              <strong>Impulse</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>
                <a href="mailto:impulsegrowthagency@gmail.com">
                  impulsegrowthagency@gmail.com
                </a>
              </strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>
                <a href="tel:+96103171726">03 171 726</a>
              </strong>
            </div>
            <div>
              <span>WhatsApp</span>
              <strong>
                <a href="tel:+96181239350">81 239 350</a>
              </strong>
            </div>
          </div>
        </>
      ),
    },
    {
      number: "14",
      title: "Acceptance of This Privacy Policy",
      content: (
        <>
          <p>
            By using our Site, you acknowledge that you have read, understood,
            and agree to be bound by this Privacy Policy.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .pp-page {
          background: var(--black);
          color: var(--white);
          font-family: "DM Sans", sans-serif;
          min-height: 100vh;
        }

        .pp-hero {
          border-bottom: 1px solid var(--border);
          padding: 7rem 5% 4rem;
        }

        .pp-hero-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        .pp-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--orange);
          margin-bottom: 1.5rem;
        }

        .pp-label::before {
          content: "";
          display: block;
          width: 20px;
          height: 1px;
          background: var(--orange);
        }

        .pp-hero h1 {
          font-family: "Syne", sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        .pp-hero h1 span {
          color: var(--orange);
        }

        .pp-meta {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .pp-meta-item {
          font-size: 0.8rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .pp-meta-item strong {
          color: rgba(255,255,255,0.6);
          font-weight: 500;
          margin-left: 0.4rem;
        }

        .pp-body {
          max-width: 1080px;
          margin: 0 auto;
          padding: 5rem 5%;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 4rem;
          align-items: start;
        }

        .pp-nav {
          position: sticky;
          top: 2rem;
        }

        .pp-nav-title {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--muted);
          margin-bottom: 1rem;
        }

        .pp-nav ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .pp-nav a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          padding: 0.4rem 0;
          transition: color 0.2s;
          line-height: 1.3;
        }

        .pp-nav a:hover {
          color: var(--orange);
        }

        .pp-nav a .nav-num {
          font-family: "Syne", sans-serif;
          font-size: 0.65rem;
          color: var(--orange);
          opacity: 0.5;
          min-width: 18px;
        }

        .pp-nav a:hover .nav-num {
          opacity: 1;
        }

        .pp-sections {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .pp-section {
          padding: 3rem 0;
          border-bottom: 1px solid var(--border);
        }

        .pp-section:last-child {
          border-bottom: none;
        }

        .pp-section-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .pp-section-num {
          font-family: "Syne", sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--orange);
          opacity: 0.6;
          letter-spacing: 0.05em;
          min-width: 24px;
        }

        .pp-section h2 {
          font-family: "Syne", sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--white);
        }

        .pp-section-content {
          padding-left: 2.5rem;
        }

        .pp-section-content p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .pp-section-content p:last-child {
          margin-bottom: 0;
        }

        .pp-section-content ul {
          list-style: none;
          margin: 0.75rem 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .pp-section-content ul li {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          padding-left: 1.25rem;
          position: relative;
        }

        .pp-section-content ul li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--orange);
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .pp-section-content ul.list-not li::before {
          content: "✕";
          font-size: 0.65rem;
          top: 0.1em;
        }

        .pp-section-content strong {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }

        .pp-subsection {
          margin-bottom: 2rem;
        }

        .pp-subsection:last-child {
          margin-bottom: 0;
        }

        .pp-subsection h3 {
          font-family: "Syne", sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
        }

        /* Tables */
        .pp-table-wrap {
          overflow-x: auto;
          margin: 0.75rem 0 1rem;
          border-radius: 8px;
          border: 1px solid var(--border);
        }

        .pp-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .pp-table thead tr {
          background: rgba(255,255,255,0.04);
        }

        .pp-table th {
          font-family: "Syne", sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border);
          white-space: nowrap;
        }

        .pp-table td {
          padding: 0.75rem 1rem;
          color: rgba(255,255,255,0.6);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          line-height: 1.5;
          vertical-align: top;
        }

        .pp-table td strong {
          color: rgba(255,255,255,0.8);
          font-weight: 500;
        }

        .pp-table tbody tr:last-child td {
          border-bottom: none;
        }

        .pp-table tbody tr:hover td {
          background: rgba(255,255,255,0.02);
        }

        /* Contact block */
        .contact-block {
          margin-top: 1.5rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }

        .contact-block > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1.25rem;
          border-bottom: 1px solid var(--border);
          font-size: 0.875rem;
        }

        .contact-block > div:last-child {
          border-bottom: none;
        }

        .contact-block span {
          color: var(--muted);
          text-transform: uppercase;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
        }

        .contact-block strong {
          color: rgba(255,255,255,0.85);
          font-weight: 400;
        }

        .contact-block a {
          color: var(--orange);
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .contact-block a:hover {
          opacity: 0.75;
        }

        /* Acceptance banner */
        .pp-acceptance {
          margin-top: 4rem;
          padding: 2.5rem;
          background: var(--near-black);
          border: 1px solid var(--border);
          border-left: 3px solid var(--orange);
          border-radius: 10px;
        }

        .pp-acceptance p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          margin: 0;
        }

        .pp-acceptance p strong {
          color: var(--white);
        }

        @media (max-width: 860px) {
          .pp-body {
            grid-template-columns: 1fr;
          }
          .pp-nav {
            display: none;
          }
        }

        @media (max-width: 500px) {
          .pp-hero {
            padding: 5rem 5% 3rem;
          }
          .pp-section-content {
            padding-left: 0;
          }
          .pp-table th,
          .pp-table td {
            padding: 0.6rem 0.75rem;
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="pp-page">
        {/* Hero */}
        <div className="pp-hero">
          <div className="pp-hero-inner">
            <div className="pp-label">Legal</div>
            <h1>
              Privacy <span>Policy</span>
            </h1>
            <div className="pp-meta">
              <div className="pp-meta-item">
                For<strong>Impulse Websites</strong>
              </div>
              <div className="pp-meta-item">
                Last updated<strong>January 6, 2026</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="pp-body">
          {/* Sticky sidebar nav */}
          <nav className="pp-nav">
            <p className="pp-nav-title">Contents</p>
            <ul>
              {sections.map((s) => (
                <li key={s.number}>
                  <a href={`#pp-section-${s.number}`}>
                    <span className="nav-num">{s.number}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="pp-sections">
            {sections.map((s) => (
              <div
                className="pp-section"
                id={`pp-section-${s.number}`}
                key={s.number}
              >
                <div className="pp-section-header">
                  <span className="pp-section-num">{s.number}</span>
                  <h2>{s.title}</h2>
                </div>

                <div className="pp-section-content">
                  {/* Direct JSX content */}
                  {s.content && s.content}

                  {/* Subsections */}
                  {s.subsections &&
                    s.subsections.map((sub, i) => (
                      <div className="pp-subsection" key={i}>
                        <h3>{sub.title}</h3>
                        {sub.content && <p>{sub.content}</p>}
                        {sub.intro && <p>{sub.intro}</p>}
                        {sub.list && (
                          <ul>
                            {sub.list.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {sub.notIntro && <p>{sub.notIntro}</p>}
                        {sub.notList && (
                          <ul className="list-not">
                            {sub.notList.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {/* Inline table data (for subsections) */}
                        {sub.tableData && (
                          <div className="pp-table-wrap">
                            <table className="pp-table">
                              <thead>
                                <tr>
                                  {sub.tableData.headers.map((h, k) => (
                                    <th key={k}>{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {sub.tableData.rows.map((row, k) => (
                                  <tr key={k}>
                                    {row.map((cell, l) => (
                                      <td key={l}>{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        {/* Legacy table data */}
                        {sub.table && (
                          <div className="pp-table-wrap">
                            <table className="pp-table">
                              <thead>
                                <tr>
                                  {sub.table.headers.map((h, k) => (
                                    <th key={k}>{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {sub.table.rows.map((row, k) => (
                                  <tr key={k}>
                                    {row.map((cell, l) => (
                                      <td key={l}>{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        {sub.extra && <p>{sub.extra}</p>}
                      </div>
                    ))}
                </div>
              </div>
            ))}

            <div className="pp-acceptance">
              <p>
                <strong>Acceptance of Privacy Policy —</strong> By using our
                Site, you acknowledge that you have read, understood, and agree
                to be bound by this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
