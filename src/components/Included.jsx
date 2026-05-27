const items = [
  'Custom 3–5 page website design',
  'Mobile optimized for phones',
  '60-second impulse "Join Now" button',
  'Free hosting & SSL certificate',
  'QR code window decal',
  'Automatic recurring billing',
  'WhatsApp support (for you)',
  'Cancel anytime.',
  'Admin Panel with Graphs',
  'As Many Addons as you want'
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

        <div className="included-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem',
          marginTop: '2.5rem',
        }}>
          {items.map((item) => (
            <div key={item} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--dark)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,90,31,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                width: '22px', height: '22px', minWidth: '22px',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', color: 'var(--success)',
              }}>✓</div>
              <span style={{ fontSize: '0.875rem', lineHeight: 1.4, color: 'rgba(255,255,255,0.85)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .included-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .included-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}