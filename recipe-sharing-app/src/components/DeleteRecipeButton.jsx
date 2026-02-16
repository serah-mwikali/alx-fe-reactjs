// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, navigate }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
