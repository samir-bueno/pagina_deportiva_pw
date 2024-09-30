
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

export default App;
