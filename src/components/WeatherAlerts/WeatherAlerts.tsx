import { AlertTriangle, Info, ShieldAlert } from 'lucide-react';
import { useWeatherStore } from '../../store/useWeatherStore';

export const WeatherAlerts = () => {
  const { weatherData } = useWeatherStore();
  
  if (!weatherData) return null;
  const weather = weatherData;
  const alerts = weather.alerts?.alert || [];

  if (alerts.length === 0) {
    return null;
  }

  const getAlertIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'extreme':
      case 'severe':
        return <ShieldAlert className="w-6 h-6 text-red-500 flex-shrink-0" />;
      case 'moderate':
        return <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />;
      default:
        return <Info className="w-6 h-6 text-blue-500 flex-shrink-0" />;
    }
  };

  const getAlertStyle = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'extreme':
      case 'severe':
        return 'bg-red-500/10 border-red-500/30 text-red-900 dark:text-red-200';
      case 'moderate':
        return 'bg-orange-500/10 border-orange-500/30 text-orange-900 dark:text-orange-200';
      default:
        return 'bg-blue-500/10 border-blue-500/30 text-blue-900 dark:text-blue-200';
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {alerts.map((alert, idx) => (
        <div 
          key={idx} 
          className={`glass-panel flex items-start gap-4 p-4 border rounded-2xl backdrop-blur-md transition-all hover:scale-[1.01] ${getAlertStyle(alert.severity)}`}
        >
          <div className="bg-white/50 dark:bg-black/30 p-2 rounded-xl backdrop-blur-sm">
            {getAlertIcon(alert.severity)}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-lg">{alert.headline}</h4>
            <p className="text-sm opacity-80 mt-1 line-clamp-2">{alert.desc}</p>
            <p className="text-xs font-medium opacity-60 mt-2 uppercase tracking-wider">{alert.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
