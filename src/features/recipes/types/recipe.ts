import type { Ingredient } from '../../ingredients/types/ingredient';

export type CategoryType = 'All' | 'Signature' | 'Sparkling' | 'Herbal & Botanical' | 'Smoked & Spiced';
export type ComplexityType = 'Easy' | 'Moderate' | 'Mixologist';

export interface MocktailRecipe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<CategoryType, 'All'>;
  complexity: ComplexityType;
  prepTimeMinutes: number;
  glassType: string;
  ingredients: Ingredient[];
  instructions: string[];
  flavorProfile: string[];
  halalCertified: true;
  featured: boolean;
  rating: number;
  imageUrl: string;
}