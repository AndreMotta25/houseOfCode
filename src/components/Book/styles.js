import styled from "styled-components";

export const Container = styled.li`
  max-width: 210px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid rgb(165, 165, 246);
  flex-direction: column;
  border-radius: 20px;
  a {
    color: white;
    width: 100%;
    display: block;
  }
`;
export const Poster = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid rgb(165, 165, 246);
  display: block;
`;

export const Title = styled.h2`
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  display: block;
`;

export const Informacoes = styled.div`
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  padding: 5px;
`;

export const Acoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
`;
