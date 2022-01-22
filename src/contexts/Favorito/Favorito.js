import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext([]);

// um conselho, quando tiver que usar contexto, implemente o primeiro, só depois crie as outras partes que tem
//  algo haver com o contexto
export function FavProvider({ children }) {
  const [favorites, setFavoritos] = useState([]);
  function insertFav(item) {
    const existe = favorites.filter((elem) => elem.title === item.title);
    if (existe.length > 0) {
      removeFav(item);
    } else {
      setFavoritos([...favorites, item]);
      localStorage.setItem("Favoritos", JSON.stringify([...favorites, item]));
    }
  }

  function removeFav(item) {
    const fav = favorites.filter((elem) => {
      if (elem.title === item.title) {
        return false;
      } else {
        return true;
      }
    });
    setFavoritos(fav);
    localStorage.setItem("Favoritos", JSON.stringify([...fav]));
  }

  //   vai fazer a busca no localStorage, logo só tem que rodar uma unica vez quando a aplicação inicia
  useEffect(() => {
    /**
     * caso não tenha nada no localStorage, teremos o retorno undefined, por isso o or esta aqui, assim
     * se a primeira condição for vdd, teremos o retorno do localStorage, caso nao teremos um array vazio,
     * um array vazio, pelo jeito é considerado verdadeiro
     * */
    setFavoritos(JSON.parse(localStorage.getItem("Favoritos")) || []);
    console.log(favorites);
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        favoritos: favorites,
        insertFavorite: insertFav,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
