import { Link } from "react-router-dom";

function Body({ id, link, description, parrafo, precio, onDelete }) {
  const handleDelete = () => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este producto?")
    ) {
      onDelete(id); // Llamamos a la función onDelete pasada como prop
    }
  };

  return (
    <div className="listaDeLado">
<<<<<<< HEAD
      <div className="animate__animated animate__bounceInLeft" id="products">
=======
      <div className="animate__animated animate__bounceInLeft" id="productos">
>>>>>>> 3a4a834ca3ba96f0c5fe72af487f4c52927f7396
        <Link to={`/product/${id}`}>
          <div className="containerImg">
            <img className="imagen" src={link} alt={description} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">${precio}</p>
          </div>
        </Link>
        {/* Botón para eliminar producto */}
        <div className="delete-btn" onClick={handleDelete}>
          <div className="line"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Body;
