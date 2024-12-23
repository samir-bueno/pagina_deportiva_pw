import { Link } from "react-router-dom";

function Body({ id, link, description, parrafo, precio}) {


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

      </div>
      <div></div>
    </div>
  );
}

export default Body;
