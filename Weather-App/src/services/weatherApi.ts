import axios from 'axios';
import type { WeatherData, Location, DailyForecast } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';

// Helper to map OWM icon to UI format (UI prepends https:)
const mapIcon = (icon: string) => `//openweathermap.org/img/wn/${icon}@4x.png`;

// Helper to map OWM weather condition
const mapCondition = (weather: any): { text: string; icon: string; code: number; } => ({
  text: weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1),
  icon: mapIcon(weather[0].icon),
  code: weather[0].id,
});

export const searchLocations = async (query: string): Promise<Location[]> => {
  if (!query) return [];
  try {
    const { data } = await axios.get(`${GEO_URL}/direct?q=${query}&limit=5&appid=${API_KEY}`);
    return data.map((item: any) => ({
      id: `${item.lat}-${item.lon}`,
      name: item.name,
      region: item.state || '',
      country: item.country,
      lat: item.lat,
      lon: item.lon,
    }));
  } catch (error) {
    console.error('Error searching locations:', error);
    return [];
  }
};

export const fetchWeather = async (lat: number, lon: number, locationInfo?: Partial<Location>): Promise<WeatherData> => {
  try {
    // Fetch Current, Forecast, and Air Quality in parallel
    const [currentRes, forecastRes, aqiRes, reverseGeoRes] = await Promise.all([
      axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`),
      axios.get(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`),
      axios.get(`${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`),
      // Only reverse geocode if we don't have location name
      !locationInfo?.name ? axios.get(`${GEO_URL}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`) : Promise.resolve({ data: [locationInfo] })
    ]);

    const currentData = currentRes.data;
    const forecastData = forecastRes.data;
    const aqiData = aqiRes.data.list[0];
    const locData = reverseGeoRes.data[0];

    // OWM doesn't give a direct UV index or local time in free standard API.
    // We'll calculate a local date approximation using the timezone offset.
    const localTimeMs = (currentData.dt + currentData.timezone) * 1000;
    const localDate = new Date(localTimeMs).toISOString();

    // Group 3-hour forecasts by day for the 5-day forecast
    const dailyMap = new Map<string, any[]>();
    forecastData.list.forEach((item: any) => {
      const dateStr = item.dt_txt.split(' ')[0];
      if (!dailyMap.has(dateStr)) dailyMap.set(dateStr, []);
      dailyMap.get(dateStr)!.push(item);
    });

    const forecastDays: DailyForecast[] = Array.from(dailyMap.entries()).map(([date, hours]) => {
      // Find max and min temp for the day
      const maxTemp = Math.max(...hours.map(h => h.main.temp_max));
      const minTemp = Math.min(...hours.map(h => h.main.temp_min));
      
      // Calculate avg precipitation probability (pop is 0 to 1)
      const avgPop = hours.reduce((acc, h) => acc + (h.pop || 0), 0) / hours.length;
      
      // Use the middle of the day for the condition icon
      const midDayHour = hours[Math.floor(hours.length / 2)];

      return {
        date,
        date_epoch: new Date(date).getTime() / 1000,
        day: {
          maxtemp_c: maxTemp,
          maxtemp_f: (maxTemp * 9/5) + 32,
          mintemp_c: minTemp,
          mintemp_f: (minTemp * 9/5) + 32,
          avgtemp_c: (maxTemp + minTemp) / 2,
          avgtemp_f: (((maxTemp + minTemp) / 2) * 9/5) + 32,
          condition: mapCondition(midDayHour.weather),
          daily_chance_of_rain: Math.round(avgPop * 100),
          uv: 0,
          maxwind_kph: 0,
          totalprecip_mm: 0,
          avgvis_km: 10,
          avghumidity: 50,
          daily_chance_of_snow: 0,
        },
        astro: {
          sunrise: new Date((currentData.sys.sunrise + currentData.timezone) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sunset: new Date((currentData.sys.sunset + currentData.timezone) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          moonrise: '',
          moonset: '',
          moon_phase: 'Waxing Gibbous',
          moon_illumination: 0,
        },
        hour: hours.map(h => ({
          time_epoch: h.dt,
          time: h.dt_txt,
          temp_c: h.main.temp,
          temp_f: (h.main.temp * 9/5) + 32,
          condition: mapCondition(h.weather),
          chance_of_rain: Math.round((h.pop || 0) * 100),
          chance_of_snow: 0,
        })),
      };
    });

    const aqiComponents = aqiData.components;
    
    return {
      location: {
        id: `${lat}-${lon}`,
        name: locData.name || currentData.name,
        region: locData.state || '',
        country: locData.country || currentData.sys.country,
        lat,
        lon,
        timezone: locData.timezone || currentData.timezone || '',
        localtime: localDate,
      },
      current: {
        temp_c: currentData.main.temp,
        temp_f: (currentData.main.temp * 9/5) + 32,
        is_day: currentData.weather[0].icon.includes('d'),
        condition: mapCondition(currentData.weather),
        wind_kph: currentData.wind.speed * 3.6,
        wind_dir: windDegreeToDirection(currentData.wind.deg),
        pressure_mb: currentData.main.pressure,
        precip_mm: currentData.rain ? currentData.rain['1h'] || 0 : 0,
        humidity: currentData.main.humidity,
        feelslike_c: currentData.main.feels_like,
        feelslike_f: (currentData.main.feels_like * 9/5) + 32,
        vis_km: (currentData.visibility || 10000) / 1000,
        uv: 5,
        air_quality: {
          'us-epa-index': aqiData.main.aqi,
          pm2_5: aqiComponents.pm2_5,
          pm10: aqiComponents.pm10,
          o3: aqiComponents.o3,
          no2: aqiComponents.no2,
          so2: aqiComponents.so2,
          co: aqiComponents.co,
          'gb-defra-index': aqiData.main.aqi,
        }
      },
      forecast: {
        forecastday: forecastDays,
      },
      alerts: {
        alert: [],
      }
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

function windDegreeToDirection(degree: number): string {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round((degree % 360) / 22.5);
  return directions[index % 16];
}
