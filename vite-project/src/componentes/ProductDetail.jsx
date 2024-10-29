import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching product with ID:", id);
    fetch(`http://127.0.0.1:5001/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Verifica la respuesta aquí
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]);
        } else {
          setProduct(data); // Si es un objeto, asigna directamente
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div>
      <h1>{product.Name}</h1>
      <img src={product.image} alt={product.Name} />
      <p>{product.Description}</p>
      <p>Precio: {product.Price}</p>
      <p>Tamaño: {product.Sizes}</p>
    </div>
  );
}

export default ProductDetail;
