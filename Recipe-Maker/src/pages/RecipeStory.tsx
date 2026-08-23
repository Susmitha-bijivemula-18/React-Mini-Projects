import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronLeft, ArrowDown, Play, RotateCcw, BookOpen, Clock, Award, Star, CheckCircle2 
} from 'lucide-react';
import type { Recipe, Ingredient } from '../types/recipe';
import { recipeService } from '../services/recipeService';
import Rating from '../components/Rating';

// Custom hook to detect when element is in view
function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const current = elementRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

// Ingredient image helper to fetch high-quality context-relevant Unsplash images dynamically
const getIngredientImage = (name: string): string => {
  const clean = name.toLowerCase();
  if (clean.includes('paneer')) return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('potato') || clean.includes('aloo')) return 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('tomato')) return 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('onion')) return 'https://images.unsplash.com/photo-1508747705729-e4af64d63c8a?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('green chili') || clean.includes('green chilli')) return 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('red chili') || clean.includes('red chilli') || clean.includes('kashmiri red')) return 'https://images.unsplash.com/photo-1518482301289-5374495fdbd1?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('chili') || clean.includes('chilli') || clean.includes('pepper') || clean.includes('spice') || clean.includes('masala')) {
    return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300';
  }
  if (clean.includes('coriander') || clean.includes('cilantro') || clean.includes('parsley') || clean.includes('herb') || clean.includes('mint') || clean.includes('basil')) {
    return 'https://images.unsplash.com/photo-1588879460618-dfd807659178?auto=format&fit=crop&q=80&w=300';
  }
  if (clean.includes('rice') || clean.includes('quinoa')) return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('carrot')) return 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('brinjal') || clean.includes('eggplant')) return 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('ladies finger') || clean.includes('okra') || clean.includes('bendakaya')) return 'https://images.unsplash.com/photo-1627916568936-fb039b0a7c41?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('garlic')) return 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('ginger')) return 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('idli')) return 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('dosa')) return 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('butter')) return 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('cream')) return 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('cashew')) return 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('flour')) return 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('sugar')) return 'https://images.unsplash.com/photo-1581781898089-9118c41498b3?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('cocoa') || clean.includes('chocolate')) {
    return 'https://images.unsplash.com/photo-1548907040-4d42b52115ab?auto=format&fit=crop&q=80&w=300';
  }
  if (clean.includes('egg')) return 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('tortilla')) return 'https://images.unsplash.com/photo-1628191139360-408a06492319?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('cheese') || clean.includes('parmesan') || clean.includes('mozzarella')) {
    return 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=300';
  }
  if (clean.includes('mushroom')) return 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('tofu')) return 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('wine')) return 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=300';
  if (clean.includes('bean') || clean.includes('peas') || clean.includes('corn')) {
    return 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&q=80&w=300';
  }
  if (clean.includes('avocado') || clean.includes('guacamole')) {
    return 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=300';
  }
  return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300';
};

const getStepImage = (title: string, description: string, recipeImage: string): string => {
  const cleanTitle = title.toLowerCase();
  const cleanDesc = description.toLowerCase();
  
  if (
    cleanTitle.includes('chop') || cleanTitle.includes('slice') || cleanTitle.includes('dice') || 
    cleanTitle.includes('cut') || cleanTitle.includes('prep') || cleanTitle.includes('prepare') || 
    cleanDesc.includes('chop') || cleanDesc.includes('slice') || cleanDesc.includes('dice') || 
    cleanDesc.includes('cut')
  ) {
    return 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600'; // Hands chopping vegetables
  }
  if (
    cleanTitle.includes('boil') || cleanTitle.includes('pasta') || cleanTitle.includes('noodle') || 
    cleanTitle.includes('rice') || cleanTitle.includes('parboil') || cleanTitle.includes('steam') || 
    cleanDesc.includes('boil') || cleanDesc.includes('pasta') || cleanDesc.includes('noodle') || 
    cleanDesc.includes('rice') || cleanDesc.includes('steam')
  ) {
    return 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600'; // Boiling pot / cooking pasta
  }
  if (
    cleanTitle.includes('sauté') || cleanTitle.includes('saute') || cleanTitle.includes('fry') || 
    cleanTitle.includes('wok') || cleanTitle.includes('stir-fry') || cleanTitle.includes('grill') || 
    cleanDesc.includes('saute') || cleanDesc.includes('sauté') || cleanDesc.includes('fry')
  ) {
    return 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=600'; // Sautéing on pan
  }
  if (
    cleanTitle.includes('blend') || cleanTitle.includes('puree') || cleanTitle.includes('grind') || 
    cleanTitle.includes('mixer') || cleanDesc.includes('blend') || cleanDesc.includes('puree') || 
    cleanDesc.includes('grind') || cleanDesc.includes('smooth')
  ) {
    return 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&q=80&w=600'; // Blender/mixing
  }
  if (
    cleanTitle.includes('bake') || cleanTitle.includes('whip') || cleanTitle.includes('fold') || 
    cleanTitle.includes('dough') || cleanTitle.includes('knead') || cleanTitle.includes('frost') || 
    cleanDesc.includes('bake') || cleanDesc.includes('whip') || cleanDesc.includes('dough') || 
    cleanDesc.includes('batter')
  ) {
    return 'https://images.unsplash.com/photo-1549590143-d5855148a9d5?auto=format&fit=crop&q=80&w=600'; // Baking preparation/dough/whipping
  }
  if (
    cleanTitle.includes('simmer') || cleanTitle.includes('gravy') || cleanTitle.includes('curry') || 
    cleanTitle.includes('dum') || cleanTitle.includes('pot') || cleanDesc.includes('simmer') || 
    cleanDesc.includes('gravy') || cleanDesc.includes('curry') || cleanDesc.includes('dum')
  ) {
    return 'https://images.unsplash.com/photo-1556910103-bf91a1d81141?auto=format&fit=crop&q=80&w=600'; // Pot on stove
  }
  return recipeImage;
};

// 1. Story Hero Component
interface StoryHeroProps {
  recipe: Recipe;
}
const StoryHero: React.FC<StoryHeroProps> = ({ recipe }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <section 
      ref={containerRef}
      style={{
        position: 'relative',
        height: '92vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)'
      }}
    >
      <motion.div style={{ y, width: '100%', height: '100%', position: 'absolute', zIndex: -2 }}>
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--hero-overlay)',
          zIndex: -1
        }}
      />

      <motion.div 
        style={{ opacity, padding: '0 1.5rem', textAlign: 'center', color: '#FFFFFF', maxWidth: '800px', zIndex: 1 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', backgroundColor: 'rgba(0,0,0,0.4)', padding: '6px 16px', borderRadius: '99px', backdropFilter: 'blur(4px)', display: 'inline-block', marginBottom: '1.5rem' }}>
          {recipe.cuisine} • {recipe.category}
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: 'var(--font-serif)', fontWeight: 900, textShadow: '0 4px 20px rgba(0,0,0,0.5)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
          {recipe.name}
        </h1>
        <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', textShadow: '0 2px 10px rgba(0,0,0,0.5)', opacity: 0.9, lineHeight: 1.5, marginBottom: '2.5rem', fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
          {recipe.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem', fontSize: '1.05rem', fontWeight: 600, textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={20} style={{ color: 'var(--primary)' }} />
            <span>{totalTime} min</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} style={{ color: 'var(--primary)' }} />
            <span style={{ textTransform: 'capitalize' }}>{recipe.difficulty}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Star size={20} style={{ fill: 'currentColor', color: '#F59E0B' }} />
            <span>{recipe.rating} ({recipe.reviews})</span>
          </div>
        </div>

        <motion.div 
          style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.8 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Scroll to discover</span>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// 2. Story Introduction
interface StoryIntroProps {
  recipe: Recipe;
}
const StoryIntro: React.FC<StoryIntroProps> = ({ recipe }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      ref={ref as any}
      style={{
        padding: '8rem 1.5rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px' }}
      >
        <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', display: 'block' }}>
          The culinary journey
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontFamily: 'var(--font-serif)', fontWeight: 850, lineHeight: 1.2, marginBottom: '2rem' }}>
          Let's Make Something Delicious
        </h2>
        <p style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
          "Every recipe is a story written in elements of nature, heat, and time. Let's trace how a collection of simple ingredients transforms step-by-step into the rich, aromatic masterpiece that is <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{recipe.name}</strong>."
        </p>
      </motion.div>
    </section>
  );
};

// 3. Meet Your Ingredients Component
interface MeetIngredientsProps {
  ingredients: Ingredient[];
}
const MeetIngredients: React.FC<MeetIngredientsProps> = ({ ingredients }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedIng, setSelectedIng] = useState<Ingredient | null>(null);

  return (
    <section 
      ref={ref as any}
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
            Gathering
          </span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            Meet Your Ingredients
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '1.05rem' }}>
            Click an ingredient card to inspect its details and purpose in this recipe.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem', position: 'relative' }}>
          <AnimatePresence>
            {ingredients.map((ing, idx) => {
              const isSelected = selectedIng?.name === ing.name;
              const isAnySelected = selectedIng !== null;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={isVisible ? { 
                    opacity: isAnySelected ? (isSelected ? 1 : 0.4) : 1, 
                    y: 0, 
                    scale: isSelected ? 1.05 : 1
                  } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: idx * 0.08,
                    ease: 'easeOut'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIng(isSelected ? null : ing);
                  }}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: isSelected ? '2.5px solid var(--primary)' : '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: isSelected ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    position: 'relative'
                  }}
                >
                  <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={getIngredientImage(ing.name)} 
                      alt={ing.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'capitalize' }}>
                      {ing.name.replace(/\(.*\)/g, '').trim()}
                    </h4>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)' }}>
                      {ing.quantity}
                    </span>
                  </div>

                  {/* Absolute Info Overlay when Active */}
                  {isSelected && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'var(--bg-secondary)',
                        borderTop: '1px solid var(--border-color)',
                        padding: '1rem',
                        zIndex: 2,
                        boxShadow: '0 -4px 15px rgba(0,0,0,0.05)'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                        {ing.category || 'Main Ingredient'}
                      </span>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                        {ing.description || 'Essential component cooked to provide premium flavor notes.'}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global click catcher to restore cards */}
        {selectedIng && (
          <div 
            onClick={() => setSelectedIng(null)} 
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}
          />
        )}
      </div>
    </section>
  );
};



// 5. Preparation Story
interface PreparationStoryProps {
  recipe: Recipe;
}
const PreparationStory: React.FC<PreparationStoryProps> = ({ recipe }) => {
  const [ref, isVisible] = useIntersectionObserver();

  // Create preparation steps based on instructions or standard prep processes
  const prepInstructions = recipe.instructions.filter(
    (step) => step.title.toLowerCase().includes('prep') || 
              step.title.toLowerCase().includes('slice') || 
              step.title.toLowerCase().includes('chop') ||
              step.title.toLowerCase().includes('blend') ||
              step.title.toLowerCase().includes('marinate') ||
              step.step <= 2
  );

  return (
    <section 
      ref={ref as any}
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: 'var(--bg-secondary)'
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '0.5rem' }}>
            Mise En Place
          </span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            Let's Prepare
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {prepInstructions.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              style={{
                display: 'flex',
                gap: '2rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                alignItems: 'center',
                flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                flexWrap: 'wrap'
              }}
            >
              <div style={{
                flex: '1 1 300px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.35, fontFamily: 'var(--font-serif)' }}>
                  0{idx + 1}
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
              <div style={{
                flex: '1 1 250px',
                height: '180px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <img 
                  src={getStepImage(step.title, step.description, recipe.image)} 
                  alt={step.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Cooking Story
interface CookingStoryProps {
  recipe: Recipe;
}
const CookingStory: React.FC<CookingStoryProps> = ({ recipe }) => {
  const [ref, isVisible] = useIntersectionObserver();

  // Highlight non-prep steps
  const cookInstructions = recipe.instructions.filter(
    (step) => !recipe.instructions.filter(
      (s) => s.title.toLowerCase().includes('prep') || 
             s.title.toLowerCase().includes('slice') || 
             s.title.toLowerCase().includes('chop') ||
             s.title.toLowerCase().includes('blend') ||
             s.title.toLowerCase().includes('marinate') ||
             s.step <= 2
    ).some(p => p.step === step.step)
  );

  return (
    <section 
      ref={ref as any}
      style={{
        padding: '7rem 1.5rem',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '0.5rem' }}>
            Action
          </span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            Now Let's Cook
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative' }}>
          {/* Vertical progress line */}
          <div 
            style={{ 
              position: 'absolute', 
              left: '16px', 
              top: '10px', 
              bottom: '10px', 
              width: '2px', 
              backgroundColor: 'var(--border-color)',
              zIndex: 0 
            }} 
          />

          {cookInstructions.map((step, idx) => {
            return (
              <CookingStep 
                key={step.step}
                step={step}
                index={idx}
                totalSteps={cookInstructions.length}
                recipeImage={recipe.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Sub-component for individual step scroll fade-in
interface CookingStepProps {
  step: any;
  index: number;
  totalSteps: number;
  recipeImage: string;
}
const CookingStep: React.FC<CookingStepProps> = ({ step, index, totalSteps, recipeImage }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        display: 'flex',
        gap: '2.5rem',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Circle step counter */}
      <div 
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          backgroundColor: isIntersecting ? 'var(--primary)' : 'var(--bg-secondary)',
          color: isIntersecting ? '#FFFFFF' : 'var(--text-muted)',
          border: '2px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '0.85rem',
          flexShrink: 0,
          transition: 'all 0.4s ease',
          boxShadow: isIntersecting ? '0 0 15px rgba(219, 106, 54, 0.4)' : 'none'
        }}
      >
        {step.step}
      </div>

      <div 
        style={{
          flex: 1,
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.10em' }}>
            Step {index + 1} of {totalSteps}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 650 }}>
            🔥 Medium Heat
          </span>
        </div>

        <h3 style={{ fontSize: '1.45rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {step.title}
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
          {step.description}
        </p>

        {/* Relevant cooking step illustration overlay/thumbnail */}
        <div style={{ height: '220px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginTop: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <img 
            src={getStepImage(step.title, step.description, recipeImage)} 
            alt={step.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      </div>
    </motion.div>
  );
};

// 7. Visual Transformation & Before/After Slider
interface TransformationProps {
  recipe: Recipe;
}
const RecipeTransformation: React.FC<TransformationProps> = ({ recipe }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      ref={ref as any}
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)'
      }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '0.5rem' }}>
            Alchemy
          </span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            Watch the Transformation
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Drag the slider to reveal the finished recipe compared to raw cooking elements.
          </p>
        </div>

        {/* Before / After Slider container */}
        <BeforeAfterSlider 
          beforeImage={getIngredientImage(recipe.ingredients[0]?.name || 'ingredients')} 
          afterImage={recipe.image} 
        />
      </div>
    </section>
  );
};

// Draggable Slider Component
interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}
const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{
        position: 'relative',
        width: '100%',
        height: '450px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--card-shadow)',
        cursor: 'ew-resize',
        userSelect: 'none'
      }}
    >
      {/* Before Image (Raw components) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      >
        <img 
          src={beforeImage} 
          alt="Raw materials" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <span style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: 'rgba(0,0,0,0.5)', color: '#FFF', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
          Ingredients
        </span>
      </div>

      {/* After Image (Finished Plate) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          zIndex: 2
        }}
      >
        <img 
          src={afterImage} 
          alt="Prepared recipe" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <span style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'var(--primary)', color: '#FFF', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
          Final Dish
        </span>
      </div>

      {/* Slider Bar & Drag Handle */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPosition}%`,
          width: '4px',
          backgroundColor: '#FFFFFF',
          zIndex: 3,
          transform: 'translateX(-50%)',
          boxShadow: '0 0 10px rgba(0,0,0,0.4)',
          pointerEvents: 'none'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            color: 'var(--text-primary)',
            fontWeight: 800
          }}
        >
          ↔
        </div>
      </div>
    </div>
  );
};

// 8. Final Reveal Component
interface StoryFinalProps {
  recipe: Recipe;
  onReset: () => void;
}
const RecipeStoryFinal: React.FC<StoryFinalProps> = ({ recipe, onReset }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      ref={ref as any}
      style={{
        padding: '8rem 1.5rem',
        backgroundColor: 'var(--bg-primary)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '750px', width: '100%' }}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem 2rem',
            boxShadow: 'var(--card-shadow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gold ray burst background effect */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            right: '-50%',
            bottom: '-50%',
            background: 'radial-gradient(circle, rgba(219,106,54,0.06) 0%, rgba(255,255,255,0) 70%)',
            zIndex: 0,
            pointerEvents: 'none'
          }} />

          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            color: '#10B981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            zIndex: 1
          }}>
            <CheckCircle2 size={34} />
          </div>

          <div style={{ zIndex: 1 }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
              ✨ Your Recipe is Ready
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-serif)', fontWeight: 850, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              {recipe.name}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '10px' }}>
              You've completed the story of this dish. Now, it's time to bring it to life in your own kitchen!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1, width: '100%', marginTop: '1rem' }}>
            <button 
              onClick={onReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                padding: '12px 24px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
            >
              <RotateCcw size={16} />
              <span>Cook Again</span>
            </button>

            <Link 
              to={`/recipes/${recipe.id}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.25s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.filter = 'none';
              }}
            >
              <Play size={16} fill="currentColor" />
              <span>View Full Recipe</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 9. Related Recipes & Food Journey
interface RelatedProps {
  recipe: Recipe;
}
const RelatedJourney: React.FC<RelatedProps> = ({ recipe }) => {
  const [related, setRelated] = useState<Recipe[]>([]);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    const fetchRelated = async () => {
      const all = await recipeService.getRecipes();
      const filtered = all
        .filter((r) => r.id !== recipe.id && (r.category === recipe.category || r.cuisine === recipe.cuisine))
        .slice(0, 3);
      setRelated(filtered);
    };
    fetchRelated();
  }, [recipe]);

  if (related.length === 0) return null;

  return (
    <section 
      ref={ref as any}
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '0.5rem' }}>
            Continuation
          </span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            Continue Your Food Journey
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {related.map((rel, idx) => (
            <motion.div
              key={rel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={`/recipes/${rel.id}/story`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div 
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img 
                      src={rel.image} 
                      alt={rel.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 800 }}>
                      {rel.cuisine} • {rel.category}
                    </span>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '6px', marginBottom: '10px', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                      {rel.name}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Rating value={rel.rating} showText={false} />
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{rel.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Story Mode Wrapper
export const RecipeStory: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!recipeId) return;
      setLoading(true);
      const data = await recipeService.getRecipeById(recipeId);
      setRecipe(data);
      setLoading(false);
      window.scrollTo(0, 0);
    };
    fetchRecipe();
  }, [recipeId]);

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div 
        style={{ 
          height: '80vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '1rem',
          color: 'var(--text-secondary)'
        }}
      >
        <div style={{ width: '40px', height: '40px', border: '4px solid var(--border-color)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <span>Entering Story Mode...</span>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2>Story Unavailable</h2>
        <p>The requested recipe story could not be loaded.</p>
        <Link to="/recipes" style={{ color: 'var(--primary)', fontWeight: 'bold', marginTop: '1rem', display: 'inline-block' }}>Go to Catalog</Link>
      </div>
    );
  }

  return (
    <article style={{ width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Dynamic sticky header panel for quickly exiting story mode */}
      <div 
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 100,
          pointerEvents: 'none'
        }}
      >
        <button
          onClick={() => navigate(`/recipes/${recipe.id}`)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            color: '#1E1B18',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            cursor: 'pointer',
            fontWeight: 700,
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            pointerEvents: 'auto',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ChevronLeft size={16} />
          <span>Exit Story</span>
        </button>
      </div>

      {/* DISCOVER THE RECIPE HERO */}
      <StoryHero recipe={recipe} />

      {/* LET'S MAKE SOMETHING DELICIOUS INTRO */}
      <StoryIntro recipe={recipe} />

      {/* INGREDIENT STORY */}
      <MeetIngredients ingredients={recipe.ingredients} />



      {/* PREPARATION STORY */}
      <PreparationStory recipe={recipe} />

      {/* COOKING STORY */}
      <CookingStory recipe={recipe} />

      {/* TRANSFORMATION */}
      <RecipeTransformation recipe={recipe} />

      {/* FINAL REVEAL */}
      <RecipeStoryFinal recipe={recipe} onReset={handleReset} />

      {/* RELATED JOURNEY */}
      <RelatedJourney recipe={recipe} />
    </article>
  );
};

export default RecipeStory;
