import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

interface FavoriteButtonProps {
  recipeId: string;
  size?: number;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ recipeId, size = 20 }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(recipeId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if wrapped in a Link
    e.stopPropagation();
    toggleFavorite(recipeId);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      style={{
        background: active ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(4px)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: active ? '#EF4444' : '#FFFFFF',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Heart
        size={size}
        fill={active ? "#EF4444" : "transparent"}
        stroke={active ? "#EF4444" : "#FFFFFF"}
        style={{
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      />
    </button>
  );
};
export default FavoriteButton;
