export interface Ingredient {
  name: string;
  quantity: string;
  image?: string;
  description?: string;
  category?: 'Main' | 'Spices' | 'Garnishing' | 'Other';
}

export interface InstructionStep {
  step: number;
  title: string;
  description: string;
}

export interface Nutrition {
  calories: number;
  protein: string;
  carbohydrates: string;
  fat: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  cuisine: string;
  category: string;
  region: string;
  rating: number;
  reviews: number;
  prepTime: number;
  cookTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  vegetarian: boolean;
  ingredients: Ingredient[];
  instructions: InstructionStep[];
  tips: string[];
  nutrition: Nutrition;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
}
