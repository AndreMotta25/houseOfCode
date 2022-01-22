import React from "react";
import { Btn } from "./styles";

const Button = ({ children, ...otherProps }) => {
  return <Btn {...otherProps}>{children}</Btn>;
};

export default Button;
