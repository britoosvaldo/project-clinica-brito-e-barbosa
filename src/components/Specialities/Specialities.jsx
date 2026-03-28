import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { specialitiesData } from "../../data/specialitiesData";

export default function Services() {
  useRevealOnScroll();

  return (
    <section className="specialities" id="specialities">
      <div className="specialities__start reveal">
        <h2 className="specialities_top">Nossos Serviços</h2>
      </div>

      <h3 className="specialities__title">Especialidades</h3>

      <p className="specialities__subtitle reveal">
        Oferecemos uma variedade de serviços especializados para atender às suas
        necessidades de saúde mental com profissionalismo e acolhimento.
      </p>

      <div className="specialities__grid">
        {specialitiesData.map((specialitie) => (
          <div className="specialities__card reveal" key={specialitie.id}>
            <img
              className="specialities-card__icon"
              src={specialitie.icon}
              alt={specialitie.title}
            />
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
