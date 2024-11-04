import React, { useState, useEffect } from "react";
import "../header.css";
import searchIcon from "../assets/buscar.png";
import addIcon from "../assets/add.png"
import loginIcon from "../assets/nueva-cuenta.png";
import Modal from "./Modal";
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Llama a la función onSearch pasada como prop
  };

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
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="#productos">Productos</Link></li>
          <li><Link to="#contacto">Contacto</Link></li>
        </ul>
      </nav>

      <div className="action-buttons">
       <img
         src={searchIcon}
         alt="Buscar"
         className="icon"
         onClick={() => setSearchOpen(true)}
       />
       <Link to="/registro">
         <img src={loginIcon} alt="Iniciar sesión" className="icon" onClick={() => setLoginOpen(true)} />
       </Link>
       {/* Botón para agregar productos */}
       <Link to="/agregar-producto">
           <img src={addIcon} alt="Agregar" className="icon" />
       </Link>
     </div>


      
      {/* Campo de búsqueda en el header */}
      {isSearchOpen && (
        <div className="search-modal">
          <input
            type="text"
            placeholder="Boca, River..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={() => setSearchOpen(false)}>Buscar</button>
        </div>
      )}

      {/* Modal para inicio de sesión */}
      <Modal 
        isOpen={isLoginOpen} 
        onClose={() => setLoginOpen(false)} 
        type="login" 
        onLogin={() => console.log("Inicio de sesión exitoso")} 
      />
    </header>
  );
};

export default Header;
