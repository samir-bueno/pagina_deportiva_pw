import React, { useState } from 'react';
import './AgregarProducto.css'; // Asegúrate de tener el CSS correspondiente

const AgregarProducto = () => {
  const [Name, setNombre] = useState('');
  const [Price, setPrecio] = useState('');
  const [Description, setDescripcion] = useState('');
  const [Image, setImagen] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [talle, setTalle] = useState('');
  const [color, setColor] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const categorias = ['Remera', 'Campera', 'Short'];
  const talles = ['XS', 'S', 'M', 'L', 'XL'];
  const colores = ['Rojo', 'Verde', 'Azul', 'Negro', 'Blanco'];
  const marcas = ['Marca A', 'Marca B', 'Marca C'];
  const anos = ['2020', '2021', '2022', '2023'];

  const manejarEnvio = async (e) => {
    e.preventDefault();

    // Crea un objeto de datos
    const data = {
      Name,
      Price,
      Description,
      Categories_ID: categoria || null,  // Permite null si no se selecciona categoría
      Size_ID: talle || null,            // Permite null si no se selecciona talle
      color_ID: color || null,           // Permite null si no se selecciona color
      Brand_ID: marca || null,           // Permite null si no se selecciona marca
      Year_ID: ano || null,              // Permite null si no se selecciona año
      image: Image ? Image.name : null   // Opcional: Si se selecciona una imagen, enviarla
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Enviar como JSON
        },
        body: JSON.stringify(data), // Convertir los datos a JSON
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta de la red');
      }

      const responseData = await response.json();
      setMensaje('Producto agregado exitosamente!');
    
      // Limpiar el formulario
      setNombre('');
      setPrecio('');
      setDescripcion('');
      setImagen(null);
      setCategoria('');
      setTalle('');
      setColor('');
      setMarca('');
      setAno('');
      setError('');
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setError('Error al agregar el producto. Intenta nuevamente.');
    }
  };

  return (
    <div className="agregar-producto" style={{ marginTop: "100px" }}>
      <h2>Agregar Nuevo Producto</h2>
      {mensaje && <p className="mensaje">{mensaje}</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="Name">Nombre:</label>
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Price">Precio:</label>
          <input
            type="number"
            id="Price"
            value={Price}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Description">Descripción:</label>
          <textarea
            id="Description"
            value={Description}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoría:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="talle">Talle:</label>
          <select
            id="talle"
            value={talle}
            onChange={(e) => setTalle(e.target.value)}
          >
            <option value="">Selecciona un talle</option>
            {talles.map((t, index) => (
              <option key={index} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">Selecciona un color</option>
            {colores.map((col, index) => (
              <option key={index} value={col}>{col}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="marca">Marca:</label>
          <select
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          >
            <option value="">Selecciona una marca</option>
            {marcas.map((mar, index) => (
              <option key={index} value={mar}>{mar}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ano">Año:</label>
          <select
            id="ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          >
            <option value="">Selecciona un año</option>
            {anos.map((a, index) => (
              <option key={index} value={a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="Image">Imagen:</label>
          <input
            type="file"
            id="Image"
            onChange={(e) => setImagen(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;
