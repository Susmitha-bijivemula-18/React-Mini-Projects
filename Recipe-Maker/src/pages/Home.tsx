import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import type { Recipe } from '../types/recipe';
import { CATEGORIES } from '../data/recipes';
import { recipeService } from '../services/recipeService';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import CategoryCard from '../components/CategoryCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorState from '../components/ErrorState';

export const Home: React.FC = () => {
  const [trendingRecipes, setTrendingRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTrending = async () => {
    try {
      setLoading(true);
      setError(false);
      // Fetch popular recipes and limit to top 3 for trending row
      const data = await recipeService.getPopularRecipes();
      setTrendingRecipes(data.slice(0, 3));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const searchSuggestions = ['Biryani', 'Pasta', 'Paneer', 'Desserts', 'Breakfast'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          padding: '6rem 0',
          backgroundImage: 'linear-gradient(var(--hero-overlay), var(--hero-overlay)), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(217, 106, 54, 0.25)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              backdropFilter: 'blur(8px)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#F97316',
              border: '1px solid rgba(217, 106, 54, 0.4)',
              marginBottom: '1.5rem'
            }}
          >
            <Sparkles size={14} fill="#F97316" />
            <span>Chef's Choice Platform</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1rem',
              fontFamily: 'var(--font-serif)',
              textShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            Discover Your Next Favorite Recipe
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              opacity: 0.9,
              marginBottom: '2.5rem',
              maxWidth: '620px',
              textShadow: '0 2px 6px rgba(0,0,0,0.5)'
            }}
          >
            Explore delicious recipes, discover new cuisines, and cook something amazing today.
          </p>

          {/* Centered Search Bar */}
          <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto 1.25rem auto' }}>
            <SearchBar placeholder="Search 'Paneer Butter Masala', 'Biryani', 'Pasta'..." />
          </div>

          {/* Popular Search Suggestions */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', fontSize: '0.9rem' }}>
            <span style={{ opacity: 0.8 }}>Try searching:</span>
            {searchSuggestions.map((sug) => (
              <Link
                key={sug}
                to={`/recipes?search=${encodeURIComponent(sug)}`}
                style={{
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  transition: 'background-color 0.2s',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              >
                {sug}
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Trending Recipes */}
      <section className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>Trending Recipes</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>The most popular plates cooked this week.</p>
          </div>
          <Link
            to="/recipes"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600,
              color: 'var(--primary)',
              fontSize: '0.95rem'
            }}
          >
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {error ? (
          <ErrorState onRetry={fetchTrending} />
        ) : loading ? (
          <LoadingSkeleton type="grid" />
        ) : (
          <div className="grid-3">
            {trendingRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </section>

      {/* Popular Categories */}
      <section className="container" style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Popular Categories</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            Browse through our curated recipe collections based on course types and cultures.
          </p>
        </div>

        <div className="grid-4">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

    </div>
  );
};
export default Home;
