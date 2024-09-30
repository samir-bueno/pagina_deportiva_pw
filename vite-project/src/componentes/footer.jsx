export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="contenedor">
                    <div className="columna_izquierda">
                        <div className="lista"> 
                            <div className="lista_footer">
                                <h4>MÉTODO DE PAGOS</h4>
                            </div> 
                            <div className="lista_de_contenidos">
                                <img height="46" width="74" src="https://cdn.tiendanegocio.com/static/payment_method/MERCADOPAGO.png" 
                                    id="MERCADOPAGO" alt="MERCADOPAGO" loading="lazy" fetchpriority="low"/>
                            </div>
                            <div className="lista_footer">
                                <h4>MÉTODO DE ENVÍO</h4>
                            </div>
                            <div className="lista_de_contenidos">
                                <img height="46" width="74" src="https://cdn.tiendanegocio.com/static/shipment_method/acordar.png"
                                    id="acordar" alt="acordar" loading="lazy" fetchpriority="low" />
                            </div>   
                        </div>
                    </div>

                    <div className="columna_derecha">
                        <div className="lista">
                            <div className="lista_footer">
                                <h4>CONTACTANOS</h4>
                            </div>
                            <div className="lista_contactos">
                                <div>
                                        <li className="evento">
                                            <a>
                                                <app-icon fill="1" icon="home" class="icon" _nghost-1-c16=""><i _ngcontent-1-c16=""
                                                class="icon-text"><svg xmlns="http://www.w3.org/2000/svg"
                                                height="40" viewBox="0 -960 960 960" width="40">
                                                <path fill="currentColor" d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z">
                                                </path></svg></i></app-icon>
                                            </a>
                                        </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
