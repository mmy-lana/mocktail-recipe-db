import React from 'react';
import type { MocktailRecipe } from '../features/recipes/types/recipe';
import { IngredientList } from '../features/ingredients/components/IngredientList';
import { Badge } from '../components/atoms/Badge';
import { Button } from '../components/atoms/Button';
import { formatPrepTime } from '../utils/formatters';
import { X, Clock, GlassWater, ShieldCheck, Star, Sparkles } from 'lucide-react';

export interface RecipeDetailPageProps {
  recipe: MocktailRecipe;
  onClose: () => void;
}

export const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-amber-500/30 rounded-2xl shadow-2xl shadow-amber-950/50 overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-400 hover:text-amber-400 hover:border-amber-500 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Headline */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-950">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                100% Halal
              </Badge>
              <Badge variant="gold" icon={<Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />}>
                {recipe.rating.toFixed(1)} Rating
              </Badge>
              <Badge variant="outline">{recipe.complexity} Mixology</Badge>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-amber-100">
              {recipe.title}
            </h1>
            <p className="text-sm sm:text-base text-amber-200/80 mt-1 max-w-2xl font-serif italic">
              "{recipe.subtitle}"
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Prep Time</p>
                <p className="text-sm font-semibold text-zinc-200">{formatPrepTime(recipe.prepTimeMinutes)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <GlassWater className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Glassware</p>
                <p className="text-sm font-semibold text-zinc-200">{recipe.glassType}</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Flavor Notes</p>
                <p className="text-sm font-semibold text-zinc-200">{recipe.flavorProfile.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
              Elixir Story & Profile
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Ingredients Section */}
          <IngredientList ingredients={recipe.ingredients} />

          {/* Step-by-Step Instructions */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-4">
              Mixology Method
            </h2>
            <ol className="space-y-3">
              {recipe.instructions.map((step, idx) => (
                <li key={idx} className="flex gap-4 p-3.5 rounded-lg bg-zinc-950/40 border border-zinc-800/60 text-sm">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-zinc-200 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-zinc-800 flex justify-end">
            <Button variant="gold" onClick={onClose}>
              Close Recipe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};