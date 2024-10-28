import "./App.css";
import Body from "./componentes/body";
import Footer from "./componentes/footer";
import Header from "./componentes/header";
import React, { useEffect, useState } from "react";
import Search from "./componentes/Search";

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  // Filtrar productos solo si hay un término de búsqueda
  const filteredProducts = query
    ? products.filter(item => //condicional ternario signo de pregunta marca la primner condicion ? dos puntitos el else: 
        item.Name?.toLowerCase().includes(query.toLowerCase())
      )
    : products; // Muestra todos los productos si no hay búsqueda
    //? entonces : sino 
    // esta funcion realiza lo siguiente. Si existe una query, es decir, texto en el input, va a aplicar el filtro, si no (:) nos va a devolver todos los productos

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
      {products.length > 0 ? ( // Verifica si hay productos
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
            {filteredProducts.length > 0 ? ( // Mostrar productos filtrados
              filteredProducts.map((item, index) => (
                <Body
                  key={index} // Asegúrate de usar una key única
                  titulo={item.titulo} // Cambia 'titulo' por el campo adecuado en tu data
                  link={item.image || "./imagenes/remera.jpeg"} // Ajusta según tu API
                  description={item.Description} // Cambia 'Descripcion' por el campo adecuado en tu data
                  parrafo={item.Nombre} // O agrega un campo desde tu data
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
