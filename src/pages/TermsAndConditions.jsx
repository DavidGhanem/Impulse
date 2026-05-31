export default function TermsAndConditions() {
  const sections = [
    {
      number: "01",
      title: "Introduction",
      content: (
        <>
          <p>
            Welcome to Impulse ("Provider," "we," "us," "our"). These Terms and
            Conditions ("Terms") govern your use of our website and any services
            offered through the Site.
          </p>
          <p>
            By accessing or using our Site, you ("you," "your," "Gym Owner")
            agree to be bound by these Terms. If you do not agree to these
            Terms, please do not use our Site.
          </p>
        </>
      ),
    },
    {
      number: "02",
      title: "About Our Services",
      content: (
        <>
          <p>
            We build custom websites for gyms and fitness studios. Our websites
            include a one-tap membership purchase button ("Join Now" button)
            integrated with the Whish payment gateway. We operate on a
            revenue-share model: we charge no upfront fees and instead earn a
            percentage (10% or 20%, depending on your selected plan) of
            membership payments processed through the website we build for you.
          </p>
          <p>Our services are available only to:</p>
          <ul>
            <li>
              Gym owners, fitness studio managers, and CrossFit box owners
            </li>
            <li>Individuals who are at least 18 years old</li>
            <li>Businesses operating lawfully in their jurisdiction</li>
          </ul>
        </>
      ),
    },
    {
      number: "03",
      title: "Eligibility",
      content: (
        <>
          <p>To use our services, you represent and warrant that:</p>
          <ul>
            <li>
              You are the owner or authorized representative of the gym or
              fitness business
            </li>
            <li>You have the authority to bind the business to these Terms</li>
            <li>You have a valid Whish merchant account or will obtain one</li>
            <li>
              You will provide accurate and complete information during the
              onboarding process
            </li>
          </ul>
        </>
      ),
    },
    {
      number: "04",
      title: "Our Pricing Model",
      subsections: [
        {
          title: "4.1 No Upfront Cost",
          content:
            "We charge no upfront fees for website design, development, or setup.",
        },
        {
          title: "4.2 Revenue Share",
          content:
            "We earn a percentage of membership payments processed through the website we build for you.",
        },
        {
          title: "4.3 How Payment Works",
          list: [
            "Members pay your gym through Whish",
            "You receive the membership payment",
            "You pay us your revenue share within 7 days of receiving payment or what agreed for",
            "Payment methods accepted: Whish transfer, bank transfer, or cash",
          ],
        },
        {
          title: "4.4 No Hidden Fees",
          intro: "We do not charge:",
          list: [
            "Monthly hosting fees",
            "Maintenance fees",
            "Setup fees",
            "Cancellation fees (unless you choose the buyout option)",
          ],
        },
        {
          title: "4.5 Third-Party Fees",
          content:
            "You are responsible for all Whish transaction fees (typically 1–3% per transaction). We are not affiliated with Whish and have no control over their fees or policies.",
        },
      ],
    },
    {
      number: "05",
      title: "Website Buyout Option",
      content: (
        <>
          <p>
            If you cancel our agreement and wish to keep your website files, you
            may purchase them for a one-time fee of $600 USD.
          </p>
          <p>Upon buyout, you will receive:</p>
          <ul>
            <li>All website files (HTML, CSS, JavaScript, images)</li>
            <li>Database export (if applicable)</li>
            <li>Rights to use the design and layout</li>
          </ul>
          <p>The following are NOT included in the buyout:</p>
          <ul className="list-not">
            <li>The "Join Now" impulse button (removed)</li>
            <li>Admin panel access (removed)</li>
            <li>QR code functionality (removed)</li>
            <li>Whish payment integration (removed)</li>
            <li>Hosting (you must find your own hosting provider)</li>
            <li>Future updates or support</li>
          </ul>
        </>
      ),
    },
    {
      number: "06",
      title: "User Responsibilities",
      content: (
        <>
          <p>As a user of our Site, you agree to:</p>
          <ul>
            <li>
              Provide accurate and complete information when contacting us or
              signing up for services
            </li>
            <li>Not use our Site for any unlawful purpose</li>
            <li>
              Not attempt to bypass, copy, or reverse-engineer any part of our
              Site or services
            </li>
            <li>
              Not share access to our admin panel or proprietary tools with
              third parties
            </li>
            <li>Not use our Site to transmit malware, spam, or harmful code</li>
          </ul>
        </>
      ),
    },
    {
      number: "07",
      title: "Intellectual Property",
      subsections: [
        {
          title: "7.1 Our Property",
          content:
            "All content on this Site — including text, graphics, logos, code, and design — is owned by us or our licensors and is protected by copyright and intellectual property laws.",
          notList: [
            "Copy, modify, or distribute our content without written permission",
            'Use our proprietary "Join Now" button code or admin panel code for any purpose outside our agreement',
          ],
          notIntro: "You may not:",
        },
        {
          title: "7.2 Your Property",
          content:
            "Any content you provide to us (gym logos, photos, class schedules) remains your property. We use it only to build your website as agreed.",
        },
      ],
    },
    {
      number: "08",
      title: "Disclaimers",
      subsections: [
        {
          title: '8.1 "As Is" Basis',
          intro:
            'Our Site and services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties that:',
          list: [
            "The Site will be uninterrupted, error-free, or secure",
            "The services will result in any specific number of new members or revenue",
            "Whish will operate without issues",
          ],
        },
        {
          title: "8.2 No Guarantees",
          intro: "We do not guarantee:",
          list: [
            "A minimum number of members will join through your website",
            "Any specific return on investment",
            "That impulse buying behavior will result in memberships",
          ],
          extra:
            "Your success depends on many factors outside our control, including your gym's location, pricing, reputation, and local competition.",
        },
      ],
    },
    {
      number: "09",
      title: "Limitation of Liability",
      content: (
        <>
          <p>To the maximum extent permitted by law:</p>
          <ul>
            <li>
              We are not liable for any indirect, incidental, or consequential
              damages
            </li>
            <li>
              We are not responsible for Whish service outages, fee changes, or
              account freezes
            </li>
            <li>
              We are not responsible for member disputes, chargebacks, or
              cancellations
            </li>
          </ul>
        </>
      ),
    },
    {
      number: "10",
      title: "Indemnification",
      content: (
        <>
          <p>
            You agree to indemnify and hold us harmless from any claims,
            damages, losses, or expenses arising from:
          </p>
          <ul>
            <li>Your breach of these Terms</li>
            <li>Your violation of any law or third-party rights</li>
            <li>Your use of our services</li>
            <li>Disputes between you and your members</li>
            <li>Issues arising from Whish payment processing</li>
          </ul>
        </>
      ),
    },
    {
      number: "11",
      title: "Third-Party Links and Services",
      content: (
        <>
          <p>
            Our Site may contain links to third-party websites or services,
            including Whish. We do not control and are not responsible for:
          </p>
          <ul>
            <li>The content or privacy practices of third-party sites</li>
            <li>
              The availability or functionality of Whish or other payment
              processors
            </li>
            <li>Any issues arising from your use of third-party services</li>
          </ul>
          <p>You use third-party services at your own risk.</p>
        </>
      ),
    },
    {
      number: "12",
      title: "Termination of Services",
      content: (
        <>
          <p>
            We may suspend or terminate your access to our Site or services if:
          </p>
          <ul>
            <li>You breach these Terms</li>
            <li>You fail to pay your revenue share for more than 30 days</li>
            <li>You attempt to circumvent our payment system</li>
            <li>We suspect fraudulent or illegal activity</li>
          </ul>
          <p>
            Upon termination, your website may be taken offline, and you will
            lose access to our admin panel and support.
          </p>
        </>
      ),
    },
    {
      number: "13",
      title: "Privacy",
      content: (
        <>
          <p>
            Your use of our Site is also governed by our Privacy Policy (see
            separate document). By using our Site, you consent to the collection
            and use of your information as described in the Privacy Policy.
          </p>
          <p>
            <strong>What information we collect:</strong>
          </p>
          <ul>
            <li>Your name, gym name, email, phone number</li>
            <li>Information you provide through contact forms</li>
          </ul>
          <p>
            <strong>What we do NOT collect:</strong>
          </p>
          <ul className="list-not">
            <li>Member payment information (handled by Whish)</li>
            <li>Credit card or bank account details</li>
            <li>Sensitive personal data</li>
          </ul>
        </>
      ),
    },
    {
      number: "14",
      title: "Modifications to These Terms",
      content: (
        <>
          <p>
            We may update these Terms from time to time. If we make material
            changes, we will:
          </p>
          <ul>
            <li>Post the updated Terms on this page</li>
            <li>Update the "Last Updated" date at the top</li>
            <li>
              Notify you via email or WhatsApp (if we have your contact
              information)
            </li>
          </ul>
          <p>
            Your continued use of our Site after changes constitutes acceptance
            of the new Terms.
          </p>
        </>
      ),
    },
    {
      number: "15",
      title: "Governing Law",
      content: (
        <>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of Lebanon, without regard to its conflict of law
            principles.
          </p>
          <p>
            Any disputes arising from these Terms or your use of our Site shall
            be resolved through binding arbitration in Beirut before proceeding
            to court.
          </p>
        </>
      ),
    },
    {
      number: "16",
      title: "Contact Information",
      content: (
        <>
          <p>If you have any questions about these Terms, please contact us:</p>
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
          </div>
        </>
      ),
    },
    {
      number: "17",
      title: "Entire Agreement",
      content: (
        <>
          <p>
            These Terms, together with our Privacy Policy and any signed Service
            Agreement with a gym owner, constitute the entire agreement between
            you and us regarding your use of our Site.
          </p>
          <p>
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions shall remain in full force and effect.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .tc-page {
          background: var(--black);
          color: var(--white);
          font-family: "DM Sans", sans-serif;
          min-height: 100vh;
        }

        .tc-hero {
          border-bottom: 1px solid var(--border);
          padding: 7rem 5% 4rem;
        }

        .tc-hero-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        .tc-label {
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

        .tc-label::before {
          content: "";
          display: block;
          width: 20px;
          height: 1px;
          background: var(--orange);
        }

        .tc-hero h1 {
          font-family: "Syne", sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        .tc-hero h1 span {
          color: var(--orange);
        }

        .tc-meta {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .tc-meta-item {
          font-size: 0.8rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .tc-meta-item strong {
          color: rgba(255,255,255,0.6);
          font-weight: 500;
          margin-left: 0.4rem;
        }

        .tc-body {
          max-width: 1080px;
          margin: 0 auto;
          padding: 5rem 5%;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 4rem;
          align-items: start;
        }

        .tc-nav {
          position: sticky;
          top: 2rem;
        }

        .tc-nav-title {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--muted);
          margin-bottom: 1rem;
        }

        .tc-nav ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .tc-nav a {
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

        .tc-nav a:hover {
          color: var(--orange);
        }

        .tc-nav a .nav-num {
          font-family: "Syne", sans-serif;
          font-size: 0.65rem;
          color: var(--orange);
          opacity: 0.5;
          min-width: 18px;
        }

        .tc-nav a:hover .nav-num {
          opacity: 1;
        }

        .tc-sections {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tc-section {
          padding: 3rem 0;
          border-bottom: 1px solid var(--border);
        }

        .tc-section:last-child {
          border-bottom: none;
        }

        .tc-section-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .tc-section-num {
          font-family: "Syne", sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--orange);
          opacity: 0.6;
          letter-spacing: 0.05em;
          min-width: 24px;
        }

        .tc-section h2 {
          font-family: "Syne", sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--white);
        }

        .tc-section-content {
          padding-left: 2.5rem;
        }

        .tc-section-content p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .tc-section-content p:last-child {
          margin-bottom: 0;
        }

        .tc-section-content ul {
          list-style: none;
          margin: 0.75rem 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tc-section-content ul li {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          padding-left: 1.25rem;
          position: relative;
        }

        .tc-section-content ul li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--orange);
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .tc-section-content ul.list-not li::before {
          content: "✕";
          font-size: 0.65rem;
          top: 0.1em;
        }

        .tc-section-content strong {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }

        .tc-subsection {
          margin-bottom: 2rem;
        }

        .tc-subsection:last-child {
          margin-bottom: 0;
        }

        .tc-subsection h3 {
          font-family: "Syne", sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
        }

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

        .tc-acceptance {
          margin-top: 4rem;
          padding: 2.5rem;
          background: var(--near-black);
          border: 1px solid var(--border);
          border-left: 3px solid var(--orange);
          border-radius: 10px;
        }

        .tc-acceptance p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          margin: 0;
        }

        .tc-acceptance p strong {
          color: var(--white);
        }

        @media (max-width: 860px) {
          .tc-body {
            grid-template-columns: 1fr;
          }
          .tc-nav {
            display: none;
          }
        }

        @media (max-width: 500px) {
          .tc-hero {
            padding: 5rem 5% 3rem;
          }
          .tc-section-content {
            padding-left: 0;
          }
        }
      `}</style>

      <div className="tc-page">
        <div className="tc-hero">
          <div className="tc-hero-inner">
            <div className="tc-label">Legal</div>
            <h1>
              Terms &amp; <span>Conditions</span>
            </h1>
            <div className="tc-meta">
              <div className="tc-meta-item">
                For<strong>Impulse Websites</strong>
              </div>
              <div className="tc-meta-item">
                Last updated<strong>January 6, 2026</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="tc-body">
          <nav className="tc-nav">
            <p className="tc-nav-title">Contents</p>
            <ul>
              {sections.map((s) => (
                <li key={s.number}>
                  <a href={`#section-${s.number}`}>
                    <span className="nav-num">{s.number}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="tc-sections">
            {sections.map((s) => (
              <div
                className="tc-section"
                id={`section-${s.number}`}
                key={s.number}
              >
                <div className="tc-section-header">
                  <span className="tc-section-num">{s.number}</span>
                  <h2>{s.title}</h2>
                </div>
                <div className="tc-section-content">
                  {s.content && s.content}
                  {s.subsections &&
                    s.subsections.map((sub, i) => (
                      <div className="tc-subsection" key={i}>
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
                        {sub.extra && <p>{sub.extra}</p>}
                      </div>
                    ))}
                </div>
              </div>
            ))}

            <div className="tc-acceptance">
              <p>
                <strong>Acceptance of Terms —</strong> By using our Site, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
