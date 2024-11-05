import React, { useState } from 'react';
import './AgregarProducto.css'; // Asegúrate de tener el CSS correspondiente


const AgregarProducto = () => {
 const [nombre, setNombre] = useState('');
 const [precio, setPrecio] = useState('');
 const [descripcion, setDescripcion] = useState('');
 const [imagen, setImagen] = useState(null);
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


   const formData = new FormData();
   formData.append('name', nombre);
   formData.append('price', precio);
   formData.append('description', descripcion);
   formData.append('category', categoria);
   formData.append('size', talle);
   formData.append('color', color);
   formData.append('brand', marca);
   formData.append('year', ano);
   formData.append('image', imagen); // Asegúrate de que tu API soporte archivos
  
   try {
     const response = await fetch('http://127.0.0.1:5000/products', {
       method: 'POST',
       body: formData,
     });


     if (!response.ok) {
       throw new Error('Error en la respuesta de la red');
     }


     const data = await response.json();
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
   <div className="agregar-producto" style={{marginTop: "100px"}}>
     <h2>Agregar Nuevo Producto</h2>
     {mensaje && <p className="mensaje">{mensaje}</p>}
     {error && <p className="error">{error}</p>}
     <form onSubmit={manejarEnvio}>
       <div>
         <label htmlFor="nombre">Nombre:</label>
         <input
           type="text"
           id="nombre"
           value={nombre}
           onChange={(e) => setNombre(e.target.value)}
           required
         />
       </div>
       <div>
         <label htmlFor="precio">Precio:</label>
         <input
           type="number"
           id="precio"
           value={precio}
           onChange={(e) => setPrecio(e.target.value)}
           required
         />
       </div>
       <div>
         <label htmlFor="descripcion">Descripción:</label>
         <textarea
           id="descripcion"
           value={descripcion}
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
           required
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
           required
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
           required
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
           required
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
           required
         >
           <option value="">Selecciona un año</option>
           {anos.map((a, index) => (
             <option key={index} value={a}>{a}</option>
           ))}
         </select>
       </div>
       <div>
         <label htmlFor="imagen">Imagen:</label>
         <input
           type="file"
           id="imagen"
           onChange={(e) => setImagen(e.target.files[0])}
           accept="image/*"
           required
         />
       </div>
       <button type="submit">Agregar Producto</button>
     </form>
   </div>
 );
};


export default AgregarProducto;
