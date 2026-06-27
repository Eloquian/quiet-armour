import { useNavigate } from 'react-router-dom';
import './Panel.css';

export default function Panel({ dot = 'violet', title, subtitle, to, footnote }) {
  const navigate = useNavigate();
  const interactive = Boolean(to);

  return (
    <div
      className="panel"
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={interactive ? () => navigate(to) : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate(to);
            }
          : undefined
      }
    >
      <span className={`dot dot-${dot}`} />
      <div className="copy">
        <p className="t">{title}</p>
        {subtitle && <p className="s">{subtitle}</p>}
        {footnote && <p className="f">{footnote}</p>}
      </div>
    </div>
  );
}
