import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CornerLeaves from '../components/CornerLeaves';
import ModeToggle from '../components/ModeToggle';
import { useTheme } from '../context/ThemeContext';
import { tiles } from '../data/tiles';
import './DeviceFrame.css';

export default function DeviceFrame() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode } = useTheme();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`device theme-${mode}`}>
      <div className="linen" />
      <CornerLeaves />

      <header className="bar">
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </header>

      <main className="screen-body">
        <Outlet />
      </main>

      <nav className={`menu-panel ${menuOpen ? 'open' : ''}`}>
        <div className="menu-mode-row">
          <span className="menu-mode-label">Appearance</span>
          <ModeToggle />
        </div>
        {tiles.map((tile) => (
          <button
            key={tile.id}
            className="menu-item"
            onClick={() => { navigate(tile.isLinks ? '/links' : `/tile/${tile.id}`); closeMenu(); }}
          >
            <span>{tile.title}</span>
            <span className="num">{tile.num}</span>
          </button>
        ))}
        <button className="menu-item" onClick={() => { navigate('/settings'); closeMenu(); }}>
          <span>Settings</span>
        </button>
        <div className="menu-foot">quiet-armour.netlify.app</div>
      </nav>
    </div>
  );
}
