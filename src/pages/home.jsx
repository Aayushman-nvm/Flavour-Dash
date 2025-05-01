import { GlobalContext } from '../context';
import React, { useContext } from 'react';
import RecipeCard from '../components/RecipeCard';

function Home() {
  const { list, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <p className="text-xl font-semibold animate-pulse text-[#7bd8b7]">Loading...</p>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen w-full animate-fade-in p-6 sm:p-10">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-[#88f0cc] mb-10 text-center tracking-tight drop-shadow-md">
        Explore Recipes
      </h1>

      {list && list.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item) => (
            <RecipeCard items={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="text-center text-[#333] font-medium text-lg mt-20">
          <p className="bg-white bg-opacity-70 rounded-xl px-4 py-6 shadow-md inline-block">
            Oops!! No recipes found. Try searching something else 🧐
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
