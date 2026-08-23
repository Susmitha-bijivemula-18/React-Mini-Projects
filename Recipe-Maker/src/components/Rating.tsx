import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  count?: number;
  showText?: boolean;
}

export const Rating: React.FC<RatingProps> = ({ value, count, showText = true }) => {
  const fullStars = Math.floor(value);
  const hasHalf = value % 1 >= 0.5;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} size={15} fill="#E6A15C" stroke="#E6A15C" />;
          }
          if (i === fullStars && hasHalf) {
            return (
              <div key={i} style={{ position: 'relative', display: 'inline-block' }}>
                <Star size={15} fill="transparent" stroke="#E6A15C" />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', overflow: 'hidden' }}>
                  <Star size={15} fill="#E6A15C" stroke="#E6A15C" />
                </div>
              </div>
            );
          }
          return <Star key={i} size={15} fill="transparent" stroke="var(--text-muted)" />;
        })}
      </div>
      {showText && (
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginLeft: '4px' }}>
          {value.toFixed(1)} {count !== undefined && <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>({count})</span>}
        </span>
      )}
    </div>
  );
};
export default Rating;
