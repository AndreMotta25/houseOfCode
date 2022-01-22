import styled from "styled-components";

export const Preco = styled.span`
  font-weight: bold;
  letter-spacing: 2px;
  text-align: ${({ align }) => align};
  display: block;
  margin: 10px 0px;
  font-size: ${({ size }) => size};
`;
