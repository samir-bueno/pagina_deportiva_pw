export default function Body({ titulo, link, descripcion, parrafo }) {
  return (
    <>
      <div className="container">
        <h2>{titulo}</h2>
        <div className="listaDeLado">
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
          <div className="containerImg">
            <img className="imagen" src={link} alt={descripcion} />
            <p className="texto centrar">{parrafo}</p>
            <p className="num centrar">$12000</p>
          </div>
        </div>
      </div>
    </>
  );
}
