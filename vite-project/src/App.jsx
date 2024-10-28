import "./App.css";
import Body from "./componentes/body";
import Footer from "./componentes/footer";
import Header from "./componentes/header";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      {products ? (
        <div className="main-content" style={{ marginTop: "80px" }}>
          <div>
            <img
              className="product-image elemento animate__animated animate__fadeInDown "
              src="../src/assets/lionel-messi-fanart_2480x1395_xtrafondos.com.jpg"
              alt="Messi"
            />
          </div>
          <div className="listaDeLado">
            {products.map((item, index) => (
              <Body
                key={index} // Asegúrate de usar una key única
                titulo={item.titulo} // Cambia 'titulo' por el campo adecuado en tu data
                link={item.link || "./imagenes/remera.jpeg"} // Ajusta según tu API
                description={item.Description} // Cambia 'Descripcion' por el campo adecuado en tu data
                parrafo={item.Description} // O agrega un campo desde tu data
              />
            ))}
          </div>
          <div className="listaDeLado elemento">
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
        <>cargando... </>
      )}
    </>
  );
}

export default App;
