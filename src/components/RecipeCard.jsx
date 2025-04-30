import { Link } from "react-router-dom"

function RecipeCard({ items }) {
    return (
        <div className="relative bg-gradient-to-br from-white/70 to-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
                <img
                    src={items?.image_url}
                    alt="recipe image"
                    className="w-full h-48 object-cover rounded-xl hover:scale-110 transition-transform duration-500"
                />
            </div>
            <span className="text-gray-500 text-sm mt-2 block italic">{items?.publisher}</span>
            <p className="text-lg font-semibold text-gray-800 hover:text-[#9ECD27] mt-1 transition-colors duration-200">
                {items?.title}
            </p>
            <Link
                to={`/details/${items?.id}`}
                className="inline-block mt-3 px-4 py-2 bg-[#9ECD27] hover:bg-[#86bb23] text-white text-sm rounded-lg shadow-md transition duration-300"
            >
                View Details
            </Link>
        </div>
    )
}

export default RecipeCard
