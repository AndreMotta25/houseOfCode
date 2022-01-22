import React from "react";
import { Link } from "react-router-dom";
import { Container, Poster, Title, Informacoes, Acoes } from "./styles";
import Button from "../Button/Button";
import PrecoItem from "../Preco/Preco";

const Book = ({ card }) => {
  return (
    <Container id={card.id}>
      <Poster src={card.image} alt={card.title} />
      <Informacoes>
        <div className="informacoes">
          <Title>{card.title}</Title>
          <PrecoItem size={"18px"}>{card.price}</PrecoItem>
        </div>
        <Acoes>
          <Button>Comprar</Button>
          <Button>
            <Link to={`/books/${card.id}`}>Detalhes</Link>
          </Button>
        </Acoes>
      </Informacoes>
    </Container>
  );
};

export default Book;
