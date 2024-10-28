import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import InfProducto from "./pagina2/infProducto.jsx";
import Registro from "./pagina_registro/registro.jsx";
import Header from "/home/etec/Documentos/pagina_deportiva_pw/vite-project/src/componentes/header.jsx";
import Footer from "./componentes/footer.jsx";

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <Router>
    <Header/>
      
      <Routes>
      
        <Route path="/" element={<App />} />
        <Route path="/infProducto" element={<InfProducto />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    <Footer/>
    </Router>
  </StrictMode>
);
