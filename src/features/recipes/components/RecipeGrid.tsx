import React from 'react';
import type { MocktailRecipe } from '../types/recipe';
import { RecipeCard } from './RecipeCard';
import { GlassWater } from 'lucide-react';

export interface RecipeGridProps {
  recipes: MocktailRecipe[];
  isLoading: boolean;
  onSelectRecipe: (recipe: MocktailRecipe) => void;
}

export const RecipeGrid: React.FC<RecipeGridProps> = ({
  recipes,
  isLoading,
  onSelectRecipe,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-80 rounded-xl bg-zinc-900/60 border border-zinc-800 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/60 max-w-md mx-auto">
        <div className="w-12 h-12 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center mx-auto mb-4">
          <GlassWater className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-lg font-semibold text-amber-200">No Mocktails Found</h3>
        <p className="text-xs text-zinc-400 mt-1">
          No halal mocktails match your current search parameters or active category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelectRecipe} />
      ))}
    </div>
  );
};