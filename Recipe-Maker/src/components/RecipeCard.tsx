import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart } from 'lucide-react';
import type { Recipe } from '../types/recipe';
import Rating from './Rating';
import FavoriteButton from './FavoriteButton';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="recipe-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-secondary)',
        overflow: 'hidden',
        boxShadow: 'var(--card-shadow)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        height: '100%',
        border: '1px solid var(--border-color)',
        textDecoration: 'none',
        color: 'inherit'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        const img = e.currentTarget.querySelector('.card-img') as HTMLImageElement;
        if (img) img.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--card-shadow)';
        const img = e.currentTarget.querySelector('.card-img') as HTMLImageElement;
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      {/* Badge/Overlay Elements */}
      <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 10 }}>
        <FavoriteButton recipeId={recipe.id} />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          zIndex: 10,
          backgroundColor: recipe.vegetarian ? '#10B981' : '#EF4444',
          color: '#FFFFFF',
          fontSize: '0.75rem',
          fontWeight: 700,
          padding: '4px 8px',
          borderRadius: 'var(--radius-sm)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        {recipe.vegetarian ? 'Veg' : 'Non-Veg'}
      </div>

      {/* Image Wrap */}
      <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '65%' }}>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="card-img"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {recipe.cuisine} • {recipe.category}
          </span>
          <Rating value={recipe.rating} showText={false} />
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '3rem' }}>
          {recipe.name}
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', flexGrow: 1 }}>
          {recipe.description}
        </p>

        {/* Stats footer inside card */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} style={{ color: 'var(--primary)' }} />
            <span>{totalTime} min</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <BarChart size={14} style={{ color: 'var(--accent)' }} />
            <span>{recipe.difficulty}</span>
          </div>
          <span style={{ fontWeight: 600, color: 'var(--primary)' }}>
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
};
export default RecipeCard;
