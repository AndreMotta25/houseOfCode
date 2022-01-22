import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  /**
   * Para gerar uma melhor experencia para o usuario, eu so vou disponibilizar uma unica funcao
   * que tanto acrescenta quanto tira um item do carrinho, assim ao primeiro evento de click no botao de
   * carrinho, o livro sera adicionado ao carrinho, ja ao dar um outro click o mesmo sera removido
   * */
  function insertCart(item) {
    if (carrinho.find((elem) => elem.title === item.title)) {
      removeCart(item);
    } else {
      let cart = [...carrinho, item];
      setCarrinho([...carrinho, item]);
      localStorage.setItem(`Cart`, JSON.stringify(cart));
      alert("Produto adicionado ao carrinho");
    }
  }
  function removeCart(item) {
    const itens = carrinho.filter((elem) => {
      if (elem.title === item.title) {
        return false;
      } else {
        return true;
      }
    });
    setCarrinho(itens);
    localStorage.setItem(`Cart`, JSON.stringify(itens));
  }
  // so precisa verificar uma unica vez, que sera quando reiciarmos a pagina
  useEffect(() => {
    setCarrinho(JSON.parse(localStorage.getItem(`Cart`)) || []);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: carrinho,
        insertCarrinho: insertCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
