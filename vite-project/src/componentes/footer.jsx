import "../footer.css"; // Importa el estilo del footer

export default function Footer() {
    return (
        <footer className="footer" id="contacto"> {/* Sección del pie de página */}
            <div className="contenedor"> {/* Contenedor principal */}
                <div className="columna"> {/* Columna de métodos de pago y envío */}
                    <h4 className="color_blanco">MÉTODO DE PAGO</h4>
                    <img 
                        className='tamaño_imagen'          
                        src="https://cdn.tiendanegocio.com/static/payment_method/MERCADOPAGO.png"
                        alt="Mercado Pago" 
                    />
                    <h4 className="color_blanco">MÉTODO DE ENVÍO</h4>
                    <img 
                        className='tamaño_imagen'
                        src="https://cdn.tiendanegocio.com/static/shipment_method/acordar.png"
                        alt="Punto de encuentro" 
                    />
                </div>
                
                <div className="columna"> {/* Columna de contacto */}
                    <h4 className="color_blanco text-center">CONTACTO</h4>
                    {/* Elementos de contacto */}
                    <div className="contacto-item"> 
                        <img 
                            className='icono' 
                            src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
                            alt="Email" 
                        />
                        <a href="mailto:uniondepo@gmail.com" className="color_blanco" style={{ width: "150px" }}>uniondepo@gmail.com</a>
                    </div>
                    <div className="contacto-item">
                        <img 
                            className='icono' 
                            src="https://cdn-icons-png.flaticon.com/512/724/724664.png" 
                            alt="Teléfono" 
                        />
                        <a href="tel:+1234567890" className="color_blanco" style={{ width: "150px" }}>+123 456 7890</a>
                    </div>
                    <div className="contacto-item">
                        <img 
                            className='icono' 
                            src="https://cdn-icons-png.flaticon.com/512/9713/9713317.png" 
                            alt="Ubicación" 
                        />
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Av.+Caballito" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="color_blanco" 
                            style={{ width: "150px" }}
                        >
                            Av. Caballito
                        </a>
                    </div>
                    <div className="contacto-item">
                        <img 
                            className='icono' 
                            src="https://cdn-icons-png.flaticon.com/512/9053/9053332.png" 
                            alt="Signo de arrepentimiento" 
                        />
                        <span className="color_blanco" style={{ width: "150px" }}>Arrepentimiento</span>
                    </div>
                </div>

                <div className="columna"> {/* Columna de redes sociales */}
                    <h4 className="color_blanco">REDES SOCIALES</h4>
                    <div className="contacto-item">
                        <img
                            className='icono'
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"                        
                            alt="Instagram"
                        />
                        <a href="https://www.instagram.com/camisetas_f.m/" className="redes color_blanco">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
