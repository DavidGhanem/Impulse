const steps = [
  { num: '1', title: 'We Meet', desc: '15-minute call. You tell me about your gym — your prices, your classes, your vibe. That\'s it.' },
  { num: '2', title: 'I Build Your Site', desc: '3–5 pages, your branding, your classes, the impulse "Join Now" button. I handle hosting, SSL, payment processing — all of it.' },
  { num: '3', title: 'You Get Members', desc: 'I give you a QR code decal for your window. Foot traffic scans and joins. You get paid. I get 10%. That\'s our whole relationship.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '100px 5%' }}>
      <div className="container reveal">
        <p className="section-label">Process</p>
        <h2 className="section-title">How It Works</h2>
        <p className="section-body">Three steps. No tech skills required on your end. I handle everything.</p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem', marginTop: '3.5rem', position: 'relative',
        }} className="steps-grid">
          {/* Connecting line */}
          <div style={{
            position: 'absolute', top: '30px',
            left: 'calc(16.66% + 1rem)', right: 'calc(16.66% + 1rem)',
            height: '1px',
            background: 'linear-gradient(90deg, var(--orange), transparent 50%, var(--orange))',
            opacity: 0.3,
          }} className="steps-line" />

          {steps.map(({ num, title, desc }) => (
            <div key={num} style={{
              background: 'var(--near-black)', border: '1px solid var(--border)',
              borderRadius: '16px', padding: '2rem', position: 'relative',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,90,31,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div style={{
                width: '44px', height: '44px', background: 'var(--orange)',
                borderRadius: '50%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontFamily: 'Syne, sans-serif',
                fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.25rem',
                position: 'relative', zIndex: 1,
              }}>
                {num}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-line { display: none; }
        }
      `}</style>
    </section>
  );
}