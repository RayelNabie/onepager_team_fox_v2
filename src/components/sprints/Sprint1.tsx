import FlowerIcon from "@public/flower.svg";
import FoxVisualResearch from "@public/fox_visual_research.svg";
import InterviewSol from "@public/interview_sol.svg";
import Sprint1Visual from "@public/sprint_1_visual.svg";
import StakeholderMap from "@public/stakeholdermap.svg";
import Image from "next/image";
import type React from "react";
import type { JSX } from "react";
import SprintLayout, { SprintDivider } from "../common/SprintLayout";

const Sprint1: () => React.JSX.Element = (): JSX.Element => {
  return (
    <SprintLayout
      sprintNumber={1}
      timelineLabel="Onderzoek & Phubbing"
      visual={<Image src={Sprint1Visual} alt="Sprint 1 Visual" className="sprint-layout__visual" />}
      footerTitle="Klaar voor de volgende stap"
      footerContent="Nu we onze thema's en partners scherp hebben, zijn we klaar om onze aannames te testen. Door middel van 'probing' gaan we informatie verzamelen bij jongeren in de praktijk om te ontdekken hoe zij phubbing ervaren. Tegelijkertijd beginnen we met het maken van een low-fidelity prototype om onze eerste ideeën voor een passende oplossing vorm te geven."
    >
      <div className="sprint1__col">
        <h4>De koers bepalen: Welke kant gaan we op?</h4>
        <p>
          Na de vliegende start in Sprint 0 wisten we één ding zeker: we wilden de drempel voor
          sociale connectie verlagen. Maar wat betekent dat eigenlijk precies? Al snel merkten we
          dat iedereen binnen Team Fox daar een ander beeld bij had. Om niet in het wilde weg te
          gaan ontwerpen, is ieder teamlid individueel op onderzoek gegaan naar een potentieel
          onderwerp binnen dit thema. Er kwamen interessante richtingen voorbij, zoals onderzoek
          naar eenzaamheid en isolatie door social media, het verbeteren van veiligheid tegen
          doomscrolling en de algemene digitale veiligheid van kinderen.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={1} />

      <div className="sprint1__col">
        <Image
          src={FoxVisualResearch}
          alt="Visual Research"
          className="sprint1__image sprint1__image--research"
        />
      </div>

      <div className="sprint1__col sprint1__col--image-container">
        <Image
          src={InterviewSol}
          alt="Interview met SOL"
          width={429}
          height={337}
          className="sprint1__image sprint1__image--interview"
        />
        <Image src={FlowerIcon} alt="" className="sprint1__flower-decoration" />
      </div>

      <SprintDivider direction="right" sprintNumber={1} />

      <div className="sprint1__col">
        <h4>Onze nieuwe partners: Gro-Up en SOL</h4>
        <p>
          We bleven niet alleen achter ons bureau zitten, maar zochten contact met experts van
          Gro-Up en SOL. Zij gaven ons waardevolle inzichten uit de praktijk. Zo hoorden we dat
          kinderen in Rotterdam-Zuid gemiddeld al op hun 10e een telefoon krijgen. Ook bleek dat
          maar 1 op de 5 ouders hun kind leert hoe ze verantwoord met een telefoon omgaan. Deze
          organisaties waren zo enthousiast dat ze officieel onze partners zijn geworden voor het
          verdere traject!
        </p>
      </div>

      <div className="sprint1__col">
        <h4>De winnaar: Phubbing!</h4>
        <p>
          Na een gezamenlijke brainstorm en een spannende stemronde kwam er een duidelijke winnaar
          uit de bus: Phubbing. Dit is een combinatie van de woorden &apos;phone&apos; en
          &apos;snubbing&apos; en houdt in dat je iemand in een sociale situatie negeert door op je
          telefoon te kijken. We besloten ons specifiek te richten op jongeren tussen de 12 en 18
          jaar in de jongerenhubs van Rotterdam-Zuid.
        </p>

        <h4>Onze vier thema&apos;s</h4>
        <p>
          Om het probleem echt goed te begrijpen, hebben we het opgedeeld in vier belangrijke
          onderzoeksthema&apos;s:
        </p>
        <ul>
          <li>
            <strong>Negatieve Gevolgen en Sociale impact:</strong> Hoe phubbing zorgt voor sociale
            uitsluiting en de kwaliteit van gesprekken omlaag haalt.
          </li>
          <li>
            <strong>Sociale Angst en de Drang:</strong> Waarom grijpen we reflexmatig naar die
            telefoon? We kijken hierbij naar de rol van dopamine-prikkels en sociale angst.
          </li>
          <li>
            <strong>De Impact van de Thuissituatie:</strong> Hoe ouders als rolmodel fungeren en hoe
            een mogelijke cultuurkloof jongeren soms juist richting online verbinding drijft.
          </li>
          <li>
            <strong>Oplossingsrichting:</strong> Het identificeren van effectieve interventies die
            de reflexmatige drang doorbreken en de actieve betrokkenheid stimuleren.
          </li>
        </ul>
      </div>

      <SprintDivider direction="left" sprintNumber={1} />

      <div className="sprint1__col">
        <Image
          src={StakeholderMap}
          alt="Stakeholdermap"
          className="sprint1__image sprint1__image--stakeholdermap"
        />
      </div>
    </SprintLayout>
  );
};

export default Sprint1;
