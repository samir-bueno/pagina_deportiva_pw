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

export default App;
