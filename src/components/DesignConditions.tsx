"use client";

import PinkLine from "@public/pink_line.svg";
import Image from "next/image";
import type { JSX } from "react";
import useDesignConditionsAnimation from "@/hooks/useDesignConditionsAnimation";
import type DesignConditionsInterface from "@/types/DesignConditionsInterface";

const conditions: DesignConditionsInterface[] = [
  {
    title: "Hybride karakter",
    text: "De oplossing mag niet uitsluitend uit een digitaal platform of een app bestaan.",
  },
  {
    title: "Toepasbaarheid in openbare ruimtes",
    text: "Het product moet bruikbaar zijn in een drukke omgeving, maar mag niet voor geluids- of lichtoverlast zorgen voor andere gasten.",
  },
  {
    title: "Toegankelijkheid",
    text: "De opdrachten moeten bruikbaar zijn voor jongeren van elk taalniveau. ",
  },
  {
    title: "Veiligheid",
    text: "De interventie moet een sociaal veilige omgeving bieden voor de gebruikers en mag geen persoonlijke gegevens opslaan of interacties veroorzaken die deelnemers kunnen kwetsen of uitsluiten.",
  },
  {
    title: "Duurzaamheid",
    text: "Het product moet geschikt zijn voor langdurig en herhaaldelijk gebruik door verschillende groepen en mag geen materialen bevatten die na één keer spelen opraken.",
  },
  {
    title: "Technische & Organisatorische Realisatie",
    text: "Het product moet uiterlijk op 4 juni op de eindexpositie staan met een werkende demonstratie.",
  },
];

const DesignConditions = (): JSX.Element => {
  const containerRef = useDesignConditionsAnimation();

  return (
    <section className="design-conditions">
      {/* Pink Wiggle */}
      <div className="situations__wiggles" aria-hidden="true">
        <Image
          src={PinkLine}
          alt=""
          className="design-conditions__wiggle design-conditions__wiggle--pink"
        />
      </div>

      {/* Design conditions */}
      <div className="design-conditions__container" ref={containerRef}>
        <h2 className="design-conditions__title">Randvoorwaarden</h2>
        <div className="design-conditions__list">
          {conditions.map(
            (item: DesignConditionsInterface, _index: number): JSX.Element => (
              <div className="design-conditions__condition" key={item.title}>
                <h4 className="design-conditions__condition-title">{item.title}</h4>
                <p className="design-conditions__condition-text">{item.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignConditions;
