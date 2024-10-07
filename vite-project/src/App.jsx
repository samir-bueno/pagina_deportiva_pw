import "./App.css";
import Body from "./componentes/body";
import Footer from "./componentes/footer";
import Header from "./componentes/header";
import React from "react";

function App() {
  return (
    <>
      <Header />
        <div className="main-content" style={{ marginTop: '80px' }}>

          <Body
            link={"./imagenes/remera.jpeg"}
            descripcion={"Remera royal"}
            parrafo={
              "Una remera de alta calidad con tela traslucida, anti sudor y comoda"
            }
          />
        </div>
      <Footer />
    </>
  );
}

export default App;
