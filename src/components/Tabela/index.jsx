const Tabela = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tabela IMC</th>
        </tr>
        <tr>
          <th>Resultado</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Abaixo de 17</th>
          <th>Muito abaixo do peso</th>
        </tr>
        <tr>
          <th>Entre 17 e 18,49</th>
          <th>Abaixo do peso</th>
        </tr>
        <tr>
          <th>Entre 18,50 e 24,99</th>
          <th>Peso normal</th>
        </tr>
        <tr>
          <th>Entre 25 e 29,99</th>
          <th>Acima do peso</th>
        </tr>
        <tr>
          <th>Entre 30 e 34,99</th>
          <th>Obesidade I</th>
        </tr>
        <tr>
          <th>Entre 35 e 39,99</th>
          <th>Obesidade II</th>
        </tr>
        <tr>
          <th>Acima de 40</th>
          <th>Obesidade III</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Tabela;
