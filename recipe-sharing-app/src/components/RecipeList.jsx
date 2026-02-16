// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes || state.recipes);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {filteredRecipes.map((recipe) => (
        <li
          key={recipe.id}
          style={{ marginBottom: "15px", border: "1px solid #ccc", padding: "10px" }}
        >
          <Link to={`/recipe/${recipe.id}`} style={{ fontWeight: "bold" }}>
            {recipe.title}
          </Link>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
