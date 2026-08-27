import { Droplets, Wind, Thermometer, Gauge, Eye, Sun, Sunrise, Sunset } from 'lucide-react';
import { useWeatherStore } from '../../store/useWeatherStore';

export const WeatherDetails = () => {
  const { weatherData, units } = useWeatherStore();
  
  if (!weatherData) return null;
  const weather = weatherData;
  const { current, forecast } = weather;
  const todayAstro = forecast.forecastday[0].astro;
  
  const feelsLike = units === 'metric' ? Math.round(current.feelslike_c) : Math.round(current.feelslike_f);
  const windSpeed = units === 'metric' ? current.wind_kph : Math.round(current.wind_kph / 1.609); // kph to mph
  const windUnit = units === 'metric' ? 'km/h' : 'mph';
  const tempUnit = units === 'metric' ? '°C' : '°F';
  
  const getUVStatus = (uv: number) => {
    if (uv <= 2) return 'Low';
    if (uv <= 5) return 'Moderate';
    if (uv <= 7) return 'High';
    if (uv <= 10) return 'Very High';
    return 'Extreme';
  };
  
  const getHumidityStatus = (humidity: number) => {
    if (humidity < 30) return 'Dry';
    if (humidity <= 60) return 'Comfortable';
    return 'Muggy';
  };

  const details = [
    {
      title: 'Humidity',
      icon: <Droplets className="w-5 h-5 text-blue-400" />,
      value: `${current.humidity}%`,
      description: getHumidityStatus(current.humidity)
    },
    {
      title: 'Wind',
      icon: <Wind className="w-5 h-5 text-gray-400" />,
      value: `${windSpeed} ${windUnit}`,
      description: current.wind_dir
    },
    {
      title: 'Feels Like',
      icon: <Thermometer className="w-5 h-5 text-red-400" />,
      value: `${feelsLike}${tempUnit}`,
      description: feelsLike > (units === 'metric' ? current.temp_c : current.temp_f) ? 'Warmer than actual' : 'Cooler than actual'
    },
    {
      title: 'UV Index',
      icon: <Sun className="w-5 h-5 text-yellow-500" />,
      value: current.uv.toString(),
      description: getUVStatus(current.uv)
    },
    {
      title: 'Pressure',
      icon: <Gauge className="w-5 h-5 text-green-400" />,
      value: `${current.pressure_mb} mb`,
      description: 'Atmospheric pressure'
    },
    {
      title: 'Visibility',
      icon: <Eye className="w-5 h-5 text-indigo-400" />,
      value: `${current.vis_km} km`,
      description: current.vis_km > 9 ? 'Clear view' : 'Reduced visibility'
    },
    {
      title: 'Sunrise',
      icon: <Sunrise className="w-5 h-5 text-orange-400" />,
      value: todayAstro.sunrise,
      description: 'Morning'
    },
    {
      title: 'Sunset',
      icon: <Sunset className="w-5 h-5 text-pink-400" />,
      value: todayAstro.sunset,
      description: 'Evening'
    }
  ];

  return (
    <div className="glass-panel p-6 flex flex-col gap-5">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <span className="w-2 h-6 bg-teal-500 rounded-full shadow-md"></span>
        Weather Details
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {details.map((detail, idx) => (
          <div key={idx} className="bg-white/20 dark:bg-black/30 rounded-2xl p-5 flex flex-col gap-2 hover:bg-white/30 dark:hover:bg-black/40 transition-colors border border-white/20 dark:border-white/10 shadow-sm">
            <div className="flex items-center gap-2 opacity-90 text-sm font-semibold tracking-wide uppercase">
              {detail.icon}
              <span>{detail.title}</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold tracking-tight">{detail.value}</p>
            <p className="text-sm font-medium opacity-80 mt-auto">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
