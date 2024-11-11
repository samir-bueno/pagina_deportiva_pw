import "./App.css";
import Body from "./componentes/body";
import Footer from "./componentes/footer";
import Header from "./componentes/header";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [query, setQuery] = useState("");
  const [userName, setUserName] = useState("");

  // Filtrar productos solo si hay un término de búsqueda
  const filteredProducts = query
    ? products.filter((item) =>
        item.Name?.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  // Efecto para obtener productos de la API
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario && usuario.name) {
      setUserName(usuario.name);
    }

    // Fetch para productos
    fetch("http://127.0.0.1:5000/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));

    // Fetch para marcas
    fetch("http://127.0.0.1:5003/brands") // Asegúrate de que esta URL sea correcta
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar las marcas");
        }
        return response.json();
      })
      .then((data) => {
        setBrands(data); // Almacena las marcas en el estado
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = (value) => {
    setQuery(value);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setUserName(""); // Elimina el nombre del usuario del estado
    localStorage.removeItem("usuario"); // Elimina el usuario de localStorage
  };

  return (
    <>
      <Header
        userName={userName}
        onSearch={handleSearch}
        onLogout={handleLogout}
      />{" "}
      {/* Pasa onLogout al Header */}
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
                <Body
                  key={item.ID} // Asegúrate de usar el ID como clave única
                  id={item.ID} // Pasa el ID al componente
                  titulo={item.titulo} // Asegúrate de que esto corresponda a tus datos
                  link={item.image}
                  description={item.Description}
                  parrafo={item.Name}
                  precio={item.Price}
                />
              ))
            ) : (
              <>No se encontraron productos.</>
            )}
          </div>
          <div className="brands-container">
            <h2 className="textMar">Marcas</h2>
            <div className="brand-list">
              {brands.length > 0 ? (
                brands.map((brand) => (
                  <div className="containerImgen" key={brand.ID}>
                    <img
                      className="imagen "
                      src={brand.image}
                      alt={brand.name}
                    />
                  </div>
                ))
              ) : (
                <>No se encontraron marcas.</>
              )}
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
