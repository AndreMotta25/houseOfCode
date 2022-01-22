import styled from "styled-components";
import { ContainerDefault } from "../Container/styles";

export const Cabecalho = styled.header`
  padding: 10px;
  background-color: rgb(24, 62, 230);
  font-size: 18px;
  margin-bottom: 66px;
`;
export const Navegacao = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  width: 90%;
`;

export const ListaDeNavegacao = styled.ul`
  display: flex;
  justify-content: right;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const Logo = styled.img``;

export const MenuItem = styled.li`
  padding: 10px;
  a {
    color: white;
    display: flex;
    align-items: center;
    justify-items: center;
  }
`;

export const ItensQuatity = styled.span``;
