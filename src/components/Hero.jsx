export default function Hero({ onContactClick }) {
  const scrollToHowItWorks = () =>
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: '120px', position: 'relative', overflow: 'hidden', padding: '120px 5% 100px',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,90,31,0.12) 0%, transparent 70%),
                     radial-gradient(ellipse 50% 40% at 10% 80%, rgba(255,90,31,0.06) 0%, transparent 60%)`,
      }} />
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(255,90,31,0.1)', border: '1px solid rgba(255,90,31,0.3)',
          color: 'var(--orange)', padding: '0.35rem 0.9rem', borderRadius: '100px',
          fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em',
          textTransform: 'uppercase', marginBottom: '1.5rem',
          animation: 'fadeUp 0.6s ease both',
        }}>
          <span style={{ width: '6px', height: '6px', background: 'var(--orange)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          Zero Risk Partnership
        </div>

        <h1 style={{
          fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800,
          letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '1.5rem',
          animation: 'fadeUp 0.6s 0.1s ease both',
        }}>
          Get a Professional<br />Gym Website.<br />
          <span style={{ color: 'var(--orange)', position: 'relative', display: 'inline-block' }}>
            Pay Nothing Upfront.
            <span style={{
              position: 'absolute', bottom: '-4px', left: 0, right: 0,
              height: '3px', background: 'var(--orange)', borderRadius: '2px',
            }} />
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.65)',
          maxWidth: '560px', marginBottom: '2.5rem', lineHeight: 1.7, fontWeight: 300,
          animation: 'fadeUp 0.6s 0.2s ease both',
        }}>
          I build websites that sell memberships. You pay 10% only when a member joins through the site. Zero risk. Zero monthly fees.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.3s ease both' }}>
          <button className="btn-primary" onClick={onContactClick}>Let's Talk →</button>
          <button className="btn-secondary" onClick={scrollToHowItWorks}>See How It Works</button>
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', marginTop: '4rem', flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.4s ease both' }}>
          {[
            ['0%', 'Upfront Cost'],
            ['60s', 'To Join Online'],
            ['10%', 'Commission Only'],
            ['30d', 'Money-Back Guarantee'],
          ].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: 'var(--orange)' }}>{num}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}