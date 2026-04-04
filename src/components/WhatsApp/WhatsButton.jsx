import whatsIcon from "../../images/whatsapp-icon.svg";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5595999677633?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src={whatsIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
}
