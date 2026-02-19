import { useParams } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipesData.find(
    (r) => r.id === parseInt(id)
  );

  if (!recipe) {
    return <h1 className="text-center mt-10">Recipe not found 😢</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />

        <h1 className="text-2xl font-bold mb-4">
          {recipe.title}
        </h1>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700">
            {recipe.instructions}
          </p>
        </div>

      </div>
    </div>
  );
}

export default RecipeDetail;