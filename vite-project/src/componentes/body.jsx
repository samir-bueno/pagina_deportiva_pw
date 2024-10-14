import { Link } from 'react-router-dom';


export default function Body({ titulo, link, descripcion, parrafo }) {
  return (
    <>
      <div className="container">
        <div>
          <img
            className="product-image elemento animate__animated animate__fadeInDown "
            src="../src/assets/messi.jpeg"
            alt="Messi"
          />
        </div>
        <h2>{titulo}</h2>
        <div
          className="listaDeLado animate__animated animate__bounceInLeft"
          id="productos"
        >
          <Link to="/infProducto">
            <div className="containerImg containerImg:hover">
              <img className="imagen " src={link} alt={descripcion} />
              <p className="texto centrar">{parrafo}</p>
              <p className="num centrar">$12000</p>
            </div>
          </Link>
          <Link to="/infProducto">
          <div className="containerImg ">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          </Link>
          <Link to="/infProducto">
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          </Link>
          <Link to="/infProducto">
          <div className="containerImg">
            <img className="imagen " src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          </Link>
          <Link to="/infProducto">
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          </Link>
          <Link to="/infProducto">
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          </Link>
          <Link to="/infProducto">
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          </Link>
          <Link to="/infProducto">
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          </Link>
        </div>

        <div className="listaDeLado elemento">
          <div>
            <img
              className="imagen_marca"
              src="https://media2.solodeportes.com.ar/media/catalog/brands/Adidas-Performance-inactive.png"
              alt="Adidas"
            />
          </div>
          <div>
            <img
              className="imagen_marca"
              src="https://media2.solodeportes.com.ar/media/catalog/brands/fila.png"
              alt="Fila"
            />
          </div>
          <div>
            <img
              className="imagen_marca"
              src="https://media2.solodeportes.com.ar/media/catalog/brands/logo200x200nike.png"
              alt="Nike"
            />
          </div>
          <div>
            <img
              className="imagen_marca"
              src="https://media2.solodeportes.com.ar/media/catalog/brands/puma.png"
              alt="Puma"
            />
          </div>
        </div>
      </div>
    </>
  );
}
