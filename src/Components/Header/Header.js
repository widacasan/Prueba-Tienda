import React from 'react';
import logo from '../../assets/Logo.jpg'
import  '../../Components/Header/Header.css'
const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo de la Empresa"  />
      <h1 className='title'>Tienda de Computadoras</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#acerca">Acerca de Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;