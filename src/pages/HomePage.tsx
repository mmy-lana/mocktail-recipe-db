import React, { useState } from 'react';
import { RootLayout } from '../layouts/RootLayout';
import { SearchBar } from '../components/molecules/SearchBar';
import { RecipeGrid } from '../features/recipes/components/RecipeGrid';
import { useRecipes } from '../features/recipes/hooks/useRecipes';
import { useDebounce } from '../hooks/useDebounce';
import type { MocktailRecipe, CategoryType } from '../features/recipes/types/recipe';
import { RecipeDetailPage } from './RecipeDetailPage';
import { Sparkles, GlassWater } from 'lucide-react';

const CATEGORIES: CategoryType[] = [
  'All',
  'Signature',
  'Sparkling',
  'Herbal & Botanical',
  'Smoked & Spiced',
];

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [selectedRecipe, setSelectedRecipe] = useState<MocktailRecipe | null>(null);

  const debouncedSearch = useDebounce(searchTerm, 300);
  const { recipes, isLoading } = useRecipes(debouncedSearch, activeCategory);

  return (
    <RootLayout
      activeCategory={activeCategory}
      onSelectCategory={(cat) => setActiveCategory(cat as CategoryType)}
      categories={CATEGORIES}
    >
      {/* Hero Showcase Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-amber-500/30 p-8 sm:p-12 mb-10 overflow-hidden shadow-2xl shadow-amber-950/20">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            100% Halal Artisanal Lounge
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
            Elevated Zero-Proof <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Mixology Database
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-serif">
            Discover bespoke non-alcoholic recipes crafted with pure cold-extracted botanicals, rich spice infusions, and zero alcohol compromise.
          </p>

          {/* Search Input */}
          <div className="mt-6 max-w-xl">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        </div>
      </div>

      {/* Grid Header Counter */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
          <GlassWater className="w-5 h-5 text-amber-400" />
          <span>{activeCategory === 'All' ? 'All Artisanal Recipes' : `${activeCategory} Collection`}</span>
        </h2>
        <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
          Showing {recipes.length} recipes
        </span>
      </div>

      {/* Recipe Grid */}
      <RecipeGrid
        recipes={recipes}
        isLoading={isLoading}
        onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
      />

      {/* Modal Detail Overlay */}
      {selectedRecipe && (
        <RecipeDetailPage
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </RootLayout>
  );
};