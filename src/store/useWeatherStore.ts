import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Location } from '../types/weather';

interface WeatherState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  currentLocation: Location | null;
  setCurrentLocation: (location: Location) => void;
  
  favorites: Location[];
  addFavorite: (location: Location) => void;
  removeFavorite: (locationId: string) => void;
  isFavorite: (locationId: string) => boolean;
  
  units: 'metric' | 'imperial';
  toggleUnits: () => void;
  
  theme: 'light' | 'dark' | 'auto';
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  
  weatherData: any | null;
  isLoading: boolean;
  error: string | null;
  fetchWeatherForLocation: (lat: number, lon: number, locationInfo?: any) => Promise<void>;
}

import { fetchWeather } from '../services/weatherApi';

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set, get) => ({
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      currentLocation: null,
      setCurrentLocation: (location) => set({ currentLocation: location }),
      
      favorites: [],
      addFavorite: (location) => 
        set((state) => {
          // Check if already exists based on lat/lon or name
          const exists = state.favorites.some(f => 
            (f.lat === location.lat && f.lon === location.lon) || f.name === location.name
          );
          if (exists) return state;
          
          const newLocation = { ...location, id: location.id || `${location.lat}-${location.lon}` };
          return { favorites: [...state.favorites, newLocation] };
        }),
      removeFavorite: (locationId) =>
        set((state) => ({
          favorites: state.favorites.filter((f) => f.id !== locationId && `${f.lat}-${f.lon}` !== locationId),
        })),
      isFavorite: (locationId) => {
        const state = get();
        return state.favorites.some(f => f.id === locationId || `${f.lat}-${f.lon}` === locationId);
      },
      
      units: 'metric',
      toggleUnits: () => set((state) => ({ units: state.units === 'metric' ? 'imperial' : 'metric' })),
      
      theme: 'auto',
      setTheme: (theme) => set({ theme }),

      weatherData: null,
      isLoading: false,
      error: null,
      fetchWeatherForLocation: async (lat, lon, locationInfo) => {
        set({ isLoading: true, error: null });
        try {
          const data = await fetchWeather(lat, lon, locationInfo);
          set({ weatherData: data, currentLocation: data.location, isLoading: false });
        } catch (err: any) {
          set({ error: err.message || 'Failed to fetch weather data', isLoading: false });
        }
      },
    }),
    {
      name: 'weather-storage',
      partialize: (state) => ({ favorites: state.favorites, units: state.units, theme: state.theme }), // Only persist these
    }
  )
);
