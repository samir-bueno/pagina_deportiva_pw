import React from 'react';


const InfProducto = ({ link, descripcion, parrafo }) => {
  return (
    <div>

            <div className="containerImg containerImg:hover">
              <img className="imagen " src={"https://www.storers.com.ar/wp-content/uploads/2023/08/lkj.jpg"} alt={descripcion} />
              <p className="texto centrar">{parrafo}</p>
              <p className="num centrar">$12000</p>
            </div>
    </div>
  );
};

export default InfProducto;
