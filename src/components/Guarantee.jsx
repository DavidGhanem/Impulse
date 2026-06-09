export default function Guarantee({ onContactClick }) {
  return (
    <section id="guarantee" style={{ padding: '100px 5%' }}>
      <div className="container reveal">
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,90,31,0.08), rgba(255,90,31,0.02))',
          border: '1px solid rgba(255,90,31,0.25)',
          borderRadius: '24px', padding: '4rem', textAlign: 'center',
          position: 'relative', overflow: 'hidden', maxWidth: '720px', margin: '0 auto',
        }}>
          {/* Corner glow */}
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '250px', height: '250px',
            background: 'radial-gradient(circle, rgba(255,90,31,0.12), transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🛡️</div>
          <p className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Zero Risk Guarantee</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1.25rem' }}>
            Try It. Pay Nothing<br />If It Fails.
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '1rem auto 0', lineHeight: 1.8, fontWeight: 300 }}>
            We build your website. We give you the QR code. If you don't get{' '}
            <strong style={{ color: 'var(--white)' }}>at least one new member</strong>{' '}
            through the site in 30 days, We walk away. You owe us nothing.{' '}
            <strong style={{ color: 'var(--white)' }}>The website is yours to keep.</strong>
            <br /><br />
            That's how confident We are.
          </p>
          <button className="btn-primary" onClick={onContactClick}
            style={{ marginTop: '2rem', fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Start for Free →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #guarantee .guarantee-box { padding: 2.5rem 1.5rem; }
        }
      `}</style>
    </section>
  );
}