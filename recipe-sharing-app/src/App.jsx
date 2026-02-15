// src/App.jsx
import React, { useState } from "react";
import { useRecipeStore } from "./components/recipeStore";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

const App = () => {
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
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Recipe Sharing App</h1>

      {/* Add recipe form */}
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

      {/* Search */}
      <SearchBar />

      {/* Recipe List */}
      <RecipeList />
    </div>
  );
};

export default App;
