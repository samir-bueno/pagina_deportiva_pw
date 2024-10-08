import '../footer.css';


export default function Footer() {
   return (
       <footer className="footer">
           <div className="contenedor">
               <div className="columna">
                   <h4 className="color_blanco">MÉTODO DE PAGO</h4>
                   <img className='tamaño_imagen_1'          
                       src="https://cdn.tiendanegocio.com/static/payment_method/MERCADOPAGO.png"
                       alt="Mercado Pago"
                   />
                   <h4 className="color_blanco">MÉTODO DE ENVÍO</h4>
                   <img className='tamaño_imagen_1'
                       src="https://cdn.tiendanegocio.com/static/shipment_method/acordar.png"
                       alt="Punto de encuentro"
                   />
               </div>
               <div className="columna">
                   <h4 style={{ textAlign: 'center' }} className="color_blanco">CONTACTO</h4>
                   <div className="contacto-item">
                       <img
                           className='icono2'
                           src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                           alt="Email"
                       />
                       <span className="color_blanco"> uniondepo@gmail.com</span>
                   </div>
                   <div className="contacto-item">
                       <img
                           className='icono2'
                           src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                           alt="Teléfono"
                       />
                       <span style={{width:"150px"}} className="color_blanco"> +123 456 7890</span>
                   </div>
                   <div className="contacto-item">
                       <img
                           className='icono2' 
                           src="https://cdn-icons-png.flaticon.com/512/9713/9713317.png"
                           alt="Ubicación"
                       />
                       <span style={{width:"150px"}} className="color_blanco"> Av. Caballito</span>
                   </div>
                   <div className="contacto-item">
                       <img
                           className='icono2'
                           src="https://cdn-icons-png.flaticon.com/512/9053/9053332.png"
                           alt="Signo de arrepentimiento"
                       />
                       <span style={{width:"150px"}} className="color_blanco">Arrepentimiento</span>
                   </div>
               </div>
               <div className="columna">
                   <h4 className="color_blanco">REDES SOCIALES</h4>
                   <div className="contacto-item">
                       <img
                           className='icono2'
                           src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"                        alt="Facebook"
                           height="40"
                           width="40"
                       />
                       <a href="https://www.instagram.com/camisetas_f.m/" className="redes color_blanco">Instagram</a>
                   </div>
               </div>
           </div>
       </footer>
   );
}
