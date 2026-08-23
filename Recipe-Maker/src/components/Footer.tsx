import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '4rem 0 2rem 0',
        marginTop: 'auto',
        transition: 'background-color var(--transition-normal)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Logo & Intro */}
          <div style={{ flex: '1 1 300px' }}>
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'var(--primary)', marginBottom: '1rem' }}
            >
              <UtensilsCrossed size={24} />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Recipe<span style={{ color: 'var(--primary)' }}>Maker</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', maxWidth: '320px' }}>
              Explore chef-tested recipes, dynamic cooking guides, and modern culinary tips to elevate your daily meals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
              <a href="#" aria-label="Website" style={{ transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--primary)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>
                <Globe size={20} />
                <span style={{ fontSize: '0.85rem' }}>recipemaker.com</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Explore
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li><Link to="/recipes" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--primary)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>All Recipes</Link></li>
                <li><Link to="/popular" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--primary)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>Popular Picks</Link></li>
                <li><Link to="/favorites" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--primary)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>Saved Collection</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Categories
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li><Link to="/category/indian" style={{ color: 'var(--text-secondary)' }}>Indian Cuisine</Link></li>
                <li><Link to="/category/italian" style={{ color: 'var(--text-secondary)' }}>Italian Pasta</Link></li>
                <li><Link to="/category/desserts" style={{ color: 'var(--text-secondary)' }}>Sweet Treats</Link></li>
                <li><Link to="/category/breakfast" style={{ color: 'var(--text-secondary)' }}>Morning Breakfast</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Company
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li><Link to="/about" style={{ color: 'var(--text-secondary)' }}>About Us</Link></li>
                <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Careers</a></li>
                <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <span>© {new Date().getFullYear()} RecipeMaker. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Crafted with <Heart size={14} fill="#EF4444" stroke="#EF4444" /> for food enthusiasts worldwide.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
