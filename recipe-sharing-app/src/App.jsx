import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const App = () => {
  const { recipes, addRecipe } = useRecipeStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title || !description) return alert("Fill both fields!");
    addRecipe(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Recipe Sharing App</h1>

      {/* Form to add recipe */}
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
        <button
          onClick={handleAdd}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Add Recipe
        </button>
      </div>

      {/* List of recipes */}
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
    </div>
  );
};

export default App;
