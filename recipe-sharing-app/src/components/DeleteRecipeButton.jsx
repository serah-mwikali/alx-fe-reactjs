// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ padding: "6px 12px", marginTop: "10px", cursor: "pointer", background: "red", color: "white" }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
