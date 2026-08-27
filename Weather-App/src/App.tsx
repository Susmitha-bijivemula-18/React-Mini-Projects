import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WeatherDashboard } from './pages/WeatherDashboard/WeatherDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
