export default function Demo({ onDemoJoin }) {
  return (
    <section id="demo" style={{
      background: 'var(--near-black)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '100px 5%',
    }}>
      <div className="container reveal">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="demo-layout">

          {/* Phone Mockup */}
          <div style={{ position: 'relative', maxWidth: '280px', margin: '0 auto' }}>
            <div style={{
              background: 'var(--dark)', border: '2px solid var(--mid)',
              borderRadius: '36px', padding: '2rem 1.5rem', position: 'relative',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
            }}>
              <div style={{ width: '80px', height: '22px', background: 'var(--black)', borderRadius: '12px', margin: '0 auto 1.5rem' }} />
              <div style={{ background: 'var(--near-black)', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ background: 'var(--orange)', padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                    IRON PEAK GYM
                  </div>
                </div>
                <div style={{ padding: '1rem' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Start Your Fitness Journey
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    Join 500+ members training smart, not hard.
                  </div>
                  <div style={{
                    background: 'rgba(255,90,31,0.1)', border: '1px solid rgba(255,90,31,0.3)',
                    borderRadius: '8px', padding: '0.75rem', textAlign: 'center', marginBottom: '1rem',
                  }}>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: 'var(--orange)' }}>$49/mo</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>Full Access Membership</div>
                  </div>
                  <button onClick={onDemoJoin} style={{
                    width: '100%', background: 'var(--orange)', color: 'var(--white)',
                    border: 'none', borderRadius: '10px', padding: '0.85rem',
                    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.9rem',
                    cursor: 'pointer', transition: 'background 0.2s, transform 0.1s, box-shadow 0.2s',
                    letterSpacing: '0.05em',
                  }}
                    onMouseEnter={e => { e.target.style.background = 'var(--orange-dark)'; e.target.style.transform = 'scale(1.02)'; }}
                    onMouseLeave={e => { e.target.style.background = 'var(--orange)'; e.target.style.transform = 'none'; }}>
                    ⚡ JOIN NOW — 60 seconds
                  </button>
                  <div style={{ fontSize: '0.6rem', color: 'var(--muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                    No commitment · Cancel anytime
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="section-label">Live Demo</p>
            <h2 className="section-title">Experience the<br />Impulse Button</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1rem', fontWeight: 300 }}>
              Tap the "Join Now" button on the phone to see how fast a new member can sign up. This is what your foot traffic experiences when they scan your QR code.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1rem', fontWeight: 300 }}>
              No complicated forms. No phone calls. No tours required.{' '}
              <strong style={{ color: 'var(--white)' }}>Just a motivated person and a button.</strong>
            </p>
            <button className="btn-primary" onClick={onDemoJoin} style={{ marginTop: '1rem' }}>
              Tap to Try the Demo →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .demo-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}