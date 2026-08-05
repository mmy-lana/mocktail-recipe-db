import React from 'react';
import type { MocktailRecipe } from '../types/recipe';
import { Card } from '../../../components/molecules/Card';
import { Badge } from '../../../components/atoms/Badge';
import { Button } from '../../../components/atoms/Button';
import { formatPrepTime } from '../../../utils/formatters';
import { Clock, Star, ArrowRight, GlassWater } from 'lucide-react';

export interface RecipeCardProps {
  recipe: MocktailRecipe;
  onSelect: (recipe: MocktailRecipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  return (
    <Card variant="interactive" padded={false} className="flex flex-col h-full group">
      {/* Recipe Image Banner */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        
        {/* Rating & Category Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <Badge variant="gold" icon={<Star className="w-3 h-3 fill-amber-400 text-amber-400" />}>
            {recipe.rating.toFixed(1)}
          </Badge>
          <Badge variant="dark">{recipe.category}</Badge>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-400 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
            {recipe.subtitle}
          </p>

          {/* Metadata Specs */}
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400/80" />
              <span>{formatPrepTime(recipe.prepTimeMinutes)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GlassWater className="w-3.5 h-3.5 text-amber-400/80" />
              <span>{recipe.glassType}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
            onClick={() => onSelect(recipe)}
          >
            View Recipe
          </Button>
        </div>
      </div>
    </Card>
  );
};