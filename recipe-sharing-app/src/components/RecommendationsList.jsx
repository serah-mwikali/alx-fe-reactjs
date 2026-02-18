// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, []);

  if (!recommendations.length) return <p>No recommendations yet.</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recommended for You</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
