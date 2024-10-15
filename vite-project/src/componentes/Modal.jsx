import React, { useEffect, useRef, useState } from "react";
import "../Modal.css"; // Asegúrate de tener este archivo
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose, type, onLogin }) => {
  const usernameRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen && type === "login") {
      usernameRef.current.focus(); // Enfocar al campo de usuario al abrir el modal
    }
  }, [isOpen, type]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Validación simple
    if (username === "" || password === "") {
      setError("Por favor, completa ambos campos.");
      return;
    }

    // Aquí deberías reemplazar esta lógica con una llamada real a la API
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulación de un inicio de sesión exitoso
          if (username === "user" && password === "password") {
            resolve("Inicio de sesión exitoso");
          } else {
            reject(new Error("Usuario o contraseña incorrectos."));
          }
        }, 1000);
      });
      console.log(response);
      onLogin({ username }); // Pasa el usuario a la función onLogin
      onClose(); // Cerrar modal si el inicio es exitoso
    } catch (error) {
      setError(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>

        {type === "login" && (
          <div>
            <h2 id="modal-title">Iniciar Sesión</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
              <button type="submit" className="login-button">
                Iniciar Sesión
              </button>
            </form>
            <p
              style={{ marginTop: "10px", textAlign: "center", color: "grey" }}
            >
              ¿No tienes cuenta? <Link to="/registro">Regístrate.</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
