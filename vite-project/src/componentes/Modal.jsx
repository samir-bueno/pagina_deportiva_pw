import React, { useEffect, useRef, useState } from 'react';
import "/home/etec/Documentos/pagina_deportiva_pw/vite-project/src/Modal.css";

const suggestions = [
  "Fútbol",
  "Baloncesto",
  "Tenis",
  "Natación",
  "Ciclismo",
  "Voleibol"
];

const Modal = ({ isOpen, onClose, type }) => {
  const usernameRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen && type === 'login') {
      usernameRef.current.focus(); // Enfocar al campo de usuario al abrir el modal
    }
  }, [isOpen, type]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Filtrar sugerencias
    if (value) {
      const filtered = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setFilteredSuggestions([]);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validación simple
    if (username === '' || password === '') {
      setError('Por favor, completa ambos campos.');
      return;
    }

    // Aquí iría la lógica para autenticar al usuario (ejemplo con API)
    console.log('Iniciando sesión con', { username, password });
    
    // Simulación de inicio de sesión (esto debería ser reemplazado por una llamada real a la API)
    try {
      // Simulación de llamada a API
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'user' && password === 'password') {
            resolve('Inicio de sesión exitoso');
          } else {
            reject(new Error('Usuario o contraseña incorrectos.'));
          }
        }, 1000);
      });
      console.log(response);
      onClose(); // Cerrar modal si el inicio es exitoso
    } catch (error) {
      setError(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Cerrar modal">×</button>
        
        {type === 'search' && (
          <div>
            <h2 id="modal-title">Buscar</h2>
            <input
              type="text"
              placeholder="Escribe aquí..."
              className="search-input"
              value={searchTerm}
              onChange={handleChange}
              aria-label="Campo de búsqueda"
            />
            {filteredSuggestions.length > 0 && (
              <ul className="suggestions-list">
                {filteredSuggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            <button className="search-button" onClick={() => console.log('Buscando:', searchTerm)}>Buscar</button>
          </div>
        )}
        
        {type === 'login' && (
          <div>
            <h2 id="modal-title">Iniciar Sesión</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="username">Usuario</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Usuario"
                  className="login-input"
                  ref={usernameRef}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">Siguiente</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
