import { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Loader2, X } from 'lucide-react';
import { searchLocations } from '../../services/weatherApi';
import { useWeatherStore } from '../../store/useWeatherStore';
import type { Location } from '../../types/weather';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Location[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const { fetchWeatherForLocation } = useWeatherStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2) {
        setIsSearching(true);
        const locations = await searchLocations(query);
        setResults(locations);
        setIsSearching(false);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  
  const handleLocationSelect = (location: Location) => {
    fetchWeatherForLocation(location.lat, location.lon, location);
    setQuery('');
    setIsFocused(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto md:mx-8 z-50" ref={searchRef}>
      <div className={`relative flex items-center w-full transition-all duration-300 ${isFocused ? 'ring-4 ring-blue-500/50 rounded-2xl' : ''}`}>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className={`h-6 w-6 transition-colors ${isFocused ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`} />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          className="block w-full pl-14 pr-12 py-3.5 border-2 border-white/50 dark:border-white/20 rounded-2xl leading-6 bg-white/70 dark:bg-black/60 backdrop-blur-xl text-slate-900 dark:text-white placeholder-slate-700 dark:placeholder-slate-300 focus:outline-none focus:bg-white/90 dark:focus:bg-black/80 shadow-lg transition-all duration-300 font-medium text-lg"
          placeholder="Search for cities..."
        />
        
        {query && (
          <button 
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isFocused && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden transform opacity-100 scale-100 transition-all duration-200 origin-top">
          {isSearching ? (
            <div className="flex items-center justify-center p-6 text-slate-700 dark:text-slate-300">
              <Loader2 className="w-6 h-6 animate-spin mr-3" />
              <span className="font-medium text-lg">Searching locations...</span>
            </div>
          ) : query.length > 2 ? (
            <ul className="py-2">
              {results.length > 0 ? (
                results.map((loc, i) => (
                  <li key={`${loc.id}-${i}`}>
                    <button 
                      onClick={() => handleLocationSelect(loc)}
                      className="w-full text-left px-5 py-4 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-4 transition-colors"
                    >
                      <MapPin className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                      <span className="font-bold text-lg text-slate-900 dark:text-white">
                        {loc.name}{loc.region ? `, ${loc.region}` : ''}, {loc.country}
                      </span>
                    </button>
                  </li>
                ))
              ) : (
                <li className="p-5 text-center text-base font-medium text-slate-600 dark:text-slate-400">
                  No cities found matching "{query}"
                </li>
              )}
            </ul>
          ) : (
            <div className="p-5 text-center text-base font-medium text-slate-600 dark:text-slate-400">
              Type at least 3 characters to search...
            </div>
          )}
        </div>
      )}
    </div>
  );
};
