import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import DeviceFrame from './layouts/DeviceFrame';
import Home from './screens/Home';
import TileDetail from './screens/TileDetail';
import ScreenDetail from './screens/ScreenDetail';
import LinksScreen from './screens/LinksScreen';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<DeviceFrame />}>
          <Route path="/" element={<Home />} />
          <Route path="/tile/:tileId" element={<TileDetail />} />
          <Route path="/tile/:tileId/:screenSlug" element={<ScreenDetail />} />
          <Route path="/links" element={<LinksScreen />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
