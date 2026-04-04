import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { specialitiesData } from "../../data/specialitiesData";

export default function Services() {
  useRevealOnScroll();

  return (
    <section className="specialities reveal" id="specialities">
      <div className="specialities__start reveal">
        <h2 className="specialities__top reveal">Nossos Serviços</h2>
      </div>

      <h3 className="specialities__title reveal">Especialidades</h3>

      <p className="specialities__subtitle reveal">
        Oferecemos uma variedade de serviços especializados para atender às suas
        necessidades de saúde mental com profissionalismo e acolhimento.
      </p>

      <div className="specialities__grid reveal">
        {specialitiesData.map((specialitie) => (
          <div className="specialities-card reveal" key={specialitie.id}>
            <div className="specialities-card__circle">
              <img
                className="specialities-card__icon"
                src={specialitie.icon}
                alt={specialitie.title}
              />
            </div>

            <h3 className="specialities-card__title">{specialitie.title}</h3>

            <p className="specialities-card__description">
              {specialitie.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
