import React from 'react';

interface LoadingSkeletonProps {
  type?: 'card' | 'grid' | 'details';
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ type = 'card' }) => {
  if (type === 'card') {
    return (
      <div
        style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          height: '420px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div className="skeleton" style={{ height: '220px', width: '100%' }}></div>
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="skeleton" style={{ height: '14px', width: '80px', borderRadius: '4px' }}></div>
            <div className="skeleton" style={{ height: '14px', width: '40px', borderRadius: '4px' }}></div>
          </div>
          <div className="skeleton" style={{ height: '24px', width: '80%', borderRadius: '4px', marginTop: '4px' }}></div>
          <div className="skeleton" style={{ height: '14px', width: '95%', borderRadius: '4px' }}></div>
          <div className="skeleton" style={{ height: '14px', width: '90%', borderRadius: '4px' }}></div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}>
            <div className="skeleton" style={{ height: '14px', width: '60px', borderRadius: '4px' }}></div>
            <div className="skeleton" style={{ height: '14px', width: '60px', borderRadius: '4px' }}></div>
            <div className="skeleton" style={{ height: '14px', width: '80px', borderRadius: '4px' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'grid') {
    return (
      <div className="grid-3">
        {[...Array(6)].map((_, i) => (
          <LoadingSkeleton key={i} type="card" />
        ))}
      </div>
    );
  }

  // recipe details page skeleton loader
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem 0' }}>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div className="skeleton" style={{ flex: '1 1 400px', height: '400px', borderRadius: 'var(--radius-lg)' }}></div>
        <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="skeleton" style={{ height: '14px', width: '120px', borderRadius: '4px' }}></div>
          <div className="skeleton" style={{ height: '48px', width: '70%', borderRadius: '4px' }}></div>
          <div className="skeleton" style={{ height: '20px', width: '90%', borderRadius: '4px' }}></div>
          <div className="skeleton" style={{ height: '20px', width: '85%', borderRadius: '4px' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1rem' }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="skeleton" style={{ height: '70px', borderRadius: 'var(--radius-md)' }}></div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        <div className="skeleton" style={{ height: '350px', borderRadius: 'var(--radius-lg)' }}></div>
        <div className="skeleton" style={{ height: '350px', borderRadius: 'var(--radius-lg)' }}></div>
      </div>
    </div>
  );
};
export default LoadingSkeleton;
