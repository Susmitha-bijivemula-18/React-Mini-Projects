import { Leaf } from 'lucide-react';
import { useWeatherStore } from '../../store/useWeatherStore';

export const AirQuality = () => {
  const { weatherData } = useWeatherStore();
  
  if (!weatherData) return null;
  const weather = weatherData;
  const aqi = weather.current.air_quality;
  
  if (!aqi) return null;

  const getAQIStatus = (index: number) => {
    switch(index) {
      case 1: return { text: 'Good', color: 'text-green-500', bg: 'bg-green-500/20' };
      case 2: return { text: 'Moderate', color: 'text-yellow-500', bg: 'bg-yellow-500/20' };
      case 3: return { text: 'Unhealthy for Sensitive', color: 'text-orange-500', bg: 'bg-orange-500/20' };
      case 4: return { text: 'Unhealthy', color: 'text-red-500', bg: 'bg-red-500/20' };
      case 5: return { text: 'Very Unhealthy', color: 'text-purple-500', bg: 'bg-purple-500/20' };
      case 6: return { text: 'Hazardous', color: 'text-rose-700', bg: 'bg-rose-700/20' };
      default: return { text: 'Unknown', color: 'text-gray-500', bg: 'bg-gray-500/20' };
    }
  };

  const status = getAQIStatus(aqi['us-epa-index']);

  const getRecommendation = (index: number) => {
    if (index <= 2) return 'Air quality is acceptable. Enjoy your outdoor activities.';
    if (index <= 3) return 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people.';
    return 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.';
  };

  return (
    <div className="glass-panel p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="w-2 h-6 bg-green-500 rounded-full shadow-md"></span>
          Air Quality
        </h3>
        <div className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${status.bg} ${status.color}`}>
          {status.text}
        </div>
      </div>
      
      <div className="flex items-center gap-5 mt-2">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/20 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-sm shrink-0">
          <Leaf className={`w-8 h-8 ${status.color}`} />
        </div>
        
        <div className="flex-1">
          <p className="text-base font-medium opacity-90 leading-relaxed">
            {getRecommendation(aqi['us-epa-index'])}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-3 mt-4">
        {[
          { label: 'PM2.5', value: aqi.pm2_5.toFixed(1) },
          { label: 'PM10', value: aqi.pm10.toFixed(1) },
          { label: 'O3', value: aqi.o3.toFixed(1) },
          { label: 'NO2', value: aqi.no2.toFixed(1) }
        ].map(item => (
          <div key={item.label} className="bg-white/20 dark:bg-black/30 rounded-xl p-3 text-center border border-white/20 dark:border-white/10 shadow-sm hover:bg-white/30 dark:hover:bg-black/40 transition-colors">
            <p className="text-sm font-semibold opacity-80">{item.label}</p>
            <p className="font-bold text-lg mt-1 tracking-tight">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
