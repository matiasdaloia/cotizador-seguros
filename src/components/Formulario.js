import React, { useState } from "react";
import "../index.css";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

function Formulario({ setResumen }) {
  const [marca, setMarca] = useState("");
  const [year, setYear] = useState("");
  const [plan, setPlan] = useState("");
  const [error, setError] = useState(false);

  // Seleccionar valor de 'año'
  const selectYear = (e) => {
    setYear(e.target.value);
  };

  // Seleccionar valor de 'marca'
  const setValueMarca = (e) => {
    setMarca(e.target.value);
  };

  const selectPlan = (e) => {
    setPlan(e.target.value);
  };

  // Submitir el formulario
  const handleSubmit = (evento) => {
    evento.preventDefault();

    // Validar formulario
    if (marca.trim() === "" || year === "" || plan === "") {
      setError(true);
      return;
    }

    setError(false);

    // Seguro base 2000
    let resultado = 2000;

    // Obtener la dif de años
    const calcularDiferenciaYear = (year) => {
      return new Date().getFullYear() - year;
    };

    const diferencia = calcularDiferenciaYear(year);

    // Por cada año que pasa le resta 3% del valor base:
    resultado = resultado - (diferencia * 3 * resultado) / 100;

    // Si es ford 15% mas, toyota 5% mas y chevrolet 30% mas:
    if (marca === "ford") {
      resultado *= 1.15;
    } else if (marca === "toyota") {
      resultado *= 1.05;
    } else if (marca === "chevrolet") {
      resultado *= 1.3;
    }

    // Basico aumenta 20% - Completo aumenta 50%
    if (plan === "basico") {
      resultado *= 1.2;
    } else if (plan === "completo") {
      resultado *= 1.5;
    }

    setResumen({
      cotizacion: resultado,
      datos: {
        marca: marca,
        year: year,
        plan: plan,
      },
    });

    // Reset formulario
    setMarca("");
    setPlan("");
    setYear("");
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        {error ? (
          <Alert severity="error" style={{ marginBottom: "5px" }}>
            Error: Completa todos los campos para cotizar tu seguro
          </Alert>
        ) : null}
        <Campo>
          <Label id="marca">Marca</Label>
          <Select onChange={setValueMarca} value={marca}>
            <option value="">--Seleccione una Opción--</option>
            <option value="ford">Ford</option>
            <option value="toyota">Toyota</option>
            <option value="chevrolet">Chevrolet</option>
          </Select>
        </Campo>
        <Campo>
          <Label id="año">Año de Fabricación</Label>
          <Select onChange={selectYear} name="año" id="año" value={year}>
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
        </Campo>
        <Campo>
          <Label htmlFor="plan">Plan</Label>
          <InputRadio
            onChange={selectPlan}
            type="radio"
            name="plan"
            value="basico"
            checked={plan === "basico"}
          />{" "}
          Básico
          <InputRadio
            onChange={selectPlan}
            type="radio"
            name="plan"
            value="completo"
            checked={plan === "completo"}
          />{" "}
          Completo
        </Campo>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Cotizar
        </Button>
      </form>
    </div>
  );
}

export default Formulario;
