export default function Header() {
  return (
    <header className="header">
      <nav className="nav__logos">
        <img
          className="britoLogo"
          src="./src/images/brito-e-barbosa-logo.png"
        />
        <img className="jussaraLogo" src="./src/images/jussara-logo.png" />
        <img
          className="raciocionioLogo"
          src="./src/images/raciocionio-logo.png"
        />
      </nav>
      <nav className="nav">
        <a className="nav__description">Início</a>
        <a className="nav__description">Sobre Nós</a>
        <a className="nav__description">Contatos</a>
      </nav>
    </header>
  );
}
