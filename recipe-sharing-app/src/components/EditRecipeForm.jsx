// src/components/EditRecipeForm.jsx
import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [editing, setEditing] = useState(false);

  const handleSubmit = () => {
    updateRecipe(recipe.id, title, description);
    setEditing(false);
  };

  if (!editing) {
    return <button onClick={() => setEditing(true)}>Edit</button>;
  }

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </div>
  );
};

export default EditRecipeForm;
