import { format } from 'date-fns';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useWeatherStore } from '../../store/useWeatherStore';

export const TemperatureChart = () => {
  const { weatherData, units } = useWeatherStore();
  
  if (!weatherData) return null;
  const weather = weatherData;

  const currentEpoch = new Date().getTime() / 1000;
  
  // Prepare data for recharts
  const hourlyData = weather.forecast.forecastday[0].hour
    .filter((hour: any) => hour.time_epoch >= currentEpoch)
    .slice(0, 8)
    .map((hour: any, index: number) => {
      const date = new Date(hour.time);
      return {
        time: index === 0 ? 'Now' : format(date, 'ha'),
        temp: units === 'metric' ? Math.round(hour.temp_c) : Math.round(hour.temp_f),
      };
    });

  return (
    <div className="glass-panel p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="w-2 h-6 bg-orange-500 rounded-full shadow-md"></span>
          Temperature Trend
        </h3>
      </div>
      
      <div className="h-[250px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={hourlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'currentColor', opacity: 0.9, fontSize: 13, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              hide={false}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'currentColor', opacity: 0.9, fontSize: 13, fontWeight: 600 }}
              domain={['dataMin - 2', 'dataMax + 2']}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.75)', 
                backdropFilter: 'blur(16px)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
              }}
              itemStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              labelStyle={{ color: '#ffffff', opacity: 0.9, fontWeight: 'bold', paddingBottom: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="temp" 
              stroke="#f97316" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorTemp)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
