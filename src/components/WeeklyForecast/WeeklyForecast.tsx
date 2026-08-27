import { format, isToday } from 'date-fns';
import { CloudRain } from 'lucide-react';
import { useWeatherStore } from '../../store/useWeatherStore';

export const WeeklyForecast = () => {
  const { weatherData, units } = useWeatherStore();
  
  if (!weatherData) return null;
  const weather = weatherData;
  const forecastDays = weather.forecast.forecastday;

  return (
    <div className="glass-panel p-6 flex flex-col gap-5">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <span className="w-2 h-6 bg-purple-500 rounded-full shadow-md"></span>
        7-Day Forecast
      </h3>
      
      <div className="flex flex-col gap-3">
        {forecastDays.map((day, index) => {
          const date = new Date(day.date);
          const isCurrentDay = isToday(date);
          const dayName = isCurrentDay ? 'Today' : format(date, 'EEEE');
          
          const maxTemp = units === 'metric' ? Math.round(day.day.maxtemp_c) : Math.round(day.day.maxtemp_f);
          const minTemp = units === 'metric' ? Math.round(day.day.mintemp_c) : Math.round(day.day.mintemp_f);
          
          return (
            <div 
              key={day.date_epoch}
              className={`flex items-center justify-between p-4 rounded-xl transition-colors hover:bg-white/30 dark:hover:bg-black/40 cursor-pointer border ${isCurrentDay ? 'bg-white/30 dark:bg-black/40 border-white/40 dark:border-white/20 shadow-sm' : 'bg-white/10 dark:bg-black/20 border-white/10 dark:border-white/5'}`}
            >
              <div className="flex-1">
                <p className={`font-semibold text-lg ${isCurrentDay ? 'font-bold' : ''}`}>{dayName}</p>
                <div className="flex items-center gap-1 mt-1 text-sm font-bold opacity-80">
                  {day.day.daily_chance_of_rain > 0 && (
                    <>
                      <CloudRain className="w-4 h-4" />
                      <span>{day.day.daily_chance_of_rain}%</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex flex-1 items-center justify-center gap-2">
                <img 
                  src={`https:${day.day.condition.icon}`} 
                  alt={day.day.condition.text} 
                  className="w-12 h-12 drop-shadow-lg"
                />
              </div>
              
              <div className="flex-1 flex justify-end gap-4 text-right items-center">
                <span className="font-bold text-xl">{maxTemp}°</span>
                <span className="font-semibold text-lg opacity-60">{minTemp}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
