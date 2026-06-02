import Phubbom from "@public/sprint5_dsi_app.svg";
import Shirts from "@public/sprint5_shirts.svg";
import Sprint5Visual from "@public/sprint_5_visual.svg";
import TestingPhubbom from "@public/sprint5_interview.svg";
import Image from "next/image";
import type React from "react";
import type { JSX } from "react";
import SprintLayout, { SprintDivider } from "@/components/common/SprintLayout";

const Sprint5: () => React.JSX.Element = (): JSX.Element => {
  return (
    <SprintLayout
      sprintNumber={5}
      timelineLabel="Eindfase"
      visual={<Image src={Sprint5Visual} alt="Sprint 5 Visual" className="sprint-layout__visual" />}
      footerTitle="Klaar voor de expositie"
      footerContent={
        <p>
          Dat was het dan. Na vijf sprints, een hackathon en heel veel iteraties staat de Phubbom
          klaar om gepresenteerd te worden. Ben je benieuwd naar wat er nog mogelijk is met ons
          concept en prototype? Klik op het icoontje naast Sprint 5 voor ons advies aan
          vervolgteams.
        </p>
      }
    >
      <div className="sprint5__col">
        <h4>Usability verbeteringen verwerken</h4>
        <p>
          Na de sprintreview van sprint 4 hebben we de ontvangen feedback geanalyseerd en verwerkt
          in concrete verbeteringen. Voor de webapplicatie zijn thema's toegevoegd zodat gebruikers
          vooraf kunnen kiezen welk type vragen ze willen: luchtige PG-13 vragen, wetenschappelijke
          vragen of spicier materiaal. Hierdoor sluit het spel nog beter aan bij de sfeer en
          voorkeuren van de groep op dat moment.
        </p>
        <p>
          Daarnaast is de one-pager flink aangescherpt. De werking van het prototype is duidelijker
          beschreven, third spaces zijn explicieter benoemd als de context waarvoor de Phubbom
          bedoeld is, en de belangrijkste inzichten zijn toegevoegd als insight cards. Het doel was
          om ons concept zo helder en overdraagbaar mogelijk te maken voor iedereen die hem voor het
          eerst ziet.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={5} />

      <Image src={Phubbom} alt="Phubbom" width={429} height={337} className="sprint5__image" />

      <div className="sprint5__col sprint5__col--image-container">
        <Image
          src={Shirts}
          alt="Sprint 5 shirts"
          width={429}
          height={337}
          className="sprint5__image"
        />
      </div>

      <SprintDivider direction="right" sprintNumber={5} />

      <div className="sprint5__col">
        <h4>Testen bij jongerenhub SOL</h4>
        <p>
          In sprint 5 zijn we langs geweest bij Jongerenhub SOL in Lombardijen, met dank aan Gio
          Doemoeng. Daar hebben we de Phubbom getest met een grote groep van ongeveer 20 studenten.
          Ze hebben het spel gespeeld en daarna feedback gegeven op basis van gerichte vragen die
          wij hadden voorbereid. Dit leverde waardevolle inzichten op vanuit de doelgroep zelf, in
          precies de setting waarvoor de Phubbom is ontworpen.
        </p>
      </div>

      <div className="sprint5__col">
        <h4>De laatste loodjes</h4>
        <p>
          Sprint 5 stond verder in het teken van alles afronden. Het onderzoeksrapport, de
          onderzoeksposter en alle overige documentatie zijn afgemaakt en overdraagbaar gemaakt voor
          eventuele vervolgteams. De One-Pager is in zijn definitieve vorm gezet en de voorbereiding
          voor de eindexpositie van 4 juni is in volle gang.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={5} />

      <Image
        src={TestingPhubbom}
        alt="Testen van de Phubbom"
        width={429}
        height={337}
        className="sprint5__image"
      />
    </SprintLayout>
  );
};

export default Sprint5;
