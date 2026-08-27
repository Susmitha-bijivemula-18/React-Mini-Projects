import { format } from 'date-fns';
import { CloudRain } from 'lucide-react';
import { useWeatherStore } from '../../store/useWeatherStore';

export const HourlyForecast = () => {
  const { weatherData, units } = useWeatherStore();
  
  if (!weatherData) return null;
  const weather = weatherData;

  const currentEpoch = new Date().getTime() / 1000;
  const hourlyData = weather.forecast.forecastday[0].hour.filter(
    (hour) => hour.time_epoch >= currentEpoch
  ).slice(0, 24);

  return (
    <div className="glass-panel p-6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
        Hourly Forecast
      </h3>
      
      <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-2 snap-x">
        {hourlyData.map((hour, index) => {
          const date = new Date(hour.time);
          const timeLabel = index === 0 ? 'Now' : format(date, 'h a');
          const temp = units === 'metric' ? Math.round(hour.temp_c) : Math.round(hour.temp_f);
          
          return (
            <div 
              key={hour.time_epoch}
              className={`flex flex-col items-center justify-between min-w-[80px] p-4 rounded-2xl snap-center shrink-0 transition-transform hover:scale-105 ${index === 0 ? 'bg-white/30 dark:bg-black/40 border border-white/50 dark:border-white/30 shadow-md' : 'bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border border-white/10 dark:border-white/5'}`}
            >
              <p className="font-semibold text-sm opacity-90">{timeLabel}</p>
              
              <img 
                src={`https:${hour.condition.icon}`} 
                alt={hour.condition.text} 
                className="w-14 h-14 my-2 drop-shadow-lg"
              />
              
              <p className="text-2xl font-bold">{temp}°</p>
              
              <div className="flex items-center gap-1 mt-2 text-xs font-bold opacity-80">
                <CloudRain className="w-3 h-3" />
                <span>{hour.chance_of_rain}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
