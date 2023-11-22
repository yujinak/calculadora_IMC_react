import styles from "./Tabela.module.css";

const Tabela = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Tabela IMC</th>
        </tr>
        <tr>
          <th>Resultado</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="muito-abaixo">Abaixo de 17</td>
          <td>Muito abaixo do peso</td>
        </tr>
        <tr className="abaixo">
          <td className="abaixo">Entre 17 e 18,49</td>
          <td className="abaixo">Abaixo do peso</td>
        </tr>
        <tr className="normal">
          <td>Entre 18,50 e 24,99</td>
          <td>Peso normal</td>
        </tr>
        <tr className="sobrepeso">
          <td>Entre 25 e 29,99</td>
          <td>Acima do peso</td>
        </tr>
        <tr className="obesidade1">
          <td>Entre 30 e 34,99</td>
          <td>Obesidade I</td>
        </tr>
        <tr className="obesidade2">
          <td>Entre 35 e 39,99</td>
          <td>Obesidade II</td>
        </tr>
        <tr className="obesidade3">
          <td>Acima de 40</td>
          <td>Obesidade III</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tabela;
