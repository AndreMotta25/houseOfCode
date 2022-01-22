import React from "react";
import { Preco } from "./styles";

const PrecoItem = ({ size, align = "center", children }) => {
  return (
    <Preco size={size} align={align}>
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(children)}
    </Preco>
  );
};

export default PrecoItem;
