import { Moon, Sun, MapPin, Menu } from 'lucide-react';
import { SearchBar } from '../SearchBar/SearchBar';
import { useWeatherStore } from '../../store/useWeatherStore';

export const Header = () => {
  const { theme, setTheme, units, toggleUnits } = useWeatherStore();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="w-full flex items-center justify-between p-4 md:px-8 bg-white/20 dark:bg-black/40 backdrop-blur-2xl border-b border-white/30 dark:border-white/10 rounded-b-3xl mb-6 z-50 sticky top-0 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600/30 p-2.5 rounded-xl backdrop-blur-md border border-blue-500/40 shadow-sm">
          <MapPin className="w-6 h-6 text-blue-900 dark:text-blue-200" />
        </div>
        <h1 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-blue-900 dark:from-white dark:to-blue-200 tracking-tight text-shadow-sm">
          AeroWeather
        </h1>
      </div>

      <div className="hidden md:flex flex-1 mx-8 relative">
        <SearchBar />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleUnits}
          className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg bg-white/40 dark:bg-black/50 hover:bg-white/50 dark:hover:bg-black/60 border border-white/50 dark:border-white/20 transition-all duration-300 shadow-sm text-slate-900 dark:text-white"
        >
          {units === 'metric' ? '°C' : '°F'}
        </button>
        
        <button
          onClick={toggleTheme}
          className="w-11 h-11 rounded-full flex items-center justify-center bg-white/40 dark:bg-black/50 hover:bg-white/50 dark:hover:bg-black/60 border border-white/50 dark:border-white/20 transition-all duration-300 shadow-sm"
        >
          {theme === 'dark' ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-800" />}
        </button>

        <button className="md:hidden w-11 h-11 rounded-full flex items-center justify-center bg-white/40 dark:bg-black/50 hover:bg-white/50 dark:hover:bg-black/60 border border-white/50 dark:border-white/20 transition-all duration-300 shadow-sm text-slate-900 dark:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
