import { useState, useEffect } from "react";
import mpLogo from "../../images/brito-e-barbosa-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav
        className={`nav ${isOpen ? "nav--open" : ""} ${isScrolled ? "nav--scrolled" : ""}`}
      >
        <img className="nav__logo" src={mpLogo} alt="Logo" />

        <button
          type="button"
          className="nav__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="nav__bar" />
          <span className="nav__bar" />
          <span className="nav__bar" />
        </button>

        <ul className="nav__links">
          <li>
            <a
              className="nav__link"
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Início
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#services"
              onClick={() => setIsOpen(false)}
            >
              Especialidades
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              Nossa Equipe
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#contacts"
              onClick={() => setIsOpen(false)}
            >
              Contatos
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={() => setIsOpen(false)}
              style={{ textDecoration: "none" }}
            >
              <button className="nav__link nav__button">
                Agendar Consulta
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
