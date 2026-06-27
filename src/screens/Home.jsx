import { getTile, getScreen } from '../data/tiles';
import ContentBlocks from '../components/ContentBlocks';
import './Home.css';
import '../screens/ScreenShared.css';

export default function Home() {
  const tile = getTile('capacity');
  const screen = getScreen('capacity', 'alterations-in-progress');

  return (
    <>
      <section className="hero">
        <p className="eyebrow">a quiet place to begin</p>
        <h1 className="title">Quiet Armour</h1>
        <div className="title-rule" />
        <p className="subtitle">Gentle structure for the days that need it most.</p>
      </section>

      <div className="screen home-screen">
        <div className="screen-head">
          <span className={`dot dot-${tile.dot}`} />
          <div>
            <p className="screen-title">{screen.title}</p>
            <p className="screen-subtitle">{screen.subtitle}</p>
          </div>
        </div>

        <div className="screen-body-copy">
          <ContentBlocks blocks={screen.body} />
        </div>
      </div>
    </>
  );
}
