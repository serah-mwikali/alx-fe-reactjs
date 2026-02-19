import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data into state
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8">
        🍽️ Recipe Sharing Platform
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden 
                       hover:shadow-xl hover:scale-105 
                       transition duration-300"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {recipe.summary}
              </p>

              {/* Link to Detail Page */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;