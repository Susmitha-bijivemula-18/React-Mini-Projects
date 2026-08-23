import type { Recipe, Ingredient } from '../types/recipe';
import { RECIPES } from '../data/recipes';

// Simulating network latency to make loading state testing realistic and API-ready.
const LATENCY_MS = 300;

// Helper function to dynamically enrich ingredients with description and category if missing.
const enrichRecipe = (recipe: Recipe): Recipe => {
  const enrichedIngredients = recipe.ingredients.map((ing) => {
    const cleanName = ing.name.toLowerCase().trim();
    
    // 1. Determine Category
    let category: 'Main' | 'Spices' | 'Garnishing' | 'Other' = 'Main';
    if (
      cleanName.includes('powder') || 
      cleanName.includes('masala') || 
      cleanName.includes('turmeric') || 
      cleanName.includes('chili') || 
      cleanName.includes('chilli') ||
      cleanName.includes('cardamom') || 
      cleanName.includes('cinnamon') || 
      cleanName.includes('clove') || 
      cleanName.includes('spices') || 
      cleanName.includes('jeera') ||
      cleanName.includes('mustard') ||
      cleanName.includes('oregano') ||
      cleanName.includes('salt') ||
      cleanName.includes('sugar') ||
      cleanName.includes('pepper')
    ) {
      category = 'Spices';
    } else if (
      cleanName.includes('leaves') || 
      cleanName.includes('coriander') || 
      cleanName.includes('mint') || 
      cleanName.includes('basil') || 
      cleanName.includes('cilantro') || 
      cleanName.includes('cream') || 
      cleanName.includes('garnish') ||
      cleanName.includes('spring onion')
    ) {
      category = 'Garnishing';
    }

    // 2. Generate Description
    let description = `Fresh ${ing.name.replace(/\(.*\)/g, '').trim()}`;
    if (cleanName.includes('paneer')) description = 'Indian cottage cheese cubes';
    else if (cleanName.includes('tomato')) description = 'Ripe red tomatoes';
    else if (cleanName.includes('onion')) description = 'Crisp red or white onions';
    else if (cleanName.includes('butter')) description = 'Rich dairy butter';
    else if (cleanName.includes('cream')) description = 'Rich heavy whipping cream';
    else if (cleanName.includes('chili powder') || cleanName.includes('chilli powder')) description = 'Ground red chili peppers';
    else if (cleanName.includes('garam masala')) description = 'Aromatic ground spice blend';
    else if (cleanName.includes('methi')) description = 'Dried fenugreek leaves';
    else if (cleanName.includes('cashew')) description = 'Creamy raw cashew nuts';
    else if (cleanName.includes('garlic')) description = 'Minced or whole garlic cloves';
    else if (cleanName.includes('ginger')) description = 'Fresh ginger root';
    else if (cleanName.includes('rice')) description = 'Long grain Basmati rice';
    else if (cleanName.includes('ghee')) description = 'Clarified butter';
    else if (cleanName.includes('saffron')) description = 'Aromatic saffron strands';
    else if (cleanName.includes('mozzarella')) description = 'Fresh mozzarella cheese';
    else if (cleanName.includes('dough')) description = 'Fermented pizza dough yeast base';
    else if (cleanName.includes('olive oil')) description = 'Extra virgin olive oil';
    else if (cleanName.includes('basil')) description = 'Fresh green basil leaves';
    else if (cleanName.includes('pasta')) description = 'Durum wheat semolina pasta';
    else if (cleanName.includes('flour')) description = 'All-purpose white baking flour';
    else if (cleanName.includes('milk')) description = 'Whole fresh dairy milk';
    else if (cleanName.includes('egg')) description = 'Fresh farm eggs';
    else if (cleanName.includes('sugar')) description = 'Granulated white sweet sugar';
    else if (cleanName.includes('salt')) description = 'Fine table salt';
    else if (cleanName.includes('yeast')) description = 'Dry active yeast powder';
    else if (cleanName.includes('cabbage')) description = 'Shredded fresh green cabbage';
    else if (cleanName.includes('carrot')) description = 'Crisp sweet carrots';
    else if (cleanName.includes('peas')) description = 'Fresh green garden peas';
    else if (cleanName.includes('capsicum') || cleanName.includes('bell pepper')) description = 'Crisp green/red bell peppers';
    else if (cleanName.includes('soy sauce')) description = 'Savory dark soy sauce extract';
    else if (cleanName.includes('vinegar')) description = 'White distilled vinegar';
    else if (cleanName.includes('cocoa')) description = 'Rich unsweetened cocoa powder';
    else if (cleanName.includes('chocolate')) description = 'Sweet dark baking chocolate';
    else if (cleanName.includes('khoya')) description = 'Evaporated milk solids';
    else if (cleanName.includes('cardamom')) description = 'Aromatic green cardamom pods';
    else if (cleanName.includes('tortillas')) description = 'Soft corn or flour tortillas';
    else if (cleanName.includes('avocado')) description = 'Fresh ripe avocado pear';
    else if (cleanName.includes('chole') || cleanName.includes('chickpeas')) description = 'Soaked chickpeas/garbanzo beans';
    else if (cleanName.includes('bhatura')) description = 'Puffed deep-fried flatbread';
    else if (cleanName.includes('chicken')) description = 'Fresh boneless chicken pieces';

    return {
      ...ing,
      category: ing.category || category,
      description: ing.description || description
    };
  });

  return {
    ...recipe,
    ingredients: enrichedIngredients
  };
};

const SYNONYMS: string[][] = [
  ['paneer', 'cottage cheese'],
  ['tomato', 'tomatoes'],
  ['potato', 'aloo', 'alugadda'],
  ['eggplant', 'brinjal', 'vankaya'],
  ['okra', 'bhindi', 'bendakaya', 'ladies finger', 'ladyfinger', 'lady finger']
];

const getSearchTokens = (query: string): string[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];
  const tokens = new Set<string>([lowerQuery]);
  
  for (const group of SYNONYMS) {
    if (group.some(term => lowerQuery.includes(term) || term.includes(lowerQuery))) {
      group.forEach(term => tokens.add(term));
    }
  }
  return Array.from(tokens);
};

const calculateScore = (recipe: Recipe, tokens: string[]): number => {
  let score = 0;
  const nameLower = recipe.name.toLowerCase();
  
  for (const token of tokens) {
    // 1. Highest Priority (Weight 10): Recipe name contains the search term
    if (nameLower.includes(token)) {
      score += 10;
    }
    
    // 2. Second Priority (Weight 5): Ingredient name contains the search term
    const hasIngredient = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(token));
    if (hasIngredient) {
      score += 5;
    }
    
    // 3. Third Priority (Weight 1): Cuisine/Category contains the search term
    if (recipe.cuisine.toLowerCase().includes(token) || recipe.category.toLowerCase().includes(token)) {
      score += 1;
    }
  }
  
  return score;
};

export const recipeService = {
  getRecipes: (): Promise<Recipe[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(RECIPES.map(enrichRecipe));
      }, LATENCY_MS);
    });
  },

  getRecipeById: (id: string): Promise<Recipe | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recipe = RECIPES.find((r) => r.id === id);
        resolve(recipe ? enrichRecipe(recipe) : undefined);
      }, LATENCY_MS);
    });
  },

  searchRecipes: (query: string): Promise<Recipe[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowerQuery = query.toLowerCase().trim();
        if (!lowerQuery) {
          resolve(RECIPES.map(enrichRecipe));
          return;
        }

        const tokens = getSearchTokens(lowerQuery);

        const scored = RECIPES.map(recipe => {
          const score = calculateScore(recipe, tokens);
          return { recipe, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => enrichRecipe(item.recipe));

        resolve(scored);
      }, LATENCY_MS);
    });
  },

  getRecipesByCategory: (categorySlug: string): Promise<Recipe[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowerSlug = categorySlug.toLowerCase().trim();
        const filtered = RECIPES.filter(
          (recipe) => recipe.category.toLowerCase() === lowerSlug
        );
        resolve(filtered.map(enrichRecipe));
      }, LATENCY_MS);
    });
  },

  getPopularRecipes: (): Promise<Recipe[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Sort recipes by rating descending, then reviews descending
        const sorted = [...RECIPES].sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return b.reviews - a.reviews;
        });
        resolve(sorted.map(enrichRecipe));
      }, LATENCY_MS);
    });
  }
};

