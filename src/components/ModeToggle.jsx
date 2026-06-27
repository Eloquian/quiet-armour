import { useTheme } from '../context/ThemeContext';
import './ModeToggle.css';

export default function ModeToggle() {
  const { mode, setMode } = useTheme();

  return (
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
  );
}
