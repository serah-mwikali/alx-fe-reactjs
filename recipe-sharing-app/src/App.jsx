// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
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
        <button onClick={handleAdd}>Add Recipe</button>
      </div>

      <SearchBar />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
