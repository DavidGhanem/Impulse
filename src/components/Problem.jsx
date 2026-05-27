export default function Problem() {
  return (
    <section id="problem" style={{
      background: 'var(--near-black)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '100px 5%',
    }}>
      <div className="container reveal">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '5rem', alignItems: 'center',
        }} className="problem-inner">
          <div>
            <p className="section-label">The Problem</p>
            <h2 className="section-title">You're Losing Members Every Day</h2>
            <p className="section-body">
              Men walk by your gym motivated to join. That impulse lasts{' '}
              <strong style={{ color: 'var(--white)' }}>2–3 minutes</strong>.
              Your current process makes them call, visit, or fill out a form.
              By the time they act — the impulse is dead. They walk away. You lose money.
              <br /><br />
              It happens dozens of times a week. And you never even know.
            </p>
          </div>

          <div>
            <div style={{
              background: 'var(--dark)', border: '1px solid var(--border)',
              borderRadius: '16px', padding: '2rem', position: 'relative', overflow: 'hidden',
            }}>
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--orange), transparent)',
              }} />

              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '4rem', fontWeight: 800, color: 'var(--orange)', lineHeight: 1, marginBottom: '0.25rem' }}>
                2:47
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Average impulse window before a potential member gives up
              </div>

              <div style={{ marginTop: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Conversion rate: Traditional Process
                </div>
                {[
                  { label: 'Sees gym, walks in', width: '80%', color: '#EF4444' },
                  { label: 'Calls / fills form', width: '45%', color: '#F97316' },
                  { label: 'Actually joins', width: '12%', color: 'var(--success)' },
                ].map(({ label, width, color }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', minWidth: '120px' }}>{label}</div>
                    <div style={{ flex: 1, height: '8px', background: 'var(--mid)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', borderRadius: '4px', background: color, width }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '1.25rem', padding: '0.75rem',
                background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: '8px', fontSize: '0.8rem', color: '#EF4444',
              }}>
                ⚠ Most impulse buyers never convert. The friction kills the deal.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problem-inner { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}