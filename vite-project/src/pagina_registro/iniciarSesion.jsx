import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./inicioSesion.css";  // Asegúrate de tener este archivo CSS en el directorio adecuado.

const IniciarSesion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Verifica si el usuario ya está logueado en el localStorage
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setSuccess("Inicio de sesión exitoso.");
        localStorage.setItem("usuario", JSON.stringify(result.usuario));
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setError(result.error || "Error en el inicio de sesión.");
      }
    } catch (error) {
      setError("Error al conectar con el servidor.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setIsLoggedIn(false);
    setShowMenu(false);
    navigate("/iniciarSesion");
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div className="user-icon-container">
          {/* Muestra la inicial del usuario dentro de un ícono */}
          <div className="user-icon" onClick={() => setShowMenu(!showMenu)}>
            {formData.email.charAt(0).toUpperCase()}
          </div>
          {showMenu && (
            <div className="logout-menu">
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          )}
        </div>
      ) : (
        <div className="registro-container" style={{ marginTop: "80px" }}>
          <h1>Inicio Sesión</h1>
          <p>
            ¿No tienes cuenta? <Link to="/registro">Regístrate.</Link>
          </p>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="register-button">
              Iniciar Sesión
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default IniciarSesion;
