import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Fill both fields!");
    updateRecipe(recipe.id, title, description);
    onClose(); // Close the edit form after updating
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "6px", marginRight: "6px" }}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "6px", marginRight: "6px" }}
      />
      <button type="submit" style={{ padding: "6px 12px", cursor: "pointer" }}>
        Save
      </button>
      <button type="button" onClick={onClose} style={{ padding: "6px 12px" }}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
