// src/components/RecipeDetails.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, deleteRecipe, updateRecipe } = useRecipeStore();
  const recipe = recipes.find(r => r.id === id);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  if (!recipe) return <p>Recipe not found.</p>;

  const handleUpdate = () => {
    updateRecipe(id, title, description);
    alert('Recipe updated!');
  };

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </div>
  );
};

export default RecipeDetails;
