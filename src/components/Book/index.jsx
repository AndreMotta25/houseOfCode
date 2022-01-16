import React from "react";
import { Link } from "react-router-dom";

const Book = ({ id, title, img, price }) => {
  return (
    <li id={id} className="livro">
      <div className="poster">
        <img src={img} />
      </div>
      <div className="informacoes">
        <span className="titulo info-item">{title}</span>
        <span className="preco info-item">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
      </div>
      <div className="acoes">
        <button>Comprar</button>
        <button>
          <Link to={`/books/${title}`} className="link">
            Detalhes
          </Link>
        </button>
      </div>
    </li>
  );
};

export default Book;
