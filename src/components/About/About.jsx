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

        <div className="about-high">
          <div className="about-high__informations">
            <h3 className="about-high__title">Por que nos escolher?</h3>
            <p className="about-high__subtitle">
              Com anos de experiência no cuidado da saúde mental, nossa equipe é
              formada por profissionais altamente qualificados e comprometidos
              com o seu bem-estar.
            </p>
            <ul className="about-high__list">
              <li className="about-high__item">
                Ambiente humanizado e personalizado
              </li>
              <li className="about-high__item">
                Ambiente acolhedor e confortável
              </li>
              <li className="about-high__item">
                Equipe multidisciplinar especializada
              </li>
              <li className="about-high__item">Sigilo e ética profissional</li>
            </ul>
          </div>
          <div className="about-high__cards">
            <div className="about-high__card">
              <h3 className="about-high__number">500+</h3>
              <p className="about-high__text">Pacientes Atendidos</p>
            </div>
            <div className="about-high__card">
              <h3 className="about-high__number">10+</h3>
              <p className="about-high__text">Anos de Experiência</p>
            </div>
            <div className="about-high__card">
              <h3 className="about-high__number">8+</h3>
              <p className="about-high__text">Especialidades</p>
            </div>
            <div className="about-high__card">
              <h3 className="about-high__number">100%</h3>
              <p className="about-high__text">Dedicação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
