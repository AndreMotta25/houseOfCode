import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { FavProvider } from "./contexts/Favorito/Favorito";
import Favoritos from "./pages/Favoritos/Favoritos";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./contexts/Cart/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <FavProvider>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:livro" element={<Books />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer></Footer>
        </FavProvider>
      </CartProvider>
    </>
  );
}

export default App;
