import React from "react";
import { Tabela, Cabecalho, Linha, LinhaItem, Poster, Corpo } from "./styles";
import PrecoItem from "../../components/Preco/Preco";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../../components/Button/Button";
const Table = ({ contexto, remove }) => {
  return (
    <Tabela>
      <Cabecalho>
        <Linha>
          <LinhaItem>Foto</LinhaItem>
          <LinhaItem>Nome</LinhaItem>
          <LinhaItem>Preço</LinhaItem>
          <LinhaItem>Deletar</LinhaItem>
        </Linha>
      </Cabecalho>
      <Corpo>
        {contexto.map((item) => (
          <Linha>
            <LinhaItem>
              <Poster src={item.image}></Poster>
            </LinhaItem>
            <LinhaItem>{item.title}</LinhaItem>
            <LinhaItem>
              <PrecoItem size={"16px"}>{item.price}</PrecoItem>
            </LinhaItem>
            <LinhaItem>
              <Button onClick={() => remove(item)}>
                <AiOutlineDelete size={"25px"}></AiOutlineDelete>
              </Button>
            </LinhaItem>
          </Linha>
        ))}
      </Corpo>
    </Tabela>
  );
};

export default Table;
