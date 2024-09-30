// src/components/Header.jsx
import React, { useState } from 'react';
import '/home/etec/Documentos/uniondepo-pw/vite-project/src/header.css';
import searchIcon from '../assets/search.png';
import loginIcon from '../assets/login.png';
import Modal from './Modal';

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <h1>Zero Comics</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/comics">Comics</a></li>
        </ul>
      </nav>
      <div className="action-buttons">
        <img 
          src={searchIcon} 
          alt="Buscar" 
          className="icon" 
          onClick={() => setSearchOpen(true)} 
        />
        <img 
          src={loginIcon} 
          alt="Iniciar sesión" 
          className="icon" 
          onClick={() => setLoginOpen(true)} 
        />
        <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <Modal 
        isOpen={isSearchOpen} 
        onClose={() => setSearchOpen(false)} 
        type="search"
      />
      <Modal 
        isOpen={isLoginOpen} 
        onClose={() => setLoginOpen(false)} 
        type="login"
      />
    </header>
  );
};

export default Header;
