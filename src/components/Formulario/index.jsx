import { useState, useEffect } from "react";
import styles from "./Formulario.module.css";

const Formulario = (props) => {
  //variáveis
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setIMC] = useState(0);

  const calcularIMC = () => {
    return setIMC((peso / (altura * altura)).toFixed(2));
  };

  // Imprime o
  useEffect(() => {
    calcularIMC();
    console.log(peso, altura, imc);
  });

  return (
    <form action="">
      <h3>
        <label htmlFor="">
          Peso
          <input
            type="number"
            onChange={(evento) => setPeso(parseFloat(evento.target.value))}
            min="0"
            step="0.1"
          />
        </label>
        <label htmlFor="">
          Altura
          <input
            type="number"
            onChange={(evento) => setAltura(parseFloat(evento.target.value))}
            min="0"
            step="0.01"
          />
        </label>
      </h3>
      <br />

      <h2>
        <label htmlFor="">
          {" "}
          Resultado:
          <span className="resultado">{imc}</span>
        </label>
      </h2>
    </form>
  );
};

export default Formulario;
