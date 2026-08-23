import React, { useEffect, useState } from 'react';
import { Heart, HeartOff } from 'lucide-react';
import type { Recipe } from '../types/recipe';
import { useFavorites } from '../context/FavoritesContext';
import { recipeService } from '../services/recipeService';
import RecipeCard from '../components/RecipeCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      setError(false);
      const allRecipes = await recipeService.getRecipes();
      const filtered = allRecipes.filter((r) => favorites.includes(r.id));
      setFavoriteRecipes(filtered);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, [favorites]);

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            color: '#EF4444',
            marginBottom: '1rem'
          }}
        >
          <Heart size={26} fill="#EF4444" />
        </div>

        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
          Your Favorites
        </h1>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto' }}>
          Browse your customized cookbook containing all the recipe selections you have saved.
        </p>
      </div>

      {error ? (
        <ErrorState onRetry={loadFavorites} />
      ) : loading ? (
        <LoadingSkeleton type="grid" />
      ) : favoriteRecipes.length === 0 ? (
        <EmptyState
          title="Your recipe collection is empty"
          description="Click the heart icon on any recipe cards to save them here for offline access."
          actionText="Explore Recipes"
          actionLink="/recipes"
          icon={<HeartOff size={28} />}
        />
      ) : (
        <div className="grid-3">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

    </div>
  );
};
export default Favorites;
