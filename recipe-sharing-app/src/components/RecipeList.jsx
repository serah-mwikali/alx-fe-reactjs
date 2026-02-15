// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const { recipes } = useRecipeStore();

  if (recipes.length === 0) return <p>No recipes yet!</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          style={{
            marginBottom: "15px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
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
