import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InfoPage } from './pages/InfoPage/InfoPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  );
};
export default App;
