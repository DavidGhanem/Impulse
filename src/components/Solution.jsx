const cards = [
  { icon: '📱', title: 'Mobile-First Design', desc: 'Built for phones first. The impulse buyer standing outside your gym can sign up before they change their mind.' },
  { icon: '⚡', title: '60-Second Checkout', desc: 'Name, payment info, done. No tours. No callbacks. No waiting. The impulse window stays open long enough to close.' },
  { icon: '🔲', title: 'QR Code Window Decal', desc: 'We give you a QR code for your front window. Foot traffic scans it, lands on your site, and joins — even at 11pm.' },
];

export default function Solution() {
  return (
    <section id="solution" style={{ padding: '100px 5%' }}>
      <div className="container reveal">
        <p className="section-label">The Solution</p>
        <h2 className="section-title">A Website That Works<br />While You Sleep</h2>
        <p className="section-body">
          We build gym websites with a one-tap "Join Now" button. Anyone can become a member in 60 seconds from their phone.
          No phone call. No tour. No "I'll think about it." You wake up to new members.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem', marginTop: '3.5rem',
        }} className="solution-cards">
          {cards.map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: 'var(--near-black)', border: '1px solid var(--border)',
              borderRadius: '16px', padding: '2rem',
              transition: 'border-color 0.3s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,90,31,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{
                width: '48px', height: '48px',
                background: 'var(--orange-glow)', border: '1px solid rgba(255,90,31,0.2)',
                borderRadius: '12px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.25rem',
              }}>
                {icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solution-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}