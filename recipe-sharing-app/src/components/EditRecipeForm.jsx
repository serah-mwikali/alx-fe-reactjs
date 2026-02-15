// src/components/EditRecipeForm.jsx
import React, { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleUpdate = () => {
    updateRecipe(recipe.id, { title, description });
    alert("Recipe updated!");
  };

  return (
    <div>
      <h3>Edit Recipe</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditRecipeForm;
