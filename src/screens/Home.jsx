import Panel from '../components/Panel';
import { tiles } from '../data/tiles';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">a quiet place to begin</p>
        <h1 className="title">Quiet Armour</h1>
        <div className="title-rule" />
        <p className="subtitle">Gentle structure for the days that need it most.</p>
      </section>

      <div className="panel-stack">
        {tiles.map((tile) => (
          <Panel
            key={tile.id}
            dot={tile.dot}
            title={tile.title}
            subtitle={tile.subtitle}
            to={tile.isLinks ? '/links' : `/tile/${tile.id}`}
          />
        ))}
      </div>
    </>
  );
}
