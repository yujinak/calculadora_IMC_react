import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Calculadora IMC</h1>
      <p>
        <b>Instruções:</b> Digite seu peso em kg e sua altura em m para que a
        calculadora calcule seu IMC - Índice de Massa Corporal.
      </p>
    </header>
  );
};

export default Header;
