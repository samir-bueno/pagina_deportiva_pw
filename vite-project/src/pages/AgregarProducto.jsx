import React, { useState, useEffect } from 'react';
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

  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [years, setYears] = useState([]);

  // Función para cargar las opciones desde las APIs
  const fetchData = async () => {
    try {
      // Cargar categorías
      const categoriesResponse = await fetch('http://127.0.0.1:5002/categories');
      const categoriesData = await categoriesResponse.json();
      setCategories(categoriesData);

      // Cargar talles
      const sizesResponse = await fetch('http://127.0.0.1:5002/sizes');
      const sizesData = await sizesResponse.json();
      setSizes(sizesData);

      // Cargar colores
      const colorsResponse = await fetch('http://127.0.0.1:5002/colors');
      const colorsData = await colorsResponse.json();
      setColors(colorsData);

      // Cargar marcas
      const brandsResponse = await fetch('http://127.0.0.1:5002/brands');
      const brandsData = await brandsResponse.json();
      setBrands(brandsData);

      // Cargar años
      const yearsResponse = await fetch('http://127.0.0.1:5002/years');  // Verifica la URL correcta
      const yearsData = await yearsResponse.json();
      setYears(yearsData);

    } catch (error) {
      console.error('Error al cargar las opciones:', error);
      setError('Hubo un problema al cargar los datos. Intenta nuevamente.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const data = {
      Name,
      Price,
      Description,
      Categories_ID: categoria || null,  // ID de la categoría seleccionada
      Size_ID: talle || null,            // ID del talle seleccionado
      color_ID: color || null,           // ID del color seleccionado
      Brand_ID: marca || null,           // ID de la marca seleccionada
      Year_ID: ano || null,              // ID del año seleccionado
      image: Image ? Image.name : null   // Opcional: Si se selecciona una imagen, enviarla
    };

    try {
      const response = await fetch('http://127.0.0.1:5001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
            {categories.map((cat) => (
              <option key={cat.ID} value={cat.ID}>{cat.Name}</option>
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
            {sizes.map((size) => (
              <option key={size.ID} value={size.ID}>{size.Sizes}</option>
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
            {colors.map((col) => (
              <option key={col.ID} value={col.ID}>{col.types_Colors}</option>
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
            {brands.map((brand) => (
              <option key={brand.ID} value={brand.ID}>{brand.Name}</option>
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
            {years.map((year) => (
              <option key={year.ID} value={year.ID}>{year.Year}</option>
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
