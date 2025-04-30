import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import { useParams } from "react-router-dom"

function Details() {
  const { id } = useParams();
  const { recipe, setRecipe, addToFavorite, favorites, setFavorites } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();
      if (data?.data) setRecipe(data?.data?.recipe);
    }
    getRecipe();
  }, [id]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-10 px-4 md:px-10 text-white">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8">{recipe?.title}</h1>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img src={recipe?.image_url} alt={recipe?.title} className="rounded-xl w-full md:w-1/2 shadow-lg" />
          <div className="flex-1 space-y-3 text-lg">
            <p><strong>Publisher:</strong> {recipe?.publisher}</p>
            <p><strong>Servings:</strong> {recipe?.servings}</p>
            <p><strong>Cooking Time:</strong> {recipe?.cooking_time} minutes</p>
            <button
              onClick={() => addToFavorite(recipe)}
              className="mt-4 px-6 py-2 bg-[#9ecd27] hover:bg-[#8bc620] text-black font-bold rounded-full transition duration-300 shadow-md"
            >
              {favorites.find(item => item.id === recipe?.id) ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2">
          {recipe?.ingredients.map((items, index) => (
            <li key={index}>
              {items?.quantity ? `${items.quantity} ` : ""}
              {items?.unit ? `${items.unit} ` : ""}
              {items?.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Details;
