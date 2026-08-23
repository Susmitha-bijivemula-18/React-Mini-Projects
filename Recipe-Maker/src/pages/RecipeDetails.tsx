import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ChevronLeft, ChefHat, BookOpen, Award, Info
} from 'lucide-react';
import type { Recipe } from '../types/recipe';
import { recipeService } from '../services/recipeService';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import Rating from '../components/Rating';
import FavoriteButton from '../components/FavoriteButton';

export const RecipeDetails: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [relatedRecipes, setRelatedRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipeAndRelated = async () => {
      if (!recipeId) return;
      try {
        setLoading(true);
        setError(false);
        const data = await recipeService.getRecipeById(recipeId);
        if (data) {
          setRecipe(data);
          
          // Fetch related recommendations
          const allRecipes = await recipeService.getRecipes();
          const related = allRecipes
            .filter((r) => r.id !== data.id && (r.cuisine === data.cuisine || r.category === data.category))
            .slice(0, 4);
          setRelatedRecipes(related);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeAndRelated();
  }, [recipeId]);

  if (loading) {
    return (
      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        <LoadingSkeleton type="details" />
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <EmptyState
          title="Recipe Not Found"
          description={`We couldn't load the details for the recipe "${recipeId}". It may have been renamed or removed.`}
          actionText="Go to Catalog"
          actionLink="/recipes"
        />
      </div>
    );
  }

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <article style={{ paddingBottom: '6rem', width: '100%' }}>
      {/* Top Back Action Bar */}
      <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.2s ease',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <ChevronLeft size={18} />
          <span>Go Back</span>
        </button>

        <FavoriteButton recipeId={recipe.id} size={24} />
      </div>

      {/* 1. Recipe Header Block */}
      <div className="container" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ backgroundColor: 'var(--primary)', color: '#FFFFFF', fontSize: '0.7rem', fontWeight: 800, padding: '4px 10px', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase' }}>
            {recipe.cuisine}
          </span>
          <Link to={`/category/${recipe.category.toLowerCase()}`} style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', fontSize: '0.7rem', fontWeight: 800, padding: '4px 10px', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase', textDecoration: 'none' }}>
            {recipe.category}
          </Link>
          <span style={{ 
            backgroundColor: recipe.vegetarian ? '#10B981' : '#EF4444', 
            color: '#FFFFFF', 
            fontSize: '0.7rem', 
            fontWeight: 800, 
            padding: '4px 10px', 
            borderRadius: 'var(--radius-sm)', 
            textTransform: 'uppercase' 
          }}>
            {recipe.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontFamily: 'var(--font-serif)', fontWeight: 850, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.15 }}>
          {recipe.name}
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          {recipe.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Rating value={recipe.rating} showText={false} />
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            {recipe.rating}
          </span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            ({recipe.reviews.toLocaleString()} reviews)
          </span>
        </div>
      </div>

      {/* 2. Recipe Information Panel (At the top, before the image) */}
      <div className="container" style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '1rem',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: '1px solid var(--border-color)', paddingRight: '10px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>⏱ Total Time</span>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{totalTime} min</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: '1px solid var(--border-color)', paddingRight: '10px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>🥣 Prep Time</span>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{recipe.prepTime} min</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: '1px solid var(--border-color)', paddingRight: '10px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>🔥 Cook Time</span>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{recipe.cookTime} min</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: '1px solid var(--border-color)', paddingRight: '10px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>👨🍳 Difficulty</span>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', textTransform: 'capitalize' }}>{recipe.difficulty}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: '1px solid var(--border-color)', paddingRight: '10px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>🍽 Servings</span>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{recipe.servings} People</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: '1px solid var(--border-color)', paddingRight: '10px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>🌍 Cuisine</span>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{recipe.cuisine}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: '1px solid var(--border-color)', paddingRight: '10px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>📍 Region</span>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{recipe.region}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>🏷 Category</span>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{recipe.category}</span>
          </div>
        </div>
      </div>

      {/* 3. Main Recipe Image (Visual Focus below Info Panel) */}
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--card-shadow)',
          height: '460px'
        }}>
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* 4. Ingredients section (Clean text list, no checkboxes) */}
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--card-shadow)'
        }}>
          <h2 style={{ fontSize: '1.85rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={24} style={{ color: 'var(--primary)' }} />
            <span>Ingredients You'll Need</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '12px 24px'
          }}>
            {recipe.ingredients.map((ing, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--border-color)',
                  fontSize: '0.95rem'
                }}
              >
                <span style={{ color: 'var(--text-primary)', fontWeight: 650 }}>
                  • {ing.name.replace(/\(.*\)/g, '').trim()}
                </span>
                <span style={{ color: 'var(--primary)', fontWeight: 750 }}>
                  {ing.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Cooking Instructions (Full list displayed all at once) */}
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--card-shadow)'
        }}>
          <h2 style={{ fontSize: '1.85rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ChefHat style={{ color: 'var(--primary)' }} />
            <span>Cooking Process</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {recipe.instructions.map((step) => (
              <div 
                key={step.step}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  alignItems: 'start'
                }}
              >
                {/* Step badge */}
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>
                  {step.step}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 800, 
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: 'var(--text-secondary)', 
                    lineHeight: 1.5
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Chef's Tips Panel */}
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div style={{
          backgroundColor: 'var(--primary-light)',
          borderLeft: '4px solid var(--primary)',
          borderRadius: 'var(--radius-md)',
          padding: '1.75rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={20} strokeWidth={2.5} />
            <span>Chef's Tips & Secrets</span>
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
            {recipe.tips.map((tip, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '8px', fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 7. Nutrition Info Card */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Info size={18} style={{ color: 'var(--accent)' }} />
            <span>Nutrition Per Serving (Estimated)</span>
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Nutritional values listed are approximate calculations per serving size.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Calories</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>{recipe.nutrition.calories} kcal</div>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Protein</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{recipe.nutrition.protein}</div>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Carbohydrates</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{recipe.nutrition.carbohydrates}</div>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Fat</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{recipe.nutrition.fat}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Related Recipes Panel */}
      {relatedRecipes.length > 0 && (
        <div className="container" style={{ marginTop: '2.5rem' }}>
          <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            You May Also Like
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {relatedRecipes.map((rel) => (
              <Link
                key={rel.id}
                to={`/recipes/${rel.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
                >
                  <div style={{ height: '160px', overflow: 'hidden' }}>
                    <img src={rel.image} alt={rel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700 }}>
                      {rel.cuisine} • {rel.category}
                    </span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '4px', marginBottom: '8px', color: 'var(--text-primary)' }}>
                      {rel.name}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Rating value={rel.rating} showText={false} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{rel.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </article>
  );
};

export default RecipeDetails;
