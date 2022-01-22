import styled, { keyframes } from "styled-components";

const FadeAnimation = keyframes`
  to{
    opacity: ${({ visible }) => {
      return visible ? 1 : 0;
    }};

    visibility: ${({ visible }) => {
      return visible ? "visibility" : "hidden";
    }};
  }
`;

export const Notice = styled.div`
  top: 0;
  right: 0;
  font-size: 14px;
  font-weight: 500;
  max-width: 300px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  background-color: ${({ warning }) => {
    return warning ? "#f16e6e" : "#09f14f";
  }};
  opacity: 0;
  visibility: ${({ visible }) => {
    return visible ? "visibility" : "hidden";
  }};
  border: none;
  animation: ${FadeAnimation} 1s ease-in forwards;
`;
