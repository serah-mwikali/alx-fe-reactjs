import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.getFilteredRecipes());

  if (!recipes.length) return <p>No recipes found.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {recipes.map(recipe => (
        <li
          key={recipe.id}
          style={{ marginBottom: "15px", border: "1px solid #ccc", padding: "10px" }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
