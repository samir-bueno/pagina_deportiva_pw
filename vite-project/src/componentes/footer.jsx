import "/home/etec/Documentos/pagina_deportiva_pw/vite-project/src/footer.css"
export default function Footer() {
   return (
       <footer className="footer" id="contacto">
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
                   <h4 className="color_blanco text-center">CONTACTO</h4>
                   {[
                       { icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png", text: "uniondepo@gmail.com", alt: "Email" },
                       { icon: "https://cdn-icons-png.flaticon.com/512/724/724664.png", text: "+123 456 7890", alt: "Teléfono" },
                       { icon: "https://cdn-icons-png.flaticon.com/512/9713/9713317.png", text: "Av. Caballito", alt: "Ubicación" },
                       { icon: "https://cdn-icons-png.flaticon.com/512/9053/9053332.png", text: "Arrepentimiento", alt: "Signo de arrepentimiento" }
                   ].map((item, index) => (
                       <div className="contacto-item" key={index}>
                           <img className='icono2' src={item.icon} alt={item.alt} />
                           <span className="color_blanco" style={{ width: "150px" }}>{item.text}</span>
                       </div>
                   ))}
               </div>
               <div className="columna">
                   <h4 className="color_blanco">REDES SOCIALES</h4>
                   <div className="contacto-item">
                       <img
                           className='icono2'
                           src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"                        
                           alt="instagram"
                       />
                       <a href="https://www.instagram.com/camisetas_f.m/" className="redes color_blanco">Instagram</a>
                   </div>
               </div>
           </div>
       </footer>
   );
}
