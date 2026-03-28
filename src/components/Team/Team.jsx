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
    <section className="team">
      <h3 className="team__title">Nossa Equipe</h3>

      <div className="team__carousel">
        <button className="team__arrow team__arrow--left" onClick={scrollLeft}>
          <img src="./src/images/seta-esquerda.png" />
        </button>

        <div className="team__cards" ref={trackRef}>
          <div className="team__card">
            <img className="person__photo" src="./src/images/jussara.png" />
            <h4 className="person__name">Jussara Barbosa</h4>
            <p className="person__document">CRP ...</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>

          <div className="team__card">
            <img className="person__photo" src="./src/images/gabi.png" />
            <h4 className="person__name">Gabrielle Brito</h4>
            <p className="person__document">CRP 20/12029</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>
          <div className="team__card">
            <img className="person__photo" src="./src/images/gabi.png" />
            <h4 className="person__name">Gabrielle Brito</h4>
            <p className="person__document">CRP 20/12029</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>
          <div className="team__card">
            <img className="person__photo" src="./src/images/gabi.png" />
            <h4 className="person__name">Gabrielle Brito</h4>
            <p className="person__document">CRP 20/12029</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>
          <div className="team__card">
            <img className="person__photo" src="./src/images/gabi.png" />
            <h4 className="person__name">Gabrielle Brito</h4>
            <p className="person__document">CRP 20/12029</p>
            <p className="person__skills">
              Neuropsicóloga<br></br>TCC
            </p>
          </div>
        </div>
        <button
          className="team__arrow team__arrow--rigth"
          onClick={scrollRight}
        >
          <img src="./src/images/seta-direita.png" />
        </button>
      </div>
    </section>
  );
}
