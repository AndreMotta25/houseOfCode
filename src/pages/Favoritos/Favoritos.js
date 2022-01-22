import React from "react";
import Container from "../../components/Container/Container";
import { useContext } from "react";
import { FavoriteContext } from "../../contexts/Favorito/Favorito";

import Table from "../../components/Table/Table";

const Favoritos = () => {
  const { favoritos, insertFavorite } = useContext(FavoriteContext);
  return (
    <Container>
      <Table contexto={favoritos} remove={insertFavorite}></Table>
    </Container>
  );
};

export default Favoritos;
