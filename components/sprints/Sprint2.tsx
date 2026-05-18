import React from 'react';
import Image from 'next/image';
import Brainstormsessie from '../../public/brainstormsessie.svg';
import LiftExperiment from '../../public/lift_experiment.svg';
import PrototypeTussenonsje from '../../public/prototype_tussenonsje.svg';
import Sprint2Visual from '../../public/sprint_2_visual.svg';
import SprintLayout, {SprintDivider} from "../common/SprintLayout";

const Sprint2 = () => {
  return (
    <SprintLayout
      sprintNumber={2}
      timelineLabel="Ideation fase"
      visual={<Image src={Sprint2Visual} alt="Sprint 2 Visual" className="sprint-layout__visual"/>}
      footerTitle="Klaar voor de volgende stap"
      footerContent="In de volgende fase gaan we de resultaten van onze lopende enquêtes bij SOL en Gro-up verwerken om onze kwantitatieve onderbouwing te versterken. Daarnaast zullen we het 'Tussenonsje' verder itereren op basis van de A/B-testresultaten op school. Ons doel voor Sprint 3 is om de interventie zo te verfijnen dat deze de sociale norm in de stad weer een stapje richting echte, fysieke aandacht verschuift."
    >
      <div className="sprint2__col">
        <h4> De koerswijziging</h4>
        <p>
          Om het probleem echt goed te begrijpen, hebben we het opgedeeld in vier belangrijke onderzoeksthema&#39;s:
          Negatieve Gevolgen en Sociale Impact: Hoe phubbing zorgt voor sociale uitsluiting en de kwaliteit van
          gesprekken omlaag haalt.
          Sociale Angst en de Drang: Waarom grijpen we reflexmatig naar die telefoon? We keken hierbij naar de rol van
          dopamine-prikkels en sociale angst.
          De Impact van de Thuissituatie: Hoe ouders als rolmodel fungeren en hoe een mogelijke cultuurkloof jongeren
          soms juist richting online verbinding drijft.
          Oplossingsrichting: Het identificeren van effectieve interventies die de reflexmatige drang doorbreken en de
          actieve betrokkenheid stimuleren.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={2}/>

      <div className="sprint2__col">
        <Image src={Brainstormsessie} alt="Brainstormen" width={429}
               height={337} className="sprint2__image"/>
      </div>

      <div className="sprint2__col">
        <Image src={LiftExperiment} alt="UX Experiment" width={429}
               height={337} className="sprint2__image"/>
      </div>

      <SprintDivider direction="right" sprintNumber={2}/>

      <div className="sprint2__col">
        <h4>Het Liftexperiment</h4>
        <p>Om onze aannames over onbewust gedrag te toetsen, hebben we een uitgebreid experiment
          uitgevoerd in twee verschillende liftomgevingen binnen de Hogeschool Rotterdam. Het doel
          was
          om te onderzoeken hoe de fysieke aanwezigheid van een smartphone de sociale dynamiek
          beïnvloedt. We hebben hierbij twee verschillende scenario&apos;s getest:</p>
        <h4>Test 1</h4>
        <p>Terwijl wij als tweetal een gesprek voerden, observeerden we de reactie van de andere
          aanwezigen. Hieruit bleek dat mensen die op hun telefoon zaten vrijwel niets meekregen
          van
          de interactie naast hen, zij zaten volledig in hun eigen bubbel. Mensen zonder telefoon
          bleken daarentegen veel meer in het moment te zitten en de sociale signalen om hen heen
          op
          te vangen.</p>
        <h4>Test 2</h4>
        <p>In dit scenario gingen we zelf op onze telefoon zitten scrollen zodra er anderen de lift
          betraden. De resultaten waren opvallend: bijna alle proefpersonen grepen direct ook naar
          hun
          eigen smartphone. Dit bevestigde onze aanname dat de telefoon vaak wordt gebruikt als
          reflexmatige sociale buffer om ongemakkelijke stiltes te vermijden.</p>
      </div>

      <div className="sprint2__col">
        <h4>Prototype: &#39;Tussenonsje&#39;</h4>
        <p>
          Deze inzichten leidden tot ons eerste low-fidelity prototype: &#39;Tussenonsje&#39;. Dit
          is
          een
          fysiek interactiebord dat momenteel op de derde verdieping van locatie Wijnhaven staat.
          Met
          vragen die je aan het denken zetten en herkenbare situaties nudgen we studenten om hun
          gedachten te delen op post-its in plaats van te vluchten in hun scherm. Via een QR-code
          koppelen willen we dit koppelen aan een app-concept waar studenten zelf input kunnen
          geven
          voor nieuwe vragen. We testen momenteel of er meer behoefte is aan diepgaande
          persoonlijke
          vragen of aan laagdrempelige situaties waarin men elkaar om advies kan vragen.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={2}/>

      <div className="sprint2__col">
        <Image src={PrototypeTussenonsje} alt="Prototype" width={429} height={337}
               className="sprint2__image"/>
      </div>
    </SprintLayout>
  );
};

export default Sprint2;
