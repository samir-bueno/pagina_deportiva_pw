<<<<<<< HEAD
import "./App.css";
import Body from "./componentes/body";
import Footer from "./componentes/footer";
import Header from "./componentes/header";

function App() {
  return (
    <>
      <Header />

      <Body
        link={"./imagenes/remera.jpeg"}
        descripcion={"Remera royal"}
        parrafo={
          "Una remera de alta calidad con tela traslucida, anti sudor y comoda"
        }
      />

      <Footer />
    </>
  );
}

=======

import './App.css'
import Body from './componentes/body'
import Footer from './componentes/footer'
import Header from './componentes/header'
import React from 'react';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Bienvenido a mi aplicación!</h2>
        {/* Aquí puedes agregar más contenido */}
      </main>
    </div>
  );
};

>>>>>>> 891b0405e35c407741cf27a71deb9f4c5bcb37d5
export default App;
