import React from "react";
import { BsBookmarkHeart } from "react-icons/bs";

const Favorito = ({ ativado }) => {
  return (
    <BsBookmarkHeart
      size={"30px"}
      color={ativado ? " rgb(241, 148, 9)" : "white"}
    />
  );
};

export default Favorito;
