import React, { useEffect, useState } from 'react';
import { Award } from 'lucide-react';
import type { Recipe } from '../types/recipe';
import { recipeService } from '../services/recipeService';
import RecipeCard from '../components/RecipeCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorState from '../components/ErrorState';

export const Popular: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadPopular = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await recipeService.getPopularRecipes();
      setRecipes(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPopular();
  }, []);

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
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary)',
            marginBottom: '1rem'
          }}
        >
          <Award size={26} />
        </div>
        
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
          Popular Recipes
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto' }}>
          Explore our highest-rated recipes loved and cooked by thousands of home cooks around the world.
        </p>
      </div>

      {error ? (
        <ErrorState onRetry={loadPopular} />
      ) : loading ? (
        <LoadingSkeleton type="grid" />
      ) : (
        <div className="grid-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

    </div>
  );
};
export default Popular;
