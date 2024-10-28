import React, { useState } from "react";
import "./Registro.css"; // Asegúrate de tener este archivo
import { Link } from 'react-router-dom';

const IniciarSesion = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validaciones simples
    if (
      !formData.email ||
      !formData.password
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Aquí iría la lógica para registrar al usuario (ejemplo con API)
    console.log("Registrando usuario:", formData);
    setSuccess("Ya iniciaste.");

    // Llama a la función onRegister para pasar los datos
    onRegister({ nombre: formData.nombre, email: formData.email });

    // Reiniciar el formulario
    setFormData({ email: "", password: ""});
  };

  return (
    <div className="registro-container" style={{marginTop: "80px"}}>
      <h1>Inicio Sesion</h1>
      <p>
              ¿algo? <Link to="/registro">Registrate.</Link>
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
          Registrar
        </button>
      </form>
    </div>
  );
};

export default IniciarSesion;