import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "./App.jsx"
import InfProducto from './pagina2/infProducto.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/infProducto" element={<InfProducto />} />
      </Routes>
    </Router>
  </StrictMode>
);
