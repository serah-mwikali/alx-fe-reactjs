import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (r) => r.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Recipe Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">
        
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          {recipe.title}
        </h1>

        {/* Summary */}
        <p className="text-gray-600 mb-4">
          {recipe.summary}
        </p>

        {/* Ingredients */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Ingredients
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Instructions
          </h3>
          <p className="text-gray-700">
            {recipe.instructions}
          </p>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          ← Back to Recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;