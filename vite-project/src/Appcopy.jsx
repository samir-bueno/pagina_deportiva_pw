import "./App.css";
import BodyCopy from "./componentes/body copy";
import HeaderCopy from "./componentes/header copy";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function AppCopy() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [query, setQuery] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();


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
    fetch("http://127.0.0.1:5004/brands") // Asegúrate de que esta URL sea correcta
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
    navigate("/");
  };

  

  // Función para eliminar un producto
  const handleDeleteProduct = (id) => {
    // Asegúrate de que `id` sea un número
    const productId = parseInt(id, 10);
  
    if (isNaN(productId)) {
      console.error("El ID del producto no es válido:", id);
      alert("El ID del producto no es válido.");
      return;
    }
  
    fetch(`http://127.0.0.1:5001/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Si la eliminación es exitosa, actualiza el estado para reflejar el cambio
          setProducts(products.filter((product) => product.ID !== productId));
          alert("Producto eliminado exitosamente");
        } else {
          alert("Error al eliminar el producto");
        }
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error);
        alert("Error al eliminar el producto");
      });
  };
  
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      handleDeleteProduct(id);
    } else {
      // El usuario canceló la eliminación, simplemente no hace nada y permanece en la misma página.
      alert("La eliminación ha sido cancelada.");
    }
  };
  
  // En el componente Body
  <div className="delete-btn" onClick={() => handleDelete(id)}>
    <div className="line"></div>
  </div>
  
  

  return (
    <>
      <HeaderCopy
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
                <BodyCopy
                  key={item.ID} // Asegúrate de usar el ID como clave única
                  id={item.ID} // Pasa el ID al componente
                  titulo={item.Name} // Asegúrate de que esto corresponda a tus datos
                  link={item.image}
                  description={item.Description}
                  parrafo={item.Name}
                  precio={item.Price}
                  onDelete={handleDeleteProduct} // Pasa la función de eliminación al componente Body
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

export default AppCopy;
