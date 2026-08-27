export interface Location {
  id?: string;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  timezone: string;
  localtime?: string;
}

export interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_kph: number;
  wind_dir: string;
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  uv: number;
  is_day: boolean;
}

export interface HourlyForecast {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  chance_of_rain: number;
  chance_of_snow: number;
}

export interface DailyForecast {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    avgvis_km: number;
    avghumidity: number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
  };
  hour: HourlyForecast[];
}

export interface Alert {
  headline: string;
  msgtype: string;
  severity: string;
  urgency: string;
  areas: string;
  category: string;
  certainty: string;
  event: string;
  note: string;
  effective: string;
  expires: string;
  desc: string;
  instruction: string;
}

export interface AirQuality {
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  'us-epa-index': number;
  'gb-defra-index': number;
}

export interface WeatherData {
  location: Location;
  current: CurrentWeather & { air_quality?: AirQuality };
  forecast: {
    forecastday: DailyForecast[];
  };
  alerts?: {
    alert: Alert[];
  };
}
