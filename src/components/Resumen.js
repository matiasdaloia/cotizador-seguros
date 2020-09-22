import React from "react";
import styled from "@emotion/styled";

const ResumenCard = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 10px 5px;
`;

function Resumen({ resumen }) {
  const { marca, year, plan } = resumen.datos;
  if (marca === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ResumenCard>
      <h2>Resumen de tu Cotización</h2>
      <p>Marca : {marca}</p>
      <p>Año del Vehículo : {year}</p>
      <p>Plan Elegido: {plan} </p>
    </ResumenCard>
  );
}

export default Resumen;
