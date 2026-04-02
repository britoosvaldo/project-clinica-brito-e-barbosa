import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import arrowIcon from "../../images/arrow-icon.svg";

export default function Main() {
  useRevealOnScroll();

  return (
    <main className="main" style={{ "--delay": "0ms" }}>
      <img className="main__photo" src="./src/images/header-img.png"></img>
      <h1 className="main__title">
        Importância da <span>Saúde Mental</span>
      </h1>
      <p className="main__subtitle">
        A saúde mental é um dos pilares fundamentais para uma vida equilibrada.
        Ela influencia diretamente nossa capacidade de lidar com emoções,
        enfrentar desafios, manter relacionamentos saudáveis e tomar decisões
        conscientes. Quando cuidamos da mente, fortalecemos nossa autoestima,
        ampliamos nossa clareza emocional e criamos espaço para viver com mais
        leveza, foco e bem-estar.
        <br />
        <br />
        Assim como cuidamos do corpo, também precisamos dedicar atenção à mente.
        Buscar apoio psicológico, praticar o autocuidado e reconhecer nossos
        limites são atitudes essenciais para prevenir o adoecimento emocional.
        Investir na saúde mental não é sinal de fraqueza, mas sim de coragem e
        maturidade — é um ato de amor consigo mesmo.
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
