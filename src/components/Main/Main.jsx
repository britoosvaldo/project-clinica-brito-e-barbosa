import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import arrowIcon from "../../images/arrow-icon.svg";
import fotoMain from "../../images/foto-main.svg";

export default function Main() {
  useRevealOnScroll();

  return (
    <main className="main" style={{ "--delay": "0ms" }}>
      <img className="main__photo" src={fotoMain}></img>
      <h1 className="main__title">
        Cuidar da <span>Saúde Mental</span> é Cuidar da Vida
      </h1>
      <p className="main__subtitle">
        A saúde mental influencia diretamente nossa forma de pensar, sentir,
        agir e nos relacionar. Por isso, em nossa clínica, adotamos um olhar
        integrado do funcionamento cognitivo, emocional e comportamental,
        compreendendo cada pessoa de maneira única para promover intervenções
        mais eficazes e humanizadas.
        <br />
        <br />
        Atendemos todas as faixas etárias — da primeira infância à terceira
        idade — respeitando as necessidades e particularidades de cada etapa da
        vida.Atendemos todas as faixas etárias — da primeira infância à terceira
        idade — respeitando as necessidades e particularidades de cada etapa da
        vida.Nossa equipe é pautada na ética, na ciência e na excelência do
        cuidado, oferecendo um atendimento acolhedor, qualificado e comprometido
        com o bem-estar, o desenvolvimento e a qualidade de vida de cada
        paciente.
      </p>
      <div className="main__buttons">
        <button
          className="main__bt-budget"
          onClick={() =>
            window.open(
              "https://wa.me/5595999677633?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento",
              "_blank",
            )
          }
        >
          Agendar Atendimento
          <img className="bt__icon" src={arrowIcon} />
        </button>
        <button className="main__bt-specialities">
          Conhecer Especialidades
        </button>
      </div>
    </main>
  );
}
