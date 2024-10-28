import React from 'react';
import './infProducto.css'; // Asegúrate de crear este archivo para los estilos

const InfProducto = () => {
  const product = {
    name: 'Camiseta Chelsea Formotion 2009-2010',
    description: 'Camiseta oficial del Chelsea, utilizada durante la temporada 2009-2010, que destaca por su diseño moderno y tecnología de ventilación Formotion.',
    details: [
      'Material: Poliéster 100% reciclado',
      'Tecnología Formotion para mejor ajuste y ventilación',
      'Logotipo del club bordado',
      'Colores: Blanco con rayas negras horizontales',
      'Disponible en talla L',
    ],
    price: 12000,
    imageUrl: 'https://i.ebayimg.com/thumbs/images/g/jD4AAOSwujtmvR0y/s-l1200.jpg',
    link: '#', // Aquí puedes agregar el enlace para agregar al carrito
  };

  return (
    <div className="main-content" style={{ marginTop: "80px" }}>
    <div className="product-detail">
      <div className="containerImg">
        <img className="imagen" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <ul className="product-details">
          {product.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <h2 className="product-price">${product.price.toLocaleString()}</h2>
        <a href={product.link} className="add-to-cart">Agregar al carrito</a>
      </div>
    </div>
    </div>
  );
};

export default InfProducto;
