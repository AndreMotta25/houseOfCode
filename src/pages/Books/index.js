import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// toda vez que entrarmos nessa pagina, o componente  vai ser renderizado
const Books = () => {
  /**
   * Presta atencao nisso, caso a gente coloque null como o primeiro valor de book
   * quando a primeira renderizacao acontecesse teriamos um erro falando que
   * o valor null nao tem as propriedades que estamos acessando. Para contornarmos
   * isso teriamos que usar um ternario ou algo do tipo oque seria mais codigo
   * */
  const [book, setBook] = useState({});
  const params = useParams();

  useEffect(() => {
    /**não podemos colocar o useEffect como asincrono, mas isso nao quer dizer que
 nao podemos colocar funçoes assincronas nele*/
    async function pesquisar1() {
      const livro = await (
        await fetch(`http://localhost:3333/books?id=${params.livro}`)
      ).json();
      console.log(livro);
      setBook(livro[0]);
    }
    pesquisar1();
  }, [params.livro]);

  return (
    <>
      <div className="container-book">
        <div id="details-book-capa">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="book-information">
          <h1 className="title">{book.title}</h1>
          <h2 className="price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(book.price)}
          </h2>
          <p className="book-description">{book.description}</p>
          <div className="acoes-do-livro">
            <button className="btn">favoritos</button>
            <button className="btn">adicionar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
