import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../../components/Book";
const Home = () => {
  // é aconselhavel sempre iniciar com um valor
  const [books, setBooks] = useState([]);
  console.log("Renderiza Home");
  useEffect(() => {
    /**não podemos colocar o useEffect como asincrono, mas isso nao quer dizer que
 nao podemos colocar funçoes assincronas nele*/
    async function pesquisar() {
      const livros = await (await fetch("http://localhost:3333/books")).json();
      console.log(livros);
      setBooks(livros);
    }

    pesquisar();
  }, []);
  return (
    <div className="container">
      <ul className="livros">
        {books.map((livro) => (
          <Book key={livro.id} card={livro}></Book>
        ))}
      </ul>
    </div>
  );
};

export default Home;
