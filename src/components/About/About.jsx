import missaoIcon from "../../images/missao-icon.svg";
import visaoIcon from "../../images/visao-icon.svg";
import valoresIcon from "../../images/valores-icon.svg";

export default function About() {
  return (
    <section className="about">
      <div className="about__start">
        <h2 className="about__top">Conheça-nos</h2>
      </div>

      <h3 className="about__title">Sobre Nós</h3>

      <p className="about__subtitle reveal">
        Nossa clínica foi criada com o propósito de oferecer um espaço acolhedor
        e seguro para o cuidado da saúde mental.
      </p>

      <div className="about__grid">
        <div className="about-card">
          <div className="about-card__circle">
            <img src={missaoIcon} className="about-card__icon" />
          </div>
          <h3 className="about-card__title">Missão</h3>
          <p className="about-card__description">
            Promover a saúde mental, o autoconhecimento e o desenvolvimento de
            potencialidades através de atendimento especializado e humanizado.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card__circle">
            <img src={visaoIcon} className="about-card__icon" />
          </div>
          <h3 className="about-card__title">Visão</h3>
          <p className="about-card__description">
            Ser referência em saúde mental, sendo a escolha preferida dos
            pacientes, profissionais e comunidade por nossa excelência e
            cuidado.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card__circle">
            <img src={valoresIcon} className="about-card__icon" />
          </div>
          <h3 className="about-card__title">Valores</h3>
          <p className="about-card__description">
            Busca contínua por aprimoramento, comprometimento com a ética,
            respeito à individualidade e excelência dos serviços prestados.
          </p>
        </div>

        <div className="about-highlights">
          <h3>Por que nos escolher?</h3>
          <p>
            Com anos de experiência no cuidado da saúde mental, nossa equipe é
            formada por profissionais altamente qualificados e comprometidos com
            o seu bem-estar.
          </p>
          <ul>
            <li>Ambiente humanizado e personalizado</li>
            <li>Ambiente acolhedor e confortável</li>
            <li>Equipe multidisciplinar especializada</li>
            <li>Sigilo e ética profissional</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
