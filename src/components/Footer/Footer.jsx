export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__adress">
        <img
          className="footer__icon adress__icon"
          src="./src/images/adress-icon.png"
        />
        <p className="footer__description">
          Rua do Genipapeiro, 970 - Caçari<br></br>Boa Vista - RR
        </p>
      </div>
      <div className="footer__instagram">
        <img className="footer__icon" src="./src/images/instagram-icon.png" />
        <p className="footer__description">@clinicajussarabarbosa</p>
      </div>
      <div className="footer__whatsapp">
        <img className="footer__icon" src="./src/images/whatsapp-icon.png" />
        <p className="footer__description">(95) 99967-7633</p>
      </div>
    </footer>
  );
}
