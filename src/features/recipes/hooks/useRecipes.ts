import { useState, useEffect, useMemo } from 'react';
import type { MocktailRecipe, CategoryType } from '../types/recipe';
import { fetchMocktailRecipes } from '../api/fetchRecipes';

export function useRecipes(searchTerm: string = '', activeCategory: CategoryType = 'All') {
  const [recipes, setRecipes] = useState<MocktailRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchMocktailRecipes()
      .then((data) => {
        if (isMounted) {
          setRecipes(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Failed to load recipes');
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesCategory =
        activeCategory === 'All' || recipe.category === activeCategory;

      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        recipe.title.toLowerCase().includes(query) ||
        recipe.subtitle.toLowerCase().includes(query) ||
        recipe.flavorProfile.some((f) => f.toLowerCase().includes(query)) ||
        recipe.ingredients.some((i) => i.name.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [recipes, activeCategory, searchTerm]);

  return {
    recipes: filteredRecipes,
    totalCount: recipes.length,
    isLoading,
    error,
  };
}