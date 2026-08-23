import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChefHat } from 'lucide-react';
import type { Recipe } from '../types/recipe';
import { CATEGORIES } from '../data/recipes';
import { recipeService } from '../services/recipeService';
import RecipeCard from '../components/RecipeCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';

export const Category: React.FC = () => {
  // DYNAMIC ROUTING DEMONSTRATION:
  // We use useParams() to extract the categoryName parameter from the URL path (/category/:categoryName).
  const { categoryName } = useParams<{ categoryName: string }>();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Find metadata for the active category slug
  const activeCategory = CATEGORIES.find(
    (c) => c.slug === categoryName?.toLowerCase()
  );

  const loadCategoryRecipes = async () => {
    if (!categoryName) return;
    try {
      setLoading(true);
      setError(false);
      const data = await recipeService.getRecipesByCategory(categoryName);
      setRecipes(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategoryRecipes();
  }, [categoryName]);

  const displayTitle = activeCategory?.name || categoryName || 'Category';

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      
      {/* Category Banner/Header */}
      <div style={{ marginBottom: '3rem' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.9rem',
            color: 'var(--primary)',
            fontWeight: 600,
            marginBottom: '1.5rem',
            textDecoration: 'none'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Category Collection
          </span>
          <h1 style={{ fontSize: '2.75rem', fontFamily: 'var(--font-serif)', fontWeight: 800 }}>
            {displayTitle} Recipes
          </h1>
          {activeCategory?.description && (
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px' }}>
              {activeCategory.description}
            </p>
          )}
        </div>
      </div>

      {/* Recipes Row */}
      {error ? (
        <ErrorState onRetry={loadCategoryRecipes} />
      ) : loading ? (
        <LoadingSkeleton type="grid" />
      ) : recipes.length === 0 ? (
        <EmptyState
          title={`No recipes in ${displayTitle}`}
          description={`We don't have any recipes categorized under "${displayTitle}" yet. Explore our other popular categories.`}
          actionText="View All Recipes"
          actionLink="/recipes"
          icon={<ChefHat size={28} />}
        />
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
export default Category;
