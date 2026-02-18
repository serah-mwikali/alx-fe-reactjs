// src/components/FavoritesList.jsx
import React, { useMemo } from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore();

  // Get favorite recipe objects
  const favoriteRecipes = useMemo(
    () => favorites.map(id => recipes.find(r => r.id === id)).filter(Boolean),
    [favorites, recipes]
  );

  if (!favoriteRecipes.length) return <p>No favorites yet.</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
