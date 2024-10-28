import React, { useState } from "react";
import "./Registro.css"; // Asegúrate de tener este archivo
import { Link, useNavigate } from 'react-router-dom';

const Registro = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook para redirigir

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
      !formData.nombre ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
  
    // Aquí iría la lógica para registrar al usuario (ejemplo con API)
    console.log("Registrando usuario:", formData);
    setSuccess("Registro exitoso. Puedes iniciar sesión.");
  
    // Guarda la información del usuario en localStorage
    localStorage.setItem("usuario", JSON.stringify({ email: formData.email, password: formData.password }));
  
    // Reiniciar el formulario
    setFormData({ nombre: "", email: "", password: "", confirmPassword: "" });
  
    // Redirige a la página de inicio de sesión
    navigate("/iniciarSesion");
  };
  
  return (
    <div className="registro-container" style={{marginTop: "80px"}}>
      <h1>Registro</h1>
      <p>
        ¿Ya tienes cuenta? <Link to="/iniciarSesion">Inicio de Sesion.</Link>
      </p>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
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

export default Registro;
