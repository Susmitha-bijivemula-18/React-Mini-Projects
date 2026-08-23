import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import type { Recipe } from '../types/recipe';
import { recipeService } from '../services/recipeService';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';

export const Recipes: React.FC = () => {
  // Use React Router useSearchParams to read search query parameter dynamically
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamQuery = searchParams.get('search') || '';

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Filters State
  const [searchQuery, setSearchQuery] = useState(searchParamQuery);
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'Easy' | 'Medium' | 'Hard'>('all');

  // Sync state if URL query param changes (e.g., clicking suggestions on Home)
  useEffect(() => {
    setSearchQuery(searchParamQuery);
  }, [searchParamQuery]);

  const loadRecipes = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await recipeService.searchRecipes(searchQuery);
      setRecipes(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, [searchQuery]);

  const handleSearchChange = (val: string) => {
    // Set parameter in URL so routing state matches search state
    if (val) {
      setSearchParams({ search: val });
    } else {
      setSearchParams({});
    }
  };

  // Filter local state based on active dietary and difficulty tags
  const filteredRecipes = recipes.filter((recipe) => {
    const matchDiet =
      dietFilter === 'all' ||
      (dietFilter === 'veg' && recipe.vegetarian) ||
      (dietFilter === 'nonveg' && !recipe.vegetarian);

    const matchDifficulty =
      difficultyFilter === 'all' || recipe.difficulty === difficultyFilter;

    return matchDiet && matchDifficulty;
  });

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
          Explore Recipes
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Browse our complete kitchen library. Search by dish name, key ingredients, or regional origins.
        </p>
      </div>

      {/* Search Bar section */}
      <div style={{ maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
        <SearchBar
          initialValue={searchQuery}
          onSearchChange={handleSearchChange}
          placeholder="Search by name, ingredients, cuisine..."
        />
      </div>

      {/* Filter Options Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        {/* Diet toggle filters */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setDietFilter('all')}
            className={`btn ${dietFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '6px 16px', fontSize: '0.85rem' }}
          >
            All Diets
          </button>
          <button
            onClick={() => setDietFilter('veg')}
            className={`btn ${dietFilter === 'veg' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '6px 16px', fontSize: '0.85rem' }}
          >
            Veg Only
          </button>
          <button
            onClick={() => setDietFilter('nonveg')}
            className={`btn ${dietFilter === 'nonveg' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '6px 16px', fontSize: '0.85rem' }}
          >
            Non-Veg Only
          </button>
        </div>

        {/* Difficulty select filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Difficulty:</span>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value as any)}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              outline: 'none'
            }}
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Grid Content */}
      {error ? (
        <ErrorState onRetry={loadRecipes} />
      ) : loading ? (
        <LoadingSkeleton type="grid" />
      ) : filteredRecipes.length === 0 ? (
        <EmptyState
          title="No recipes found"
          description="Try searching for paneer, biryani, tomato, dosa, curry or dessert."
          actionText="Clear Search"
          actionLink="/recipes"
          icon={<ChefHat size={28} />}
        />
      ) : (
        <div className="grid-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

    </div>
  );
};
export default Recipes;
