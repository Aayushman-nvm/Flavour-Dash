import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Navbar() {
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);

  return (
    <header className="bg-gradient-to-r from-lime-200 to-green-300 shadow-lg py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-extrabold text-[#1A3129] tracking-tight hover:scale-105 transition-transform">
          <NavLink to="/">Flavour Dash</NavLink>
        </h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            name="search"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl border-2 border-[#9ECD27] focus:outline-none focus:ring-2 focus:ring-[#BCDD67] transition-all w-40 md:w-64 text-sm md:text-base"
          />
          <button
            type="submit"
            className="bg-[#9ECD27] hover:bg-[#86c114] text-white px-4 py-2 rounded-xl font-semibold shadow-md"
          >
            Search
          </button>
        </form>
        <ul className="hidden md:flex gap-6 text-[#1A3129] font-semibold text-lg">
          <li className="hover:text-[#9ECD27] transition-colors">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-[#9ECD27] transition-colors">
            <NavLink to="/favorites">Favourites</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
