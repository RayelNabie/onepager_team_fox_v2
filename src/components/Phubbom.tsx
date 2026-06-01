import type { JSX } from "react";
import Image from "next/image";
import PhubbomVisual from "@public/phubbom_visual.svg";

const Phubbom = (): JSX.Element => {
  return (
    <section className="phubbom">
      <div className="phubbom__content">
        {/* Phubbing */}
        <h2 className="phubbom__title">De Phubbom</h2>
        <div className="phubbom__description">
          <p className="phubbom__subtitle">
            <b>
              De Phubbom is een fysiek object dat phubbing doorbreekt op het moment dat het gebeurt.
              Het is bedoeld voor jongvolwassenen die samen zijn in een third space, zoals een
              terras, een jongerenhub of een café.
            </b>
          </p>
          <p className="phubbom__text">
            Het spel werkt simpel. Voordat de groep samenkomt, opent degene die de Phubbom meeneemt
            de webapplicatie en voert de interesses van de groep in, bijvoorbeeld voetbal, muziek of
            reizen. De AI genereert op basis daarvan een unieke set vragen die volledig zijn
            afgestemd op de groep. Zo zijn de vragen elke keer anders en altijd herkenbaar voor wie
            meedoet.
          </p>
          <p className="phubbom__text">
            De bom ligt op tafel. Zodra iemand zijn telefoon pakt en afdwaalt uit het gesprek,
            schuift een vriend(in) de bom naar diegene toe. De persoon die de bom vasthoudt hoort
            via de speaker een vraag én een aftellende timer. Diegene geeft een antwoord en geeft de
            bom snel door aan de volgende persoon. Iedereen geeft een uniek antwoord en de bom
            blijft rouleren. De tijdsdruk van de timer en het geluid van de aftellende bom zorgen
            voor spanning en oplettendheid. Degene bij wie de bom afgaat heeft verloren, waarna het
            gesprek gewoon verdergaat. Phubt iemand opnieuw, dan herhaal je het spel.
          </p>
          <p className="phubbom__text">
            De Phubbom haalt mensen terug naar het gesprek, zodat ze even hun telefoon vergeten en
            elkaar weer écht horen.
          </p>
        </div>
        {/* Flower */}
        <div className="phubbom__animation">
          <Image src={PhubbomVisual} alt="De phubbom" className="phubbom__animation-image" />
        </div>
      </div>
    </section>
  );
};

export default Phubbom;
