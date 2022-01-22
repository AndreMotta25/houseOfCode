import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import Table from "../../components/Table/Table";
import { CartContext } from "../../contexts/Cart/Cart";

const Cart = () => {
  const { cart, insertCarrinho } = useContext(CartContext);
  console.log(cart);
  return (
    <Container>
      <Table contexto={cart} remove={insertCarrinho}></Table>
    </Container>
  );
};

export default Cart;
