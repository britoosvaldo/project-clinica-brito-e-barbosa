import { useState, useEffect } from "react";
import jussaraLogo from "../../images/jussara-logo.svg";
import britoLogo from "../../images/brito-e-barbosa-logo.png";
import raciocinioLogo from "../../images/raciocinio-logo.svg";

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
      <div
        className={`nav__overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`nav ${isOpen ? "nav--open" : ""} ${isScrolled ? "nav--scrolled" : ""}`}
      >
        <div className="nav__logos">
          <img className="nav__logo1" src={jussaraLogo} alt="Logo" />
          <img className="nav__logo2" src={britoLogo} alt="Logo" />
          <img className="nav__logo3" src={raciocinioLogo} alt="Logo" />
        </div>

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
              href="#specialities"
              onClick={() => setIsOpen(false)}
            >
              Especialidades
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#team"
              onClick={() => setIsOpen(false)}
            >
              Nossa Equipe
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#footer"
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
              <button
                className="nav__link nav__button"
                onClick={() =>
                  window.open(
                    "https://wa.me/5595999677633?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento",
                    "_blank",
                  )
                }
              >
                Agendar Consulta
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
