import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header className=" container-header">
      <nav className="container navigation">
        <span>tescadasd</span>
        <ul className="navigation-menu">
          <li className="menu-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/" className="link">
              Carrinho
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/" className="link">
              Favoritos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
