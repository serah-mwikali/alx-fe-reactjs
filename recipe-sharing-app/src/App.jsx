import { Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1>Recipe Sharing App</h1>
            <AddRecipeForm />
            <RecipeList />
          </div>
        }
      />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
};

export default App;
