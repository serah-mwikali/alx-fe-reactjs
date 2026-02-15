// src/components/EditRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleUpdate = () => {
    if (!title || !description) return alert("Fill both fields!");
    updateRecipe(recipe.id, title, description);
    alert("Recipe updated!");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "6px", marginRight: "10px", width: "200px" }}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "6px", marginRight: "10px", width: "250px" }}
      />
      <button onClick={handleUpdate} style={{ padding: "6px 12px", cursor: "pointer" }}>
        Update Recipe
      </button>
    </div>
  );
};

export default EditRecipeForm;
