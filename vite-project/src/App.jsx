import "./App.css";
import Body from "./componentes/body";
import Footer from "./componentes/footer";
import Header from "./componentes/header";
import React, { useEffect, useState } from "react";
import Search from "./componentes/Search";
import { Link } from "react-router-dom"; // Asegúrate de que esta línea esté presente

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  // Filtrar productos solo si hay un término de búsqueda
  const filteredProducts = query
    ? products.filter(item => 
        item.Name?.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  // Efecto para obtener productos de la API
  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  // Efecto para registrar productos filtrados
  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  return (
    <>
      {products.length > 0 ? (
        <div className="main-content" style={{ marginTop: "80px" }}>
          <div>
            <img
              className="product-image elemento animate__animated animate__fadeInDown"
              src="../src/assets/lionel-messi-fanart_2480x1395_xtrafondos.com.jpg"
              alt="Messi"
            />
            <Search onSearch={setQuery} />
          </div>
          <div className="listaDeLado">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                  <Body
                  key={item.ID} // Asegúrate de usar el ID como clave única
                  id={item.ID} // Pasa el ID al componente
                  titulo={item.titulo} // Asegúrate de que esto corresponda a tus datos
                  link={item.image || "./imagenes/remera.jpeg"}
                  description={item.Description}
                  parrafo={item.Name}
                  precio={item.Price}
                  />
              ))
            ) : (
              <>No se encontraron productos.</>
            )}
          </div>
          <div className="listaDeLado elemento">
            {/* Imágenes de marcas */}
            <div>
              <img
                className="imagen_marca"
                src="https://media2.solodeportes.com.ar/media/catalog/brands/Adidas-Performance-inactive.png"
                alt="Adidas"
              />
            </div>
            <div>
              <img
                className="imagen_marca"
                src="https://media2.solodeportes.com.ar/media/catalog/brands/fila.png"
                alt="Fila"
              />
            </div>
            <div>
              <img
                className="imagen_marca"
                src="https://media2.solodeportes.com.ar/media/catalog/brands/logo200x200nike.png"
                alt="Nike"
              />
            </div>
            <div>
              <img
                className="imagen_marca"
                src="https://media2.solodeportes.com.ar/media/catalog/brands/puma.png"
                alt="Puma"
              />
            </div>
          </div>
        </div>
      ) : (
        <>Cargando...</>
      )}
    </>
  );
}

export default App;
