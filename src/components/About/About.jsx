export default function About() {
  return (
    <section className="about">
      <h2 className="about__title">Sobre Nós</h2>
      <div className="about__grid">
        <div className="about__principles">
          <img
            src="./src/images/missao-icone.png"
            className="principles__icon"
          />
          <h3 className="priciples__title">Missão</h3>
          <p className="priciples__description">
            Promover a saúde mental, o autoconhecimento e o desenvolvimento de
            potencialidades através de atendimento especializado e humanizado.
          </p>
        </div>
        <div className="about__principles">
          <img
            src="./src/images/visao-icone.png"
            className="principles__icon"
          />
          <h3 className="priciples__title">Visão</h3>
          <p className="priciples__description">
            Ser referência em saúde mental, sendo a escolha preferencial para
            pacientes, profissionais e a comunidade.
          </p>
        </div>
        <div className="about__principles">
          <img
            src="./src/images/valores-icone.png"
            className="principles__icon"
          />
          <h3 className="priciples__title">Valores</h3>
          <p className="priciples__description">
            Busca contínua por aprimoramento profissional e qualidade dos
            serviços prestados.
          </p>
        </div>
      </div>
    </section>
  );
}
