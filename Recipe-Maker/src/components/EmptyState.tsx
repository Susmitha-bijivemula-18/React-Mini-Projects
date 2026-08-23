import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionText,
  actionLink = '/recipes',
  icon
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        border: '1px dashed var(--border-color)',
        maxWidth: '500px',
        margin: '2rem auto'
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}
      >
        {icon || <Search size={28} />}
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        {title}
      </h3>
      
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: '360px' }}>
        {description}
      </p>

      {actionText && (
        <Link to={actionLink} className="btn btn-primary">
          {actionText}
        </Link>
      )}
    </div>
  );
};
export default EmptyState;
