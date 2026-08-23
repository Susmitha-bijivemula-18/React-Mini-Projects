import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message = "Something went wrong while loading recipes.",
  onRetry
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        margin: '2rem auto',
        maxWidth: '450px',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid #FECACA', // Light red border
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#FEE2E2',
          color: '#EF4444',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem'
        }}
      >
        <AlertCircle size={28} />
      </div>

      <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
        Failed to Load Data
      </h3>

      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        {message}
      </p>

      {onRetry && (
        <button onClick={onRetry} className="btn btn-primary" style={{ padding: '0.6rem 1.25rem' }}>
          Retry Loading
        </button>
      )}
    </div>
  );
};
export default ErrorState;
