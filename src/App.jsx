import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

/*
Nesse exercício você deverá:

1) Crie um projeto utilizando ReactJS;
Este projeto será basicamente um formulário, contendo os campos: 
altura
peso;
2) A partir dessas informações calcule o IMC;    // peso x (altura²)
3) Retorne o IMC e a classificação na tabela;
4) Em um novo repositório armazene o código da tarefa;
5) Envie o link do repositório através da plataforma.
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Formulario />

      <Tabela />
    </>
  );
}

export default App;
