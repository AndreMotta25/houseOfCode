import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiFillCaretUp } from "react-icons/ai";
import Favorito from "../../components/Favorito/Favorito";
import PrecoItem from "../../components/Preco/Preco";
import Button from "../../components/Button/Button";
import { FavoriteContext } from "../../contexts/Favorito/Favorito";
import { AiOutlineDelete } from "react-icons/ai";
import {
  Container,
  Poster,
  PosterImage,
  Informacoes,
  ContainerAcoes,
  Title,
  DescricaoLivro,
  Btn,
} from "./styles";
import PopUp from "../../components/PopUp/PopUp";
import { CartContext } from "../../contexts/Cart/Cart";
// toda vez que entrarmos nessa pagina, o componente  vai ser renderizado(é uma rota)
const Books = () => {
  /**
   * Presta atencao nisso, caso a gente coloque null como o primeiro valor de book
   * quando a primeira renderizacao acontecesse teriamos um erro falando que
   * o valor null nao tem as propriedades que estamos acessando. Para contornarmos
   * isso teriamos que usar um ternario ou algo do tipo oque seria mais codigo
   * */
  const [book, setBook] = useState({});
  const [totCaracter, setTotCaracter] = useState(200);
  const params = useParams();
  const [ativo, setAtivo] = useState(false);
  const { favoritos, insertFavorite } = useContext(FavoriteContext);
  const { cart, insertCarrinho } = useContext(CartContext);
  const [fav, setFav] = useState(false);
  const [cartExists, setCartExists] = useState(false);
  // verifica se o livro é favorito
  useEffect(() => {
    const existeFavoritos = favoritos.filter(
      (elem) => elem.title === book.title
    );
    existeFavoritos.length > 0 ? setFav(true) : setFav(false);
    const existeCarrinho = cart.filter((elem) => elem.title === book.title);
    existeCarrinho.length > 0 ? setCartExists(true) : setCartExists(false);
  }, [favoritos, book, cart]);

  // faz requisição a api
  useEffect(() => {
    /**não podemos colocar o useEffect como asincrono, mas isso nao quer dizer que
 nao podemos colocar funçoes assincronas nele*/
    async function pesquisar() {
      const livro = await (
        await fetch(`http://localhost:3333/books?id=${params.livro}`)
      ).json();
      setBook(livro[0]);
    }
    pesquisar();
  }, [params.livro]);

  return (
    <>
      <Container>
        <Poster>
          <PosterImage src={book.image} alt={book.title} />
        </Poster>
        <Informacoes>
          <Title>{book.title}</Title>
          {/* depois colocar isso dentro do componente */}
          <PrecoItem size={"2rem"} align={"left"}>
            {book.price}
          </PrecoItem>
          <DescricaoLivro>
            {book.description && book.description.substr(0, totCaracter)}
            {book.description && totCaracter < book.description.length ? (
              <Btn
                onClick={() => {
                  setTotCaracter(book.description.length);
                }}
              >
                ...
              </Btn>
            ) : (
              <Btn
                onClick={() => {
                  setTotCaracter(200);
                }}
              >
                <AiFillCaretUp size={"13px"} />
              </Btn>
            )}
          </DescricaoLivro>
          <ContainerAcoes>
            <Button
              onClick={() => {
                insertFavorite(book);
              }}
            >
              <Favorito ativado={fav} />
            </Button>
            {/* pelo jeito o onClick vai ficar como uma prop, usei o operador rest para passar o evento 
               ({ children, ...otherProps })
            */}
            <Button
              onClick={() => {
                insertCarrinho(book);
              }}
            >
              {/* {ativo && (
                <PopUp
                  notice="voce adicionou um produto no carrinho"
                  visible={ativo}
                />
              )} */}

              {(cartExists && (
                <AiOutlineDelete size={`30px`} color=" rgb(241, 148, 9)" />
              )) || <MdOutlineAddShoppingCart size={"30px"} />}
            </Button>
          </ContainerAcoes>
        </Informacoes>
      </Container>
    </>
  );
};

export default Books;
