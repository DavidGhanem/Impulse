import { useState } from 'react';

const tableRows = [
  { price: '$50 / month', keep: '$45.00', earn: '$5.00' },
  { price: '$75 / month', keep: '$67.50', earn: '$7.50' },
  { price: '$100 / month', keep: '$90.00', earn: '$10.00' },
  { price: '$150 / month', keep: '$135.00', earn: '$15.00' },
];

export default function Pricing() {
  const [price, setPrice] = useState(50);
  const [members, setMembers] = useState(10);

  const total = price * members;
  const youKeep = total * 0.9;
  const iEarn = total * 0.1;

  const fmt = (n) => n.toLocaleString(undefined, { minimumFractionDigits: 0 });

  return (
    <section id="pricing" style={{
      background: 'var(--near-black)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '100px 5%',
    }}>
      <div className="container reveal">
        <p className="section-label">Pricing Model</p>
        <h2 className="section-title">You Pay Nothing<br />Until You Get Members</h2>
        <p className="section-body">Zero upfront. Zero monthly fee. I take 10% of every membership purchased through your website. That's it.</p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.1fr',
          gap: '4rem', alignItems: 'start', marginTop: '3rem',
        }} className="pricing-layout">

          {/* Table */}
          <div>
            <div style={{ overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Membership Price', 'You Keep', 'I Earn (10%)'].map(h => (
                      <th key={h} style={{
                        background: 'var(--dark)', padding: '1rem 1.25rem',
                        fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                        color: 'var(--muted)', textAlign: 'left',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map(({ price: p, keep, earn }) => (
                    <tr key={p} onMouseEnter={e => Array.from(e.currentTarget.cells).forEach(c => c.style.background = 'rgba(255,90,31,0.04)')}
                      onMouseLeave={e => Array.from(e.currentTarget.cells).forEach(c => c.style.background = '')}>
                      <td style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border)', fontSize: '0.95rem' }}>{p}</td>
                      <td style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--success)', fontWeight: 600 }}>{keep}</td>
                      <td style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--orange)', fontWeight: 600 }}>{earn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontStyle: 'italic' }}>
              <strong style={{ color: 'var(--white)', fontStyle: 'normal' }}>If 10 people join at $50/month,</strong> you make{' '}
              <span style={{ color: 'var(--success)', fontWeight: 600 }}>$450/month</span>.
              I make <span style={{ color: 'var(--orange)', fontWeight: 600 }}>$50/month</span>.
              You win 90%. I win 10%. <strong style={{ fontStyle: 'normal' }}>Fair?</strong>
            </p>
          </div>

          {/* Calculator */}
          <div style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: '16px', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>🧮 Run the Numbers</h3>

            {[
              { label: 'Membership Price', id: 'price', min: 30, max: 250, step: 5, value: price, setter: setPrice, display: '$' + price },
              { label: 'New Members / Month (via site)', id: 'members', min: 1, max: 50, step: 1, value: members, setter: setMembers, display: members },
            ].map(({ label, id, min, max, step, value, setter, display }) => (
              <div key={id} style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>{label}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input type="range" min={min} max={max} step={step} value={value}
                    onChange={e => setter(parseInt(e.target.value))}
                    style={{ flex: 1, WebkitAppearance: 'none', height: '4px', background: 'var(--mid)', borderRadius: '2px', outline: 'none', cursor: 'pointer' }} />
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', minWidth: '60px', textAlign: 'right' }}>{display}</div>
                </div>
              </div>
            ))}

            <div style={{ background: 'var(--near-black)', borderRadius: '12px', padding: '1.25rem', marginTop: '1.5rem', border: '1px solid var(--border)' }}>
              {[
                { label: 'Total Revenue', val: '$' + fmt(total), color: 'var(--white)' },
                { label: 'You Keep (90%)', val: '$' + fmt(youKeep), color: 'var(--success)' },
                { label: 'I Earn (10%)', val: '$' + fmt(iEarn), color: 'var(--orange)' },
                { label: 'Annually (yours)', val: '$' + fmt(youKeep * 12), color: 'var(--success)' },
              ].map(({ label, val, color }, i, arr) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.6rem 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{label}</span>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px; height: 18px;
          background: var(--orange);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(255,90,31,0.4);
        }
      `}</style>
    </section>
  );
}