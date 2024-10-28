import React, { useState, useEffect } from "react" ;
import "../header.css";
import searchIcon from "../assets/buscar.png";
import loginIcon from "../assets/nueva-cuenta.png";
import Modal from "./Modal";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false); // Scroll hacia abajo
    } else {
      setVisible(true); // Scroll hacia arriba
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="logo">
        <h1>Uniondepo</h1>
      </div>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <div className="action-buttons">
        <img src={searchIcon} alt="Buscar" className="icon" onClick={() => setSearchOpen(true)} />
        <Link to="/registro">
            <img src={loginIcon} alt="Iniciar sesión" className="icon" onClick={() => setLoginOpen(true)} />
            
        </Link>
        
      </div>

      <Modal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} type="search" />

    </header>
  );
};

export default Header;
