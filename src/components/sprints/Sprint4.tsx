import React, {type JSX} from 'react';
import Image from 'next/image';
import Sprint3Visual from '@public/sprint_3_visual.svg';
import Gigamapping from '@public/gigamapping.svg';
import PhubbomConcept from '@public/phubbom_eerste_concept.svg';
import TestingPhubbom from '@public/testing_phubbom_prototyping.svg';
import FlowerIcon from '@public/flower.svg';
import SprintLayout, {SprintDivider} from "@/components/common/SprintLayout";

const Sprint4: () => React.JSX.Element = (): JSX.Element => {
  return (
    <SprintLayout
      sprintNumber={3}
      timelineLabel="Ideation, Create & Testing fase"
      visual={<Image src={Sprint3Visual} alt="Sprint 3 Visual" className="sprint-layout__visual"/>}
      footerTitle="Klaar voor de volgende stap"
      footerContent="In de komende sprint gaan we het prototype technisch en visueel verder verfijnen. We gaan beslissen hoe we de vragenlijsten automatiseren , bijvoorbeeld via een vaste database of een dynamische AI-koppeling. Daarnaast zullen we werken aan de definitieve vormgeving van de fysieke bom inclusief ingebouwde speaker. Alles staat nu in het teken van de laatste validatieslagen bij onze praktijkpartners en de voorbereiding op de tussentijdse expositie van 23 april. We zijn klaar om te laten zien hoe we de sociale norm in Rotterdam stap voor stap terugwinnen op de smartphone."
    >
      <div className="sprint3__col">
        <h4>Van gespreksstarter naar gedragsbreker</h4>
        <p>
          Na de evaluatie van Sprint 2 hebben we een belangrijke koerswijziging doorgevoerd. Waar ons vorige prototype,
          het ‘Tussenonsje’, zich richtte op het initiëren van nieuwe gesprekken, merkten we dat dit onvoldoende effect
          had op het daadwerkelijke moment van phubbing. Onze aangescherpte focus ligt nu op het direct onderbreken van
          de digitale reflex. We willen de persoon die phubt niet alleen bewustmaken, maar fysiek en speels terugbrengen
          in de lopende sociale interactie.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={3}/>

      <div className="sprint3__col sprint3__col--image-container">
        <Image src={Gigamapping} alt="Gigamapping" width={429} height={337} className="sprint3__image"/>
        <Image src={FlowerIcon} alt="" className="sprint3__flower-decoration"/>
      </div>

      <div className="sprint3__col sprint3__col--image-container">
        <Image src={PhubbomConcept} alt="Eerste concept Phubbom" width={429} height={337} className="sprint3__image"/>
        <Image src={FlowerIcon} alt="" className="sprint3__flower-decoration"/>
      </div>

      <SprintDivider direction="right" sprintNumber={3}/>

      <div className="sprint3__col">
        <h4>Prototype: De Phubbom</h4>
        <p>
          Deze nieuwe visie heeft geleid tot de ontwikkeling van nieuwe prototype. Dit is een hybride prototype in de
          vorm van een speelgoedbom die passief op tafel ligt tijdens het samenzijn in zogeheten Third Spaces. Zodra
          iemand naar zijn telefoon grijpt, wordt de bom door de groep geactiveerd en bij de phubber geplaatst. Er start
          direct een hoorbare timer en een uitdagende challenge (bijv. &#34;Noem 5 metrostations in Rotterdam&#34;). De
          combinatie van tijdsdruk, adrenaline en lichte sociale druk dwingt de phubber om de telefoon weg te leggen en
          de focus terug te leggen bij de vriendengroep.
        </p>
      </div>

      <div className="sprint3__col">
        <h4>Testen</h4>
        <p>
          We hebben het prototype inmiddels meerdere keren getest, onder andere tijdens informele sessies op het terras.
          De resultaten zijn veelbelovend: in alle gevallen werd de smartphone direct weggelegd en verschoof de aandacht
          terug naar het groepsgesprek. Een belangrijk inzicht was dat de interventie de digitale reflex (zoals het
          reageren op Snapchat-meldingen) effectief blokkeert. Wel kregen we waardevolle feedback over de
          &#39;interventie-moeheid&#39;; als de bom te vaak achter elkaar afgaat, kan dit als vermoeiend worden ervaren. Ook het
          geluidsniveau in drukke publieke ruimtes is een technisch aandachtspunt voor de volgende iteratie.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={3}/>

      <div className="sprint3__col sprint3__col--image-container">
        <Image src={TestingPhubbom} alt="Testen van prototype" width={429} height={337} className="sprint3__image"/>
        <Image src={FlowerIcon} alt="" className="sprint3__flower-decoration"/>
      </div>
    </SprintLayout>
  );
};

export default Sprint4;
