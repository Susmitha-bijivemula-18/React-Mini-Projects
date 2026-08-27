import { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { CurrentWeather } from '../../components/CurrentWeather/CurrentWeather';
import { HourlyForecast } from '../../components/HourlyForecast/HourlyForecast';
import { WeeklyForecast } from '../../components/WeeklyForecast/WeeklyForecast';
import { WeatherDetails } from '../../components/WeatherDetails/WeatherDetails';
import { TemperatureChart } from '../../components/TemperatureChart/TemperatureChart';
import { AirQuality } from '../../components/AirQuality/AirQuality';
import { WeatherAlerts } from '../../components/WeatherAlerts/WeatherAlerts';
import { useWeatherStore } from '../../store/useWeatherStore';
import { Loader2 } from 'lucide-react';

export const WeatherDashboard = () => {
  const { weatherData, isLoading, error, fetchWeatherForLocation, theme } = useWeatherStore();

  useEffect(() => {
    if (!weatherData) {
      // Default to London, UK
      fetchWeatherForLocation(51.5074, -0.1278, { name: 'London', country: 'GB' });
    }
  }, []);

  useEffect(() => {
    // Apply theme
    if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  if (isLoading || !weatherData) {
    return (
      <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center text-white p-4">
        <Loader2 className="w-12 h-12 animate-spin text-blue-500 mb-4" />
        <h2 className="text-2xl font-bold text-shadow-sm">Fetching Weather...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center text-white p-4">
        <div className="glass-panel p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Oops!</h2>
          <p className="opacity-90">{error}</p>
          <button 
            onClick={() => fetchWeatherForLocation(51.5074, -0.1278, { name: 'London', country: 'GB' })}
            className="mt-6 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const weather = weatherData;

  // Dynamic Background based on live weather
  const getBackgroundClass = () => {
    const code = weather.current.condition.code;
    const isDay = weather.current.is_day;
    
    // OWM Codes: 800 (Clear), 801-804 (Clouds), 500-531 (Rain)
    if (code === 800) return isDay ? 'from-blue-400 to-blue-200' : 'from-slate-900 to-indigo-900';
    if (code >= 801 && code <= 804) return isDay ? 'from-slate-300 to-gray-200' : 'from-slate-800 to-gray-700';
    if (code >= 500 && code <= 531) return 'from-slate-700 to-blue-900'; // Rain
    
    return isDay ? 'from-blue-300 to-blue-100' : 'from-slate-900 to-slate-800';
  };

  const getForegroundClass = () => {
    const code = weather.current.condition.code;
    const isDay = weather.current.is_day;
    
    // Day and clear/cloudy = bright background -> dark text
    if (isDay && (code === 800 || (code >= 801 && code <= 804))) {
      return 'text-slate-900';
    }
    
    // Otherwise it's night or dark weather (rain) -> light text with slight shadow for readability
    return 'text-white text-shadow-sm';
  };

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${getBackgroundClass()} ${getForegroundClass()} transition-colors duration-1000 p-4 md:p-8 font-sans`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <Header />
        
        <WeatherAlerts />
        
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          {/* Left Column (Hero & Charts) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <CurrentWeather />
            <HourlyForecast />
            <TemperatureChart />
            <AirQuality />
          </div>
          
          {/* Right Column (Details & 7-Day) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <WeeklyForecast />
            <WeatherDetails />
          </div>
        </main>
      </div>
    </div>
  );
};
