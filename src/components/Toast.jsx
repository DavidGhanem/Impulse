export default function Toast({ message, visible }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem', left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--dark)',
      border: '1px solid var(--orange)',
      color: 'var(--white)',
      padding: '1rem 1.75rem',
      borderRadius: '12px',
      fontSize: '0.95rem',
      zIndex: 9998,
      boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.4s',
      maxWidth: '380px',
      textAlign: 'center',
      lineHeight: 1.5,
      pointerEvents: 'none',
    }}>
      {message}
    </div>
  );
}