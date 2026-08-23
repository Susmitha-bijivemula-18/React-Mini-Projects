import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '500px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '3.5rem 2rem',
          boxShadow: 'var(--card-shadow)'
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}
        >
          <HelpCircle size={36} />
        </div>

        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--primary)' }}>
          404
        </h1>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
          Page Not Found
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.5 }}>
          The culinary path you are looking for does not exist. It may have been eaten, or the URL might be mistyped.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>
            Go Home
          </Link>
          <Link to="/recipes" className="btn btn-secondary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>
            Explore Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
