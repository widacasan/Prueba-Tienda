import React from 'react';
import logo from '../../assets/Logo.jpg'
import  '../../Components/Header/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo de la Empresa"  />
      <h1 className='title'>Tienda de Computadoras</h1>
      <nav>
        <ul>
        <Link to="/">Inicio</Link>
        <li><Link to="/registro">Registro</Link></li>
        <Link to="/">Productos</Link>
          <Link to="/blog">Blog</Link>
          <li><a href="#acerca">Acerca de Nosotros</a></li>
          <Link to="/contacto">Contacto</Link>
          <Link to="/cart">Carrito</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;