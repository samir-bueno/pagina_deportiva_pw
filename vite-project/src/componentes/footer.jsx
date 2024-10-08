import "../footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="contenedor">
        <div className="columna">
          <h4>MÉTODO DE PAGO</h4>
          <img
            className="tamaño_imagen_1"
            src="https://cdn.tiendanegocio.com/static/payment_method/MERCADOPAGO.png"
            alt="Mercado Pago"
          />
          <h4>MÉTODO DE ENVÍO</h4>
          <img
            className="tamaño_imagen_1"
            src="https://cdn.tiendanegocio.com/static/shipment_method/acordar.png"
            alt="Punto de encuentro"
          />
        </div>
        <div className="columna">
          <h4 style={{ textAlign: "center" }}>CONTACTO</h4>
          <div className="contacto-item">
            <img
              className="icono2"
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="Email"
            />
            <span> uniondepo@gmail.com</span>
          </div>
          <div className="contacto-item">
            <img
              className="icono2"
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Teléfono"
            />
            <span style={{ width: "150px" }}> +123 456 7890</span>
          </div>
          <div className="contacto-item">
            <img
              className="icono2"
              src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
              alt="Ubicación"
            />
            <span style={{ width: "150px" }}> Av. Caballito</span>
          </div>
          <div className="contacto-item">
            <img
              className="icono2"
              src="https://cdn-icons-png.flaticon.com/512/67/67657.png"
              alt="Signo de arrepentimiento"
            />
            <span style={{ width: "150px" }}>Arrepentimiento</span>
          </div>
        </div>
        <div className="columna">
          <h4>REDES SOCIALES</h4>
          <div className="contacto-item">
            <img
              className="icono2"
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
              alt="Facebook"
              height="40"
              width="40"
            />
            <a
              href="https://www.instagram.com/camisetas_f.m/"
              className="redes"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
