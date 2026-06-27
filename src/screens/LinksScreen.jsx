import { getTile } from '../data/tiles';
import './ScreenShared.css';

export default function LinksScreen() {
  const tile = getTile('links-lifelines');

  return (
    <div className="screen">
      <div className="screen-head">
        <span className={`dot dot-${tile.dot}`} />
        <div>
          <p className="screen-title">{tile.title}</p>
          <p className="screen-subtitle">{tile.subtitle}</p>
        </div>
      </div>

      {tile.linkGroups.map((group) => (
        <div className="link-group" key={group.title}>
          <h2>{group.title}</h2>
          <ul>
            {group.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
