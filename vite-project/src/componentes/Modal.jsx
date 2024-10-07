// src/components/Modal.jsx
import React from 'react';
import "/home/etec/Documentos/uniondepo-pw/vite-project/src/Modal.css"

const Modal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        {type === 'search' && (
          <div>
            <h2>Buscar</h2>
            <input type="text" placeholder="Escribe aquí..." className="search-input" />
          </div>
        )}
        {type === 'login' && (
          <div>
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Usuario" className="login-input" />
            <input type="password" placeholder="Contraseña" className="login-input" />
            <button className="login-button">Entrar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
