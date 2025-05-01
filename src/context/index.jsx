import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getItems } from '../utils/localStorage';
export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const items = getItems('favorites');
    return items || [];
  });
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true);
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
      const data = await response.json();
      if (data?.data?.recipes) {
        setList(data.data.recipes);
        setLoading(false);
        setSearch("");
        navigate('/');
      }
      console.log("data", data)
    } catch (error) {
      setLoading(false);
      setSearch("");
      console.log(error);
    }
  }

  function addToFavorite(item) {
    console.log(item);
    let copyList = [...favorites];
    const index = copyList.findIndex(list => list.id === item.id);
    if (index === -1) {
      copyList.push(item);
    } else {
      copyList.splice(index);
    };
    setFavorites(copyList);
  }

  console.log("fav:", favorites);
  return (
    <GlobalContext.Provider value={{ search, setSearch, handleSubmit, loading, list, recipe, setRecipe, addToFavorite, favorites, setFavorites }}>{children}</GlobalContext.Provider>
  )
}

export default GlobalState