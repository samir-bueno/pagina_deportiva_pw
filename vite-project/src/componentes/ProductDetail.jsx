import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../productsDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching product with ID:", id);
    fetch(`http://127.0.0.1:5000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Verifica la respuesta aquí

        if (Array.isArray(data) && data.length === 2) {
          const productDetails = data[0][0]; // Accede al primer objeto del primer array
          const productSizes =
            data[1] && data[1].length > 0 ? data[1][0] : null; // Verifica si hay tamaños

          // Combina los datos en un solo objeto si es necesario
          const combinedProduct = {
            ...productDetails,
            Sizes: productSizes ? productSizes.Sizes : "Tamaño no disponible", // Maneja el caso donde productSizes no existe
          };

          setProduct(combinedProduct);
        } else {
          setProduct(null); // Maneja el caso donde la respuesta no es lo esperado
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!product) {
    return <div className="not-found">Producto no encontrado.</div>;
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="product-container  main-contents">
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
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
