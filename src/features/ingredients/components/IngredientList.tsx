import React from 'react';
import type { Ingredient } from '../types/ingredient';
import { Badge } from '../../../components/atoms/Badge';
import { formatIngredientAmount } from '../../../utils/formatters';
import { CheckCircle2 } from 'lucide-react';

export interface IngredientListProps {
  ingredients: Ingredient[];
}

export const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  return (
    <div className="w-full bg-zinc-900/60 rounded-xl border border-zinc-800 p-5 backdrop-blur-sm">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-4 flex items-center justify-between">
        <span>Required Ingredients ({ingredients.length})</span>
        <Badge variant="emerald" icon={<CheckCircle2 className="w-3 h-3" />}>
          Halal Verified
        </Badge>
      </h3>
      <ul className="divide-y divide-zinc-800/60">
        {ingredients.map((item) => (
          <li key={item.id} className="py-3 flex items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span className="text-zinc-200 font-medium">{item.name}</span>
              {item.notes && (
                <span className="text-xs text-zinc-500 hidden sm:inline">({item.notes})</span>
              )}
            </div>
            <span className="text-amber-400 font-mono text-xs font-semibold bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/20">
              {formatIngredientAmount(item.amount, item.unit)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};