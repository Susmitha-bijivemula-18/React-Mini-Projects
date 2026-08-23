import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  initialValue?: string;
  placeholder?: string;
  onSearchChange?: (val: string) => void;
  showButton?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialValue = '',
  placeholder = 'Search recipes by name, ingredients, or cuisine...',
  onSearchChange,
  showButton = true
}) => {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (onSearchChange) {
      onSearchChange(trimmed);
    } else {
      // In case we are on other pages and triggering search from Hero, navigate to /recipes?search=xyz
      navigate(`/recipes?search=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'var(--input-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-full)',
        padding: '6px 6px 6px 16px',
        boxShadow: 'var(--shadow-md)',
        transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)'
      }}
      onFocusCapture={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary)';
        e.currentTarget.style.boxShadow = '0 0 0 3px var(--primary-light)';
      }}
      onBlurCapture={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-color)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
    >
      <Search size={20} style={{ color: 'var(--text-muted)', marginRight: '10px', flexShrink: 0 }} />
      
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Search recipes"
        style={{
          width: '100%',
          border: 'none',
          background: 'transparent',
          fontSize: '1rem',
          color: 'var(--text-primary)',
          outline: 'none',
          padding: '8px 0'
        }}
      />

      {showButton && (
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            padding: '8px 24px',
            fontSize: '0.9rem',
            marginLeft: '8px',
            flexShrink: 0
          }}
        >
          Search
        </button>
      )}
    </form>
  );
};
export default SearchBar;
