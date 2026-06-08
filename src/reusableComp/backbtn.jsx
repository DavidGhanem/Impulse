import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <style>{`
        .back-btn {
          position: fixed;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-family: "DM Sans", sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
        }
        .back-btn:hover {
          color: var(--orange);
          border-color: var(--orange);
        }
        .back-btn svg {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex-shrink: 0;
        }
      `}</style>

      <button className="back-btn" onClick={handleBack}>
        <svg viewBox="0 0 24 24">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back
      </button>
    </>
  );
}