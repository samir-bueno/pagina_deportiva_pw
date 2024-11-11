import React, { useState } from "react";
import "./Registro.css";
import { Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
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

    // Datos a enviar a la API
    const userData = {
      name: formData.nombre,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Enviar solicitud POST a la API
      const response = await fetch("http://localhost:5007/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        // Redirige a la página de inicio de sesión
        navigate("/iniciarSesion");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Hubo un problema al registrar al usuario.");
    }
  };

  return (
    <div className="registro-container" style={{ marginTop: "80px" }}>
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
