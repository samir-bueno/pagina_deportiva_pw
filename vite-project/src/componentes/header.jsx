// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import "/home/etec/Documentos/uniondepo-pw/vite-project/src/header.css";
import searchIcon from "../assets/webos.webp";
import loginIcon from "../assets/pid.jpg";
import Modal from "./Modal";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Scroll hacia abajo
      } else {
        setVisible(true); // Scroll hacia arriba
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      <div className="logo">
        <h1>Uniondepo</h1>
      </div>
      
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/Products">Productos</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
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
