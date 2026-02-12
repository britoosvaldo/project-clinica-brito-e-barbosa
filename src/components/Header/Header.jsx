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
      <ul className="nav__links">
        <li>
          <a className="nav__link" href="#about">
            Início
          </a>
        </li>
        <li>
          <a className="nav__link" href="#projects">
            Especialidades
          </a>
        </li>
        <li>
          <a className="nav__link" href="#contacts">
            Sobre Nós
          </a>
        </li>
        <li>
          <a className="nav__link" href="#contacts">
            Nossa Equipe
          </a>
        </li>
        <li>
          <button className="nav__link nav__button">Agendar Consulta</button>
        </li>
      </ul>
    </header>
  );
}
