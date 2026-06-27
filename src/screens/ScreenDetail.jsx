import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getTile, getScreen } from '../data/tiles';
import './ScreenShared.css';

export default function ScreenDetail() {
  const { tileId, screenSlug } = useParams();
  const navigate = useNavigate();
  const tile = getTile(tileId);
  const screen = getScreen(tileId, screenSlug);

  if (!tile || !screen) return <Navigate to="/" replace />;

  return (
    <div className="screen">
      <div className="screen-head">
        <span className={`dot dot-${tile.dot}`} />
        <div>
          <p className="screen-title">{screen.title}</p>
          <p className="screen-subtitle">{screen.subtitle}</p>
        </div>
      </div>

      <div className="screen-body-copy">
        <p className="placeholder-note">
          Full copy for this card is on its way — it'll live here once the
          source content is in.
        </p>
      </div>

      <button className="back-link" onClick={() => navigate(`/tile/${tile.id}`)}>
        ← Back to {tile.title}
      </button>
    </div>
  );
}
