import React, { useState } from "react";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: "",
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  return (
    <Container maxWidth="sm">
      <Header titulo="Cotizador de Seguros" />
      <Formulario setResumen={setResumen} />
      <Resumen resumen={resumen} />
    </Container>
  );
}

export default App;
