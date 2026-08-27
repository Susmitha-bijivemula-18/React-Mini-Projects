import { format } from 'date-fns';
import { useWeatherStore } from '../../store/useWeatherStore';

export const CurrentWeather = () => {
  const { weatherData, units } = useWeatherStore();
  
  if (!weatherData) return null;
  
  const weather = weatherData;
  const { current, location, forecast } = weather;
  const today = forecast.forecastday[0].day;
  
  const temp = units === 'metric' ? Math.round(current.temp_c) : Math.round(current.temp_f);
  const feelsLike = units === 'metric' ? Math.round(current.feelslike_c) : Math.round(current.feelslike_f);
  const high = units === 'metric' ? Math.round(today.maxtemp_c) : Math.round(today.maxtemp_f);
  const low = units === 'metric' ? Math.round(today.mintemp_c) : Math.round(today.mintemp_f);
  
  const formattedDate = format(new Date(), 'EEEE, MMMM d | h:mm a');

  return (
    <div className="glass-panel p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start justify-between relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col items-center md:items-start z-10 text-shadow-sm">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          {location.name}, <span className="font-light opacity-90">{location.country}</span>
        </h2>
        <p className="text-base md:text-lg opacity-90 mb-8 font-medium">{formattedDate}</p>
        
        <div className="flex items-center gap-6">
          <div className="bg-white/20 dark:bg-black/20 p-4 rounded-3xl backdrop-blur-md shadow-inner border border-white/30 dark:border-white/10">
            <img 
              src={`https:${current.condition.icon.replace('64x64', '128x128')}`} 
              alt={current.condition.text} 
              className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl animate-pulse-slow"
            />
          </div>
          <div>
            <h1 className="text-7xl md:text-[8rem] leading-none font-black tracking-tighter text-shadow-lg">
              {temp}°
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mt-2 opacity-90 tracking-wide">{current.condition.text}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-row md:flex-col items-center md:items-end justify-center md:justify-end gap-6 md:gap-4 mt-8 md:mt-0 z-10 w-full md:w-auto p-6 md:p-0 bg-white/10 md:bg-transparent rounded-2xl md:rounded-none md:border-none backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-transparent">
        <div className="text-center md:text-right">
          <p className="text-base font-medium opacity-80 uppercase tracking-wider mb-1">Feels like</p>
          <p className="text-4xl md:text-5xl font-bold">{feelsLike}°</p>
        </div>
        
        <div className="hidden md:block w-full h-px bg-current opacity-20 my-2" />
        
        <div className="flex gap-6">
          <div className="text-center">
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider mb-1">High</p>
            <p className="text-2xl font-bold">{high}°</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider mb-1">Low</p>
            <p className="text-2xl font-bold">{low}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};
