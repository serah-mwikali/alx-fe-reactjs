import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
    }
  };

  return (
    <button onClick={handleDelete} style={{ padding: "6px 12px", cursor: "pointer" }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
