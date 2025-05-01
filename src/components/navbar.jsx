import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#121212] text-white py-4 px-6 shadow-md relative md:flex md:flex-col md:items-center">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-wider font-mono text-[#00ff99] animate-pulse">
          <NavLink to={'/'}>
            Flavour Dash
          </NavLink>
        </h2>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 md:mt-0 flex gap-2">
        <input
          type='text'
          name='search'
          placeholder='Search recipe'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-[500px] px-4 py-2 rounded-md text-black bg-green-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00ff99]"
        />
        <button
            type="submit"
            className="bg-green-500 hover:bg-green-300 text-white px-4 py-2 rounded-md font-semibold shadow-md"
          >
            Search
          </button>
      </form>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 mt-4 text-lg font-medium">
        <li>
          <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#00ff99]' : 'hover:text-[#00ff99]'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'} className={({ isActive }) => isActive ? 'text-[#00ff99]' : 'hover:text-[#00ff99]'}>
            Favourites
          </NavLink>
        </li>
      </ul>

      {/* Mobile Sidebar Nav */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1a1a1a] z-50 py-6 px-4 rounded-md animate-slide-in-down flex flex-col gap-4">
          <NavLink to={'/'} onClick={toggleMenu} className={({ isActive }) => isActive ? 'text-[#00ff99]' : 'hover:text-[#00ff99]'}>
            Home
          </NavLink>
          <NavLink to={'/favorites'} onClick={toggleMenu} className={({ isActive }) => isActive ? 'text-[#00ff99]' : 'hover:text-[#00ff99]'}>
            Favourites
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
