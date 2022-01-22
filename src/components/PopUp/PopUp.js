import React from "react";
import { Notice } from "./styles";

const PopUp = ({ notice, warning, visible }) => {
  return (
    <Notice warning={warning} visible={visible}>
      {notice}
    </Notice>
  );
};

export default PopUp;
