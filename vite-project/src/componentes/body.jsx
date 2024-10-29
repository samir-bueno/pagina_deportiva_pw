import { Link } from "react-router-dom";

export default function Body({ id, titulo, link, description, parrafo, precio }) {
  return (
    <div className="listaDeLado">
      <h2>{titulo}</h2>
      <div className="animate__animated animate__bounceInLeft" id="products">
        <Link to={`/product/${id}`}> {/* Usa el ID aquí */}
          <div className="containerImg">
            <img className="imagen" src={link} alt={description} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">${precio}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

