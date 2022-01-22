import styled from "styled-components";
import { ContainerDefault } from "../../components/Container/styles";

// aqui estamos reutilizando os estilos de um outro componente
export const Container = styled(ContainerDefault)`
  @media screen and (max-width: 860px) {
    flex-direction: column;
    text-align: center;

    span {
      text-align: center;
    }
  }
`;

export const Poster = styled.div`
  flex: 0 1 400px;
  width: 100%;
  align-self: flex-start;
  @media screen and (max-width: 860px) {
    max-width: 400px;
    align-self: inherit;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  border-radius: 20px;
  height: 100%;
  object-fit: cover;
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 200px;
  line-height: 2rem;
  letter-spacing: 0.9px;
  -webkit-font-smoothing: antialiased;
  padding-top: 40px;
`;
export const ContainerAcoes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: rgb(241, 148, 9);
  font-weight: bold;
  line-height: 4rem;
`;

export const DescricaoLivro = styled.p``;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  cursor: pointer;
`;
