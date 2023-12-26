import React from "react";
import logo from "../../assets/Logo.jpg";
import "../../Components/Header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo de la Empresa" />
      <h1 className="title">Tienda de Computadoras</h1>
      <nav>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/registro">Registro</Link>
          <Link to="/">Productos</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about-us">Acerca de nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/cart">Carrito</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
