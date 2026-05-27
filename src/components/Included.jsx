const items = [
  'Custom 3–5 page website design',
  'Mobile optimized for phones',
  '60-second impulse "Join Now" button',
  'Free hosting & SSL certificate',
  'QR code window decal',
  'Automatic recurring billing',
  'WhatsApp support (for you)',
  'No contract. Cancel anytime.',
];

export default function Included() {
  return (
    <section id="included" style={{
      background: 'var(--near-black)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '100px 5%',
    }}>
      <div className="container reveal">
        <p className="section-label">What You Get</p>
        <h2 className="section-title">Everything. No Hidden Fees.</h2>
        <p className="section-body">Here's everything that comes with your gym website. All included.</p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem', marginTop: '2.5rem',
        }} className="included-grid">
          {items.map((item) => (
            <div key={item} style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
              background: 'var(--dark)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '1.25rem',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,90,31,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div style={{
                width: '20px', height: '20px', minWidth: '20px',
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '50%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '0.6rem', color: 'var(--success)', marginTop: '2px',
              }}>✓</div>
              <span style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.8)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .included-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .included-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}