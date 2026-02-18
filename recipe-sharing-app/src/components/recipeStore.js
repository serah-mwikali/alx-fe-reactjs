// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (title, description) =>
    set(state => ({
      recipes: [...state.recipes, { id: Date.now(), title, description }],
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  addFavorite: (id) =>
    set(state => ({
      favorites: [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set(state => ({
      favorites: state.favorites.filter(fid => fid !== id),
    })),

  // derived state: filtered recipes
  getFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      r => favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));





