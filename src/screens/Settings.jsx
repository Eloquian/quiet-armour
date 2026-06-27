import ModeToggle from '../components/ModeToggle';
import './ScreenShared.css';
import './Settings.css';

export default function Settings() {
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
        <ModeToggle />
      </div>
    </div>
  );
}
