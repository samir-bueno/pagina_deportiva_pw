import React, { useState, useEffect } from "react";
import "./Registro.css"; // Asegúrate de tener este archivo
import { Link } from 'react-router-dom';

const IniciarSesion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Cargar los datos del usuario desde localStorage
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioGuardado) {
      setFormData({ email: usuarioGuardado.email, password: usuarioGuardado.password });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validaciones simples
    if (!formData.email || !formData.password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Aquí iría la lógica de autenticación (ejemplo con API)
    console.log("Iniciando sesión con:", formData);
    setSuccess("Ya iniciaste sesión.");

    // Reiniciar el formulario
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="registro-container" style={{marginTop: "80px"}}>
      <h1>Inicio Sesion</h1>
      <p>
        ¿No tienes cuenta? <Link to="/registro">Registrate.</Link>
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
  );
};

export default IniciarSesion;
