import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm, setSearchTerm } = useRecipeStore();

  // fallback to recipes if filteredRecipes is empty
  const listToShow = filteredRecipes || recipes;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {Array.isArray(listToShow) &&
        listToShow.map((recipe) => (
          <li
            key={recipe.id}
            style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}
          >
            {recipe.title}
          </li>
        ))}
    </ul>
  );
};

export default RecipeList;
