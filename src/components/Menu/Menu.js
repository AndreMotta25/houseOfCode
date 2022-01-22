import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import img from "../../assets/logo_white.png";
import {
  Cabecalho,
  Navegacao,
  ListaDeNavegacao,
  Logo,
  MenuItem,
  ItensQuatity,
} from "./styles";
import { FavoriteContext } from "../../contexts/Favorito/Favorito";
import { CartContext } from "../../contexts/Cart/Cart";
const Menu = () => {
  const { favoritos } = useContext(FavoriteContext);
  const { cart } = useContext(CartContext);
  return (
    <Cabecalho>
      <Navegacao>
        <Logo src={img} alt="logo" />
        <ListaDeNavegacao>
          <MenuItem>
            <Link to="/">
              <AiOutlineHome size={`25px`} color="rgb(241, 148, 9)" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <ItensQuatity>{cart.length}</ItensQuatity>
              <RiShoppingCartLine size={"25px"} color="rgb(241, 148, 9)" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/favoritos">
              <ItensQuatity>{favoritos.length}</ItensQuatity>
              <FiHeart size={`20px`} color="red" />
            </Link>
          </MenuItem>
        </ListaDeNavegacao>
      </Navegacao>
    </Cabecalho>
  );
};

export default Menu;
