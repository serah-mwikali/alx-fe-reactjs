// src/components/AddRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const { addRecipe } = useRecipeStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title || !description) return alert("Fill both fields!");
    addRecipe(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "200px" }}
      />
      <input
        type="text"
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "250px" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Add Recipe
      </button>
    </div>
  );
};

export default AddRecipeForm;
