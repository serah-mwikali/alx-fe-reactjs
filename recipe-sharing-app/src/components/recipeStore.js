// src/components/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  addRecipe: (title, description) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { id: Date.now(), title, description },
      ],
      filteredRecipes: state.recipes, 
    })),

  updateRecipe: (id, newTitle, newDescription) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, title: newTitle, description: newDescription } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter((r) =>
      r.title.toLowerCase().includes(term.toLowerCase())
    ),
  })),
}));

