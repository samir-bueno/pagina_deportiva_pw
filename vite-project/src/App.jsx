import "./App.css";
import Body from "./componentes/body";
import Footer from "./componentes/footer";
import Header from "./componentes/header";
import React, { useEffect, useState } from "react";

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

  return (
    <>
      <Header onSearch={setQuery} /> {/* Pasa setQuery al Header */}
      {products.length > 0 ? (
        <div className="main-content" style={{ marginTop: "80px" }}>
          <div>
            <img
              className="product-image elemento animate__animated animate__fadeInDown"
              src="../src/assets/lionel-messi-fanart_2480x1395_xtrafondos.com.jpg"
              alt="Messi"
            />
          </div>
          <div className="listaDeLado">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
<<<<<<< HEAD
                  <Body
                  key={item.ID} // Asegúrate de usar el ID como clave única
                  id={item.ID} // Pasa el ID al componente
                  titulo={item.titulo} // Asegúrate de que esto corresponda a tus datos
                  link={item.image}
=======
                <Body
                  key={item.ID}
                  id={item.ID}
                  titulo={item.titulo}
                  link={item.image || "./imagenes/remera.jpeg"}
>>>>>>> 77c9edf1019c384800c9547c9331e337f96e3c72
                  description={item.Description}
                  parrafo={item.Name}
                  precio={item.Price}
                />
              ))
            ) : (
              <>No se encontraron productos.</>
            )}
          </div>
        </div>
      ) : (
        <>Cargando...</>
      )}
    </>
  );
}

export default App;
