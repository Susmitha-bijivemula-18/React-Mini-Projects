import React from 'react';
import { ChefHat, Globe, Heart, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <ChefHat size={24} />,
      title: "Chef Crafted",
      desc: "Every single recipe listed is designed and tested in our professional test kitchens to guarantee absolute culinary success."
    },
    {
      icon: <Heart size={24} />,
      title: "Healthy Cooking",
      desc: "We prioritize balanced nutrition and pure ingredients, offering rich vegetarian and gluten-free dietary alternatives."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Flavors",
      desc: "Discover rich cultural origins, traditional street recipes, and seasonal delicacies spanning cross-continent cuisines."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "API-Ready Integrity",
      desc: "Designed using professional React principles, optimized for high scalability, responsive devices, and future API integrations."
    }
  ];

  return (
    <div style={{ paddingBottom: '5rem' }}>
      
      {/* Cover Header */}
      <section
        style={{
          padding: '5rem 0',
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          textAlign: 'center',
          transition: 'background-color var(--transition-normal)'
        }}
      >
        <div className="container" style={{ maxWidth: '700px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Our Mission
          </span>
          <h1 style={{ fontSize: '2.75rem', fontFamily: 'var(--font-serif)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem' }}>
            About RecipeMaker
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We believe that cooking should be an accessible, inspiring, and joyful adventure for everyone. 
            We make it easy to find, prepare, and share delicious homemade meals.
          </p>
        </div>
      </section>

      {/* Main Splits Content */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-split">
          
          <div>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
              Elevate Your Daily Kitchen Experience
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
              RecipeMaker started in 2026 as a simple recipe folder, and has grown into a premium digital cookbook. 
              We curate chef-tested steps, detailed checklists, and nutritional calculations to take the guesswork out of baking and cooking.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Whether you are preparing a quick breakfast, baking a chocolate fudge cake, or hosting a family biryani feast, 
              our dynamic checklist system keeps your culinary preparations organized and smooth.
            </p>
          </div>

          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '320px', boxShadow: 'var(--shadow-lg)' }}>
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
              alt="Kitchen cooking background"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Why Choose Us</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>How we help home chefs cook with confidence and flair.</p>
        </div>

        <div className="grid-4">
          {values.map((v, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
              onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {v.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                {v.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-split {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};
export default About;
