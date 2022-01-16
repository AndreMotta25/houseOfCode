import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import { Book } from "../../components/Book";

// toda vez que entrarmos nessa pagina, o componente  vai ser renderizado
const Books = () => {
  const [book, setBook] = useState([]);
  const params = useParams();

  useEffect(() => {
    /**não podemos colocar o useEffect como asincrono, mas isso nao quer dizer que
 nao podemos colocar funçoes assincronas nele*/
    async function pesquisar1() {
      const livro = await (
        await fetch(`http://localhost:3333/books?title=${params.livro}`)
      ).json();
      console.log("sdasdas");
      console.log(livro);
      // setBook(book);
    }

    pesquisar1();
  }, []);
  return (
    <div>
      <Link to="/">home</Link>
    </div>
  );
};

export default Books;
