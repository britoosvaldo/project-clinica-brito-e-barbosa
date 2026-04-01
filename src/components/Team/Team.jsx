import { useRef } from "react";

export default function Team() {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    trackRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="team" id="team">
      <div className="team__start">
        <h2 className="team__top">Profissionais</h2>
      </div>

      <h3 className="team__title">Nossa Equipe</h3>

      <p className="team__subtitle ">
        Conheça os profissionais dedicados que fazem parte da nossa clínica,
        todos comprometidos com o seu bem-estar e desenvolvimento pessoal.
      </p>

      <div className="team__carousel">
        <button className="team__arrow" onClick={scrollLeft}>
          <img
            className="team__arrow-left"
            src="./src/images/seta-esquerda.png"
          />
        </button>

        <div className="team__cards" ref={trackRef}>
          <div className="team__card">
            <div className="team-card__back">
              <img className="person__photo" src="./src/images/jussara.png" />
            </div>
            <h4 className="person__name">Jussara Barbosa</h4>
            <p className="person__document">CRP ...</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>

          <div className="team__card">
            <div className="team-card__back">
              <img className="person__photo" src="./src/images/gabi.png" />
            </div>
            <h4 className="person__name">Gabrielle Brito</h4>
            <p className="person__document">CRP 20/12029</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>
          <div className="team__card">
            <div className="team-card__back">
              <img className="person__photo" src="./src/images/gabi.png" />
            </div>
            <h4 className="person__name">Gabrielle Brito</h4>
            <p className="person__document">CRP 20/12029</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>
          <div className="team__card">
            <div className="team-card__back">
              <img className="person__photo" src="./src/images/gabi.png" />
            </div>
            <h4 className="person__name">Gabrielle Brito</h4>
            <p className="person__document">CRP 20/12029</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>
          <div className="team__card">
            <div className="team-card__back">
              <img className="person__photo" src="./src/images/gabi.png" />
            </div>
            <h4 className="person__name">Gabrielle Brito</h4>
            <p className="person__document">CRP 20/12029</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>
        </div>
        <button className="team__arrow" onClick={scrollRight}>
          <img
            className="team__arrow-right"
            src="./src/images/seta-direita.png"
          />
        </button>
      </div>
    </section>
  );
}
