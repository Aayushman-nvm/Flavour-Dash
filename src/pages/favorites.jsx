import { GlobalContext } from '../context'
import { useContext } from 'react'
import RecipeCard from '../components/RecipeCard'

function Favorites() {
  const { favorites, setFavorites } = useContext(GlobalContext);

  return (
    <div className="min-h-screen w-full bg-gradient-to-bl from-[#1a1a1a] via-[#2e2e2e] to-[#000000] py-10 px-4 md:px-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in-up">Favorites</h1>
      {
        favorites && favorites.length > 0 ?
          <div className="grid gap-6 md:grid-cols-3">
            {favorites.map((item) => (
              <RecipeCard items={item} key={item.id} />
            ))}
          </div>
          :
          <p className="text-center mt-10 text-lg animate-fade-in">Your favorites is empty... guess you haven’t found your favorite recipe yet.</p>
      }
    </div>
  );
}

export default Favorites;