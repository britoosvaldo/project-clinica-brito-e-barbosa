import "./Footer.css";
import mapIcon from "../../images/map-icon.svg";
import phoneIcon from "../../images/phone-icon.svg";
import mailIcon from "../../images/mail-icon.svg";
import clockIcon from "../../images/clock-icon.svg";
import logo1 from "../../images/logo1.svg";
import logo2 from "../../images/logo2.svg";
import logo3 from "../../images/logo3.svg";
import whatsIcon from "../../images/whatsapp-icon.svg";
import instaIcon from "../../images/instagram-icon.svg";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__logos">
            <img src={logo1} alt="Logo 1" className="footer__logo" />
            <img src={logo2} alt="Logo 2" className="footer__logo" />
            <img src={logo3} alt="Logo 3" className="footer__logo" />
          </div>

          <p className="footer__description">
            Cuidando da sua saúde emocional com profissionalismo, acolhimento e
            atendimento humano para você viver com mais leveza e equilíbrio.
          </p>

          <div className="footer__socials">
            <a
              href="https://wa.me/5595999677633?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento"
              className="footer__social"
              aria-label="WhatsApp"
            >
              <img src={whatsIcon} className="footer__social-icon" alt="" />
            </a>

            <a
              href="https://www.instagram.com/clinicajussarabarbosa/"
              className="footer__social"
              aria-label="Instagram"
            >
              <img src={instaIcon} className="footer__social-icon" alt="" />
            </a>
          </div>
        </div>

        <div className="footer__right">
          <h3 className="footer__title">Contato</h3>

          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <img src={mapIcon} className="footer__icon" />
              <a
                href="https://maps.app.goo.gl/eN9AEXKzvsocSvoG9"
                className="footer__adress"
              >
                <span>
                  Rua do Genipapeiro, 970 - Caçari
                  <br />
                  Boa Vista - RR
                </span>
              </a>
            </li>

            <li className="footer__contact-item">
              <img src={phoneIcon} className="footer__icon" />
              <span>(95) 99967-7633</span>
            </li>

            <li className="footer__contact-item">
              <img src={mailIcon} className="footer__icon" />
              <span>contato@email.com</span>
            </li>

            <li className="footer__contact-item">
              <img src={clockIcon} className="footer__icon" />
              <span>Seg - Sex: 08h às 20h</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
