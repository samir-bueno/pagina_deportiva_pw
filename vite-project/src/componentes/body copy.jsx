import { Link } from "react-router-dom";

function BodyCopy({ id, link, description, parrafo, precio, onDelete }) {
  const handleDelete = () => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este producto?")
    ) {
      onDelete(id); // Llamamos a la función onDelete pasada como prop
    }
  };

  return (
    <div className="listaDeLado">

      <div className="animate__animated animate__bounceInLeft" id="productos">
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

export default BodyCopy;
