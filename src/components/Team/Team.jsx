import { useRef } from "react";
import setaEsq from "../../images/seta-esq-icon.svg";
import setaDir from "../../images/seta-dir-icon.svg";
import { cardsData } from "../../data/teamData";

export default function Team() {
  const trackRef = useRef(null);

  // calcula o tamanho exato de 1 card + gap
  const getScrollAmount = () => {
    const card = trackRef.current.querySelector(".team__card");

    if (!card) return 0;

    const cardWidth = card.offsetWidth;

    // pega o gap real do CSS (melhor que fixo 👇)
    const styles = window.getComputedStyle(trackRef.current);
    const gap = parseInt(styles.columnGap || styles.gap || 0);

    return cardWidth + gap;
  };

  const scrollLeft = () => {
    trackRef.current.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  };

  return (
    <section className="team reveal" id="team">
      <div className="team__start reveal">
        <h2 className="team__top reveal">Profissionais</h2>
      </div>

      <h3 className="team__title reveal">Nossa Equipe</h3>

      <p className="team__subtitle reveal">
        Conheça os profissionais dedicados que fazem parte da nossa clínica,
        todos comprometidos com o seu bem-estar e desenvolvimento pessoal.
      </p>

      <div className="team__carousel reveal">
        <button className="team__arrow" onClick={scrollLeft}>
          <img className="team__arrow-left" src={setaEsq} alt="Anterior" />
        </button>

        <div className="team__cards reveal" ref={trackRef}>
          {cardsData.map((card) => (
            <div className="team__card" key={card.id}>
              <div className="team-card__back">
                <img
                  className="person__photo"
                  src={card.photo}
                  alt={card.title}
                />
              </div>
              <div className="card__tag">
                <p className="person__work">{card.work}</p>
              </div>
              <h4 className="person__name">{card.title}</h4>
              <p className="person__document">{card.document}</p>
              <p className="person__skills">{card.skills}</p>
            </div>
          ))}
        </div>

        <button className="team__arrow" onClick={scrollRight}>
          <img className="team__arrow-right" src={setaDir} alt="Próximo" />
        </button>
      </div>
    </section>
  );
}
