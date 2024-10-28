import { Link } from "react-router-dom";

export default function Body({ titulo, link, description, parrafo }) {
  return (
    <>
      <div className="container">
        <h2>{titulo}</h2>
        <div className="animate__animated animate__bounceInLeft" id="productos">
          <Link to="/infProducto">
            <div className="containerImg">
              <img className="imagen" src={link} alt={description} />
              <p className="texto centrar">{description}</p>
              <p className="num centrar">$12000</p>
            </div>
          </Link>
          {/* Repetir el Link según sea necesario con diferentes productos */}
        </div>
      </div>
    </>
  );
}
