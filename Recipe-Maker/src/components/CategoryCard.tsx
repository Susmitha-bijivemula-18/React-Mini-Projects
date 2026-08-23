import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '../types/recipe';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="category-card"
      style={{
        display: 'block',
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '140px',
        boxShadow: 'var(--card-shadow)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        textDecoration: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement;
        if (overlay) overlay.style.backgroundColor = 'rgba(0,0,0,0.55)';
        const img = e.currentTarget.querySelector('.cat-img') as HTMLImageElement;
        if (img) img.style.transform = 'scale(1.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--card-shadow)';
        const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement;
        if (overlay) overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
        const img = e.currentTarget.querySelector('.cat-img') as HTMLImageElement;
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      {/* Image background */}
      <img
        src={category.image}
        alt={category.name}
        className="cat-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease'
        }}
      />

      {/* Dark overlay */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          transition: 'background-color 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#FFFFFF',
          textAlign: 'center',
          padding: '1rem'
        }}
      >
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-sans)', marginBottom: '0.25rem' }}>
          {category.name}
        </h3>
        <p style={{ fontSize: '0.8rem', opacity: 0.9, maxWidth: '200px', margin: '0 auto', lineHeight: 1.3 }}>
          {category.description}
        </p>
      </div>
    </Link>
  );
};
export default CategoryCard;
