import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../productsDetail.css";

function ProductDetail() {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  const [product, setProduct] = useState(null); // Estado para los detalles del producto
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    console.log("Fetching product with ID:", id);

    // Realiza la solicitud a la API de Flask
    fetch(`http://127.0.0.1:5003/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Verifica la respuesta aquí

        if (Array.isArray(data) && data.length > 0) {
          const productDetails = data[0]; // Extrae el primer objeto del array (producto)

          const combinedProduct = {
            ...productDetails,
            Sizes: productDetails.Sizes || "Tamaño no disponible", // Maneja el caso donde no haya tamaño
          };

          setProduct(combinedProduct); // Guarda los datos en el estado
        } else {
          setProduct(null); // Si no hay producto, muestra un mensaje de error
        }

        setLoading(false); // Termina el estado de carga
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false); // Termina el estado de carga en caso de error
      });
  }, [id]); // Vuelve a ejecutarse cuando cambia el `id`

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!product) {
    return <div className="not-found">Producto no encontrado.</div>;
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="product-container main-contents">
        <img
          src={product.image}
          alt={product.Name}
          className="product-imagenes"
        />
        <div className="product-info">
          <h1>{product.Name}</h1>
          <p>{product.Description}</p>
          <p>Tamaño: {product.Sizes}</p>
          <p>Precio: ${product.Price}</p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
