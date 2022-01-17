import React from "react";
import { Link } from "react-router-dom";

const Book = ({ card }) => {
  return (
    <li id={card.id} className="livro">
      <div className="poster">
        <img src={card.image} alt={card.title} />
      </div>
      <div className="informacoes-book">
        <div className="informacoes">
          <span className="titulo info-item">{card.title}</span>
          <span className="preco info-item">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(card.price)}
          </span>
        </div>
        <div className="acoes">
          <button>Comprar</button>
          <button>
            <Link to={`/books/${card.id}`} className="link">
              Detalhes
            </Link>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Book;
