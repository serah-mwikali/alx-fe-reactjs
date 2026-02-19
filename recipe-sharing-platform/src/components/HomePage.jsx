import { useState, useEffect } from "react";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Recipe Sharing Platform 🍲
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <h2 className="text-lg font-semibold mb-2">
              {recipe.title}
            </h2>

            <p className="text-gray-600 text-sm">
              {recipe.summary}
            </p>

            <button className="mt-3 text-blue-500 hover:text-blue-700 text-sm">
              View Recipe →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;