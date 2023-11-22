import { useState, useEffect } from "react";
import styles from "./Formulario.module.css";

const Formulario = (props) => {
  //variáveis
  const [peso, setPeso] = useState(60);
  const [altura, setAltura] = useState(1.6);
  const [imc, setIMC] = useState(22);
  const [situacao, setSituacao] = useState("");

  const calcularIMC = () => {
    return setIMC(parseFloat((peso / (altura * altura)).toFixed(2)));
  };

  // classifica a situação do IMC
  const classificaIMC = () => {
    if (imc < 17) {
      setSituacao("Muito abaixo do peso");
    } else if (imc >= 17 && imc < 18.49) {
      setSituacao("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.99) {
      setSituacao("Peso normal");
    } else if (imc >= 25 && imc < 29.99) {
      setSituacao("Acima do peso");
    } else if (imc >= 30 && imc < 34.99) {
      setSituacao("Obesidade I");
    } else if (imc >= 35 && imc < 39.99) {
      setSituacao("Obesidade II");
    } else if (imc >= 40) {
      setSituacao("Obesidade III");
    }
  };

  // insere no DOM
  useEffect(() => {
    calcularIMC();
    classificaIMC();
    // console.log(peso, altura, imc);
  });

  return (
    <form action="">
      <h3>
        <label htmlFor="">
          Peso:
          <input
            type="number"
            onChange={(evento) => setPeso(parseFloat(evento.target.value))}
            min="0"
            step="0.1"
            defaultValue="60"
          />
        </label>
        <label htmlFor="">
          Altura:
          <input
            type="number"
            onChange={(evento) => setAltura(parseFloat(evento.target.value))}
            min="0"
            step="0.01"
            defaultValue="1.60"
          />
        </label>
      </h3>
      <br />

      <h2>
        <div className="resultado">
          <label htmlFor="">Resultado: {imc} </label>
        </div>

        <div className="situacao">
          <label htmlFor="">Situação: {situacao}</label>
        </div>
      </h2>
    </form>
  );
};

export default Formulario;
