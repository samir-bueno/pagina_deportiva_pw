import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import ProductDetail from "./componentes/ProductDetail.jsx";
import Registro from "./pagina_registro/registro.jsx";
import Header from "/home/etec/Documentos/pagina_deportiva_pw/vite-project/src/componentes/header.jsx";
import Footer from "./componentes/footer.jsx";
import IniciarSesion from "./pagina_registro/iniciarSesion.jsx"
import AgregarProducto from "./pages/AgregarProducto.jsx";
createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetail />} />      
        <Route path="/registro" element={<Registro onRegister={() => {}} />} />
        <Route path="/iniciarSesion" element={<IniciarSesion />} />
        <Route path="/agregar-producto" element={<AgregarProducto />} />
      </Routes>
    <Footer/>
    </Router>
  </StrictMode>
);
