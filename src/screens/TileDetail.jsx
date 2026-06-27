import { useParams, Navigate } from 'react-router-dom';
import Panel from '../components/Panel';
import { getTile } from '../data/tiles';
import './ScreenShared.css';

export default function TileDetail() {
  const { tileId } = useParams();
  const tile = getTile(tileId);

  if (!tile) return <Navigate to="/" replace />;
  if (tile.isLinks) return <Navigate to="/links" replace />;

  return (
    <div className="screen">
      <div className="screen-head">
        <span className={`dot dot-${tile.dot}`} />
        <div>
          <p className="screen-title">{tile.title}</p>
          <p className="screen-subtitle">{tile.subtitle}</p>
        </div>
      </div>

      <div className="panel-stack">
        {tile.screens.map((screen) => (
          <Panel
            key={screen.slug}
            dot={tile.dot}
            title={screen.title}
            subtitle={screen.subtitle}
            to={`/tile/${tile.id}/${screen.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
