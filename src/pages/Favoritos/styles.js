import styled from "styled-components";

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Linha = styled.tr`
  font-size: 16px;
  border-bottom: 1px solid black;
  border-radius: 5px;
`;

export const LinhaItem = styled.td`
  padding: 10px;
  color: black;
  text-align: center;
  border-left: 1px solid white;
  vertical-align: middle;
  button {
    width: 40%;
  }
`;

export const Cabecalho = styled.thead`
  td {
    border-radius: 5px;
    border-left: 1px solid white;
    font-size: 18px;
    color: white;
  }
  tr {
    border-bottom: none !important;
    margin-bottom: 10px;
    background-color: rgb(0, 102, 255);
    /* display: inline-block; */
  }
`;
export const Corpo = styled.tbody``;

export const Poster = styled.img`
  height: 100px;
`;
