import React from "react";
import { BiHappyAlt } from "react-icons/bi";
const Modal = ({ setAtivo }) => {
  const container = React.useRef(null);
  return (
    <div className="modalPopUp ativo" id="modalContainer" ref={container}>
      <div className="modal">
        <BiHappyAlt size={"3em"} color="rgb(24, 62, 230)" />
        <p>Voce acabou de adicionar um produto no carrinho</p>
        <button
          onClick={() => {
            console.log("dasda");
            container.current.classList.remove("ativo");
            setAtivo(null);
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
