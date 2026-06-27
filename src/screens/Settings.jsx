import { useTheme } from '../context/ThemeContext';
import './ScreenShared.css';
import './Settings.css';

export default function Settings() {
  const { mode, setMode } = useTheme();

  return (
    <div className="screen">
      <div className="screen-head">
        <div>
          <p className="screen-title">Settings</p>
          <p className="screen-subtitle">Make it yours.</p>
        </div>
      </div>

      <div className="settings-row">
        <span className="settings-label">Appearance</span>
        <div className="mode-toggle">
          <button
            className={mode === 'light' ? 'active' : ''}
            onClick={() => setMode('light')}
          >
            Light
          </button>
          <button
            className={mode === 'dark' ? 'active' : ''}
            onClick={() => setMode('dark')}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
