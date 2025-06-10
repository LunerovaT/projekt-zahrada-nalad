import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InfoPage } from './pages/InfoPage/InfoPage';
import { CalendarPage } from './pages/CalendarPage/CalendarPage';
import { FlowerPage } from './pages/FlowerPage/FlowerPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/flowerpage/:month/:day" element={<FlowerPage />} />
    </Routes>
  );
};
export default App;
